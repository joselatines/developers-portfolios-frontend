import RatePortfolioForm from "../Forms/RatePortfolioForm";
import Comment from "./Comments/Comment";

function PortfolioModal({ data }: any) {
	const { images, title, description, User } = data;
	return (
		<article className="grid grid-cols-2">
			<section>
				<img
					className="w-full h-64 object-cover"
					src={images[0]}
					alt="Portfolio"
				/>
				{[0, 1, 2, 3].map(c => (
					<Comment key={c} />
				))}
			</section>
			<section>
				<h2>{title}</h2>
				<address className="author">
					<a rel="author" target="_blank" href={User.github}>
						{User.username}
					</a>
				</address>
				<p>{description}</p>
				<ul>
					<li>
						<a href="http://">See live</a>
					</li>
					<li>
						<a href="http://">See code on github</a>
					</li>
				</ul>
				<section>
					<RatePortfolioForm />
				</section>
			</section>
		</article>
	);
}

export default PortfolioModal;
