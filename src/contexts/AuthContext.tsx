import { createContext, ReactNode, useState } from "react";

interface IUser {
	id: string;
	username: string;
	email: string;
	role: string;
	profilePic: string;
	provider: string | "github" | "google" | "twitter";
}

interface IAuthContext {
	user: IUser | null;
	setUser: (value: IUser | null) => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
	user: null,
	setUser: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
	const fakeUser = {
		id: "72e19fa5-0b59-46a0-b7a9-03193dab5853",
		username: "John",
		email: "johndoe@gmail.com",
		role: "user",

		profilePic:
			"https://media.licdn.com/dms/image/D4E03AQGWw4A4tGQE8w/profile-displayphoto-shrink_800_800/0/1676919170139?e=2147483647&v=beta&t=jkJl32RI3U7qFNxUTlKLTWBFdy6DzZz0al8cLt0goEs",
	};
	const [user, setUser] = useState<IUser | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
