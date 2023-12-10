import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { createPortfolioConfig } from "./config";
import InputFields from "../InputFields";
import { ImageUploader } from "../ImageUploader";
import { useNavigate } from "react-router-dom";
import { createPortfolio } from "../../../services/portfolios.service";
import { CreatePortfolio } from "../../../shared/interfaces/portfolio.interface";
import useCustomToast from "../../../hooks/useCustomToast";

function CreatePortfolioForm() {
	const { validationSchema, initialValues, fields } = createPortfolioConfig;
	const [images, setImages] = useState([]);
	const navigate = useNavigate();
	const { handleToastError, handleToastSuccess } = useCustomToast();

	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: async values => {
			const valuesParsed: CreatePortfolio = { ...values, images };
			if (!values.images || values.images.length < 0)
				return alert("At least 1 image thumbnail is required");
		
			try {
				const res = await createPortfolio(valuesParsed);

				if (!res.data.success)
					return handleToastError(res.data.message, "Creating portfolio");

				handleToastSuccess(res.data.message, "Creating portfolio");
				navigate("/me");
			} catch (error: any) {
				handleToastError(error.message);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<InputFields formik={formik} fields={fields} />
			<ImageUploader images={images} setImages={setImages} />
			<Button
				colorScheme="twitter"
				disabled={formik.isSubmitting}
				isLoading={formik.isSubmitting}
				loadingText="Creating portfolio..."
				type="submit"
			>
				Create portfolio
			</Button>
		</form>
	);
}

export default CreatePortfolioForm;
