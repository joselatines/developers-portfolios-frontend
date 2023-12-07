import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginConfig } from "./config";
import InputFields from "../InputFields";
import { loginWithEmail } from "../../../services/auth.service";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import useCustomToast from "../../../hooks/useCustomToast";

function LoginForm() {
	const { validationSchema, initialValues, fields } = loginConfig;
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const { handleToastSuccess, handleToastError } = useCustomToast();
	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: async values => {
			try {
				const res = await loginWithEmail(values);

				if (!res.data.success) {
					setUser(null);
					handleToastError(res.data.message, "Authentication");
				}

				handleToastSuccess(res.data.message, "Authentication");
				setUser(res.data.data);
				console.log(res.data.data);
				navigate("/");
			} catch (error: any) {
				console.error(error);
				handleToastError(error.message, "Authentication");
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<InputFields formik={formik} fields={fields} />

			<Button
				disabled={formik.isSubmitting}
				isLoading={formik.isSubmitting}
				loadingText="Logging, please wait"
				colorScheme="twitter"
				type="submit"
			>
				Login
			</Button>
		</form>
	);
}

export default LoginForm;
