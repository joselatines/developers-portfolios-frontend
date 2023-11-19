import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../CONST";

function MeRoute() {
	const { data, error } = useFetch<any>(`${API_URL}/users/me`, {
		headers: {
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxM2UwZGEyLWE1NTgtNDhhOS1iMmFkLWExNzQ4NmU3ZjhhYyIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTcwMDM1MTY4NSwiZXhwIjoxNzAwMzU1Mjg1fQ.go1bLf_qXOYJSHNe0-IBkM6m1vCcrW6IHOIqBCeWKRs`,
		},
	});

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading...</div>;

	console.log(data);
	return (
		<div>
			<h1>{data.data.email}</h1>
			<div>
				<Link to="/me/portfolios/create">Create new portfolio</Link>
			</div>
		</div>
	);
}

export default MeRoute;
