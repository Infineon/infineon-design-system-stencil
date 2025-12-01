import { getIcon } from "@infineon/infineon-icons";
import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-icon",
	styleUrl: "./infineonIconStencil.scss",
})
export class InfineonIconStencil {
	@Element() el: HTMLElement;
	@Prop({ mutable: true }) icon: string = "";
	@Prop({ mutable: true }) ifxIcon: any;
	@State() internalIcon: string;
	@Event() consoleError: EventEmitter<boolean>;

	@Watch("icon")
	updateIcon(newIcon: string) {
		this.internalIcon = newIcon;
		this.setIcon();
	}

	convertStringToHtml(htmlString) {
		const div = document.createElement("div");
		div.innerHTML = htmlString;
		return div.firstChild;
	}
	F;

	convertHtmlToObject(htmlElement) {
		const pathToObject = Array.from(
			htmlElement.attributes,
			({ name, value }) => ({ name, value }),
		).reduce((acc, current) => {
			acc[current.name] = current.value;
			return acc;
		}, {});

		return pathToObject;
	}

	convertPathsToVnode(htmlPath) {
		const svgPaths = [];
		const parentPath = this.convertHtmlToObject(htmlPath);
		const parentPathToVnode = h("path", parentPath);
		svgPaths.push(parentPathToVnode);
		if (htmlPath.firstChild) {
			const paths = htmlPath.querySelectorAll("path");
			const pathLength = htmlPath.querySelectorAll("path").length;
			for (let i = 0; i < pathLength; i++) {
				const pathToObject = this.convertHtmlToObject(paths[i]);
				const objToVnode = h("path", pathToObject);
				svgPaths.push(objToVnode);
			}
		}
		return svgPaths;
	}

	getSVG(svgPath) {
		const htmlPath = this.convertStringToHtml(this.ifxIcon) as SVGElement;
		const width = htmlPath.getAttribute("width");
		const height = htmlPath.getAttribute("height");
		const fill = htmlPath.getAttribute("fill");
		const viewBox = htmlPath.getAttribute("viewBox");

		return (
			<svg
				class="inline-svg"
				width={width}
				height={height}
				xmlns="http://www.w3.org/2000/svg"
				fill={fill}
				viewBox={viewBox}
			>
				{...svgPath}
			</svg>
		);
	}

	constructIcon() {
		if (this.ifxIcon) {
			const htmlPath = this.convertStringToHtml(this.ifxIcon);
			const svgPath = this.convertPathsToVnode(htmlPath);
			const SVG = this.getSVG(svgPath);
			return SVG;
		} else if (this.icon !== "") {
			this.consoleError.emit(true);
			return;
		} else {
			return;
		}
	}

	setIcon() {
		const toCamelCase = (str) =>
			str
				.replace(/[-_]+(.)/g, (_, chr) => chr.toUpperCase()) // handle - and _ to uppercase
				.replace(/^(.)/, (m) => m.toLowerCase()); // ensure first letter is lowercase

		const iconName = toCamelCase(this.internalIcon);
		this.ifxIcon = getIcon(iconName);
	}

	isInsideAgGrid(el: HTMLElement): boolean {
		let current = el;
		while (current) {
			if (current.className?.toLowerCase().startsWith("ag-")) {
				return true;
			}
			current = current.parentElement;
		}
		return false;
	}

	isInsideChoices(el: HTMLElement): boolean {
		let current = el;
		while (current) {
			if (current.className?.toLowerCase().startsWith("choices__")) {
				return true;
			}
			current = current.parentElement;
		}
		return false;
	}

	componentWillLoad() {
		this.internalIcon = this.icon;
		this.setIcon();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			if (!this.isInsideAgGrid(this.el) && !this.isInsideChoices(this.el)) {
				const framework = detectFramework();
				trackComponent("ifx-icon", await framework);
			}
		}
	}

	render() {
		return <Host>{this.constructIcon()}</Host>;
	}
}
