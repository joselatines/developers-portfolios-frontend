export interface CreateRating {
	rating: number;
	portfolio_id: string;
	comment?: string;
}

export interface IRatingBody extends CreateRating {
	id: string;
	rated_by: number;
}
