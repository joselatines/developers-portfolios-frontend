import { Button, Textarea, useToast } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { createRatingToPortfolio } from "../../services/ratings.service";

function RatePortfolioForm({ portfolioId }: IProps) {
	const [rateNumber, setRateNumber] = useState(0);
	const [comment, setComment] = useState("");
	const toast = useToast();

	const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRateNumber(Number(event.target.value));
	};

	const handleGiveRateClick = async () => {
		const body = {
			comment,
			rating: rateNumber,
			portfolio_id: portfolioId,
		};
		try {
			const response = await 	createRatingToPortfolio(body);
			if (!response.data.success) {
				return toast({
					title: "Rating portfolio",
					description: response.data.message,
					status: "error",
				});
			}

			toast({
				title: "Rating portfolio",
				description: response.data.message,
				status: "success",
			});
		} catch (error: any) {
			console.error(error);
			toast({
				title: "Unexpected error",
				description: error.message,
				status: "error",
			});
		}
	
	};

	return (
		<form className="grid">
			<span className="text-xl font-bold mb-2">Give a comment</span>
			<Textarea
				placeholder="Here is a sample placeholder"
				className="mb-1"
				onChange={e => setComment(e.target.value)}
			/>

			<section className="">
				<input
					type="range"
					onChange={handleRateChange}
					min={1}
					max={10}
					step={1}
					value={rateNumber}
					className="range range-xs w-[100%]"
				/>

				<Button onClick={handleGiveRateClick} className="grid items-center">
					Rate {rateNumber} <AiOutlineStar />{" "}
				</Button>
			</section>
		</form>
	);
}

interface IProps {
	portfolioId: string;
}

export default RatePortfolioForm;
