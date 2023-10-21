import { createContext, useState } from "react";

interface IAuthContext {
	user: { token: string; username: string };
	setUser: (value: any) => void;
}

const AuthContext = createContext<IAuthContext>({
	user: { username: "", token: "" },
	setUser: (value: any) => {},
});

const AuthProvider = ({ children }: any) => {
  // delete this to to private
	const [user, setUser] = useState({ username: "juan", token: "654646" });

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
