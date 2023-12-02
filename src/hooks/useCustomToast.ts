import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
	const toast = useToast();

	const handleToastSuccess = (message: string, title = "Action") => {
		toast({
			title: title,
			description: message,
			status: "success",
		});
	};

	const handleToastError = (message: string, title = "Unexpected error") => {
		toast({
			title: title,
			description: message,
			status: "error",
		});
	};

	return { handleToastSuccess, handleToastError };
};

export default useCustomToast;
