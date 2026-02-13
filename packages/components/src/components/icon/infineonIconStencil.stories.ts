import * as icons from "@infineon/infineon-icons";
import { action } from "storybook/actions";

export default {
	title: "Components/Icon",
	tags: ["autodocs"],

	args: {
		icon: "c-check-16",
	},
	argTypes: {
		icon: {
			description: "Set the icon.",
			options: Object.keys(icons),
			control: { type: "select" },
			table: {
				category: "ifx-icon props",
			},
		},
		consoleError: {
			action: "consoleError",
			description: "Custom event emitted when icon is invalid.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onConsoleError={handleError}\nVue:@consoleError="handleError"\nAngular:(consoleError)="handleError()"\nVanillaJs:.addEventListener("consoleError", (event) => {//handle error});',
				},
			},
		},
	},
};

const DefaultTemplate = ({ icon }) => {
	const ifxIcon = document.createElement("ifx-icon");
	ifxIcon.setAttribute("icon", icon);
	ifxIcon.addEventListener("consoleError", action("consoleError"));
	return ifxIcon;
};

export const Default = DefaultTemplate.bind({});
