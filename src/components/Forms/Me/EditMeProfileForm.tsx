import { Button, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { formikConfig } from "./config";
import InputFields from "../InputFields";
import { editUser } from "../../../services/users.service";

interface Props {
	refreshParentComponent: (prev: any) => void;
	initialValues: { email?: string; githubUsername?: string; profilePic?: string };
	userId: string;
}

function EditMeProfileForm({
	refreshParentComponent,
	initialValues,
	userId,
}: Props) {
	const { validationSchema, fields } = formikConfig;
	const toast = useToast();

	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: async values => {
			try {
				const response = await editUser(values, userId);

				if (!response.data.success) {
					return toast({
						title: "Editing info",
						description: response.data.message,
						status: "error",
					});
				}

				toast({
					title: "Editing info",
					description: response.data.message,
					status: "success",
				});

				refreshParentComponent((prev: number) => prev + 1);
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
			<Button disabled={formik.isSubmitting} colorScheme="twitter" type="submit">Edit profile data</Button>
		</form>
	);
}

export default EditMeProfileForm;
