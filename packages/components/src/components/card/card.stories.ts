export default {
  title: "Components/Card",
  args: {
    overline: "Overline",
    headline: "Headline",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: 'button',
    href: "",
    target: '_blank',
    icon: 'c-info-16',
    position: 'right'
  },

  argTypes: { 
    button: {
      options: ['button', 'link', 'none'],
      control: { type: 'radio' }
    },

    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    target: { 
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    }
  }
};

const DefaultTemplate = (args) =>
  `<ifx-card href="${args.href}" target="${args.target}">
    <ifx-card-image src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></ifx-card-image>
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
      ? `<ifx-button href="${args.href}" icon="${args.icon}" target="${args.target}" color="primary">button</ifx-button>` 
      : ""}

      ${args.button === 'link' 
      ? `<ifx-link color='primary' href="${args.href}" target="${args.target}" underline="false">
        <ifx-icon icon="${args.icon}"></ifx-icon>
      ${args.button}
      </ifx-link>` 
      : ""}
  </ifx-card>`;

  export const Default = DefaultTemplate.bind({});
  Default.argTypes={
    position: {
      table: {
        disable: true
      }
    }
  }

const HorizontalTemplate = (args) =>
  `<ifx-card direction="horizontal" href="${args.href}" target="${args.target}">
    <ifx-card-image position="${args.position}" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></ifx-card-image>
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
          ? `<ifx-button href="${args.href}" icon="${args.icon}" target="${args.target}" color="primary">button</ifx-button>` 
          : ""}
    
          ${args.button === 'link' 
          ? `<ifx-link color='primary' href="${args.href}" target="${args.target}" underline="false">
            <ifx-icon icon="${args.icon}"></ifx-icon>
          ${args.button}
          </ifx-link>` 
          : ""}
  </ifx-card>`;

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.argTypes={
  image: {
    table: {
      disable: true
    }
  }
}


