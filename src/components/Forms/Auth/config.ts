import * as Yup from "yup";

export const loginConfig = {
	validationSchema: Yup.object({
		email: Yup.string().required("Email is required"),
		password: Yup.string().required("Password is required"),
	}),
	initialValues: {
		email: "",
		password: "",
	},
	fields: [
		{
			name: "email",
			label: "Email",
			helperText: "Enter your email",
			type: "text",
		},
		{
			name: "password",
			label: "Password",
			helperText: "Enter your password",
			type: "password",
		},
	],
};

export const signUpConfig = {
	validationSchema: Yup.object({
		email: Yup.string().required("Email is required"),
		password: Yup.string().required("Password is required"),
		username: Yup.string().required("Github username is required"),
	}),
	initialValues: {
		email: "",
		password: "",
		username: "",
	},
	fields: [
		{
			name: "email",
			label: "Email",
			helperText: "Enter your email",
			type: "text",
		},
		{
			name: "password",
			label: "Password",
			helperText: "Enter your password",
			type: "password",
		},
		{
			name: "username",
			label: "Github username",
			helperText: "Enter your Github username",
			type: "text",
		},
	],
};
