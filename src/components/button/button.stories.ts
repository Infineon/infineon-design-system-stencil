import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
  title: "Components/Button",
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    disabled: false,
    icon: false,
    href: "",
    iconPosition: 'left'

  },

  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }

  },

};


const DefaultTemplate = (args) =>
  `<ifx-button  variant="${args.variant}" href="${args.href}" target="_blank" color="${args.color}" size="${args.size}" disabled="${args.disabled}">
  ${args.label}
  </ifx-button>`;

const IconOnlyTemplate = (args) =>
  `<ifx-button variant="${args.variant}" color="${args.color}" href="${args.href}" target="_blank" size="${args.size}" icon-only>
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>star 16</title><g stroke-width="1" stroke-linejoin="round" fill="currentColor" stroke="" stroke-linecap="round" class="nc-icon-wrapper"><polygon points="8,0.867 10.318,5.563 15.5,6.316 11.75,9.971 12.635,15.133 8,12.696 3.365,15.133 4.25,9.971 0.5,6.316 5.682,5.563 " data-cap="butt"></polygon> </g></svg>
</ifx-button>`;

const IconToTheLeftTemplate = (args) =>
  `<ifx-button variant="${args.variant}" color="${args.color}" href="${args.href}" target="_blank" size="${args.size}" disabled="${args.disabled}" iconPosition="${args.iconPosition}">
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>star 16</title><g stroke-width="1" stroke-linejoin="round" fill="currentColor" stroke="" stroke-linecap="round" class="nc-icon-wrapper"><polygon points="8,0.867 10.318,5.563 15.5,6.316 11.75,9.971 12.635,15.133 8,12.696 3.365,15.133 4.25,9.971 0.5,6.316 5.682,5.563 " data-cap="butt"></polygon> </g></svg>
 ${args.label}
  </ifx-button>`;

const IconToTheRightTemplate = (args) =>
  `<ifx-button l variant="${args.variant}" color="${args.color}" href="${args.href}" target="_blank" size="${args.size}" disabled="${args.disabled}" iconPosition="${args.iconPosition}">
  ${args.label}   <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>star 16</title><g stroke-width="1" stroke-linejoin="round" fill="currentColor" stroke="" stroke-linecap="round" class="nc-icon-wrapper"><polygon points="8,0.867 10.318,5.563 15.5,6.316 11.75,9.971 12.635,15.133 8,12.696 3.365,15.133 4.25,9.971 0.5,6.316 5.682,5.563 " data-cap="butt"></polygon> </g></svg>

  </ifx-button>`;




export const Default = DefaultTemplate.bind({});
Default.argTypes = {
  icon: {
    table: {
      disable: true,
    }
  },
  iconPosition: {
    table: {
      disable: true,
    },
  }
};

export const WithLink = DefaultTemplate.bind({});
WithLink.args = {
  href: 'https://example.com',
};
WithLink.argTypes = {
  icon: {
    table: {
      disable: true,
    }
  },
  iconPosition: {
    table: {
      disable: true,
    },
  }
};
export const IconOnly = IconOnlyTemplate.bind({});
IconOnly.argTypes = {
  icon: {
    table: {
      disable: true,
    }
  },
  iconPosition: {
    table: {
      disable: true,
    },
  }
};

export const IconToTheLeft = IconToTheLeftTemplate.bind({});
IconToTheLeft.args = {
  iconPosition: 'left'
}
IconToTheLeft.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
  iconPosition: {
    table: {
      disable: true,
    },
  }
};
export const IconToTheRight = IconToTheRightTemplate.bind({});
IconToTheRight.args = {
  iconPosition: 'right'
}
IconToTheRight.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
  iconPosition: {
    table: {
      disable: true,
    },
  }
};