import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { Button } from "@chakra-ui/react";
import { API_URL } from "../../../CONST";
import axios from "axios";
import { ProfilePassport } from "../../../interfaces/oAuth.interface";

function GitHubOAuthButton() {
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const fetchAuthUser = async () => {
		try {
			const response = await axios.get(
				`${API_URL}/users/me`,
				{ withCredentials: true }
			);

			const user: Required<ProfilePassport> = response.data.data;

			const userParsed = {
				email: user.emails[0].value,
				provider: user.provider,
				username: user.username,
				id: user.id,
				role: "user",
				profilePic: user.photos[0].value,
			};

			setUser(userParsed);
			navigate("/");
		} catch (err) {
			console.log("Not properly authenticated", err);
			setUser(null);
			navigate("/login/error");
		}
	};

	const redirectToGithubSSO = () => {
		const githubLoginURL = `${API_URL}/auth/github`;
		const newWindow = window.open(
			githubLoginURL,
			"_blank",
			"width=500,height=600"
		);

		if (newWindow) {
			const timer = setInterval(() => {
				if (newWindow.closed) {
					console.log("Yay we're authenticated");
					fetchAuthUser();
					clearInterval(timer);
				}
			}, 500);
		}
	};

	return <Button onClick={redirectToGithubSSO}>Login with GitHub</Button>;
}

export default GitHubOAuthButton;
