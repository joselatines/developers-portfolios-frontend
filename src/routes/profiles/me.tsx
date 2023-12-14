import { useState, useCallback } from "react";
import { Heading, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EditMeProfileForm from "../../components/Forms/Me/EditMeProfileForm";
import { useFetchWithJWT } from "../../hooks/useFetchWithJWT";
import { API_URL } from "../../CONST";
import ErrorHandler from "../../components/shared/Error";
import LoaderHandler from "../../components/shared/Loader";
import PortfoliosSection from "../../components/Portfolio/PortfoliosSection";

function MeRoute() {
	const {
		data: profile,
		error,
		refetch: refetchProfile,
	} = useFetchWithJWT(`${API_URL}/profiles/me`);

	const [refresh, setRefresh] = useState(0);

	const handleRefresh = useCallback(() => {
		setRefresh(prev => prev + 1);
		refetchProfile();
	}, [refresh]);

	if (error) return <ErrorHandler err={error} />;
	if (!profile) return <LoaderHandler />;

	const { githubUsername, email, profilePic, id, portfolios } = profile.data;

	return (
		<>
			<div className="flex gap-3 mb-4">
				<Button colorScheme="whatsapp">
					<Link to="/profiles/me/portfolios/create">Create new portfolio</Link>
				</Button>
			</div>
			<section className="grid gap-4 my-6">
				<Avatar name={githubUsername} size="2xl" src={profilePic} />
				<Heading size={"md"}>{githubUsername}</Heading>
				<span className="font-semibold">{email}</span>

				<EditMeProfileForm
					refreshParent={handleRefresh}
					initialValues={{ githubUsername, profilePic }}
					userId={id}
				/>
			</section>

			<PortfoliosSection portfolios={portfolios} />
		</>
	);
}

export default MeRoute;
