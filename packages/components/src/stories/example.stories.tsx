
import ExampleDocumentation from './example_docs.mdx';

export default {
  title: "Components/DocumentedExample",

  parameters: {
    docs: {
      page: ExampleDocumentation,
      canvas: { sourceState: 'shown' },
    },
  },
};


const DefaultTemplate = () =>
  `<div>
    <ifx-icons-preview></ifx-icons-preview>
  </div>`;


export const Primary = DefaultTemplate.bind({});



