import { useState, useEffect } from "react";
import { Heading, Avatar, Button } from "@chakra-ui/react";
import EditMeProfileForm from "../components/Forms/Me/EditMeProfileForm";
import { useFetchWithJWT } from "../hooks/useFetchWithJWT";
import { API_URL, DEFAULT_PROFILE_PIC } from "../CONST";
import ErrorHandler from "../components/shared/Error";
import LoaderHandler from "../components/shared/Loader";
import { Link } from "react-router-dom";
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

	useEffect(() => {
		refetchProfile();
		refetchPortfolios();
		console.info("component re-rendered");
	}, [refresh, refetchProfile, refetchPortfolios]);

	if (profileError?.message || portfolioError?.message) {
		return (
			<ErrorHandler
				errorMessage={profileError?.message || portfolioError?.message}
			/>
		);
	}

	if (!profile || !portfolios) {
		return <LoaderHandler />;
	}

	const { githubUsername, email, profilePic, id } = profile.data;

	return (
		<section>
			<div className="flex gap-3 justify-right">
				<Button colorScheme="whatsapp">
					<Link to="/me/portfolios/create">Create new portfolio</Link>
				</Button>
				<Button>
					<Link to={`/me/portfolios/edit/${id}`}>Edit portfolio</Link>
				</Button>
			</div>
			<section className="grid">
				<Avatar
					name={githubUsername}
					size="2xl"
					src={profilePic || DEFAULT_PROFILE_PIC}
				/>
				<Heading>{githubUsername}</Heading>
				<span className="text-lg font-semibold mb-10">{email}</span>

				<EditMeProfileForm
					refreshParentComponent={() => setRefresh(prev => prev + 1)}
					initialValues={{ githubUsername, profilePic }}
					userId={id}
				/>
			</section>

			<PortfoliosSection portfolios={portfolios.data} />
		</section>
	);
}

export default MeRoute;
