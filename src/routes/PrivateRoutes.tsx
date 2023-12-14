import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/AuthContext";

const PrivateRoutes = () => {
	const { token } = useContext(AuthContext);

	return token ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
