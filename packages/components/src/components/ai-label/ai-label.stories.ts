
export default {
  title: 'Components/AI Label',
  tags: ['autodocs'],

  args: {
    divider: true,
    icon: false,
  },

  argTypes: {
    divider: {
      description: 'Displays divider of AI Text Label.',
      control: 'boolean',
      table: {
        category: 'ifx-ai-label props',
        defaultValue: {
          summary: 'true'
        }
      }
    },
    icon: {
      description: 'Displays AI Icon.',
      control: 'boolean',
      table: {
        category: 'ifx-ai-label props',
        defaultValue: {
          summary: 'false'
        }
      }
    }, 
  },
};

const DefaultTemplate = args => `<ifx-ai-label divider="${args.divider}" icon="${args.icon}"></ifx-ai-label>`;
export const Default = DefaultTemplate.bind({});

const AiIconTemplate = () => `<ifx-ai-label icon="true"><ifx-ai-label>`;
export const AiIcon = AiIconTemplate.bind({});
