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

	const handleSetUser = (value: IUserContext | null) => {
	
		if (value) {
			console.info("data saved in localStorage and context");
			saveUserToLocalStorage(value);
		} else {
			localStorage.removeItem(USER_KEY_LOCAL_STORAGE);
			console.info("data removed in localStorage and context");
		}
		setUser(value);
	};

	return (
		<AuthContext.Provider value={{ user, setUser: handleSetUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
