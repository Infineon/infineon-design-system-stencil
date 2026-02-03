
export default {
  title: 'Components/AI Label',
  tags: ['autodocs'],

  args: {
    divider: true,
    variant: 'label',
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
    variant: {
      description: 'Sets the variant of the AI Label.',
      control: 'radio',
      options: ['label', 'icon'],
      table: {
        category: 'ifx-ai-label props',
        defaultValue: {
          summary: 'label'
        }
      }
    }
  }
};

const DefaultTemplate = args => `<ifx-ai-label divider="${args.divider}" variant="${args.variant}"></ifx-ai-label>`;
export const Default = DefaultTemplate.bind({});
