import { API_URL } from "../CONST";

export const loginWithGithub = async () => {
	var opts = {
		headers: {
			mode:'cors'
		}
	}
	const response = await fetch(`${API_URL}/auth/github`, opts);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
};


