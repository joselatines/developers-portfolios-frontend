import MOCK_DATA from "../../MOCK_DATA.json";
import PortfolioCard from "./PortfolioCard";

function PortfoliosSection() {
	return (
		<section>
			{MOCK_DATA.portfolios.map((p: any) => (
				<PortfolioCard key={p.id} data={p} />
			))}
		</section>
	);
}

export default PortfoliosSection;
