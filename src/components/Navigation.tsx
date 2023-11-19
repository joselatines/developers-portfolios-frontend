import {
	Box,
	Flex,
	Avatar,
	HStack,
	Text,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from "@chakra-ui/react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import GitHubOAuthButton from "./shared/Buttons/GithubOAuthButton";
import { Link } from "react-router-dom";
import { loginWithEmail, signUpWithEmail } from "../services/auth.service";

interface Props {
	links: LinkElement[];
}

export default function Navigation({ links }: Props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user } = useContext(AuthContext);

	useEffect(() => {
		console.log("user context variable has changed");
	}, [user]);

	return (
		<>
			<Box
				position={"fixed"}
				color={"white"}
				width={"100vw"}
				bg={useColorModeValue("gray.900", "gray.100")}
				px={5}
			>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton
						size={"md"}
						//icon={isOpen ? '<CloseIcon />' : '<HamburgerIcon />'}
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
							<LinksComponent links={links} />
						</HStack>
					</HStack>
					{user ? (
						<Flex color={"black"} alignItems={"center"}>
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
									<Link to="/me">
										<MenuItem>Me</MenuItem>
									</Link>

									<MenuDivider />
									<MenuItem>Log out</MenuItem>
								</MenuList>
							</Menu>
						</Flex>
					) : (
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
					)}
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							<LinksComponent links={links} />
						</Stack>
					</Box>
				) : null}
			</Box>

			{/* <Box p={4}>Main Content Here lorem300 </Box> */}
		</>
	);
}

interface LinkElement {
	label: string;
	url: string;
}

function LinksComponent({ links }: { links: LinkElement[] }) {
	return (
		<>
			{links.map(link => (
				<Box
					key={link.url}
					as="a"
					px={2}
					py={1}
					rounded={"md"}
					_hover={{
						textDecoration: "none",
						bg: useColorModeValue("gray.700", "gray.200"),
					}}
					href={link.url}
				>
					{link.label}
				</Box>
			))}
		</>
	);
}
