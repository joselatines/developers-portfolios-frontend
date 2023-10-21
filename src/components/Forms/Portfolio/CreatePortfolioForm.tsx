import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { createPortfolioConfig } from "./config";
import InputFields from "../InputFields";
import { ImageUploader } from "../ImageUploader";
import { useNavigate } from "react-router-dom";

function CreatePortfolioForm() {
	const { validationSchema, initialValues, fields } = createPortfolioConfig;
	const [images, setImages] = useState([]);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues,
		validationSchema,

		onSubmit: values => {
			const valuesParsed = { ...values, images };
			if (!values.images || values.images.length < 0)
				return alert("At least 1 image thumbnail is required");

			alert(JSON.stringify(valuesParsed, null, 2));
			navigate("/me/portfolios");
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<InputFields formik={formik} fields={fields} />
			<ImageUploader images={images} setImages={setImages} />
			<Button type="submit">Send</Button>
		</form>
	);
}

export default CreatePortfolioForm;
