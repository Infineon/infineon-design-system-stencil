import { html } from "lit";
import { action } from "storybook/actions";
import { ifxToast } from "./toast-controller";

/** Logs the toast's custom events to the Storybook Actions panel. */
const wireToastActions = (el: HTMLElement | null) => {
	if (!el) {
		return;
	}
	el.addEventListener("ifxToastOpen", action("ifxToastOpen"));
	el.addEventListener("ifxToastClose", action("ifxToastClose"));
	el.addEventListener("ifxToastAction", action("ifxToastAction"));
};

const STATUS_OPTIONS = ["loading", "success", "warning", "danger"];
const PLACEMENT_OPTIONS = [
	"top-left",
	"top-center",
	"top-right",
	"bottom-left",
	"bottom-center",
	"bottom-right",
];

export default {
	title: "Components/Toast",
	tags: ["autodocs"],

	args: {
		status: "success",
		message: "Insert information text here",
		actionText: "Dismiss",
		toastId: "",
		duration: 0,
		placement: "bottom-right",
	},

	argTypes: {
		toastId: {
			description:
				"Stable id emitted with every toast event. Auto-generated when left empty.",
			control: "text",
			table: { category: "ifx-toast props" },
		},
		status: {
			description:
				"Status variant controlling the status icon and accent color.",
			options: STATUS_OPTIONS,
			control: "radio",
			table: {
				category: "ifx-toast props",
				defaultValue: { summary: "success" },
			},
		},
		message: {
			description: "The message text displayed in the toast.",
			control: "text",
			table: { category: "ifx-toast props" },
		},
		actionText: {
			description:
				"Text for the trailing action button. Optional — clicking it dismisses the toast.",
			control: "text",
			table: { category: "ifx-toast props" },
		},
		duration: {
			description:
				"Auto-dismiss delay in ms. 0 disables auto-dismiss. The loading status never auto-dismisses.",
			control: { type: "number", min: 0, step: 500 },
			table: {
				category: "ifx-toast props",
				defaultValue: { summary: "5000" },
			},
		},
		placement: {
			description: "Placement of the toasts in the live demos.",
			options: PLACEMENT_OPTIONS,
			control: "select",
			table: {
				category: "ifx-toast-container props",
				defaultValue: { summary: "bottom-right" },
			},
		},
		ifxToastOpen: {
			action: "ifxToastOpen",
			description: "Emitted once the toast has been shown.",
			table: { category: "custom events" },
		},
		ifxToastClose: {
			action: "ifxToastClose",
			description: "Emitted after the toast finished dismissing.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxToastClose={handleChange}\nVue:@ifxToastClose="handleChange"\nAngular:(ifxToastClose)="handleChange()"\nVanillaJs:.addEventListener("ifxToastClose", (event) => {//handle change});',
				},
			},
		},
		ifxToastAction: {
			action: "ifxToastAction",
			description: "Emitted when the action is activated (before dismissing).",
			table: { category: "custom events" },
		},
	},
};

/**
 * Default: a single, statically rendered toast bound to all controls.
 * Auto-dismiss and animation are off by default so it stays put while you adjust props.
 */
const DefaultTemplate = (args: Record<string, any>) =>
	html`<ifx-toast
		toast-id="${args.toastId}"
		status="${args.status}"
		message="${args.message}"
		action-text="${args.actionText}"
		duration="${args.duration}"
		@ifxToastOpen="${action("ifxToastOpen")}"
		@ifxToastClose="${action("ifxToastClose")}"
		@ifxToastAction="${action("ifxToastAction")}"
	></ifx-toast>`;

export const Default: any = DefaultTemplate.bind({});
Default.args = { duration: 0 };
Default.argTypes = {
	placement: { table: { disable: true } },
};

/**
 * AllVariants: every status shown at once (always visible, no auto-dismiss) for reviewing styles.
 */
const AllVariantsTemplate = (args: Record<string, any>) =>
	html`<div style="display:flex;flex-direction:column;gap:12px;max-width:440px;">
		${STATUS_OPTIONS.map(
			(status) =>
				html`<ifx-toast
					status="${status}"
					message="${args.message}"
					action-text="${args.actionText}"
					duration="0"
				></ifx-toast>`,
		)}
	</div>`;

export const AllVariants: any = AllVariantsTemplate.bind({});
AllVariants.argTypes = {
	toastId: { table: { disable: true } },
	status: { table: { disable: true } },
	duration: { table: { disable: true } },
	placement: { table: { disable: true } },
};

/**
 * LiveDemo: realistic usage via the ifxToast helper. Each button shows a toast that
 * slides in and (except loading) auto-dismisses after 5s in the selected placement.
 */
const LiveDemoTemplate = (args: Record<string, any>) => {
	ifxToast.dismissAll();
	const wrapper = document.createElement("div");
	wrapper.style.display = "flex";
	wrapper.style.gap = "8px";
	wrapper.style.flexWrap = "wrap";

	for (const status of STATUS_OPTIONS) {
		const button = document.createElement("ifx-button");
		button.setAttribute("variant", "secondary");
		button.textContent = `Show ${status}`;
		button.addEventListener("click", () => {
			const handle = ifxToast.show({
				status: status as any,
				message: "Insert information text here",
				actionText: "Dismiss",
				placement: args.placement,
			});
			wireToastActions(handle.el);
		});
		wrapper.appendChild(button);
	}
	return wrapper;
};

export const LiveDemo: any = LiveDemoTemplate.bind({});
LiveDemo.args = { placement: "bottom-right" };
LiveDemo.argTypes = {
	toastId: { table: { disable: true } },
	status: { table: { disable: true } },
	message: { table: { disable: true } },
	actionText: { table: { disable: true } },
	duration: { table: { disable: true } },
};

/**
 * AsyncTransition: the core use case — a loading toast updated to success/danger
 * once an async operation resolves (spinner → check, then auto-dismiss).
 */
const AsyncTransitionTemplate = (args: Record<string, any>) => {
	ifxToast.dismissAll();
	const wrapper = document.createElement("div");
	wrapper.style.display = "flex";
	wrapper.style.gap = "8px";

	const makeButton = (label: string, succeeds: boolean) => {
		const button = document.createElement("ifx-button");
		button.setAttribute("variant", "secondary");
		button.textContent = label;
		button.addEventListener("click", () => {
			const handle = ifxToast.loading("Saving…", { placement: args.placement });
			wireToastActions(handle.el);
			setTimeout(() => {
				if (succeeds) {
					handle.update({
						status: "success",
						message: "Saved",
						actionText: "Dismiss",
					});
				} else {
					handle.update({
						status: "danger",
						message: "Could not save",
						actionText: "Dismiss",
					});
				}
			}, 2000);
		});
		return button;
	};

	wrapper.appendChild(makeButton("Save (succeeds)", true));
	wrapper.appendChild(makeButton("Save (fails)", false));
	return wrapper;
};

export const AsyncTransition: any = AsyncTransitionTemplate.bind({});
AsyncTransition.args = { placement: "bottom-right" };
AsyncTransition.argTypes = {
	toastId: { table: { disable: true } },
	status: { table: { disable: true } },
	message: { table: { disable: true } },
	actionText: { table: { disable: true } },
	duration: { table: { disable: true } },
};
