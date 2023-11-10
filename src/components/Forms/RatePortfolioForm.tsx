import { Button, Textarea } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

function RatePortfolioForm() {
	const [rateNumber, setRateNumber] = useState(0);
	const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRateNumber(Number(event.target.value));
	};

	return (
		<form className="grid">
			<Textarea placeholder='Here is a sample placeholder' />

			<input type="range" 	
				onChange={handleRateChange}
				min={1}
				max={10}
				step={1}
				value={rateNumber}className="range range-xs" /> 
			
			<Button>Give {rateNumber} <AiOutlineStar/> </Button>
		</form>
	);
}

export default RatePortfolioForm;
