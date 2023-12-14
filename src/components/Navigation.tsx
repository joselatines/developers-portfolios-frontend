import { useEffect, useContext } from "react";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Link,
	useToast,
} from "@chakra-ui/react";
import { Link as RouterLInk, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

export default function Navigation() {
	const { user, setUser } = useContext(AuthContext);
	const toast = useToast();
	const navigate = useNavigate();

	const handleLogout = () => {
		setUser(null);
		navigate("/");
	};

	useEffect(() => {
		toast({
			title: "Warning",
			status: "warning",
			description:
				"This website is currently on a free plan, so it may take longer to load on the first visit.",
			isClosable: true,
			colorScheme: "orange",
		});
	}, []);

	return (
		<Box
			position={"fixed"}
			color={"white"}
			width={"100vw"}
			bg={"gray.900"}
			px={10}
			zIndex={1000}
		>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<Box className="text-xl font-bold">
						<Link
							textDecorationLine={"none"}
							as={RouterLInk}
							fontSize={{ base: "sm", sm: "md" }}
							to="/"
						>
							Developers Portfolio
						</Link>
					</Box>
				</HStack>
				<Flex color={"black"} alignItems={"center"}>
					{user ? (
						<ProfileMenu handleLogout={handleLogout} user={user} />
					) : (
						<AnonymousMenu />
					)}
				</Flex>
			</Flex>
		</Box>
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
				<Avatar size={"sm"} src={user.profilePic} />
			</MenuButton>

			<MenuList>
				<Link as={RouterLInk} to="/profiles/me">
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
				<Link as={RouterLInk} to="/auth/login">
					<Button size={{ base: "sm", md: "md" }}>Login</Button>
				</Link>
				<Link as={RouterLInk} to="/auth/signup">
					<Button size={{ base: "sm", sm: "md" }}>Sign up</Button>
				</Link>
			</Menu>
		</Flex>
	);
}
