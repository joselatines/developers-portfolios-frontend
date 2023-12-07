import { useEffect, useContext } from "react";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";
import { DEFAULT_PROFILE_PIC } from "../CONST";

interface IProps {
	links: LinkElement[] | null;
}

interface LinkElement {
	label: string;
	url: string;
}

export default function Navigation({ links }: IProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user, setUser } = useContext(AuthContext);

	const navigate = useNavigate();

	const yourFunction = () => {
		console.log("Executing your function at the target time!");
	};

	const handleLogout = () => {
		setUser(null);
		navigate("/");
	};

	useEffect(() => {
		if (!user) return;
		const targetTime = new Date(user.expiresAt);

		const interval = setInterval(() => {
			const currentTime = new Date();

			if (currentTime >= targetTime) {
				yourFunction();
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Box
				position={"fixed"}
				color={"white"}
				width={"100vw"}
				bg={"gray.900"}
				px={5}
				zIndex={1000}
			>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton
						size={"md"}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={"center"}>
						<Box className="text-lg font-bold">
							<Link to="/">Developers Portfolio</Link>
						</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
							{links && <LinksComponent links={links} />}
						</HStack>
					</HStack>
					<Flex color={"black"} alignItems={"center"}>
						{user ? (
							<ProfileMenu handleLogout={handleLogout} user={user} />
						) : (
							<AnonymousMenu />
						)}
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{links && <LinksComponent links={links} />}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}

function ProfileMenu({ handleLogout, user }: any) {
	return (
		<Menu>
			<MenuButton
				as={Button}
				rounded={"full"}
				variant={"link"}
				cursor={"pointer"}
				minW={0}
			>
				<Avatar size={"sm"} src={user.profilePic || DEFAULT_PROFILE_PIC} />
			</MenuButton>

			<MenuList>
				<Link to="/me">
					<MenuItem>Me</MenuItem>
				</Link>

				<MenuDivider />
				<MenuItem onClick={handleLogout}>Log out</MenuItem>
			</MenuList>
		</Menu>
	);
}

function AnonymousMenu() {
	return (
		<Flex alignItems={"center"} gap={3}>
			<Menu>
				<Link to="/auth/login">
					<Button>Login</Button>
				</Link>
				<Link to="/auth/signup">
					<Button>Sign up</Button>
				</Link>
			</Menu>
		</Flex>
	);
}

function LinksComponent({ links }: { links: LinkElement[] }) {
	return (
		<>
			{links.map(link => (
				<Box
					key={link.url}
					as={Link}
					px={2}
					py={1}
					rounded={"md"}
					_hover={{
						textDecoration: "none",
						bg: "gray.700",
					}}
					to={link.url}
				>
					{link.label}
				</Box>
			))}
		</>
	);
}
