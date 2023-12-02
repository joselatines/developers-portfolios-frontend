import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { formikConfig } from "./config";
import InputFields from "../InputFields";
import { editUser } from "../../../services/users.service";
import useCustomToast from "../../../hooks/useCustomToast";


function EditMeProfileForm({ refreshParent, initialValues, userId }: IProps) {
	const { handleToastSuccess, handleToastError } = useCustomToast();
	const { validationSchema, fields } = formikConfig;

	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: async values => {
			try {
				const res = await editUser(values, userId);
				if (!res.data.success)
					return handleToastError(res.data.message, "Editing info");

				handleToastSuccess(res.data.message, "Editing info");
				refreshParent();
			} catch (error: any) {
				handleToastError(error.message);
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
				Edit profile data
			</Button>
		</form>
	);
}

interface IProps {
	refreshParent: () => void;
	initialValues: {
		email?: string;
		githubUsername?: string;
		profilePic?: string;
	};
	userId: string;
}


export default EditMeProfileForm;
