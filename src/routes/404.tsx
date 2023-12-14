import { Text, Link, Heading, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
export default function NotFound() {
	return (
		<div>
			<Heading>Oops! You seem to be lost.</Heading>
			<Text>Here are some helpful links:</Text>
			<Flex gap={5}>
				<Link as={RouterLink} to={"/"}>
					Home
				</Link>
				<Link as={RouterLink} to="/profiles/me">
					My profile
				</Link>
			</Flex>
		</div>
	);
}
