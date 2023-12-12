import { Button } from "@chakra-ui/react";
import { API_URL } from "../CONST";
import PortfoliosSection from "../components/Portfolio/PortfoliosSection";
import ErrorHandler from "../components/shared/Error";
import LoaderHandler from "../components/shared/Loader";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function HomeRoute() {
	const { data, error } = useFetch(`${API_URL}/portfolios`);

	if (error) return <ErrorHandler errorMessage={error.message} />;
	if (!data) return <LoaderHandler />;

	return (
		<>
			<Button colorScheme="whatsapp" marginBottom={6}>
				<Link to="/me/portfolios/create">Create new portfolio</Link>
			</Button>
			<PortfoliosSection portfolios={data.data} />
		</>
	);
}

export default HomeRoute;
