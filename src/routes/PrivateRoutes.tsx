import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoutes = () => {
	const auth = useContext(AuthContext);

	return auth.user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
