// import MOCK_DATA from "../../MOCK_DATA.json";
import { IPortfolio } from "../../shared/interfaces/portfolio.interface";

import PortfolioCard from "./PortfolioCard";

interface Props {
	portfolios: IPortfolio[];
}

function PortfoliosSection({ portfolios }: Props) {
	return (
		<section className="flex gap-5 flex-wrap">
			{portfolios.map(p => (
				<PortfolioCard key={p.id} portfolio={p} />
			))}
		</section>
	);
}

export default PortfoliosSection;
