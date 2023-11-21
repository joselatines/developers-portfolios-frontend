import { ReactNode } from "react";

export const ROLES = {
	user: "user",
	admin: "admin",
} as const;

export type IRoles = keyof typeof ROLES;

export interface IUserContext {
	id: string;
	githubUsername: string;
	email: string;
	role: IRoles;
	token: string;
	profilePic: string;
	provider: string | "github" | "google" | "twitter";
}

export interface IAuthContext {
	user: IUserContext | null;
	setUser: (value: IUserContext | null) => void;
}

export interface IAuthProviderProps {
	children: ReactNode;
}
