import { createContext, ReactNode, useState } from "react";

const USER_KEY = "user";

interface IUserContext {
	id: string;
	githubUsername: string;
	email: string;
	role: string;
	token: string;
	profilePic: string;
	provider: string | "github" | "google" | "twitter";
}

interface IAuthContext {
	user: IUserContext | null;
	setUser: (value: IUserContext | null) => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
	user: null,
	setUser: () => {},
});

export const getUserFromLocalStorage = (): IUserContext | null => {
	const userString = localStorage.getItem(USER_KEY);
	if (userString) {
		return JSON.parse(userString);
	}
	return null;
};

export const saveUserToLocalStorage = (user: IUserContext) =>
	localStorage.setItem(USER_KEY, JSON.stringify(user));

const AuthProvider = ({ children }: AuthProviderProps) => {
	/* const fakeUser = {
		id: "72e19fa5-0b59-46a0-b7a9-03193dab5853",
		githubUsername: "John",
		email: "johndoe@gmail.com",
		role: "user",
		token: "example token",
		profilePic:
			"https://media.licdn.com/dms/image/D4E03AQGWw4A4tGQE8w/profile-displayphoto-shrink_800_800/0/1676919170139?e=2147483647&v=beta&t=jkJl32RI3U7qFNxUTlKLTWBFdy6DzZz0al8cLt0goEs",
	}; */

	const [user, setUser] = useState<IUserContext | null>(
		getUserFromLocalStorage()
	);

	const handleSetUser = (value: IUserContext | null) => {
		if (value) {
			saveUserToLocalStorage(value);
		} else {
			localStorage.removeItem("user");
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
