import { API_URL } from "../CONST";
import PortfoliosSection from "../components/Portfolio/PortfoliosSection";
import ErrorHandler from "../components/shared/Error";
import LoaderHandler from "../components/shared/Loader";
import { useFetch } from "../hooks/useFetch";

function HomeRoute() {
	const { data, error } = useFetch(`${API_URL}/portfolios`);

	if (error) return <ErrorHandler errorMessage={error.message} />;
	if (!data) return <LoaderHandler />;

	return <PortfoliosSection portfolios={data.data} />;
}

export default HomeRoute;
