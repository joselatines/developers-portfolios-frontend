import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { createPortfolioConfig } from "./config";
import InputFields from "../InputFields";
import { ImageUploader } from "../ImageUploader";
import { useNavigate } from "react-router-dom";
import { createPortfolio } from "../../../services/portfolios.service";
import { CreatePortfolio } from "../../../shared/interfaces/portfolio.interface";

function CreatePortfolioForm() {
	const { validationSchema, initialValues, fields } = createPortfolioConfig;
	const [images, setImages] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: async values => {
			const valuesParsed: CreatePortfolio = { ...values, images };
			if (!values.images || values.images.length < 0)
				return alert("At least 1 image thumbnail is required");

			try {
				const response = await createPortfolio(valuesParsed);
				if (!response.data.success) {
					return toast({
						title: "Portfolio",
						description: response.data.message,
						status: "error",
					});
				}

				toast({
					title: "Portfolio",
					description: response.data.message,
					status: "success",
				});
				navigate("/me");
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
			<ImageUploader images={images} setImages={setImages} />
			<Button colorScheme="twitter" disabled={formik.isSubmitting} type="submit">
				Create portfolio
			</Button>
		</form>
	);
}

export default CreatePortfolioForm;
