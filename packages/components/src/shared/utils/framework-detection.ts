let frameworkCache: string | null = null;

import { waitForDOMReady } from "./dom-ready";

export const detectFramework = async (): Promise<string> => {
	if (frameworkCache) return frameworkCache;

	if (typeof window === "undefined" || typeof document === "undefined") {
		frameworkCache = "non-browser";
		return frameworkCache;
	}

	const win = window as any;
	const doc = document;

	const isJest =
		typeof process !== "undefined" &&
		process.env &&
		process.env.NODE_ENV === "test";
	if (isJest) {
		frameworkCache = "jest";
		return frameworkCache;
	}

	const isStorybook =
		win.location.search.includes("viewMode") ||
		win.location.href.includes("viewMode") ||
		win.__STORYBOOK_ENV__;

	if (isStorybook) {
		frameworkCache = "Storybook";
		return frameworkCache;
	}

	const isLocalhost = ["localhost", "127.0.0.1"].includes(
		win.location.hostname,
	);
	if (isLocalhost) {
		frameworkCache = "localhost";
		return frameworkCache;
	}

	try {
		if (win.React || win.ReactDOM) {
			frameworkCache = "React";
			return frameworkCache;
		}

		if (win.ng || win.getAllAngularRootElements) {
			frameworkCache = "Angular";
			return frameworkCache;
		}

		if (win.Vue || win.__VUE__) {
			frameworkCache = "Vue";
			return frameworkCache;
		}

		await waitForDOMReady();

		const reactRoot = doc.querySelector("[data-reactroot], [data-reactid]");
		if (reactRoot) {
			frameworkCache = "React";
			return frameworkCache;
		}

		const rootContainers = Array.from(doc.querySelectorAll("body > div"));
		const hasReactRoot = rootContainers.some((container) => {
			const keys = Object.keys(container);
			return keys.some((key) => key.startsWith("__reactContainer"));
		});

		if (hasReactRoot) {
			frameworkCache = "React";
			return frameworkCache;
		}

		if (doc.querySelector("[ng-version], [ng-app]")) {
			frameworkCache = "Angular";
			return frameworkCache;
		}

		if (doc.querySelector("[data-v-app]")) {
			frameworkCache = "Vue";
			return frameworkCache;
		}

		frameworkCache = "Vanilla";
		return frameworkCache;
	} catch (e) {
		frameworkCache = "error";
		return frameworkCache;
	}
};
