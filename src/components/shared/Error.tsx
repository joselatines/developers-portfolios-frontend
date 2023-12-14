function ErrorHandler({ err }: { err: Error }) {
	console.error("Error while rendering");
	console.error(err);
	return <div>Error: {err.message}</div>;
}

export default ErrorHandler;
