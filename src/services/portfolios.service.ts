import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { CreatePortfolio } from "../shared/interfaces/portfolio.interface";
import { getUserFromLocalStorage } from "../contexts/auth/helper";

export const createPortfolio = async (
	bodyData: CreatePortfolio
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();
	// change array images to single file
	const bodyParsed = { ...bodyData, images: bodyData.images[0].file };
	if (!user) throw new Error("User in localStorage was not found");

	const formData = new FormData();

	// Append each field from the bodyData to the FormData object
	Object.entries(bodyParsed).forEach(([key, value]) => {
		formData.append(key, value);
	});

	const options = {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "multipart/form-data", // Set content type to multipart/form-data
		},
	};


	const res = await axios.post(`${API_URL}/portfolios`, formData, options);
	return res;
};

export const editPortfolio = async (
	bodyData: Partial<CreatePortfolio>,
	id: string
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const res = await axios.put(`${API_URL}/portfolios/${id}`, bodyData, options);
	return res;
};

export const deletePortfolio = async (id: string): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const options = {
		headers: { Authorization: `Bearer ${user.token}` },
	};

	const res = await axios.delete(`${API_URL}/portfolios/${id}`, options);
	return res;
};
