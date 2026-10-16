import {
	afterNextRender,
	Component,
	Injector,
	type OnInit,
	signal,
} from "@angular/core";
import Prism from "prismjs";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";

import packageJson from "../../package.json";

const declaredVersion =
	packageJson.dependencies["@infineon/design-system-angular"];

import { version as installedVersion } from "@infineon/design-system-angular/package.json";

declare const PACKAGE_VERSION: string | undefined;

@Component({
	selector: "app-root",
	templateUrl: "./app.html",
	standalone: false,
	styles: [],
})
export class App implements OnInit {
	protected readonly title = signal("angular-module-example");
	protected version = "";

	constructor(private injector: Injector) {
		afterNextRender(
			() => {
				Prism.highlightAll();
			},
			{ injector: this.injector },
		);
	}

	ngOnInit() {
		// Component initialization

		if (typeof PACKAGE_VERSION !== "undefined") {
			this.version = PACKAGE_VERSION;
		} else if (declaredVersion.includes("workspace")) {
			this.version = "workspace";
		} else {
			this.version = installedVersion;
		}
	}
}
