import { html } from "lit";

export default {
	title: "Components/ErrorPage",
	tags: ["autodocs"],

	args: {
		type: "403",
		illustrationUrl: "",
		alt: "",
		headline: "",
		description: "",
	},
	argTypes: {
		type: {
			description: "Error type",
			control: "radio",
			options: ["403", "404", "503", "maintenance"],
			table: {
				category: "ifx-error-page props",
			}
		},

		illustrationUrl: {
			name: "illustration-url",
			description: "Sets the custom illustration of the error page.",
			control: "text",
			table: {
				category: "ifx-error-page props",
			}
		},

		alt: {
			name: "alt",
			description: "Sets the alternative text for image",
			control: "text",
			table: {
				category: "ifx-error-page props"
			}
		},

		headline: {
			description: "Sets the headline text of the error page.",
			control: "text",
			table: {
				category: "ifx-error-page props",
			}
		},

		description: {
			description: "Sets the description text of the error page.",
			control: "text",
			table: {
				category: "ifx-error-page props",
			}
		}
	}
}

const DefaultTemplate = (args: any) => {

return html
	`
	<ifx-error-page illustration-url="${args.illustrationUrl || ""}" alt="${args.type}" type="${args.type}" headline="${args.headline}" description="${args.description}">
	</ifx-error-page>
	`
} 
export const Default = DefaultTemplate.bind({});

const WithNestedButtonsTemplate = (args: any) => {

return html
	`
	<ifx-error-page illustration-url="${args.illustrationUrl || ""}" alt="${args.type}" type="${args.type}" headline="${args.headline}" description="${args.description}">
		<ifx-button slot="buttons" variant="primary">Custom button</ifx-button>
		<ifx-button slot="buttons" variant="secondary">Custom button</ifx-button>
	</ifx-error-page>
	`
} 
export const WithNestedButtons = WithNestedButtonsTemplate.bind({});