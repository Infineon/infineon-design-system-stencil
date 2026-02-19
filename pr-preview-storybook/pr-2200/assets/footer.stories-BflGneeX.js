import{i as l}from"./icons-DyNdhNdc.js";import{b as e}from"./iframe-DPRjjmHm.js";const r={title:"Components/Footer",tags:["autodocs"],args:{copyrightText:"© 1999 - 2026 Infineon Technologies AG",href:"http://infineon.com",icon:"home-16",ariaLabelOfLink:"Go to Homepage"},argTypes:{copyrightText:{description:"Sets the text for the copyright.",control:"text",table:{category:"ifx-footer props"}},icon:{description:"Sets the icon for the footer.",options:Object.keys(l),control:{type:"select"},table:{category:"ifx-icon props",type:{summary:"string"}}},href:{description:"Sets the link for the footer.",control:"text",table:{category:"ifx-link props"}},ariaLabelOfLink:{name:"ariaLabel",description:"Sets the aria-label for the link. Enhances accessibility.",control:"text",table:{category:"ifx-link props",type:{summary:"Options",detail:"Follow us on..."}}}}},a=i=>e`
    <ifx-footer copyright-text="${i.copyrightText}">
    <div slot="socials">
      <ifx-link variant="title" href="http://facebook.com/infineon" aria-label="Follow us on Facebook">
        <ifx-icon icon="facebook"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://youtube.com/infineon" aria-label="Follow us on Youtube">
        <ifx-icon icon="youtube"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://instagram.com/infineon" aria-label="Follow us on Instagram">
        <ifx-icon icon="instagram"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://linkedin.com/infineon" aria-label="Follow us on LinkedIn">
        <ifx-icon icon="linkedin"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://xing.com/infineon" aria-label="Follow us on Xing">
        <ifx-icon icon="xing"></ifx-icon>
      </ifx-link>
    </div>
    <div slot="info">
      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>`,f=i=>e`
<ifx-footer copyright-text="${i.copyrightText}">
    <div slot="info">
      <ifx-link variant="menu" aria-label="${i.ariaLabelOfLink}" href="${i.href}" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>`,k=i=>e`
  <ifx-footer copyright-text="${i.copyrightText}">
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
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
</ifx-footer>`,n=f.bind({}),t=a.bind({}),o=k.bind({});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return html\`
<ifx-footer copyright-text="\${args.copyrightText}">
    <div slot="info">
      <ifx-link variant="menu" aria-label="\${args.ariaLabelOfLink}" href="\${args.href}" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>\`;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return html\`
    <ifx-footer copyright-text="\${args.copyrightText}">
    <div slot="socials">
      <ifx-link variant="title" href="http://facebook.com/infineon" aria-label="Follow us on Facebook">
        <ifx-icon icon="facebook"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://youtube.com/infineon" aria-label="Follow us on Youtube">
        <ifx-icon icon="youtube"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://instagram.com/infineon" aria-label="Follow us on Instagram">
        <ifx-icon icon="instagram"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://linkedin.com/infineon" aria-label="Follow us on LinkedIn">
        <ifx-icon icon="linkedin"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://xing.com/infineon" aria-label="Follow us on Xing">
        <ifx-icon icon="xing"></ifx-icon>
      </ifx-link>
    </div>
    <div slot="info">
      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>\`;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return html\`
  <ifx-footer copyright-text="\${args.copyrightText}">
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
  </ifx-footer-column>
  <ifx-footer-column slot="col">
    <h5 slot="title">Title</h5>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
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
</ifx-footer>\`;
}`,...o.parameters?.docs?.source}}};const x=["Small","Medium","Large"],m=Object.freeze(Object.defineProperty({__proto__:null,Large:o,Medium:t,Small:n,__namedExportsOrder:x,default:r},Symbol.toStringTag,{value:"Module"}));export{m as F};
