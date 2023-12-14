import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { CreateRating } from "../shared/interfaces/ratings.interface";
import { getUserFromLocalStorage } from "../contexts/auth/helper";
import { AUTH_MSG } from "./config";

export const createRatingToPortfolio = async (
	body: CreateRating
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error(AUTH_MSG);

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const res = await axios.post(`${API_URL}/portfolios/ratings`, body, options);
	return res;
};
