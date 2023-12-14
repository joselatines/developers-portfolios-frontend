import { Flex, Heading, Avatar, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../CONST";
import ErrorHandler from "../../components/shared/Error";
import LoaderHandler from "../../components/shared/Loader";
import PortfoliosSection from "../../components/Portfolio/PortfoliosSection";

function UserProfile() {
	const { id } = useParams();
	const { data, error } = useFetch(`${API_URL}/profiles/${id}`);

	if (error) return <ErrorHandler err={error} />;
	if (!data) return <LoaderHandler />;

	const { githubUsername, email, profilePic, portfolios } = data.data;

	return (
		<Flex direction="column" align="center" justify="center">
			<Avatar size="xl" name={githubUsername} src={profilePic} />
			<Heading mt={4}>{githubUsername}</Heading>
			<Text>{email}</Text>

			<VStack mt={8} spacing={4}>
				<Heading size="lg">Portfolios</Heading>
				<PortfoliosSection portfolios={portfolios} />
			</VStack>
		</Flex>
	);
}

export default UserProfile;
