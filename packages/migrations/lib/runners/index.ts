import type { CodemodRunner, SharedCodemodFramework } from "../core/types.js";
import { HtmlCodemodRunner } from "./html/index.js";
import { ReactCodemodRunner } from "./react/index.js";
import { VueCodemodRunner } from "./vue/index.js";

export const getRunner = (framework: SharedCodemodFramework): CodemodRunner => {
	switch (framework) {
		case "html":
			return new HtmlCodemodRunner();
		case "react":
			return new ReactCodemodRunner();
		case "vue":
			return new VueCodemodRunner();
	}
};