import { API_URL } from "../CONST";
import PortfoliosSection from "../components/Portfolio/PortfoliosSection";
import { useFetch } from "../hooks/useFetch";
import JSON_DATA from '../MOCK_DATA.json'

function HomeRoute() {
	const { data, error } = useFetch<any>(`${API_URL}/portfolios`);

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading...</div>;

	console.log(data);
	return (
		<div>
			HomeRoute
			<PortfoliosSection portfolios={JSON_DATA.portfolios} />
		</div>
	);
}

export default HomeRoute;
