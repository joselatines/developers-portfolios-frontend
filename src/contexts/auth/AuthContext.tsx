import { createContext, useState, useEffect } from "react";
import { AuthProviderProps, IAuthContext, IUserContext } from "./types";
import { getUserFromLocalStorage, saveUserToLocalStorage } from "./helper";
import { USER_KEY_LOCAL_STORAGE } from "../../CONST";

const AuthContext = createContext<IAuthContext>({
	user: null,
	setUser: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUserContext | null>(
		getUserFromLocalStorage()
	);

	useEffect(() => {
		const handleSetUser = (value: IUserContext | null) => {
			if (value) {
				saveUserToLocalStorage(value);
			} else {
				localStorage.removeItem(USER_KEY_LOCAL_STORAGE);
			}
			setUser(value);
		};

		handleSetUser(getUserFromLocalStorage());
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
