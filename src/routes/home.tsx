import MOCK_DATA from "../MOCK_DATA.json";
import PortfolioCard from "../components/Portfolio/PortfolioCard";

function HomeRoute() {
	return (
		<div>
			HomeRoute
			{MOCK_DATA.portfolios.map((p: any) => (
				<PortfolioCard key={p.id} data={p} />
			))}
		</div>
	);
}

export default HomeRoute;
