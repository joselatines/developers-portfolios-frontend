import { Link } from "react-router-dom";
import GitHubOAuthButton from "./shared/Buttons/GithubOAuthButton";

function Navigation() {
	return (
		<div className="flex flex-wrap bg-slate-500">
			<nav>
				<ul>
					<li>
						<Link to='/me'>Me</Link>
					</li>
					<li>
						<Link to={`contacts/2`}>Your Friend</Link>
					</li>
				</ul>
			</nav>
			<GitHubOAuthButton />
		</div>
	);
}

export default Navigation;
