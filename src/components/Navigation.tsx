import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubOAuthButton from "./shared/Buttons/GithubOAuthButton";
import { AuthContext } from "../contexts/AuthContext";

function Navigation() {
	const { user } = useContext(AuthContext);

	useEffect(() => {
		console.log("user context variable has changed");
	}, [user]);

	return (
		<div className="flex flex-wrap justify-between bg-slate-950 text-white p-12 py-4">
			<nav className="flex items-center">
				<ul className="flex gap-2" >
					<li>
						<Link to="/me">Me</Link>
					</li>
					<li>
						<Link to={`contacts/2`}>Your Friend</Link>
					</li>
				</ul>
			</nav>
			{user ? <span>{user.username}</span> : <GitHubOAuthButton />}
		</div>
	);
}

export default Navigation;
