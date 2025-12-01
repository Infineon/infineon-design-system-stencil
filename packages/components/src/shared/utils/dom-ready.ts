export const waitForDOMReady = (): Promise<void> => {
	return new Promise((resolve) => {
		if (
			document.readyState === "complete" ||
			document.readyState === "interactive"
		) {
			resolve();
		} else {
			const onReady = () => {
				resolve();
				document.removeEventListener("DOMContentLoaded", onReady);
			};
			document.addEventListener("DOMContentLoaded", onReady);
		}
	});
};
