import Popup from "reactjs-popup";
import { Button, Tag } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { usePortfolioOwnership } from "../../hooks/usePortfolioOwnership";
import PortfolioModal from "./PortfolioModal";
import { IPortfolio } from "../../shared/interfaces/portfolio.interface";
import { DEFAULT_PORTFOLIO_PIC } from "../../CONST";
import { getRateColor, getTypeColor } from "../../shared/utils/uiHelpers";

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

				<Tag colorScheme={getRateColor(rating)}>{rating}/10</Tag>
				<Tag colorScheme={getTypeColor(type)}>{type}</Tag>
			</section>
		</article>
	);
}

interface Props {
	portfolio: IPortfolio;
}

export default PortfolioCard;
