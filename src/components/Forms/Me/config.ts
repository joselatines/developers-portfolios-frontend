import * as Yup from "yup";

export const formikConfig = {
	validationSchema: Yup.object({
		username: Yup.string(),
		profilePic: Yup.string(),
	}),

	fields: [
		{
			name: "username",
			label: "Github username",
			helperText: "Enter your GITHUB username",
			type: "username",
		},
		{
			name: "profilePic",
			label: "Profile pic link",
			helperText: "Enter your profile pic (link to the image)",
			type: "text",
		},
	],
};
