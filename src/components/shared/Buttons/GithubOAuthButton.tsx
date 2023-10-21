import axios from "axios";
import { useQuery } from "react-query";

function GitHubOAuthButton() {
	const handleClick = async () => {
		alert("clicked");

		const res = await axios(
			"https://developers-portfolios-api.onrender.com/api/v1/auth/github"
		);

		console.log(res);
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
