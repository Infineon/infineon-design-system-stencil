import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
  title: 'Components/IconsPreview',
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
}

const DefaultTemplate = () =>
  `<ifx-icons-preview></ifx-icons-preview>`;


export const Default = DefaultTemplate.bind({});