import { API_URL } from "../../../CONST";
import { useFetch } from "../../../hooks/useFetch";
import { IComment } from "../../../shared/interfaces/comments.interface";
import Comment from "./Comment";

function CommentsSection() {
	const { data, error } = useFetch(`${API_URL}/portfolios/comments`);

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading comments...</div>;

	return (
		<section>
			<span className="text-xl font-bold">Comment section</span>
			<div className="flex flex-col">
				{data.data.map((c: IComment) => (
					<Comment key={c.id} data={c} />
				))}
			</div>
		</section>
	);
}

export default CommentsSection;
