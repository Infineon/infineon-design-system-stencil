import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Notification',
  tags: ['autodocs'],

  args: {
    content: "Sample Notification",
    variant: 'success',
    icon: 'c-check-16',
    linkText: 'Link',
    linkHref: 'https://www.example.com',
    linkTarget: '_blank',
  },
  argTypes: {
    content: {
      description: 'Text inside the notification is passed as slot.',
    },
    variant: {
      description: 'Variant of the notification.',
      options: ['success', 'warning', 'error'],
      control: { type: 'radio' },
    },
    icon: {
      description: 'The icon to be displayed in the notification.',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },
    linkText: {
      description: 'Text for the link.',
    },
    linkHref: {
      description: 'URL for the link.',
    },
    linkTarget:{
      options: ['_blank', '_self', '_parent'],
      control: { type: 'radio' },
    },
  },
};

const DefaultTemplate = args => `<ifx-notification 
  icon="${args.icon}" 
  variant="${args.variant}" 
  link-text="${args.linkText}" 
  link-href="${args.linkHref}"
  link-target="${args.linkTarget}">
  ${args.content}
</ifx-notification>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
