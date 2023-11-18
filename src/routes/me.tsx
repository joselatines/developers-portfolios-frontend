import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../CONST";

function MeRoute() {
	const { data, error } = useFetch<any>(`${API_URL}/users/me`);

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading...</div>;

	console.log(data)
	return (
		<div>
		
			<div>
				<Link to="/me/portfolios/create">Create new portfolio</Link>
			</div>
		</div>
	);
}

export default MeRoute;
