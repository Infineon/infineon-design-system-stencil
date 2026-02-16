import { action } from "storybook/actions";

export default {
  title: 'Components/Popover',
  tags: ['autodocs'],
  args: {
    popoverTitle: 'Popover Title',
    text: 'This is the popover content. It can contain multiple lines of text.',
    position: 'auto',
    disabled: false,
    ariaLabel: 'Popover with additional information',
  },
  argTypes: {
    popoverTitle: {
      description: 'Title text displayed in the popover header.',
      control: 'text',
      table: {
        category: 'ifx-popover props',
        type: {
          summary: 'string',
        },
      },
    },
    text: {
      description: 'Body text displayed in the popover content.',
      control: 'text',
      table: {
        category: 'ifx-popover props',
        type: {
          summary: 'string',
        },
      },
    },
    position: {
      description: 'Position of the popover relative to the trigger element.',
      options: ['auto', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
      control: 'select',
      table: {
        category: 'ifx-popover props',
        defaultValue: {
          summary: 'auto',
        },
      },
    },

    disabled: {
      description: 'Whether the popover is disabled.',
      control: 'boolean',
      table: {
        category: 'ifx-popover props',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    ariaLabel: {
      description: 'Accessible label for the popover.',
      control: 'text',
      table: {
        category: 'ifx-popover props',
        type: {
          summary: 'string | null',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
    ifxOpen: {
      action: 'ifxOpen',
      description: 'Event emitted when an popover is opened.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `React: onIfxOpen={handleOpen}
            Vue: @ifxOpen="handleOpen"
            Angular: (ifxOpen)="handleOpen()"
            VanillaJs: .addEventListener("ifxOpen", (event) => {/*handle open*/});`,
        },
      },
    },
    ifxClose: {
      action: 'ifxClose',
      description: 'Event emitted when an popover is closed.',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail: `React: onIfxClose={handleClose}
          Vue: @ifxClose="handleClose"
          Angular: (ifxClose)="handleClose()"
          VanillaJs: .addEventListener("ifxClose", (event) => {/*handle close*/});`,
        },
      },
    },
    show: {
      description: 'Public method for programatically opening the popover component',
      table: {
        category: 'ifx-popover public methods',
      },
    },
    hide: {
      description: 'Public method for programatically hiding the popover component',
      table: {
        category: 'ifx-popover public methods',
      },
    },
  },
};

const DefaultTemplate = ({ popoverTitle, text, position, disabled, ariaLabel }) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);

  if (disabled) {
    element.setAttribute('disabled', 'true');
  }

  if (ariaLabel) {
    element.setAttribute('aria-label', ariaLabel);
  }

  element.addEventListener('ifxOpen', action('ifxOpen'));
  element.addEventListener('ifxClose', action('ifxClose'));

  const button = document.createElement('ifx-button');
  button.textContent = 'Click me';
  element.appendChild(button);

  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);

  return wrapper;
};

export const Default = DefaultTemplate.bind({});

const WithActionsTemplate = ({ popoverTitle, text, position }) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);

  element.addEventListener('ifxOpen', action('ifxOpen'));
  element.addEventListener('ifxClose', action('ifxClose'));

  const button = document.createElement('ifx-button');
  button.textContent = 'Delete Item';
  element.appendChild(button);

  const actionContainer = document.createElement('div');
  actionContainer.setAttribute('slot', 'content');
  actionContainer.style.display = 'flex';
  actionContainer.style.gap = '8px';

  const confirmButton = document.createElement('ifx-button');
  confirmButton.textContent = 'Confirm';
  actionContainer.appendChild(confirmButton);

  const cancelButton = document.createElement('ifx-button');
  cancelButton.setAttribute('variant', 'secondary');
  cancelButton.textContent = 'Cancel';
  actionContainer.appendChild(cancelButton);

  element.appendChild(actionContainer);

  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);

  return wrapper;
};

export const WithActions = WithActionsTemplate.bind({});
WithActions.args = {
  popoverTitle: 'Confirm Action',
  text: 'Are you sure you want to proceed with this action?',
  position: 'bottom',
};

const AllPositionsTemplate = () => {
  const wrapper = document.createElement('div');
  wrapper.style.padding = '200px';
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(3, 1fr)';
  wrapper.style.gap = '50px';
  wrapper.style.placeItems = 'center';

  const positions = [
    { position: 'top-start', label: 'Top Start' },
    { position: 'top', label: 'Top' },
    { position: 'top-end', label: 'Top End' },
    { position: 'left', label: 'Left' },
    { position: 'auto', label: 'Auto (Center)' },
    { position: 'right', label: 'Right' },
    { position: 'bottom-start', label: 'Bottom Start' },
    { position: 'bottom', label: 'Bottom' },
    { position: 'bottom-end', label: 'Bottom End' },
  ];

  positions.forEach(({ position, label }) => {
    const popover = document.createElement('ifx-popover');
    popover.setAttribute('popover-title', label);
    popover.setAttribute('text', `Positioned at ${position}`);
    popover.setAttribute('position', position);

    popover.addEventListener('ifxOpen', action('ifxOpen'));
    popover.addEventListener('ifxClose', action('ifxClose'));

    const button = document.createElement('ifx-button');
    button.setAttribute('size', 'small');
    button.textContent = label;
    popover.appendChild(button);

    wrapper.appendChild(popover);
  });

  return wrapper;
};

export const AllPositions = AllPositionsTemplate.bind({});

const CustomWidthTemplate = ({ popoverTitle, text, position }) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);
  element.style.setProperty('--ifx-popover-width', '320px');

  const button = document.createElement('ifx-button');
  button.textContent = 'Custom Width';
  element.appendChild(button);

  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);

  return wrapper;
};

export const CustomWidth = CustomWidthTemplate.bind({});
CustomWidth.args = {
  popoverTitle: 'Custom Width Popover',
  text: 'This popover uses --ifx-popover-width: 320px.',
  position: 'bottom',
};

const InitiallyOpenTemplate = ({ popoverTitle, text, position }) => {
  const element = document.createElement('ifx-popover');
  element.setAttribute('popover-title', popoverTitle);
  element.setAttribute('text', text);
  element.setAttribute('position', position);
  element.setAttribute('open', 'true');

  const button = document.createElement('ifx-button');
  button.textContent = 'Opened on load';
  element.appendChild(button);

  const wrapper = document.createElement('div');
  wrapper.style.padding = '100px';
  wrapper.style.textAlign = 'center';
  wrapper.appendChild(element);

  return wrapper;
};

export const InitiallyOpen = InitiallyOpenTemplate.bind({});
InitiallyOpen.args = {
  popoverTitle: 'Initially Open',
  text: 'This popover starts open via the open prop.',
  position: 'bottom',
};
