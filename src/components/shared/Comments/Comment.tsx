interface IComment {
    user: {
        githubUsername: string;
        profileUrl: string;
        profilePic: string;
    }
    comment: string
    id: string
}

interface Props {
    data: IComment
}

function Comment({data}: Props) {

    const {user, comment} = data

    return (
    <div className="border p-3 ml-3 my-3 bg-white text-slate-950">
      
        <a href={user.profileUrl} className="flex gap-3 items-center inline-flex">

            <img src={user.profilePic}
                className="object-cover w-8 h-8 rounded-full 
                border-2 border-emerald-400  shadow-emerald-400
                "/>

            <h3 className="font-bold">
                {user.githubUsername}
            </h3>
        </a>


        <p className="mt-2">
         {comment}
        </p>
    </div>
)
}

export default Comment