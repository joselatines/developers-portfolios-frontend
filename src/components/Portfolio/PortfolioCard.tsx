import Popup from "reactjs-popup";
import PortfolioModal from "./PortfolioModal";
import { IPortfolio } from "../../interfaces/portfolio.interface";
import { Tag } from "@chakra-ui/react";

interface Props {
	portfolio: IPortfolio
}

function PortfolioCard({ portfolio }: Props) {
	const { images, website_link, title, description, type, User , rating} = portfolio;
	let color = rating > 5 ? 'teal': 'red'; // 7: green | 4: red
	color = (rating >= 5 && rating <= 7) ? 'orange' : color;  // 5: orange
	
	return (
		<article className="max-w-md mx-auto overflow-hidden">
			<Popup trigger={<img
				className="w-full h-64 object-cover cursor-pointer"
				src={images[0]}
				alt="Portfolio"
			/>} modal>
			<PortfolioModal data={portfolio} />
			</Popup>
			
			<section className="p-1 flex items-center justify-between">
				<article>
				<h4 className="font-medium text-lg">{title}</h4>
				<a
					href={`https://github.com/${User.github}`}
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-95"
				>
					{User.githubUsername}
				</a>
				</article>

			<Tag  colorScheme={color}>{rating}/10</Tag>
			</section>
	
			
		</article>
	);
}

export default PortfolioCard;
