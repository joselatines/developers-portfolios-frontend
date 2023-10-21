import { Link } from "react-router-dom";

function MeRoute() {
	return (
		<div>
			<h2>Me Page</h2>
			<div>
				<Link to="/me/portfolios/create">Create new portfolio</Link>
			</div>
		</div>
	);
}

export default MeRoute;
