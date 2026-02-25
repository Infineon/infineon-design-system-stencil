/**
 * Switch Component Stories
 *
 * Storybook Configuration using CSF3 (Component Story Format 3)
 * @see https://storybook.js.org/docs/api/csf
 *
 * File Structure
 * --------------
 * - **Meta (default export)**: Configuration for all stories
 *   - `title`: Location in Storybook sidebar
 *   - `tags`: Features like "autodocs" for automatic documentation
 *   - `args`: Default prop values shared across all stories
 *   - `argTypes`: Control types, descriptions, and categories for the UI controls panel
 *
 * - **Stories (named exports)**: Individual component variations
 *   - Type: `StoryObj` for TypeScript type safety
 *   - `render`: Function that returns the component template
 *   - `args`: Override defaults for this specific story
 *
 * Working with argTypes
 * ---------------------
 * - `description`: Shown in the docs panel
 * - `table.category`: Groups related props in the docs
 * - `table.defaultValue`: Shows default in documentation
 * - `action`: Logs events to the Actions panel (for custom events, extract e.detail)
 * - `control`: Customizes the control type (e.g., 'select', 'radio', 'range', 'color')
 *   Example: `control: { type: 'select', options: ['small', 'medium', 'large'] }`
 */

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { action } from "storybook/actions";

export default {
	title: "Components/Switch",
	tags: ["autodocs"],
	args: {
		label: "Switch",
		checked: false,
		name: "switch",
		value: "on",
		disabled: false,
	},
	argTypes: {
		label: {
			name: "Label of Switch",
			description: "Set the label of *<ifx-switch>*.",
			table: {
				category: "story controls",
			},
		},
		name: {
			description:
				"Name of the element, that is used as reference when a form is submitted.",
			table: {
				category: "ifx-switch props",
				type: {
					summary: "string",
				},
			},
		},
		checked: {
			name: "checked",
			description: "Set the checked state of the switch.",
			table: {
				category: "ifx-switch props",
				defaultValue: {
					summary: "false",
				},
				type: {
					summary: "boolean",
				},
			},
		},
		value: {
			description: "The value that gets submitted when the switch is checked.",
			table: {
				category: "ifx-switch props",
				defaultValue: {
					summary: "on",
				},
				type: {
					summary: "string",
				},
			},
		},
		disabled: {
			description: "Disables the switch and prevents user interaction.",
			table: {
				category: "ifx-switch props",
				defaultValue: {
					summary: "false",
				},
				type: {
					summary: "boolean",
				},
			},
		},
		ifxChange: {
			description: "Custom event emitted when the checked state changes.",
			action: "ifxChange",
			table: {
				category: "custom events",
				type: {
					summary: "CustomEvent<boolean>",
					detail:
						'React: onIfxChange={handleChange}\nVue: @ifxChange="handleChange"\nAngular: (ifxChange)="handleChange($event)"\nVanilla: element.addEventListener("ifxChange", (e) => console.log(e.detail));',
				},
			},
		},
	},
} as Meta;

/**
 * Lit Template Syntax
 * -------------------
 * Lit provides declarative HTML templates with special bindings:
 * - `?checked=${value}` - Boolean attribute (added when truthy, removed when falsy)
 * - `name=${value}` - Regular attribute
 * - `@ifxChange=${handler}` - Event listener
 * - `${expression}` - Text content or child elements
 *
 * @see https://lit.dev/docs/templates/overview/
 */
export const Default: StoryObj = {
	render: ({ label, checked, name, value, disabled }) =>
		html`
			<ifx-switch
				?checked=${checked}
				name=${name}
				value=${value}
				?disabled=${disabled}
				@ifxChange=${(e: CustomEvent) => action("ifxChange")(e.detail)}
			>
				${label}
			</ifx-switch>
		`,
};
