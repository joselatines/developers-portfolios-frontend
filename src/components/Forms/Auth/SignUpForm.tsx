import { Button, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpConfig } from "./config";
import InputFields from "../InputFields";
import { signUpWithEmail } from "../../../services/auth.service";

function SignUpForm() {
	const { validationSchema, initialValues, fields } = signUpConfig;
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
				githubUsername: "puto user",
			}; */
			try {
				const response = await signUpWithEmail(values);

				if (!response.data.success)
					return toast({
						title: "Authentication",
						description: response.data.message,
						status: "error",
					});

				toast({
					title: "Authentication",
					description: response.data.message,
					status: "success",
				});
				navigate("/auth/login");
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

			<Button disabled={formik.isSubmitting} colorScheme="twitter"  type="submit">Sign up</Button>
		</form>
	);
}

export default SignUpForm;
