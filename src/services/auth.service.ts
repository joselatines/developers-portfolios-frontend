import { API_URL } from "../CONST";

export const loginWithGithub = async () => {
	const response = await fetch(`${API_URL}/auth/github`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
};
