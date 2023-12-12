import { IUser } from "./user.interface";

export const PORTFOLIO_TYPES = {
	backend: "backend",
	frontend: "frontend",
	fullstack: "fullstack",
	mobile: "mobile",
	software: "software",
} as const;

type IPortfolioType = keyof typeof PORTFOLIO_TYPES;

export interface CreatePortfolio {
	thumbnail: File | string;
	website_link: string;
	github_link: string;
	type: IPortfolioType | string;
	description: string;
}

export interface IPortfolio extends CreatePortfolio {
	id: string;
	created_by: string; // user id
	title: string;
	User: IUser;
	avg_rating: number;
	thumbnail: string;
}
