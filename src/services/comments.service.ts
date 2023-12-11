import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { getUserFromLocalStorage } from "../contexts/auth/helper";

export const deleteComment = async (
	commentId: string
): Promise<AxiosResponse> => {
	const res = await axios.delete(`${API_URL}/portfolios/comments/${commentId}`);
	return res;
};
export const getComments = async (): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user?.token}` },
	};

	const res = await axios.get(
		`${API_URL}/portfolios/comments`,
		options
	);
	return res;
};
