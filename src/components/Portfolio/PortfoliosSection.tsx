import { IPortfolio } from "../../shared/interfaces/portfolio.interface";

import PortfolioCard from "./PortfolioCard";

interface IProps {
	portfolios: IPortfolio[];
}

function PortfoliosSection({ portfolios }: IProps) {
	return (
		<section className="flex gap-5 flex-wrap">
			{portfolios.map(p => (
				<PortfolioCard key={p.id} portfolio={p} />
			))}
		</section>
	);
}

export default PortfoliosSection;
