import { icons } from "@infineon/infineon-icons";
import { action } from "storybook/actions";

export default {
	title: "Components/Slider",
	component: "ifx-slider",
	tags: ["autodocs"],

	argTypes: {
		min: {
			control: "number",
			description: "The minimum value of the slider.",
			table: {
				category: "ifx-slider props",
				defaultValue: { summary: "0" },
				type: { summary: "number" },
			},
		},
		max: {
			control: "number",
			description: "The maximum value of the slider.",
			table: {
				category: "ifx-slider props",
				defaultValue: { summary: "100" },
				type: { summary: "number" },
			},
		},
		step: {
			control: "number",
			description: "The step value of the slider.",
			table: {
				category: "ifx-slider props",
				defaultValue: { summary: "1" },
				type: { summary: "number" },
			},
		},
		type: {
			control: "radio",
			options: ["single", "double"],
			description: "The type of the slider.",
			table: {
				category: "ifx-slider props",
				defaultValue: { summary: "single" },
				type: { summary: "single | double" },
			},
		},
		value: {
			control: "number",
			if: { arg: "type", eq: "single" },
			description: "The current value of the slider.",
			table: {
				category: "ifx-slider props",
				type: { summary: "number " },
			},
		},
		minValueHandle: {
			control: "number",
			if: { arg: "type", eq: "double" },
			description: "The minimum value of the handle in double slider.",
			table: {
				category: "ifx-slider props",
				type: { summary: "number" },
			},
		},
		maxValueHandle: {
			control: "number",
			if: { arg: "type", eq: "double" },
			description: "The maximum value of the handle in double slider.",
			table: {
				category: "ifx-slider props",
				type: { summary: "number" },
			},
		},
		showPercentage: {
			control: "boolean",
			if: { arg: "type", eq: "single" },
			description: "Show the percentage of the slider value.",
			table: {
				category: "ifx-slider props",
				defaultValue: { summary: "false" },
				type: { summary: "boolean" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disable the slider.",
			table: {
				category: "ifx-slider props",
				defaultValue: { summary: "false" },
				type: { summary: "boolean" },
			},
		},
		leftIcon: {
			options: Object.keys(icons),
			control: { type: "select" },
			description: "The icon on the left of the slider.",
			table: {
				category: "ifx-slider props",
				type: { summary: "string" },
			},
		},
		rightIcon: {
			options: Object.keys(icons),
			control: { type: "select" },
			description: "The icon on the right of the slider.",
			table: {
				category: "ifx-slider props",
				type: { summary: "string" },
			},
		},
		leftText: {
			control: "text",
			description: "The text on the left side.",
			table: {
				category: "ifx-slider props",
				type: { summary: "string" },
			},
		},
		rightText: {
			control: "text",
			description: "The text on the right side.",
			table: {
				category: "ifx-slider props",
				type: { summary: "string" },
			},
		},
		ariaLabel: {
			description: "Aria label of the Slider.",
			control: "text",
			table: {
				category: "ARIA Labels",
				defaultValue: {
					summary: "",
				},
				type: {
					summary: "string",
				},
			},
		},
		ifxChange: {
			action: "ifxChange",
			description: "Custom event emitted on input change.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
				},
			},
		},
	},
};

const Template = (args) => {
	const sliderElement = document.createElement("ifx-slider");
	sliderElement.setAttribute("value", args.value);
	sliderElement.setAttribute("min", args.min);
	sliderElement.setAttribute("max", args.max);
	sliderElement.setAttribute("step", args.step);
	sliderElement.setAttribute("min-value-handle", args.minValueHandle);
	sliderElement.setAttribute("max-value-handle", args.maxValueHandle);
	sliderElement.setAttribute("type", args.type);
	sliderElement.setAttribute("aria-label", args.ariaLabel);
	if (args.showPercentage) {
		sliderElement.setAttribute("show-percentage", "true");
	}
	if (args.disabled) {
		sliderElement.setAttribute("disabled", "true"); // Set disabled attribute
	}

	if (args.leftIcon) {
		sliderElement.setAttribute("left-icon", args.leftIcon);
	}
	if (args.rightIcon) {
		sliderElement.setAttribute("right-icon", args.rightIcon);
	}
	if (args.leftText) {
		sliderElement.setAttribute("left-text", args.leftText);
	}
	if (args.rightText) {
		sliderElement.setAttribute("right-text", args.rightText);
	}
	sliderElement.addEventListener("ifxChange", action("ifxChange"));

	return sliderElement;
};

export const Default = Template.bind({});
Default.args = {
	min: 0,
	max: 100,
	step: 1,
	value: 50,
	minValueHandle: 20,
	maxValueHandle: 80,
	showPercentage: false,
	disabled: false,
	type: "single",
};

export const WithPercentageDisplay = Template.bind({});
WithPercentageDisplay.args = {
	...Default.args,
	showPercentage: true,
	disabled: false,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
	...Default.args,
	leftIcon: "cogwheel-16",
	rightIcon: "cogwheel-16",
};

export const WithTexts = Template.bind({});
WithTexts.args = {
	...Default.args,
	leftText: "LeftText",
	rightText: "RightText",
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Default.args,
	disabled: true,
};
