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
	const [showEditForm, setShowEditForm] = useState(false);

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
				<Link to="/profiles/me/portfolios/create">
					<Button colorScheme="whatsapp">Create new portfolio</Button>
				</Link>
			</div>
			<section className="grid gap-4 my-6">
				<Avatar name={githubUsername} size="2xl" src={profilePic} />
				<Heading size={"md"}>{githubUsername}</Heading>
				<span className="font-semibold">{email}</span>

				{showEditForm ? (
					<>
						<Button onClick={() => setShowEditForm(false)}>
							No edit profile data
						</Button>
						<EditMeProfileForm
							refreshParent={handleRefresh}
							initialValues={{ githubUsername, profilePic }}
							userId={id}
						/>
					</>
				) : (
					<Button onClick={() => setShowEditForm(true)}>
						Edit profile data
					</Button>
				)}
			</section>

			<PortfoliosSection portfolios={portfolios} />
		</>
	);
}

export default MeRoute;
