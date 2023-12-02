import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import CommentsSection from "./Comments/CommentsSection";
import { IPortfolio } from "../../shared/interfaces/portfolio.interface";

function PortfolioModal({ data }: IProps) {
	const { images, title, description, User, github_link, website_link, id } =
		data;

	return (
		<article className="md:grid grid-cols-2 h-[90vh] overflow-auto">
			<section className="p-8">
				<h2 className="text-5xl font-bold">{title}</h2>
				<p className="mb-4 mt-5">{description}</p>
				<img
					className="w-full object-cover h-[100%] md:hidden"
					src={images[0]}
					alt="Portfolio"
				/>
				<ul className="flex gap-2 wrap my-5">
					<li>
						<a href={User.githubUsername} target="_blank">
							{User.githubUsername}
							<AiOutlineLink size={32} />
						</a>
					</li>
					<li>
						<a href={website_link} target="_blank">
							<AiOutlineLink size={32} />
						</a>
					</li>
					{github_link && (
						<li>
							<a target="_blank" href={github_link}>
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
				className={`w-full object-cover h-[100%] hidden md:block`}
				src={images[0]}
				alt="Portfolio"
			/>
		</article>
	);
}

interface IProps {
	data: IPortfolio;
}

export default PortfolioModal;
