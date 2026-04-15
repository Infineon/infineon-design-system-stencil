import type { CodemodFramework, CodemodRunner } from "../types.js";
import { HtmlCodemodRunner } from "./html.js";
import { ReactCodemodRunner } from "./react.js";
import { VueCodemodRunner } from "./vue.js";

export type SharedCodemodFramework = Exclude<CodemodFramework, "angular">;

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