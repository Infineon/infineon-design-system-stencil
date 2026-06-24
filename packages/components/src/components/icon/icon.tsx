import { getIcon, type IconData } from "@infineon/infineon-icons";
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
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-icon",
	styleUrl: "./icon.scss",
})
export class IfxIcon {
	@Element() el: HTMLIfxIconElement;

	/**
	 * The icon that will be displayed.
	 * Refer to the [Icon Library](https://infineon.github.io/infineon-design-system-stencil/storybook/?path=/docs/icon-library--development) for available icons.
	 */
	@Prop() readonly icon: string = "";

	/**
	 * Emitted when the provided icon name is invalid and the component fails to render an icon.
	 *  The event detail contains a boolean value `true` indicating an error occurred.
	 */
	@Event() consoleError: EventEmitter<boolean>;

	/**
	 * The resolved icon as SVG string.
	 */
	@State() iconSvg: IconData; 
	
	@Watch("icon")
	updateIcon(_newIcon: string) {
		this.setIcon();
	}

	private convertStringToHtml(htmlString) {
		const div = document.createElement("div");
		div.innerHTML = htmlString;
		return div.firstChild;
	}

	private convertHtmlToObject(htmlElement) {
		const pathToObject = Array.from(
			htmlElement.attributes,
			({ name, value }) => ({ name, value }),
		).reduce((acc, current) => {
			acc[current.name] = current.value;
			return acc;
		}, {});

		return pathToObject;
	}

	private convertPathsToVnode(htmlPath) {
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

	private getSVG(svgPath) {
		const htmlPath = this.convertStringToHtml(this.iconSvg) as SVGElement;
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
				focusable="false"
				role="presentation"
				aria-hidden="true" // Label should be set on the ifx-icon element, e.g. <ifx-icon icon="c-check-16" aria-label="Check Icon"></ifx-icon>
			>
				{...svgPath}
			</svg>
		);
	}

	private constructIcon() {
		if (this.iconSvg) {
			const htmlPath = this.convertStringToHtml(this.iconSvg);
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

    private setIcon() {
        const toCamelCase = (str) =>
            str
                .replace(/[-_]+(.)/g, (_, chr) => chr.toUpperCase())
                .replace(/^(.)/, (m) => m.toLowerCase());

        const iconName = toCamelCase(this.icon);
        this.iconSvg = getIcon(iconName);
    }

	private isInsideAgGrid(el: HTMLElement): boolean {
		let current = el;
		while (current) {
			if (current.className?.toLowerCase().startsWith("ag-")) {
				return true;
			}
			current = current.parentElement;
		}
		return false;
	}

	private isInsideChoices(el: HTMLElement): boolean {
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