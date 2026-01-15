import { html } from "lit";

export default {
	title: "Components/Card",
	tags: ["autodocs"],
	args: {
		overline: "Overline",
		headline: "Headline",
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		direction: "vertical",
		button: "button",
		href: "",
		target: "_blank",
		position: "right",
		src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg",
		ariaLabel: "Card",
	},

	argTypes: {
		overline: {
			name: "Overline",
			description: "Sets the overline text of the card.",
			type: { name: "string" },
			table: {
				category: "story controls",
			},
		},
		headline: {
			name: "Headline",
			description: "Sets the headline text of the card.",
			type: { name: "string" },
			table: {
				category: "story controls",
			},
		},
		description: {
			name: "Description",
			description: "Sets the description text of the card.",
			type: { name: "string" },
			table: {
				category: "story controls",
			},
		},
		button: {
			name: "Button",
			options: ["button", "link", "none"],
			description: "Sets the button type of the card.",
			control: { type: "radio" },
			table: {
				category: "story controls",
			},
		},
		direction: {
			description: "Sets the direction of the card layout.",
			table: {
				category: "ifx-card props",
				defaultValue: {
					summary: "vertical",
				},
				type: {
					summary: "horizontal | vertical",
					disable: true,
				},
			},
			options: ["horizontal", "vertical"],
			control: { type: "radio" },
		},
		ariaLabel: {
			control: { type: "text" },
			description:
				"Sets the aria-label attribute of the card. Enhances accessibility.",
			table: {
				category: "ifx-card props",
			},
		},

		position: {
			description: "Sets the position of the image in the card.",
			table: {
				category: "ifx-card-image props",
			},
			options: ["left", "right"],
			control: { type: "radio" },
			if: { arg: "direction", eq: "horizontal" },
		},
		href: {
			description: "Sets the hyperlink reference.",
			type: { name: "string" },
			table: {
				category: "ifx-card props",
			},
		},
		target: {
			description: "Sets the target of the hyperlink reference",
			table: {
				category: "ifx-card props",
				defaultValue: {
					summary: "_self",
				},
			},
			options: ["_blank", "_self", "_parent"],
			control: { type: "radio" },
		},
		src: {
			description: "Sets the image source.",
			type: { name: "string" },
			table: {
				category: "ifx-card-image props",
			},
		},
		alt: {
			description: "Sets the alternative text for the image.",
			type: { name: "string" },
			table: {
				category: "ifx-card-image props",
			},
		},
	},
};

const DefaultTemplate = (args) =>
	html`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}" aria-label="${args.ariaLabel}">
    <ifx-card-image position="${args.position}" src="${args.src}" alt="${args.alt}" slot="img"></ifx-card-image>
    ${
			args.overline
				? html`<ifx-card-overline>
        ${args.overline}
        </ifx-card-overline>`
				: ""
		}
      ${
				args.headline
					? html`<ifx-card-headline>
        ${args.headline}
        </ifx-card-headline>`
					: ""
			}
     ${
				args.description
					? html`<ifx-card-text>
        ${args.description}
        </ifx-card-text>`
					: ""
			}
      ${
				args.button === "button"
					? html`<ifx-card-links slot="buttons">
          <ifx-button variant="primary">Button</ifx-button>
          <ifx-button variant="secondary">Button</ifx-button>
          </ifx-card-links>`
					: ""
			}
      ${
				args.button === "link"
					? html`<ifx-card-links slot="buttons">
            <ifx-link href="https://google.com" target="_blank">
              <ifx-icon icon="calendar16"></ifx-icon>
              Link
            </ifx-link>
            <ifx-link href="https://yahoo.com" target="_blank">
              <ifx-icon icon="calendar16"></ifx-icon>
              Link
            </ifx-link>
          </ifx-card-links>`
					: ""
			}
  </ifx-card>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
	alt: "Coffee",
	src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg",
};

const HorizontalTemplate = (args) =>
	html`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">
    <ifx-card-image position="${args.position}" src="${args.src}" alt="${args.alt}" slot="img"></ifx-card-image>
    ${
			args.overline
				? html`<ifx-card-overline>
        ${args.overline}
        </ifx-card-overline>`
				: ""
		}
      ${
				args.headline
					? html`<ifx-card-headline>
          ${args.headline}
          </ifx-card-headline>`
					: ""
			}
        ${
					args.description
						? html`<ifx-card-text>
            ${args.description}
            </ifx-card-text>`
						: ""
				}
      ${
				args.button === "button"
					? html`<ifx-card-links slot="buttons">
          <ifx-button variant="primary">Button</ifx-button>
          <ifx-button variant="secondary">Button</ifx-button>
          </ifx-card-links>`
					: ""
			}
          ${
						args.button === "link"
							? html`<ifx-card-links slot="buttons">
          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">
            <ifx-icon icon="calendar16"></ifx-icon>
            Link
          </ifx-link>
          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">
            <ifx-icon icon="calendar16"></ifx-icon>
            Link
          </ifx-link>
        </ifx-card-links>`
							: ""
					}
  </ifx-card>`;

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
	direction: "horizontal",
	src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg",
};
Horizontal.argTypes = {
	direction: {
		table: {
			disable: true,
		},
	},
};
