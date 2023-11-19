import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import React from "react";
import "reactjs-popup/dist/index.css";
import "./index.css";
import "./App.css"
import MeRoute from "./routes/me";
import HomeRoute from "./routes/home";
import Root from "./routes/root";
import CreatePortfolioRoute from "./routes/portfolios/create";
import PrivateRoutes from "./routes/PrivateRoutes";
import LoginRoute from "./routes/auth/login";
import PortfoliosRoute from "./routes/portfolios";
import { AuthProvider } from "./contexts/AuthContext";
import SignUpRoute from "./routes/auth/signup";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<Router>
					<Routes>
						<Route element={<Root />} path="/">
							<Route element={<HomeRoute />} path="/" />

							<Route element={<PrivateRoutes />} path="me">
								<Route element={<MeRoute />} path="/me" />
								<Route element={<PortfoliosRoute />} path="/me/portfolios" />
								<Route
									element={<CreatePortfolioRoute />}
									path="/me/portfolios/create"
								/>
							</Route>

							<Route element={<LoginRoute />} path="/auth/login" />
							<Route element={<SignUpRoute />} path="/auth/signup" />
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</ChakraProvider>
	</React.StrictMode>
);
