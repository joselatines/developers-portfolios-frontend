import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { Button } from "@chakra-ui/react";
import { API_URL } from "../../../CONST";

function GitHubOAuthButton() {
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const [timer, setTimer] = useState(0);

	const fetchAuthUser = async () => {
		try {
			const response = await fetch(`${API_URL}/users/me`, { credentials: "same-origin"});
			console.log(response)
			if (!response.ok) {
				throw new Error("Not properly authenticated");
			}

			const data = await response.json();


			console.log("User: ", data);
			navigate("/welcome");
		} catch (err) {
			const error: any = err;
			console.log(error.message);
			navigate("/login/error");
		}
	};

	const redirectToGithubSSO = () => {
		const githubLoginURL = "http://localhost:3000/api/v1/auth/github";
		const newWindow = window.open(
			githubLoginURL,
			"_blank",
			"width=500,height=600"
		);
		if (newWindow) {
			setTimer(
				setInterval(() => {
					if (newWindow.closed) {
						console.log("Yay we're authenticated");
						fetchAuthUser();
						clearInterval(timer);
					}
				}, 500)
			);
		}
	};

	useEffect(() => {
		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	}, [timer]);

	return <Button onClick={redirectToGithubSSO}>Login with GitHub</Button>;
}

export default GitHubOAuthButton;
