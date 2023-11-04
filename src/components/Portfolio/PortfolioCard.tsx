import Popup from "reactjs-popup";
import PortfolioModal from "./PortfolioModal";
import { IPortfolio } from "../../interfaces/portfolio.interface";

interface Props {
	portfolio: IPortfolio
}

function PortfolioCard({ portfolio }: Props) {
	const { images, website_link, title, description, type, User } = portfolio;

	return (
		<article className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4">
			<img
				className="w-full h-64 object-cover"
				src={images[0]}
				alt="Portfolio"
			/>
			<div>
				<h4>{title}</h4>
				<a
					href={`https://github.com/${User.github}}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{User.username}
				</a>
			</div>
			<span>3/10</span>

			<Popup trigger={<button className="button"> Open Modal </button>} modal>
				<PortfolioModal data={portfolio} />
			</Popup>
		</article>
	);
}

export default PortfolioCard;
