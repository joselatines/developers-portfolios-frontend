import { Toast } from "@chakra-ui/react";

export const handleToastSuccess = (message: string, title = "Action") => {
	Toast({
		title,
		description: message,
		status: "success",
	});
};

export const handleToastError = (
	message: string,
	title = "Unexpected error"
) => {
	Toast({
		title,
		description: message,
		status: "error",
	});
};
