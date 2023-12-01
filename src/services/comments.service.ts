import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";

export const deleteComment = async (
	commentId: string
): Promise<AxiosResponse> => {
	const response = await axios.delete(
		`${API_URL}/portfolios/comments/${commentId}`
	);
	return response;
};
