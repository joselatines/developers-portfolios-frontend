import { useState } from "react";

function CreatePortfolioForm() {
	const [rateNumber, setRateNumber] = useState(0);
	const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRateNumber(Number(event.target.value));
	};
	return (
		<form>
			<textarea name="" id="" cols={30} rows={10}></textarea>
			<input
				type="range"
				onChange={handleRateChange}
				min={1}
				max={10}
				step={1}
				value={rateNumber}
				className="cursor-ew-resize rounded-lg overflow-hidden appearance-none bg-gray-200 h-3 w-128"
			/>
			<button>Rate this portfolio</button>
		</form>
	);
}

export default CreatePortfolioForm;
