import { useParams } from "react-router-dom";

function UserRoute() {
	const { id } = useParams();

	return <>user page {id}</>;
}

export default UserRoute;
