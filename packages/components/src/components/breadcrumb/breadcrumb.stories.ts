export default {
  title: 'Components/Breadcrumb',
  component: 'ifx-breadcrumb',
  parameters: {
    actions: {
      handles: ['ifx-breadcrumb'],
    },
  },
  argTypes: {
    breadcrumbs: { control: 'object' },
  },
};

const Template = (args) => {
  const breadcrumbsString = JSON.stringify(args.breadcrumbs);
  return `<ifx-breadcrumb id="breadcrumb"></ifx-breadcrumb>
           <script>
             document.getElementById('breadcrumb').breadcrumbs = ${breadcrumbsString};
           </script>`;
};

export const Default = Template.bind({});
Default.args = {
  breadcrumbs: [
    { text: 'Home', url: '#' },
    { text: 'Products', url: '#' },
    { text: 'Widgets', url: '#' },
    { text: 'Current Page', url: '' },
  ],
};
