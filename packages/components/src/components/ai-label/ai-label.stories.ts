
export default {
  title: 'Components/AI Label',
  tags: ['autodocs'],

  args: {
    text: true,
    divider: true,
    icon: false,
  },

  argTypes: {
    text: {
      description: 'Displays Text Label and divider.',
      control: 'boolean',
      table: {
        category: 'ifx-ai-label props',
        defaultValue: {
          summary: 'true'
        }
      }
    },
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

const DefaultTemplate = args => `<ifx-ai-label text="${args.text}" divider="${args.divider}" icon="${args.icon}"></ifx-ai-label>`;

export const Default = DefaultTemplate.bind({});