import { useState, useEffect } from "react";
import { Heading, Avatar } from "@chakra-ui/react";
import EditMeProfileForm from "../components/Forms/Me/EditMeProfileForm";
import { useFetchWithJWT } from "../hooks/useFetchWithJWT";
import { API_URL, DEFAULT_PROFILE_PIC } from "../CONST";
import ErrorHandler from "../components/shared/Error";
import LoaderHandler from "../components/shared/Loader";
import { Link } from "react-router-dom";

function MeRoute() {
	const { data, error, refetch } = useFetchWithJWT(`${API_URL}/users/me`);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		refetch();
		console.info("component re-rendered");
	}, [refresh]);

	if (error?.message) return <ErrorHandler errorMessage={error.message} />;
	if (!data) return <LoaderHandler />;

	const { githubUsername, email, profilePic } = data.data;

	return (
		<section className="grid">
			<Avatar
				name={githubUsername}
				size="2xl"
				src={profilePic || DEFAULT_PROFILE_PIC}
			/>
			<Heading>{githubUsername}</Heading>
			<span className="text-lg font-semibold mb-10">{email}</span>

			<EditMeProfileForm
				refreshParentComponent={setRefresh}
				initialValues={{ githubUsername, profilePic }}
				userId={data.data.id}
			/>

			<Link to="/me/portfolios/create">Create new portfolio</Link>
		</section>
	);
}

export default MeRoute;
