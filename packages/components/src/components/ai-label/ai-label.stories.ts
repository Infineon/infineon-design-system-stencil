
export default {
  title: 'Components/AI Label',
  tags: ['autodocs'],

  args: {
    divider: true,
    icon: false,
  },

  argTypes: {
    divider: {
      description: 'Displays divider of Text Label.',
      control: 'boolean',
      table: {
        category: 'ifx-ai-label props',
        defaultValue: {
          summary: 'true'
        }
      }
    },
    icon: {
      description: 'Enables AI UI Icon variant.',
      control: 'boolean',
      table: {
        category: 'ifx-ai-label props',
        defaultValue: {
          summary: 'false'
        }
      }
    } 
  }
};

const DefaultTemplate = args => `<ifx-ai-label divider="${args.divider}" icon="${args.icon}"></ifx-ai-label>`;
export const Default = DefaultTemplate.bind({});

const AiIconTemplate = () => `<ifx-ai-label icon="true"><ifx-ai-label>`;
export const AIIcon = AiIconTemplate.bind({});
AIIcon.argTypes = {
  divider: {
    table: {
      disable: true
    }
  }
}
