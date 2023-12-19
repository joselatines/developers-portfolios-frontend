import { Button } from "@chakra-ui/react";
import { API_URL } from "../CONST";
import PortfoliosSection from "../components/Portfolio/PortfoliosSection";
import ErrorHandler from "../components/shared/Error";
import LoaderHandler from "../components/shared/Loader";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function HomeRoute() {
	const { data, error } = useFetch(`${API_URL}/portfolios`);

	if (error) return <ErrorHandler err={error} />;
	if (!data) return <LoaderHandler />;

	return (
		<>
			<Link to="/profiles/me/portfolios/create">
				<Button colorScheme="whatsapp">Create new portfolio</Button>
			</Link>
			<div className="mt-4">
				<PortfoliosSection portfolios={data.data} />
			</div>
		</>
	);
}

export default HomeRoute;
