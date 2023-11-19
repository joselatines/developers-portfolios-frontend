import { USER_KEY_LOCAL_STORAGE } from "../../CONST";
import { IUserContext } from "./types";

export const saveUserToLocalStorage = (user: IUserContext) =>
	localStorage.setItem(USER_KEY_LOCAL_STORAGE, JSON.stringify(user));

export const getUserFromLocalStorage = (): IUserContext | null => {
	const userString = localStorage.getItem(USER_KEY_LOCAL_STORAGE);
	if (userString) {
		return JSON.parse(userString);
	}
	return null;
};
