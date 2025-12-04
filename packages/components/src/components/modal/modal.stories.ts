import { icons } from "@infineon/infineon-icons";
import { action } from "storybook/actions";

export default {
	title: "Components/Modal",
	component: "ifx-modal",
	// tags: ['autodocs'],

	args: {
		opened: false,
		cancelButtonLabel: "Cancel",
		okButtonLabel: "OK",
		closeButtonAriaLabel: "Close modal",
		captionAriaLabel: "Modal title",
	},
	argTypes: {
		caption: {
			control: "text",
			description: "Title for the modal.",
			table: {
				category: "ifx-modal props",
			},
		},
		opened: {
			control: {
				disable: true,
			},
			description: "Default state of the modal.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "false",
				},
				type: {
					summary: "Example (in VanillaJs)",
					detail:
						"const modal = document.getElementById('modal'); \nconst openButton = document.getElementById('open'); \n//add DOM event listeners (e.g. click and/or keypress)\n\nfunction openModal() { \nmodal.opened=true;\n\nfunction closeModal() { \nmodal.opened = false; \n}",
				},
			},
		},
		closeOnOverlayClick: {
			control: "boolean",
			description: "Close the modal when clicking outside the window.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		showCloseButton: {
			control: "boolean",
			description: "Show or hide close button in the modal's header.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "true",
				},
			},
		},
		alertIcon: {
			options: Object.keys(icons),
			control: { type: "select" },
			description: "Icon to be displayed in the alert modal.",
			table: {
				category: "ifx-modal props",
				type: {
					summary: "string",
				},
			},
		},
		size: {
			options: ["s", "m", "l"],
			control: { type: "radio" },
			description: "Usable only when screen width is more than 1024px.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "s",
				},
				type: {
					summary: "s | m | l",
				},
			},
		},
		variant: {
			options: ["default", "alert-brand", "alert-danger"],
			control: { type: "radio" },
			description: "Variant of the modal.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "default",
				},
				type: {
					summary: "default | alert-brand | alert-danger",
				},
			},
		},
		cancelButtonLabel: {
			control: "text",
			description: "Label for the cancel button.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "Cancel",
				},
				type: {
					summary: "string",
				},
			},
		},
		okButtonLabel: {
			control: "text",
			description: "Label for the OK button.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "OK",
				},
				type: {
					summary: "string",
				},
			},
		},
		closeButtonAriaLabel: {
			control: "text",
			description: "Aria label for the close button.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "Close modal",
				},
				type: {
					summary: "string",
				},
			},
		},
		captionAriaLabel: {
			control: "text",
			description: "Aria label for the modal title.",
			table: {
				category: "ifx-modal props",
				defaultValue: {
					summary: "Modal title",
				},
				type: {
					summary: "string",
				},
			},
		},
		ifxOpen: {
			action: "ifxOpen",
			description: "Custom event emitted when modal opens.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});',
				},
			},
		},
		ifxClose: {
			action: "ifxClose",
			description: "Custom event emitted when modal closes.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});',
				},
			},
		},
	},
};

const Template = ({
	caption,
	captionAriaLabel,
	closeButtonAriaLabel,
	showCloseButton,
	closeOnOverlayClick,
	variant,
	size,
	alertIcon,
	cancelButtonLabel,
	okButtonLabel,
}) => {
	const modal = document.createElement("ifx-modal");
	modal.setAttribute("caption", caption);
	modal.setAttribute("caption-aria-label", captionAriaLabel);
	modal.setAttribute("close-button-aria-label", closeButtonAriaLabel);
	modal.setAttribute("variant", variant);

	if (alertIcon) {
		modal.setAttribute("alert-icon", alertIcon);
	}
	modal.setAttribute("close-on-overlay-click", closeOnOverlayClick);
	modal.setAttribute("show-close-button", showCloseButton);
	modal.setAttribute("size", size);

	modal.addEventListener("ifxOpen", action("ifxOpen"));
	modal.addEventListener("ifxClose", action("ifxClose"));

	const content = document.createElement("div");
	content.setAttribute("slot", "content");
	content.innerHTML = `
    <span>Modal content</span>
  `;
	modal.appendChild(content);
	const buttons = document.createElement("div");
	buttons.setAttribute("slot", "buttons");

	const cancelButton = document.createElement("ifx-button");
	cancelButton.setAttribute("variant", "secondary");
	cancelButton.textContent = cancelButtonLabel;
	cancelButton.addEventListener("click", () => {
		console.log("Button 1 clicked");
	});

	const primaryButton = document.createElement("ifx-button");
	primaryButton.textContent = okButtonLabel;
	primaryButton.addEventListener("click", () => {
		console.log("Button 2 clicked");
	});

	buttons.appendChild(cancelButton);
	buttons.appendChild(primaryButton);
	modal.appendChild(buttons);

	const openButton = document.createElement("ifx-button");
	openButton.id = "open";
	openButton.textContent = "Open Modal";
	openButton.addEventListener("click", () => {
		modal.opened = true;
	});
	openButton.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			modal.opened = true;
		}
	});

	const storyElement = document.createElement("div");
	storyElement.appendChild(modal);
	storyElement.appendChild(openButton);

	return storyElement;
};

export const Default = Template.bind({});
Default.args = {
	caption: "Modal Title",
	captionAriaLabel: "Additional information for caption",
	closeButtonAriaLabel: "Close modal",
	showCloseButton: true,
	closeOnOverlayClick: false,
	size: "s",
	variant: "default",
};

export const Alert = Template.bind({});
Alert.args = {
	caption: "Alert-Brand Modal Title",
	captionAriaLabel: "Additional information for caption",
	closeButtonAriaLabel: "Close alert modal",
	closeOnOverlayClick: true,
	alertIcon: "arrowdoen16",
	size: "s",
	variant: "alert-brand",
	cancelButtonLabel: "Cancel",
	okButtonLabel: "OK",
	showCloseButton: false,
};
