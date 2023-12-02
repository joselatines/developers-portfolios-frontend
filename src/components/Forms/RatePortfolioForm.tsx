import { Button, Textarea } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { createRatingToPortfolio } from "../../services/ratings.service";
import useCustomToast from "../../hooks/useCustomToast";

function RatePortfolioForm({ portfolioId, refreshParent }: IProps) {
	const { handleToastSuccess, handleToastError } = useCustomToast();
	const [rateNumber, setRateNumber] = useState(0);
	const [comment, setComment] = useState("");

	const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRateNumber(Number(e.target.value));
	};

	const handleGiveRateClick = async () => {
		const body = {
			comment,
			rating: rateNumber,
			portfolio_id: portfolioId,
		};

		try {
			const res = await createRatingToPortfolio(body);
			if (!res.data.success)
				return handleToastError(res.data.message, "Feedback Portfolio");

			handleToastSuccess(res.data.message, "Feedback Portfolio");
			refreshParent();
		} catch (error: any) {
			handleToastError(error.message);
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
	refreshParent: () => void;
}

export default RatePortfolioForm;
