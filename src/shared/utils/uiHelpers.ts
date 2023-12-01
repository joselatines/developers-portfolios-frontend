import { PORTFOLIO_TYPES } from "../interfaces/portfolio.interface";
const { backend, frontend, fullstack, mobile, software } = PORTFOLIO_TYPES;

// Determine rate color based on rating
export const getRateColor = (ratingNumber: number) => {
	let rateColor = ratingNumber > 5 ? "teal" : "red"; // 7: green | 4: red
	rateColor = ratingNumber >= 5 && ratingNumber <= 7 ? "orange" : rateColor; // 5: orange
	return rateColor;
};

// Determine type color based on portfolio type
export const getTypeColor = (type: string) => {
	switch (type) {
		case backend:
			return "blue";
		case frontend:
			return "purple";
		case fullstack:
			return "gold";
		case mobile:
			return "green";
		case software:
			return "yellow";
		default:
			return "gray";
	}
};
