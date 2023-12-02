import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deletePortfolio } from "../../services/portfolios.service";
import useCustomToast from "../../hooks/useCustomToast";

function OwnerFunctions({ portfolioId }: { portfolioId: string }) {
	const { handleToastSuccess, handleToastError } = useCustomToast();
	const navigate = useNavigate();
	const handleDelete = async (portfolioId: string) => {
		try {
			const res = await deletePortfolio(portfolioId);
			if (!res.data.success)
				return handleToastError(res.data.message, "Portfolio");

			handleToastSuccess(res.data.message, "Portfolio");
			navigate("/me");
		} catch (error: any) {
			handleToastError(error.message);
		}
	};
	return (
		<div>
			<Link to={`/me/portfolios/edit/${portfolioId}`}>
				<Button>
					<FaRegEdit />
				</Button>
			</Link>
			<Button
				size="xs"
				colorScheme="red"
				onClick={() => handleDelete(portfolioId)}
			>
				<MdDelete color="white" size={12} />
			</Button>
		</div>
	);
}

export default OwnerFunctions;
