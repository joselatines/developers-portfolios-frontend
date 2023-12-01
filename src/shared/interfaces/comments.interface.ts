import { IUser } from "./user.interface";

export interface IComment {
	id: string;
	comment: string;
	rating: number;
	portfolio_id: string;
	User: IUser; 
}
