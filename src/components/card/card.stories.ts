export default {
  title: "Components/Card",
  args: {
    skyline: true,
    headline: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: true,
    list: false,
    label: "Label",
  },
};

const DefaultTemplate = (args) =>
  `<ifx-card skyline="${args.skyline}" headline="${args.headline}" subtitle="${args.subtitle}" text="${args.text}" button="${args.button}" list="${args.list}">
<ifx-button slot="action" variant="solid" color="primary">${args.label}</ifx-button>
</ifx-card>`;

const WithListTemplate = (args) =>
  `<ifx-card skyline="${args.skyline}" headline="${args.headline}" subtitle="${args.subtitle}" text="${args.text}" button="${args.button}" list="${args.list}">
  <img src=
  "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png" 
           alt="GeeksforGeeks logo">
    </ifx-card>`;


export const Default = DefaultTemplate.bind({});
Default.args = {
  list: false,
  button: true,
  skyline: false,
};

export const WithList = WithListTemplate.bind({});
WithList.args = {
  button: false,
  list: true,
  subtitle: 'Subtitle'
};


export const WithSubtitle = DefaultTemplate.bind({});
WithSubtitle.args = {
  button: true,
  skyline: true,
  subtitle: 'Subtitle',
};

