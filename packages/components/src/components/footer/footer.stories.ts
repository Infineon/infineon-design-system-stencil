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
      <ifx-link href="http://facebook.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://youtube.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://instagram.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://linkedin.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://twitter.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://xing.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
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
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
      <ifx-link bold="false" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <div slot="socials">
      <ifx-link href="http://facebook.com/infineon">
        <ifx-icon icon="c-info-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://youtube.com/infineon">
        <ifx-icon icon="calendar-16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://instagram.com/infineon">
        <ifx-icon icon="fileexe16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://linkedin.com/infineon">
        <ifx-icon icon="filegif16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://twitter.com/infineon">
        <ifx-icon icon="filehtml16"></ifx-icon>
      </ifx-link>
      <ifx-link href="http://xing.com/infineon">
        <ifx-icon icon="filejpg16"></ifx-icon>
      </ifx-link>
    </div>
  </ifx-footer>`;


export const Large = LargeTemplate.bind({});




