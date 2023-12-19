import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
	return (
		<>
			<Navigation />
			<main className="pt-20 p-10">
				<Outlet />
			</main>
		</>
	);
}
