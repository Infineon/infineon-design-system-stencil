
export default {
  title: 'Components/AI Label',
  tags: ['autodocs'],

  args: {
    divider: true,
    icon: true,
  },

  argTypes: {
    divider: {
      description: 'Displays Divider between AI Label and AI content.',
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
          summary: 'true'
        }
      }
    },
  },
};

const DefaultTemplate = args => `<ifx-ai-label  divider="${args.divider}" icon="${args.icon}"</ifx-ai-label>`;

export const Default = DefaultTemplate.bind({});