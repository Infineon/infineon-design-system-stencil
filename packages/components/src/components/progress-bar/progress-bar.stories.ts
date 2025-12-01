export default {
	title: "Components/Progress Bar",
	tags: ["autodocs"],

	args: {
		size: "m",
		value: 50,
		showLabel: false,
	},
	argTypes: {
		value: {
			description: "The percentage of the progress bar.",
			control: { type: "range", min: 0, max: 100 },
			table: {
				category: "ifx-progress-bar props",
				defaultValue: {
					summary: 50,
				},
			},
		},
		showLabel: {
			description:
				"Shows the percentage of the progress bar. Does not fit in size ***s***.",
			control: "boolean",
			table: {
				category: "ifx-progress-bar props",
				defaultValue: {
					summary: false,
				},
			},
		},
		size: {
			description:
				"Sets the size of the progress bar. Options: s (36px) and m (40px).",
			control: "radio",
			options: ["s", "m"],
			table: {
				category: "ifx-progress-bar props",
				defaultValue: {
					summary: "m",
				},
			},
		},
	},
};

const Template = (args) => {
	const wrapper = document.createElement("div");
	wrapper.innerHTML = `
    <ifx-progress-bar
      value="${args.value}"
      size="${args.size}"
      show-label="${args.showLabel}"
    ></ifx-progress-bar>
  `;

	return wrapper.innerHTML;
};

export const Default = Template.bind({});
Default.args = {
	size: "m",
	value: 50,
	showLabel: false,
};

export const Small = Template.bind({});
Small.args = {
	value: 75,
	size: "s",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
	value: 25,
	showLabel: true,
};
