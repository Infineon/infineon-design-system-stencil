export default {
  title: "Components/Footer",
  tags: ['autodocs'],

  args: {
    variant: 'medium',
    termsUrl: 'https://yourwebsite.com/terms',
    termsTarget: '_blank',
    displayTermsLink: true,
    imprintUrl: 'https://yourwebsite.com/imprint',
    imprintTarget: '_blank',
    displayImprintLink: true,
    privacyPolicyUrl: 'https://yourwebsite.com/privacy-policy',
    privacyPolicyTarget: '_blank',
    displayPrivacyPolicyLink: true,
    glossaryUrl: 'https://yourwebsite.com/glossary',
    glossaryTarget: '_blank',
    displayGlossaryLink: true,
    displayCopyright: true,
    copyrightText: '© 1999 - 2022 Infineon Technologies AG'
  },

  argTypes: {
    variant: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    termsUrl: { control: 'text' },
    termsTarget: { control: 'text' },
    displayTermsLink: { control: 'boolean' },
    imprintUrl: { control: 'text' },
    imprintTarget: { control: 'text' },
    displayImprintLink: { control: 'boolean' },
    privacyPolicyUrl: { control: 'text' },
    privacyPolicyTarget: { control: 'text' },
    displayPrivacyPolicyLink: { control: 'boolean' },
    glossaryUrl: { control: 'text' },
    glossaryTarget: { control: 'text' },
    displayGlossaryLink: { control: 'boolean' },
    displayCopyright: { control: 'boolean' },
    copyrightText: { control: 'text' },
  },
};

const DefaultTemplate = (args) => {
  const key = Object.values(args).join('-');
  return `
    <ifx-footer key="${key}" variant="${args.variant}" 
               terms-url="${args.termsUrl}" terms-target="${args.termsTarget}"
               display-terms-link="${args.displayTermsLink}"
               imprint-url="${args.imprintUrl}" imprint-target="${args.imprintTarget}"
               display-imprint-link="${args.displayImprintLink}"
               privacy-policy-url="${args.privacyPolicyUrl}" privacy-policy-target="${args.privacyPolicyTarget}"
               display-privacy-policy-link="${args.displayPrivacyPolicyLink}"
               glossary-url="${args.glossaryUrl}" glossary-target="${args.glossaryTarget}"
               display-glossary-link="${args.displayGlossaryLink}"
               display-copyright="${args.displayCopyright}" copyright-text="${args.copyrightText}">
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
  </ifx-footer>`;
}



export const Medium = DefaultTemplate.bind({});

const SmallTemplate = () =>
  `<ifx-footer variant="small"></ifx-footer>`;


export const Small = SmallTemplate.bind({});

const LargeTemplate = () =>
  `<ifx-footer variant="large">
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
</ifx-footer>`;


export const Large = LargeTemplate.bind({});




