import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { CreateRating } from "../shared/interfaces/ratings.interface";
import { getUserFromLocalStorage } from "../contexts/auth/helper";

export const createRatingToPortfolio = async (
	body: CreateRating
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const response = await axios.post(`${API_URL}/portfolios/ratings`, body, options);
	return response;
};
