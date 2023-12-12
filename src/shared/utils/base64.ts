export const convertFileToBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = error => reject(error);
		reader.readAsDataURL(file);
	});
};

export const getThumbnail = async (thumbnail: File | string) => {
	if (thumbnail instanceof File) {
		return await convertFileToBase64(thumbnail);
	}
	return thumbnail;
};
