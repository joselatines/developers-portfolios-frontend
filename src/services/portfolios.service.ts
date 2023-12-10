import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { CreatePortfolio } from "../shared/interfaces/portfolio.interface";
import { getUserFromLocalStorage } from "../contexts/auth/helper";

export const createPortfolio = async (
	portfolioData: CreatePortfolio
): Promise<AxiosResponse> => {
	const user = getUserFromLocalStorage();

	if (!user) throw new Error("User in localStorage was not found");

	const formData = new FormData();

	// Append each field from the portfolioData to the FormData object
	Object.entries(portfolioData).forEach(([key, value]) => {
		if (key === "images") {
			// Append each image as a separate file in the FormData
			value.forEach((image: File, index: number) => {
				formData.append(`${key}[${index}]`, image);
			});
		} else {
			formData.append(key, value);
		}
	});

	console.log({ f: formData.values(), portfolioData });

	const options = {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "multipart/form-data",
		},
	};

	const res = await axios.post(`${API_URL}/portfolios`, formData, options);
	return res;
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

	const res = await axios.put(
		`${API_URL}/portfolios/${id}`,
		portfolioData,
		options
	);
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
