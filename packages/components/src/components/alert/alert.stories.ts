import { icons } from "@infineon/infineon-icons";
import { html } from "lit";
import { action } from "storybook/actions";

export default {
	title: "Components/Alert",
	tags: ["autodocs"],

	args: {
		label: "Attention! This is an alert message — check it out!",
		variant: "primary",
		closable: true,
		icon: "c-info-16",
		AriaLiveText: "assertive",
	},

	argTypes: {
		label: {
			name: "Label of Alert",
			description: "Sets the label of *<ifx-alert>*.",
			table: {
				category: "story controls",
			},
		},
		variant: {
			description: "Sets the style variant of the alert.",
			options: ["primary", "success", "danger", "warning"],
			control: "radio",
			table: {
				category: "ifx-alert props",
				defaultValue: {
					summary: "primary",
				},
			},
		},

		icon: {
			description:
				"The icon to be displayed. Choose ***none*** to display no icon.",
			options: Object.keys(icons),
			control: "select",
			table: {
				category: "ifx-alert props",
				defaultValue: {
					summary: "c-info-16",
				},
			},
		},
		closable: {
			description: "Defines whether the alert should be closable or not.",
			control: "boolean",
			table: {
				category: "ifx-alert props",
				defaultValue: {
					summary: "true",
				},
			},
		},

		ifxClose: {
			action: "ifxClose",
			description: "Custom event emitted when close button clicked.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});',
				},
			},
		},

		AriaLiveText: {
			options: ["off", "polite", "assertive"],
			control: "radio",
			description: "The aria-live-text attribute to indicate a dynamic content.",
			table: {
				category: "ifx-alert props",
				defaultValue: {
					summary: "assertive",
				},
			},
		},
	},
};

const DefaultTemplate = (args:any) => {
	const alert = document.createElement("ifx-alert");
	alert.setAttribute("aria-live-text", args.AriaLiveText);
	alert.setAttribute("variant", args.variant);
	alert.setAttribute("icon", args.icon === "none" ? "" : args.icon);
	alert.setAttribute("closable", String(args.closable));
	alert.textContent = args.label;
	alert.addEventListener("ifxClose", action("ifxClose"));

	return alert;
};

export const Default = DefaultTemplate.bind({});

const InfoTemplate = (args:any) =>
	html`<ifx-alert variant="info" closable="${args.closable}">
      <div slot="headline">Headline</div>
      <div slot="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi voluptatum quia esse dolor corrupti veniam dolorum. Voluptatem ut enim voluptate. Provident modi molestiae at atque rerum cupiditate, dicta recusandae ab libero veniam iusto possimus quia sequi amet, tempora dolore nobis excepturi est illo blanditiis nihil laborum enim ducimus consequuntur.
      </div>
    </ifx-alert>`;

export const Info:any = InfoTemplate.bind({});
Info.argTypes = {
	variant: {
		table: {
			disable: true,
		},
	},
	icon: {
		table: {
			disable: true,
		},
	},
	showIcon: {
		table: {
			disable: true,
		},
	},
};
