import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { editPortfolio } from "../../../services/portfolios.service";

import { IInitialValues, createPortfolioConfig } from "./config";
import InputFields from "../InputFields";
import { ImageUploader } from "../ImageUploader";
import { useNavigate } from "react-router-dom";
import useCustomToast from "../../../hooks/useCustomToast";

function EditPortfolioForm({ initialValues, portfolioId }: IProps) {
	const { validationSchema, fields } = createPortfolioConfig;
	const [images, setImages] = useState([]);
	const navigate = useNavigate();
	const { handleToastSuccess, handleToastError } = useCustomToast();

	const handleFormSubmit = async (values: IInitialValues) => {
		const valuesParsed: any = { ...values, images };

		if (!values.images || values.images.length < 1) {
			return alert("At least 1 image thumbnail is required");
		}

		try {
			const response = await editPortfolio(valuesParsed, portfolioId);

			if (!response.data.success) {
				handleToastError(response.data.message, "Portfolio");
			} else {
				handleToastSuccess(response.data.message);
				navigate("/me");
			}
		} catch (error: any) {
			console.error(error);
			handleToastError(error.message);
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleFormSubmit,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<InputFields formik={formik} fields={fields} />
			<ImageUploader images={images} setImages={setImages} />
			<Button
				colorScheme="twitter"
				disabled={formik.isSubmitting}
				type="submit"
			>
				Edit portfolio
			</Button>
		</form>
	);
}

interface IProps {
	initialValues: IInitialValues;
	portfolioId: string;
}

export default EditPortfolioForm;
