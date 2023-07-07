export default {
  title: "Components/Card",
  tags: ['autodocs'],

  args: {
    image: true,
    overline: "Overline",
    headline: "Headline",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    alignment: 'left',
    button: "Link",
    href: "",
    target: '_blank',
    icon: true,
    underline: false,
    position: 'right'
  },

  argTypes: {
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    target: {
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' }
    },
    alignment: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
};

const DefaultTemplate = (args) =>
  `<ifx-card>
    ${args.image
    ? `<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img">`
    : ""}
    ${args.overline
    ? `<ifx-card-overline slot="overline">
        ${args.overline}
        </ifx-card-overline>`
    : ""}
      ${args.headline
    ? `<ifx-card-headline slot="headline">
        ${args.headline}
        </ifx-card-headline>`
    : ""}
     ${args.description
    ? `<ifx-card-text slot="text">
        ${args.description}
        </ifx-card-text>`
    : ""}
      
      ${args.button
    ? `<ifx-link href="${args.href}" target="${args.target}" icon="${args.icon}" slot="btn" underline="${args.underline}" position="${args.position}">${args.button}</ifx-link>`
    : ""}
  </ifx-card>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {
  alignment: {
    table: {
      disable: true
    }
  }
}

const HorizontalTemplate = (args) =>
  `<ifx-card direction="horizontal" alignment="${args.alignment}">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img">
    ${args.overline
    ? `<ifx-card-overline slot="overline">
        ${args.overline}
        </ifx-card-overline>`
    : ""}
      ${args.headline
    ? `<ifx-card-headline slot="headline">
          ${args.headline}
          </ifx-card-headline>`
    : ""}
        ${args.description
    ? `<ifx-card-text slot="text">
            ${args.description}
            </ifx-card-text>`
    : ""}
    ${args.button
    ? `<ifx-link href="=${args.href}" target="${args.target}" icon="${args.icon}" slot="btn" underline="${args.underline}" position="${args.position}">${args.button}</ifx-link>`
    : ""}
  </ifx-card>`;

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.argTypes = {
  image: {
    table: {
      disable: true
    }
  }
}


