import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

const PrivateRoutes = () => {
	const auth = useContext(AuthContext);

	return auth.user?.token ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
