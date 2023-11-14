export default {
  title: "Components/Footer",
  tags: ['autodocs'],

  args: {
    variant: 'medium'
  },

  argTypes: {

  },
};


const DefaultTemplate = () =>
  `<ifx-footer variant="medium">
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




