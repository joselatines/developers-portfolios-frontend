import Navigation from "../components/Navigation";

function MainLayout({ children }: any) {
	return (
		<>
			<Navigation links={null}/> {children}
		</>
	);
}

export default MainLayout;
