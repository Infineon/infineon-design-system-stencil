export default {
  title: 'Components/MyComponent',
};

const Template = (args) => 
`<my-component first="${args.first}" middle="${args.middle}" last="${args.last}">
</my-component>`;

export const Example = Template.bind({});
Example.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh'
};
