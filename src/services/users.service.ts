import axios, { AxiosResponse } from "axios";
import { API_URL } from "../CONST";
import { User } from "../shared/interfaces/user.interface";

export const fetchMeProfileData = async (
	token: string
): Promise<AxiosResponse> => {
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const response = await axios.get(`${API_URL}/users/me`, config);
	return response;
};

export const editUser = async (
	editData: Partial<User>,
	id: string
): Promise<AxiosResponse> => {
	const response = await axios.put(`${API_URL}/users/${id}`, editData);
	return response;
};
