import { useCallback,useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { API_URL } from "../../../CONST";
import { useFetch } from "../../../hooks/useFetch";
import { IComment } from "../../../shared/interfaces/comments.interface";
import Comment from "./Comment";
import RatePortfolioForm from "../../Forms/RatePortfolioForm";
import ErrorHandler from "../../shared/Error";
import LoaderHandler from "../../shared/Loader";

const CommentsSection = ({ portfolioId }: IProps) => {
	const {
		data,
		error,
		refetch: refetchComments,
	} = useFetch(`${API_URL}/portfolios/comments`);
	const [showComments, setShowComments] = useState(true);
	const [refresh, setRefresh] = useState(0);

	const handleRefresh = useCallback(() => {
		setRefresh(prev => prev + 1);
		refetchComments();
	}, [refresh]);

	if (error) return <ErrorHandler errorMessage={error.message} />;
	if (!data) return <LoaderHandler />;

	const filteredComments = data.data.filter(
		(c: IComment) => c.comment.length > 3
	);

	const toggleComments = () => setShowComments(prev => !prev);

	return (
		<>
			<RatePortfolioForm
				portfolioId={portfolioId}
				refreshParent={handleRefresh}
			/>

			<Button
				className="mb-6 mt-8 center flex gap-1"
				colorScheme="teal"
				onClick={toggleComments}
			>
				<FaEye /> {showComments ? "Hide comments" : "Show comments"}
			</Button>

			<span className="text-xl font-bold">Comment section</span>
			<section className={showComments ? "h-56 overflow-auto" : "hidden"}>
				<div className="flex flex-col">
					{filteredComments.map((comment: IComment) => (
						<Comment
							key={comment.id}
							data={comment}
							refreshParent={handleRefresh}
						/>
					))}
				</div>
			</section>
		</>
	);
};

interface IProps {
	portfolioId: string;
}

export default CommentsSection;
