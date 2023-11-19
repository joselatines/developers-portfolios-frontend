import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
	const links = [{label: '', url: '' }]
	return (
		<>
			<Navigation links={links} />
			<main className="pt-20 p-10">

			<Outlet  />
			</main>
		</>
	);
}
