import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import React from "react";
import "reactjs-popup/dist/index.css";
import "./index.css";
import "./App.css";
import MeRoute from "./routes/profiles/me";
import HomeRoute from "./routes/home";
import Root from "./routes/root";
import CreatePortfolioRoute from "./routes/portfolios/create";
import PrivateRoutes from "./routes/PrivateRoutes";
import LoginRoute from "./routes/auth/login";
import { AuthProvider } from "./contexts/auth/AuthContext";
import SignUpRoute from "./routes/auth/signup";
import UserProfile from "./routes/profiles";
import PortfolioEditRoute from "./routes/portfolios/edit";
import NotFound from "./routes/404";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<Router>
					<Routes>
						<Route element={<Root />} path="/">
							<Route element={<NotFound />} path="*" />

							<Route element={<HomeRoute />} path="/" />

							<Route element={<PrivateRoutes />}>
								<Route element={<MeRoute />} path="/profiles/me" />
								<Route
									element={<CreatePortfolioRoute />}
									path="/profiles/me/portfolios/create"
								/>
								<Route
									element={<PortfolioEditRoute />}
									path="/profiles/me/portfolios/edit/:id"
								/>
							</Route>

							<Route element={<UserProfile />} path="/profiles/:id" />

							<Route element={<LoginRoute />} path="/auth/login" />
							<Route element={<SignUpRoute />} path="/auth/signup" />
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</ChakraProvider>
	</React.StrictMode>
);
