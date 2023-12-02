import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import React from "react";
import "reactjs-popup/dist/index.css";
import "./index.css";
import "./App.css";
import MeRoute from "./routes/me";
import HomeRoute from "./routes/home";
import Root from "./routes/root";
import CreatePortfolioRoute from "./routes/portfolios/create";
import PrivateRoutes from "./routes/PrivateRoutes";
import LoginRoute from "./routes/auth/login";
import { AuthProvider } from "./contexts/auth/AuthContext";
import SignUpRoute from "./routes/auth/signup";
import UserRoute from "./routes/users";
import PortfolioEditRoute from "./routes/portfolios/edit";

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
								<Route
									element={<CreatePortfolioRoute />}
									path="/me/portfolios/create"
								/>
								<Route
									element={<PortfolioEditRoute />}
									path="/me/portfolios/edit/:id"
								/>
							</Route>

							<Route element={<UserRoute />} path="/users/:id" />

							<Route element={<LoginRoute />} path="/auth/login" />
							<Route element={<SignUpRoute />} path="/auth/signup" />
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</ChakraProvider>
	</React.StrictMode>
);
