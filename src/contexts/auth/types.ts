import { ReactNode } from "react";
export interface IUserContext {
	id: string;
	githubUsername: string;
	email: string;
	role: string;
	token: string;
	profilePic: string;
	provider: string | "github" | "google" | "twitter";
}

export interface IAuthContext {
	user: IUserContext | null;
	setUser: (value: IUserContext | null) => void;
}

export interface AuthProviderProps {
	children: ReactNode;
}
