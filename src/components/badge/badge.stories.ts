export default {
  title: "Components/Badge",
  args: {
    label: 'Badge label',
  },
};


const DefaultTemplate = (args) =>
  `<ifx-badge>${args.label}</ifx-badge>`;


export const Default = DefaultTemplate.bind({});
Default.argTypes={
 
}



