import Navigation from "../components/Navigation";

function MainLayout({ children }: any) {
	return (
		<>
			<Navigation /> {children}
		</>
	);
}

export default MainLayout;
