import { Button, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginConfig } from "./config";
import InputFields from "../InputFields";
import { loginWithEmail } from "../../../services/auth.service";
import { AuthContext } from "../../../contexts/auth/AuthContext";

function LoginForm() {
	const { validationSchema, initialValues, fields } = loginConfig;
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const toast = useToast();

	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: async values => {
			// alert(JSON.stringify(values, null, 2));
			/* const credentials = {
				email: "user@gmail.com",
				password: "123",
			}; */
			try {
				const response = await loginWithEmail(values);

				if (!response.data.success) {
					setUser(null);
					return toast({
						title: "Authentication",
						description: response.data.message,
						status: "error",
					});
				}

				setUser(response.data.data);
				toast({
					title: "Authentication",
					description: response.data.message,
					status: "success",
				});
				navigate("/");
			} catch (error: any) {
				console.error(error);
				toast({
					title: "Unexpected error",
					description: error.message,
					status: "error",
				});
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<InputFields formik={formik} fields={fields} />

			<Button
				disabled={formik.isSubmitting}
				colorScheme="twitter"
				type="submit"
			>
				Login
			</Button>
		</form>
	);
}

export default LoginForm;
