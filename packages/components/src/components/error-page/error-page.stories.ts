import { html } from "lit";

export default {
	title: "Components/Error Page",
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
	<ifx-error-page ${args.illustrationUrl ? `illustration-url="${args.illustrationUrl}"` : ""} alt="${args.alt}" type="${args.type}" headline="${args.headline}" description="${args.description}">
		<div slot="button"><ifx-button slot="button" variant="primary" full-width="true">Button Custom 1</ifx-button></div>
		<div slot="button"><ifx-button slot="button" variant="secondary" full-width="true">Button Custom 2</ifx-button></div>
	</ifx-error-page>
	`
} 
export const Default = DefaultTemplate.bind({});