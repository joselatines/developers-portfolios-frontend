import { User } from "./user.interface";

export interface IPortfolio {
	id: string;
	images: string[];
	created_by: string;
	website_link: string;
	title: string;
	description: string;
	type: string;
	User: User;
}
