import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { CreatePortfolio } from "../shared/interfaces/portfolio.interface";
import { getUserFromLocalStorage } from "../contexts/auth/helper";
import { convertFileToBase64 } from "../shared/utils/base64";

export const createPortfolio = async (
	bodyData: CreatePortfolio
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();
	if (!user) throw new Error("User in localStorage was not found");

	const imageBase64 = await convertFileToBase64(bodyData.images[0].file);

	const options = {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "multipart/form-data",
		},
	};

	const body = { ...bodyData, images: imageBase64 };

	const res = await axios.post(`${API_URL}/portfolios`, body, options);
	return res;
};

export const editPortfolio = async (
	bodyData: Partial<CreatePortfolio>,
	id: string
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();
	if (!user) throw new Error("User in localStorage was not found");

	const imageBase64 = await convertFileToBase64(bodyData.images[0].file);

	const options = {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "multipart/form-data",
		},
	};

	const body = { ...bodyData, images: imageBase64 };

	console.log({ body });
	const res = await axios.put(`${API_URL}/portfolios/${id}`, body, options);
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
