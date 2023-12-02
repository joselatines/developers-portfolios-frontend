import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";

interface LoginCredentials {
	email: string;
	password: string;
}
interface SignUpCredentials extends LoginCredentials {
	githubUsername: string;
}

export const loginWithGithub = async () => {
	const opts = {
		headers: {
			mode: "cors",
		},
	};
	try {
		const res = await axios.get(`${API_URL}/auth/github`, opts);
		return res;
	} catch (error: any) {
		throw new Error(`HTTP error! status: ${error.res.status}`);
	}
};

export const signUpWithEmail = async (
	credentials: SignUpCredentials
): Promise<AxiosResponse> => {
	const res = await axios.post(`${API_URL}/auth/signup`, credentials);
	return res;
};

export const loginWithEmail = async (
	credentials: LoginCredentials
): Promise<AxiosResponse> => {
	const res = await axios.post(`${API_URL}/auth/login`, credentials);

	return res;
};
