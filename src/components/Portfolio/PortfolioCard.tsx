import Popup from "reactjs-popup";
import { Tag } from "@chakra-ui/react";
import { usePortfolioOwnership } from "../../hooks/usePortfolioOwnership";
import PortfolioModal from "./PortfolioModal";
import { IPortfolio } from "../../shared/interfaces/portfolio.interface";
import { getRateColor, getTypeColor } from "../../shared/utils/uiHelpers";
import OwnerFunctions from "./OwnerFunctions";
import { useLocation } from "react-router-dom";

function PortfolioCard({ portfolio }: IProps) {
	const { thumbnail, title, description, type, User, avg_rating, id } =
		portfolio;
	const [isPortfolioOwner] = usePortfolioOwnership(User.id); // actual portfolio is from logged user
	const location = useLocation();
	const { pathname } = location;

	const showOwnerFunctions = isPortfolioOwner && pathname === "/me";
	const portfolioOwnerName = isPortfolioOwner ? "You" : User.githubUsername;

	return (
		<article className="max-w-md w-96 overflow-hidden">
			<Popup
				trigger={
					<img
						className="w-full h-64 object-cover mb-1 cursor-pointer"
						src={thumbnail}
						alt={`Portfolio ${title} by @${User.githubUsername}`}
					/>
				}
				modal
			>
				<PortfolioModal data={portfolio} />
			</Popup>

			<article>
				<h4 className="font-medium text-lg">{title}</h4>

				<a
					href={`https://github.com/${User.githubUsername}`}
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-95 text-sm"
				>
					{portfolioOwnerName}
				</a>
			</article>

			<span>{description.slice(0, 43)}...</span>

			<section className="flex justify-between items-center my-2">
				<div className="flex gap-1">
					<Tag size="sm" colorScheme={getRateColor(avg_rating | 10)}>
						{avg_rating | 10}/10
					</Tag>
					<Tag size="sm" colorScheme={getTypeColor(type)}>
						{type}
					</Tag>
				</div>
				{showOwnerFunctions && <OwnerFunctions portfolioId={id} />}
			</section>
		</article>
	);
}

interface IProps {
	portfolio: IPortfolio;
}

export default PortfolioCard;
