import { useParams } from "react-router-dom";
import EditPortfolioForm from "../../components/Forms/Portfolio/EditPortfolioForm";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../CONST";
import ErrorHandler from "../../components/shared/Error";
import LoaderHandler from "../../components/shared/Loader";

function PortfolioEditRoute() {
	const { id } = useParams();
	const { data, error } = useFetch(`${API_URL}/portfolios/${id}`);

	if (error) return <ErrorHandler errorMessage={error.message} />;
	if (!data) return <LoaderHandler />;

	const initialValues = {
		thumbnail: data.data.thumbnail,
		website_link: data.data.website_link,
		github_link: data.data.github_link,
		type: data.data.type,
		title: data.data.title,
		description: data.data.description,
	};

	if (id)
		return <EditPortfolioForm initialValues={initialValues} portfolioId={id} />;
}

export default PortfolioEditRoute;
