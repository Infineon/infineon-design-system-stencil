
export default {
  title: "Components/Card",
  tags: ['autodocs'],
  args: {
    direction: 'vertical',
    overline: "Overline",
    headline: "Headline",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: 'button',
    href: "",
    target: '_blank',
    position: 'right',
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
  },

  argTypes: {
    button: {
      options: ['button', 'link', 'none'],
      control: { type: 'radio' }
    },
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    },

    position: {
      options: ['left', 'right'],
      control: { type: 'radio'},
      if: { arg: 'direction', eq: 'horizontal'}
    },

    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    }
  }
};

const DefaultTemplate = (args) =>
  `<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">
    <ifx-card-image position="${args.position}" src="${args.src}" alt="" slot="img"></ifx-card-image>
    ${args.overline
    ? `<ifx-card-overline>
        ${args.overline}
        </ifx-card-overline>`
    : ""}
      ${args.headline
    ? `<ifx-card-headline>
        ${args.headline}
        </ifx-card-headline>`
    : ""}
     ${args.description
    ? `<ifx-card-text>
        ${args.description}
        </ifx-card-text>` : ""}
      ${args.button === 'button'
    ? `<ifx-card-links slot="buttons">
          <ifx-button variant="primary">Button</ifx-button>
          <ifx-button variant="secondary">Button</ifx-button>
          </ifx-card-links>` : ""}
      ${args.button === 'link'
    ? `<ifx-card-links slot="buttons">
            <ifx-link href="https://google.com" target="_blank">
              <ifx-icon icon="calendar16"></ifx-icon>
              Link
            </ifx-link>
            <ifx-link href="https://yahoo.com" target="_blank">
              <ifx-icon icon="calendar16"></ifx-icon>
              Link
            </ifx-link>
          </ifx-card-links>` : ""}
  </ifx-card>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
}

const HorizontalTemplate = (args) =>
  `<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">
    <ifx-card-image position="${args.position}" src="${args.src}" alt="" slot="img"></ifx-card-image>
    ${args.overline
    ? `<ifx-card-overline>
        ${args.overline}
        </ifx-card-overline>`
    : ""}
      ${args.headline
    ? `<ifx-card-headline>
          ${args.headline}
          </ifx-card-headline>`
    : ""}
        ${args.description
    ? `<ifx-card-text>
            ${args.description}
            </ifx-card-text>`
    : ""}
      ${args.button === 'button'
    ? `<ifx-card-links slot="buttons">
          <ifx-button variant="primary">Button</ifx-button>
          <ifx-button variant="secondary">Button</ifx-button>
          </ifx-card-links>` : ""}
          ${args.button === 'link'
    ? `<ifx-card-links slot="buttons">
          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">
            <ifx-icon icon="calendar16"></ifx-icon>
            Link
          </ifx-link>
          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">
            <ifx-icon icon="calendar16"></ifx-icon>
            Link
          </ifx-link>
        </ifx-card-links>` : ""}
  </ifx-card>`;


export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  direction: 'horizontal',
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"
}
Horizontal.argTypes = {
  direction: {
    table:{
      disable: true
    }
  }
}
