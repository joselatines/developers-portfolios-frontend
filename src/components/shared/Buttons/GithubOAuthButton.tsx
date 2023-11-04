import { useContext } from "react";

import { AuthContext } from "../../../contexts/AuthContext";
import { loginWithGithub } from "../../../services/auth.service";

function GitHubOAuthButton() {
	const { setUser } = useContext(AuthContext);

	const handleClick = async () => {
		try {
			const res = await loginWithGithub();

			if (res.status === 200) {
				const token = res.data.token;
				const user = { ...res.data.user, token };

				setUser(user);
			}
		} catch (error) {
			console.error("An error occurred while fetching GitHub auth:", error);
		}
	};

	return (
		<button
			onClick={handleClick}
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>
			Login with GitHub
		</button>
	);
}

export default GitHubOAuthButton;
