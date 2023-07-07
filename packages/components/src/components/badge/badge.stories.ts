export default {
  title: "Components/Badge",
  tags: ['autodocs'],

  args: {
    label: 'Badge label',
  },
};


const DefaultTemplate = (args) =>
  `<ifx-badge>${args.label}</ifx-badge>`;


export const Default = DefaultTemplate.bind({});
Default.argTypes = {

}



