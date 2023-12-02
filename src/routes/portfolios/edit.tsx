import { useParams } from "react-router-dom";
import EditPortfolioForm from "../../components/Forms/Portfolio/EditPortfolioForm";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../CONST";

function PortfolioEditRoute() {
	const { id } = useParams();
	const { data, error } = useFetch(`${API_URL}/portfolios/${id}`);

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading...</div>;

	const initialValues = {
		images: data.data.images,
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
