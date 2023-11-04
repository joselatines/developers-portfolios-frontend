import { createContext, ReactNode, useState } from "react";

interface IUser {
	id: string;
	username: string;
	email: string;
	role: string;
	token: string;
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
		token: "example_token",
	};
	const [user, setUser] = useState<IUser | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
