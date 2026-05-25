import { icons } from "@infineon/infineon-icons";
import { action } from "storybook/actions";

const iconOptions = Array.from(new Set(["c-check-16", ...Object.keys(icons)]));

export default {
	title: "Components/Icon",
	tags: ["autodocs"],

	args: {
		icon: "c-check-16",
    size: "16",
	},
	argTypes: {
		icon: {
			description: "Set the icon.",
			options: iconOptions,
			control: { type: "select" },
			table: {
				category: "ifx-icon props",
        defaultValue: { summary: "c-check-16" },
			},
		},
    size: {
      description: "Set the icon size",
      options: ["12","16","24","32"],
      control: { type: "radio" },
      table: {
        category: "ifx-icon props",
        defaultValue: { summary: "16" },
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

const DefaultTemplate = ({ icon, size }: Record<string, any>) => {
	const ifxIcon = document.createElement("ifx-icon");
	ifxIcon.setAttribute("icon", icon);
	ifxIcon.setAttribute("size", size);
	ifxIcon.addEventListener("consoleError", action("consoleError"));
	return ifxIcon;
};

export const Default = DefaultTemplate.bind({});
