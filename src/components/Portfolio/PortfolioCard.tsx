import Popup from "reactjs-popup";
import { Button, Tag } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { usePortfolioOwnership } from "../../hooks/usePortfolioOwnership";
import PortfolioModal from "./PortfolioModal";
import {
	IPortfolio,
	PORTFOLIO_TYPES,
} from "../../shared/interfaces/portfolio.interface";
import { DEFAULT_PORTFOLIO_PIC } from "../../CONST";

function PortfolioCard({ portfolio }: Props) {
	const { images, title, description, type, User, rating } = portfolio;
	const [isPortfolioOwner] = usePortfolioOwnership(User.id);

	return (
		<article className="max-w-md mx-auto overflow-hidden">
			<Popup
				trigger={
					<img
						className="w-full h-64 object-cover cursor-pointer"
						src={images[0] || DEFAULT_PORTFOLIO_PIC}
						alt="Portfolio"
					/>
				}
				modal
			>
				<PortfolioModal data={portfolio} />
			</Popup>

			{isPortfolioOwner && (
				<Button>
					<FaRegEdit />
				</Button>
			)}

			{/* Portfolio details section */}
			<section className="p-1 flex items-center justify-between">
				<article>
					<h4 className="font-medium text-lg">{title}</h4>

					<a
						href={`https://github.com/${User.githubUsername}`}
						target="_blank"
						rel="noopener noreferrer"
						className="opacity-95"
					>
						{User.githubUsername}
					</a>
				</article>
				<h1>{description}</h1>

				{/* Display type and rate tags */}
				<Tag colorScheme={getRateColor(rating)}>{rating}/10</Tag>
				<Tag colorScheme={getTypeColor(type)}>{type}</Tag>
			</section>
		</article>
	);
}

interface Props {
	portfolio: IPortfolio;
}


// Determine rate color based on rating
const getRateColor = (ratingNumber: number) => {
	let rateColor = ratingNumber > 5 ? "teal" : "red"; // 7: green | 4: red
	rateColor = ratingNumber >= 5 && ratingNumber <= 7 ? "orange" : rateColor; // 5: orange
	return rateColor;
};

// Determine type color based on portfolio type
const getTypeColor = (type: string) => {
	switch (type) {
		case PORTFOLIO_TYPES.backend:
			return "blue";
		case PORTFOLIO_TYPES.frontend:
			return "purple";
		case PORTFOLIO_TYPES.fullstack:
			return "gold";
		case PORTFOLIO_TYPES.mobile:
			return "green";
		case PORTFOLIO_TYPES.software:
			return "yellow";
		default:
			return "gray";
	}
};

export default PortfolioCard;
