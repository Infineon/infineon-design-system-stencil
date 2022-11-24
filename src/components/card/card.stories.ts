export default {
  title: "Components/Card",
  args: {
    skyline: true,
    headline: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: true,
    list: false,
  },
};

const DefaultTemplate = (args) => 
`<ifx-card skyline="${args.skyline}" headline="${args.headline}" text="${args.text}" button="${args.button}" list="${args.list}">
<ifx-button label="${args.label}"></ifx-button>
</ifx-card>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {
  list: {
    control: false,
  },
};

export const KitchenSink = DefaultTemplate.bind({});
KitchenSink.args = {
  button: false,
  list: true,
};
KitchenSink.argTypes = {
  button: {
    control: false,
  },
  list: {
    control: false,
  },
};
