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
	packageJson.dependencies["@infineon/infineon-design-system-angular"];

import { version as installedVersion } from "@infineon/infineon-design-system-angular/package.json";

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

		if (declaredVersion.includes("workspace")) {
			this.version = "workspace";
		} else {
			this.version = installedVersion;
		}
	}
}
