import { useState, useCallback } from "react";
import { Heading, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EditMeProfileForm from "../components/Forms/Me/EditMeProfileForm";
import { useFetchWithJWT } from "../hooks/useFetchWithJWT";
import { API_URL } from "../CONST";
import ErrorHandler from "../components/shared/Error";
import LoaderHandler from "../components/shared/Loader";
import PortfoliosSection from "../components/Portfolio/PortfoliosSection";

function MeRoute() {
	const {
		data: profile,
		error: profileError,
		refetch: refetchProfile,
	} = useFetchWithJWT(`${API_URL}/users/me`);
	const {
		data: portfolios,
		error: portfolioError,
		refetch: refetchPortfolios,
	} = useFetchWithJWT(`${API_URL}/portfolios/me`);

	const [refresh, setRefresh] = useState(0);

	const handleRefresh = useCallback(() => {
		setRefresh(prev => prev + 1);
		refetchProfile();
		refetchPortfolios();
	}, [refresh]);

	const errorMessage = profileError?.message || portfolioError?.message;

	if (errorMessage) return <ErrorHandler errorMessage={errorMessage} />;
	if (!profile || !portfolios) return <LoaderHandler />;

	const { githubUsername, email, profilePic, id } = profile.data;

	return (
		<>
			<div className="flex gap-3 justify-right">
				<Button colorScheme="whatsapp">
					<Link to="/me/portfolios/create">Create new portfolio</Link>
				</Button>
			</div>
			<section className="grid">
				<Avatar name={githubUsername} size="2xl" src={profilePic} />
				<Heading>{githubUsername}</Heading>
				<span className="text-lg font-semibold mb-10">{email}</span>

				<EditMeProfileForm
					refreshParent={handleRefresh}
					initialValues={{ githubUsername, profilePic }}
					userId={id}
				/>
			</section>

			<PortfoliosSection portfolios={portfolios.data} />
		</>
	);
}

export default MeRoute;
