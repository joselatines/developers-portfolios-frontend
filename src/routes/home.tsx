import { API_URL } from "../CONST";
import PortfoliosSection from "../components/Portfolio/PortfoliosSection";
import { useFetch } from "../hooks/useFetch";

function HomeRoute() {
	const { data, error } = useFetch(`${API_URL}/portfolios`);

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading...</div>;

	return <PortfoliosSection portfolios={data.data} />;
}

export default HomeRoute;
