import CommentsSection from "./Comments/CommentsSection";
import { IPortfolio } from "../../shared/interfaces/portfolio.interface";
import { Link as RouterLink } from "react-router-dom";
import { Heading, Text, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function PortfolioModal({ data }: IProps) {
	const { thumbnail, title, description, User, github_link, website_link, id } =
		data;
	console.log(data);
	return (
		<article className="md:grid grid-cols-3 grid-rows-1 items-start h-[80vh] overflow-auto">
			<section className="p-8 cols-span-1">
				<Heading as="h2" size="xl" fontWeight="bold">
					{title}
				</Heading>
				<Link as={RouterLink} fontSize={"sm"} to={`/profiles/${User.id}`}>
					@{User.githubUsername}
				</Link>
				<Text mt={5} mb={4}>
					{description}
				</Text>
				<Flex direction="column" mb={5}>
					<Flex mt={3} fontSize={"sm"} align="center" gap={5}>
						<Link href={website_link} isExternal>
							See website <ExternalLinkIcon mx="2px" />
						</Link>
						{github_link && (
							<Link href={github_link} isExternal>
								See code <ExternalLinkIcon mx="2px" />
							</Link>
						)}
					</Flex>
				</Flex>
				<Flex direction="column">
					<CommentsSection portfolioId={id} />
				</Flex>
			</section>

			<img
				className={`w-full md:col-span-2 object-contain h-[100%] block`}
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
