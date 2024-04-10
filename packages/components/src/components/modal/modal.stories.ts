import { action } from '@storybook/addon-actions';
import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Modal',
  component: 'ifx-modal',
  // tags: ['autodocs'],

  args: {
    opened: false
  },
  argTypes: {
    caption: {
      control: 'text',
      description: 'Title for the modal',
    },
    opened: {
      control: {
        disable: true,
      },
      table: {
        type: {
          summary: 'Example (in VanillaJs)',
          detail: 'const modal = document.getElementById(\'modal\'); \nconst openButton = document.getElementById(\'open\'); \n//add DOM event listeners (e.g. click and/or keypress)\n\nfunction openModal() { \nmodal.opened=true;\n\nfunction closeModal() { \nmodal.opened = false; \n}',
        },
      },
      description: 'Defaults to false - Can be set by referring to the component and setting it to false/true',

    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close the modal when clicking outside the window',
    },
    showCloseButton: {
      control: 'boolean',
      description: "Show or hide close button 'x'",
    },
    alertIcon: {
      options: Object.keys(icons),
      control: { type: 'select' },
      description: 'When specified together with alertIcon then an border to the right is shown',
    },
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio'},
      description: 'Usable only when screen width is more than 1024px'
    },
    variant: {
      options: ['default', 'alert-brand', 'alert-danger'],
      control: { type: 'radio' },
    },
    ifxModalOpen: {
      action: 'ifxModalOpen',
      description: 'Custom event emitted when modal opens',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxModalOpen={handleChange}\nVue:@ifxModalOpen="handleChange"\nAngular:(ifxModalOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxModalOpen", (event) => {//handle change});',
        },
      },
    },
    ifxModalClose: {
      action: 'ifxModalClose',
      description: 'Custom event emitted when modal closes',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxModalClose={handleChange}\nVue:@ifxModalClose="handleChange"\nAngular:(ifxModalClose)="handleChange()"\nVanillaJs:.addEventListener("ifxModalClose", (event) => {//handle change});',
        },
      },
    },
  },
};

const Template = ({
  caption,
  showCloseButton,
  closeOnOverlayClick,
  variant,
  size,
  alertIcon
}) => {
  const modal = document.createElement('ifx-modal');
  modal.setAttribute('caption', caption);
  modal.setAttribute('variant', variant);

  if (alertIcon) {
    modal.setAttribute('alert-icon', alertIcon);
  }
  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);
  modal.setAttribute('show-close-button', showCloseButton);
  modal.setAttribute('size', size)

  modal.addEventListener('ifxModalOpen', action('ifxModalOpen'));
  modal.addEventListener('ifxModalClose', action('ifxModalClose'));

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
  cancelButton.textContent = 'Button 1';
  cancelButton.addEventListener('click', () => {
    console.log("Button 1 clicked");
  });

  const primaryButton = document.createElement('ifx-button');
  primaryButton.textContent = 'Button 2';
  primaryButton.addEventListener('click', () => {
    console.log("Button 2 clicked");
  });

  buttons.appendChild(cancelButton);
  buttons.appendChild(primaryButton);
  modal.appendChild(buttons);

  const openButton = document.createElement('ifx-button');
  openButton.id = "open"
  openButton.textContent = 'Open Modal';
  openButton.addEventListener('click', () => {
    modal.opened = true;
  });
  openButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      modal.opened = true;
    }
  });

  const storyElement = document.createElement('div');
  storyElement.appendChild(modal);
  storyElement.appendChild(openButton);

  return storyElement;
};

export const Default = Template.bind({});
Default.args = {
  caption: 'Modal Title',
  showCloseButton: true,
  closeOnOverlayClick: false,
  size: 's',
  variant: 'default',
};

export const Alert = Template.bind({});
Alert.args = {
  caption: 'Alert-Brand Modal Title',
  closeOnOverlayClick: true,
  alertIcon: 'arrowdoen24',
  size: 's',
  variant: 'alert-brand',
};
