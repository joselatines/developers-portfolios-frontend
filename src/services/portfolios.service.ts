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
