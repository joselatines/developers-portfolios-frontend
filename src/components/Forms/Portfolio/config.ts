import * as Yup from "yup";

export const createPortfolioConfig = {
	validationSchema: Yup.object({
		title: Yup.string().required("Title is required"),
		description: Yup.string(),
		website_link: Yup.string()
			.url("Invalid URL")
			.required("Website Link is required"),
		type: Yup.string().required("Type is required"),
	}),
	initialValues: {
		images: [],
		website_link: "",
		type: "",
		title: "",
		description: "",
	},
	fields: [
		{
			name: "title",
			label: "Title",
			helperText: "Enter the title for your portfolio.",
			type: "text",
		},
		{
			name: "description",
			label: "Description",
			helperText: "Enter a brief description for your portfolio.",
			type: "textarea",
		},
		{
			name: "website_link",
			label: "Website Link",
			helperText: "Enter the link to your portfolio website.",
			type: "text",
		},
		{
			name: "type",
			label: "Type",
			helperText: "Select the type of your portfolio.",
			type: "select",
			options: [
				{ value: "", label: "Select type" },
				{ value: "backend", label: "Backend" },
				{ value: "frontend", label: "Frontend" },
				{ value: "fullstack", label: "Fullstack" },
			],
		},
	],
};
