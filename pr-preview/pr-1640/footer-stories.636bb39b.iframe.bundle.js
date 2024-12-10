"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9326],{"./src/components/footer/footer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Footer",tags:["autodocs"],args:{copyrightText:"© 1999 - 2024 Infineon Technologies AG"},argTypes:{copyrightText:{description:"Sets the text for the copyright.",control:"text",table:{category:"ifx-footer props"}}}},Medium=(args=>`\n    <ifx-footer copyright-text="${args.copyrightText}">\n    <div slot="socials">\n      <ifx-link variant="title" href="http://facebook.com/infineon">\n        <ifx-icon icon="facebook"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://youtube.com/infineon">\n        <ifx-icon icon="youtube"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://instagram.com/infineon">\n        <ifx-icon icon="instagram"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://linkedin.com/infineon">\n        <ifx-icon icon="linkedin"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://twitter.com/infineon">\n        <ifx-icon icon="twitter"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://xing.com/infineon">\n        <ifx-icon icon="xing"></ifx-icon>\n      </ifx-link>\n    </div>\n    <div slot="info">\n      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>\n    </div>\n  </ifx-footer>`).bind({}),Small=(()=>'<ifx-footer>\n    <div slot="info">\n      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>\n    </div>\n  </ifx-footer>').bind({}),Large=(()=>'<ifx-footer>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <div slot="socials">\n    <ifx-link variant="title" href="http://facebook.com/infineon">\n      <ifx-icon icon="facebook"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://youtube.com/infineon">\n      <ifx-icon icon="youtube"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://instagram.com/infineon">\n      <ifx-icon icon="instagram"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://linkedin.com/infineon">\n      <ifx-icon icon="linkedin"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://twitter.com/infineon">\n      <ifx-icon icon="twitter"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://xing.com/infineon">\n      <ifx-icon icon="xing"></ifx-icon>\n    </ifx-link>\n  </div>\n  <div slot="info">\n    <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>\n    <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>\n    <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>\n    <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>\n  </div>\n</ifx-footer>').bind({}),__namedExportsOrder=["Medium","Small","Large"];Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'args => {\n  return `\n    <ifx-footer copyright-text="${args.copyrightText}">\n    <div slot="socials">\n      <ifx-link variant="title" href="http://facebook.com/infineon">\n        <ifx-icon icon="facebook"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://youtube.com/infineon">\n        <ifx-icon icon="youtube"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://instagram.com/infineon">\n        <ifx-icon icon="instagram"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://linkedin.com/infineon">\n        <ifx-icon icon="linkedin"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://twitter.com/infineon">\n        <ifx-icon icon="twitter"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://xing.com/infineon">\n        <ifx-icon icon="xing"></ifx-icon>\n      </ifx-link>\n    </div>\n    <div slot="info">\n      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>\n    </div>\n  </ifx-footer>`;\n}',...Medium.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'() => `<ifx-footer>\n    <div slot="info">\n      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>\n      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>\n    </div>\n  </ifx-footer>`',...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'() => `<ifx-footer>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <div slot="socials">\n    <ifx-link variant="title" href="http://facebook.com/infineon">\n      <ifx-icon icon="facebook"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://youtube.com/infineon">\n      <ifx-icon icon="youtube"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://instagram.com/infineon">\n      <ifx-icon icon="instagram"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://linkedin.com/infineon">\n      <ifx-icon icon="linkedin"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://twitter.com/infineon">\n      <ifx-icon icon="twitter"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://xing.com/infineon">\n      <ifx-icon icon="xing"></ifx-icon>\n    </ifx-link>\n  </div>\n  <div slot="info">\n    <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>\n    <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>\n    <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>\n    <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>\n  </div>\n</ifx-footer>`',...Large.parameters?.docs?.source}}}}}]);