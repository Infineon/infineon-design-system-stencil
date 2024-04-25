import { icons } from '@infineon/infineon-icons';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],

  args: {
    label: 'Attention! This is an alert message — check it out!',
    variant: 'primary',
    showIcon: true,
    closable: true,
    iconName: 'c-info-24',
  },

  argTypes: {
    variant: {
      options: ['primary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },

    iconName: {
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
    },

    closable: {
      control: 'boolean',
      default: true,
    },

    ifxClose: {
      action: 'ifxClose',
      description: 'Custom event emitted when close button clicked',
      table: {
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});',
        },
      },
    },
  },
};

const DefaultTemplate = args => `<ifx-alert variant="${args.variant}" icon="${args.showIcon ? args.iconName : ''}" closable="${args.closable}">${args.label}</ifx-alert>`;

export const Default = DefaultTemplate.bind({});

const InfoTemplate = args =>
  `  <ifx-alert variant="info" closable="${args.closable}">
      <div slot="headline">Headline</div>
      <div slot="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi voluptatum quia esse dolor corrupti veniam dolorum. Voluptatem ut enim voluptate. Provident modi molestiae at atque rerum cupiditate, dicta recusandae ab libero veniam iusto possimus quia sequi amet, tempora dolore nobis excepturi est illo blanditiis nihil laborum enim ducimus consequuntur.
      </div>
    </ifx-alert>`;

export const Info = InfoTemplate.bind({});
Info.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
  iconName: {
    table: {
      disable: true,
    },
  },
  showIcon: {
    table: {
      disable: true,
    },
  },
};
