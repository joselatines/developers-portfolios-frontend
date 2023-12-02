import { Button, Toast, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deletePortfolio } from "../../services/portfolios.service";

function OwnerFunctions({ portfolioId }: { portfolioId: string }) {
	const toast = useToast();
	const navigate = useNavigate();
	const handleDelete = async (portfolioId: string) => {
		try {
			const response = await deletePortfolio(portfolioId);
			if (!response.data.success) {
				return Toast({
					title: "Portfolio",
					description: response.data.message,
					status: "error",
				});
			}
			navigate(0);
			toast({
				title: "Portfolio",
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
