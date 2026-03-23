import { html } from "lit";

export default {
	title: "Components/ErrorPage",
	tags: ["autodocs"],

	args: {
		type: "ERROR 404",
		headline: "The requested page cannot be found",
		description: "The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for."
	},

	argTypes: {
		type: {
			description: "Error type",
			control: "radio",
			options: ["ERROR 403", "ERROR 404", "ERROR 503", "schedule maintenance"],
			table: {
				category: "ifx-error-page props",
			}
		},

		illustration: {
			name: "illustration-url",
			description: "Custom illustration URL",
			control: "text",
			table: {
				category: "ifx-error-page props",
			}
		},

		headline: {
			description: "Error headline",
			control: "text",
			table: {
				category: "ifx-error-page props",
			}
		},

		description: {
			description: "Additional description text",
			control: "text",
			table: {
				category: "ifx-error-page props",
			}
		},

	}

}

const DefaultTemplate = (args: any) => {

return html
	`
	<ifx-error-page illustration-url="${args.illustrationUrl}" alt="${args.type}" type="${args.type}" headline="${args.headline}" description="${args.description}">
	</ifx-error-page>
	`
} 
export const Default = DefaultTemplate.bind({});