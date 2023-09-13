import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Modal',
  component: 'ifx-modal',
  // tags: ['autodocs'],

  argTypes: {
    caption: {
      control: 'text',
      description: 'Title for the modal',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close the modal when clicking outside the window',
    },
    alertIcon: {
      options: Object.keys(icons),
      control: { type: 'select' },
      description: 'When specified together with alertIcon then an border to the right is shown',
    },
    variant: {
      options: ['default', 'alert-brand', 'alert-danger'],
      control: { type: 'radio' },
    },
  },
};

const Template = ({
  caption,
  closeOnOverlayClick,
  variant,
  alertIcon
}) => {
  const modal = document.createElement('ifx-modal');
  modal.setAttribute('caption', caption);
  modal.setAttribute('variant', variant);

  if (alertIcon) {
    modal.setAttribute('alert-icon', alertIcon);
  }
  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);

  modal.addEventListener('modalOpen', action('modalOpen'));
  modal.addEventListener('modalClose', action('modalClose'));
  modal.addEventListener('closeButtonClick', action('closeButtonClick'));

  const content = document.createElement('div');
  content.setAttribute('slot', 'content');
  content.innerHTML = `
    <span>Modal content</span>
  `;
  modal.appendChild(content);

  const buttons = document.createElement('div');
  buttons.setAttribute('slot', 'buttons');

  const cancelButton = document.createElement('ifx-button');
  cancelButton.setAttribute('variant', 'secondary');
  cancelButton.textContent = 'Button';
  cancelButton.addEventListener('click', () => {
    modal.close();
  });

  const primaryButton = document.createElement('ifx-button');
  primaryButton.textContent = 'Button';
  primaryButton.addEventListener('click', () => {
    modal.close();
  });

  buttons.appendChild(cancelButton);
  buttons.appendChild(primaryButton);
  modal.appendChild(buttons);

  const openButton = document.createElement('ifx-button');
  openButton.id = 'open';
  openButton.textContent = 'Open Modal';
  openButton.addEventListener('click', () => {
    modal.open();
  });

  const storyElement = document.createElement('div');
  storyElement.appendChild(modal);
  storyElement.appendChild(openButton);

  return storyElement;
};

export const Default = Template.bind({});
Default.args = {
  caption: 'Modal Title',
  closeOnOverlayClick: false,
  variant: 'default',
};

export const Alert = Template.bind({});
Alert.args = {
  caption: 'Alert-Brand Modal Title',
  closeOnOverlayClick: true,
  alertIcon: 'arrowdoen24',
  variant: 'alert-brand',
};
