import { Tag } from "@chakra-ui/react";
import { IComment } from "../../../shared/interfaces/comments.interface";
import { getUserProfileUrl } from "../../../shared/utils/getUserProfileUrl";
import { getRateColor } from "../../../shared/utils/uiHelpers";

interface Props {
	data: IComment;
}

function Comment({ data }: Props) {
	const { User, comment, rating } = data;

	return (
		<div className="border relative p-3 ml-3 my-3 bg-white text-slate-950">
			<Tag
				className="absolute top-3 right-0"
				colorScheme={getRateColor(rating)}
			>
				{rating}/10
			</Tag>
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

				<h3 className="font-bold">{User.githubUsername}</h3>
			</a>

			<p className="mt-2">{comment}</p>
		</div>
	);
}

export default Comment;
