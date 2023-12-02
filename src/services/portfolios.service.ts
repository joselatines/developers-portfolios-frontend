import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { CreatePortfolio } from "../shared/interfaces/portfolio.interface";
import { getUserFromLocalStorage } from "../contexts/auth/helper";

export const createPortfolio = async (
	portfolioData: CreatePortfolio
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const response = await axios.post(
		`${API_URL}/portfolios`,
		portfolioData,
		options
	);
	return response;
};
export const editPortfolio = async (
	portfolioData: Partial<CreatePortfolio>,
	id: string
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const response = await axios.put(
		`${API_URL}/portfolios/${id}`,
		portfolioData,
		options
	);
	return response;
};

export const deletePortfolio = async (id: string): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const response = await axios.delete(`${API_URL}/portfolios/${id}`, options);
	return response;
};
