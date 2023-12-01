import { Button, Tag, useToast } from "@chakra-ui/react";
import { IComment } from "../../../shared/interfaces/comments.interface";
import { getUserProfileUrl } from "../../../shared/utils/getUserProfileUrl";
import { getRateColor } from "../../../shared/utils/uiHelpers";
import { usePortfolioOwnership } from "../../../hooks/usePortfolioOwnership";
import { MdDelete } from "react-icons/md";
import { deleteComment } from "../../../services/comments.service";
import { useNavigate } from "react-router-dom";

interface Props {
	data: IComment;
}

function Comment({ data }: Props) {
	const { User, comment, rating, id } = data;
	const [isPortfolioOwner] = usePortfolioOwnership(User.id);
	const toast = useToast();
	const navigate = useNavigate();

	const handleDeleteComment = async (commentId: string) => {
		try {
			const response = await deleteComment(commentId);
			if (!response.data.success) {
				return toast({
					title: "Comment",
					description: response.data.message,
					status: "error",
				});
			}

			toast({
				title: "Comment",
				description: response.data.message,
				status: "success",
			});
			navigate(0);
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
		<div className="border relative p-3 ml-3 my-3 bg-white text-slate-950">
			<Tag
				className="absolute top-3 right-3"
				colorScheme={getRateColor(rating)}
			>
				{rating}/10
			</Tag>

			{isPortfolioOwner && (
				<Button
					size="xs"
					colorScheme="red"
					position={"absolute"}
					className="bottom-3 right-3"
					onClick={() => handleDeleteComment(id)}
				>
					<MdDelete color="white" size={12} />
				</Button>
			)}
			<a
				href={getUserProfileUrl(User.id)}
				className="gap-3 items-center inline-flex"
			>
				<img
					src={User.profilePic}
					className="object-cover w-8 h-8 rounded-full 
                border-2 border-emerald-400  shadow-emerald-400
                "
				/>

				<h3 className="font-bold">
					{isPortfolioOwner ? "You" : User.githubUsername}
				</h3>
			</a>

			<p className="mt-2">{comment}</p>
		</div>
	);
}

export default Comment;
