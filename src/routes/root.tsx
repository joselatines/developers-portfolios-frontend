import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
}
