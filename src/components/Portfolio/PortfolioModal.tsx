import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import CommentsSection from "./Comments/CommentsSection";
import { IPortfolio } from "../../shared/interfaces/portfolio.interface";

function PortfolioModal({ data }: IProps) {
	const { thumbnail, title, description, User, github_link, website_link, id } =
		data;

	return (
		<article className="md:grid grid-cols-3 h-[80vh] overflow-auto">
			<section className="p-8 cols-span-1">
				<h2 className="text-2xl font-bold">{title}</h2>
				<p className="mb-4 mt-5">{description}</p>
				<ul>
					<li className="mb-3">
						{/* <Link to={`/profiles/${User.githubUsername}`}>
							Created by: {User.githubUsername}
						</Link> */}
						Created by:{" "}
						<a
							href={`https://github.com/${User.githubUsername}`}
							target="_blank"
						>
							{User.githubUsername}
						</a>
					</li>
					<li className="inline-block">
						<a href={website_link} target="_blank">
							<AiOutlineLink size={32} />
						</a>
					</li>
					{github_link && (
						<li>
							<a target="_blank" className="inline-block" href={github_link}>
								<BsGithub size={32} />
							</a>
						</li>
					)}
				</ul>
				<section className="mt-7 flex flex-col">
					<CommentsSection portfolioId={id} />
				</section>
			</section>

			<img
				className={`w-full col-span-2 object-contain h-[100%] hidden md:block`}
				src={thumbnail}
				alt={`Portfolio ${title} by @${User.githubUsername}`}
			/>
		</article>
	);
}

interface IProps {
	data: IPortfolio;
}

export default PortfolioModal;
