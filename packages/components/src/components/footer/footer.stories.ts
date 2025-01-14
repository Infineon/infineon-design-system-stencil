import { icons } from '@infineon/infineon-icons';
export default {
  title: 'Components/Footer',
  tags: ['autodocs'],
  args: {
    copyrightText: '© 1999 - 2024 Infineon Technologies AG',
    href: 'http://infineon.com',
    icon: 'home-16'
  },
  argTypes: {
    copyrightText: {
      description: 'Sets the text for the copyright.',
      control: 'text',
      table: {
        category: 'ifx-footer props',
      }
    },
    icon: {
      description: 'Sets the icon for the footer.',
      options: Object.values(icons).map(i => i['name']),
      control: { type: 'select' },
      table: {
        category: 'ifx-icon props',
        type: {
          summary: 'string'
        }
      }
    },
    href: {
      description: 'Sets the link for the footer.',
      control: 'text',
      table: {
        category: 'ifx-link props',
      },
    },
  },
};

const DefaultTemplate = args => {
  return `
    <ifx-footer copyright-text="${args.copyrightText}">
    <div slot="socials">
    <ifx-link variant="title" href=${args.href}>
        <ifx-icon icon=${args.icon}></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://facebook.com/infineon">
        <ifx-icon icon="facebook"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://youtube.com/infineon">
        <ifx-icon icon="youtube"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://instagram.com/infineon">
        <ifx-icon icon="instagram"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://linkedin.com/infineon">
        <ifx-icon icon="linkedin"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://twitter.com/infineon">
        <ifx-icon icon="twitter"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://xing.com/infineon">
        <ifx-icon icon="xing"></ifx-icon>
      </ifx-link>
    </div>
    <div slot="info">
      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>`;
};

export const Medium = DefaultTemplate.bind({});

const SmallTemplate = () => `<ifx-footer>
    <div slot="info">
      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>`;

export const Small = SmallTemplate.bind({});

const LargeTemplate = () =>
  `<ifx-footer>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>
    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <div slot="socials">
    <ifx-link variant="title" href="http://facebook.com/infineon">
      <ifx-icon icon="facebook"></ifx-icon>
    </ifx-link>
    <ifx-link variant="title" href="http://youtube.com/infineon">
      <ifx-icon icon="youtube"></ifx-icon>
    </ifx-link>
    <ifx-link variant="title" href="http://instagram.com/infineon">
      <ifx-icon icon="instagram"></ifx-icon>
    </ifx-link>
    <ifx-link variant="title" href="http://linkedin.com/infineon">
      <ifx-icon icon="linkedin"></ifx-icon>
    </ifx-link>
    <ifx-link variant="title" href="http://twitter.com/infineon">
      <ifx-icon icon="twitter"></ifx-icon>
    </ifx-link>
    <ifx-link variant="title" href="http://xing.com/infineon">
      <ifx-icon icon="xing"></ifx-icon>
    </ifx-link>
  </div>
  <div slot="info">
    <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
    <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
    <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
    <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
  </div>
</ifx-footer>`;

export const Large = LargeTemplate.bind({});
