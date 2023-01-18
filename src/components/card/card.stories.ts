export default {
  title: "Components/Card",
  args: {
    skyline: false,
    headline: "Card Title",
    subtitle: "Sub title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: true,
    list: false,
    label: "Click me",
  },
};

const DefaultTemplate = (args) =>
  `<ifx-card skyline="${args.skyline}" headline="${args.headline}" subtitle="${args.subtitle}" text="${args.text}" button="${args.button}" list="${args.list}">
<ifx-button slot="action" variant="solid" color="primary">${args.label}</ifx-button>
</ifx-card>`;


const WithImgTemplate = (args) =>
  `<ifx-card skyline="${args.skyline}" headline="${args.headline}" subtitle="${args.subtitle}" text="${args.text}" button="${args.button}" list="${args.list}">
    <img slot="img" src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png" 
             alt="GeeksforGeeks logo">
      </ifx-card>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
};

export const WithList = DefaultTemplate.bind({});
WithList.args = {
  button: false,
  list: true,
};

export const WithImg = WithImgTemplate.bind({});
WithImg.args = {
  button: false,
};

export const WithSubtitle = DefaultTemplate.bind({});
WithSubtitle.args = {
  skyline: true,
};

