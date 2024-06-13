"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1502],{"./src/components/card/card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Horizontal:()=>Horizontal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",tags:["autodocs"],args:{direction:"vertical",overline:"Overline",headline:"Headline",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:"button",href:"",target:"_blank",icon:"c-info-16",position:"right"},argTypes:{button:{options:["button","link","none"],control:{type:"radio"}},direction:{options:["horizontal","vertical"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},Default=(args=>`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></ifx-card-image>\n    ${args.overline?`<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>`:""}\n      ${args.headline?`<ifx-card-headline>\n        ${args.headline}\n        </ifx-card-headline>`:""}\n     ${args.description?`<ifx-card-text>\n        ${args.description}\n        </ifx-card-text>`:""}\n      ${"button"===args.button?'<ifx-card-links slot="buttons">\n          <ifx-button color="primary">Button</ifx-button>\n          <ifx-button color="secondary">Button</ifx-button>\n          <ifx-button color="primary">Button</ifx-button>\n          <ifx-button color="secondary">Button</ifx-button>\n          </ifx-card-links>':""}\n      ${"link"===args.button?'<ifx-card-links slot="buttons">\n            <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n            <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n          </ifx-card-links>':""}\n  </ifx-card>`).bind({});Default.argTypes={position:{table:{disable:!0}}};const Horizontal=(args=>`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></ifx-card-image>\n    ${args.overline?`<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>`:""}\n      ${args.headline?`<ifx-card-headline>\n          ${args.headline}\n          </ifx-card-headline>`:""}\n        ${args.description?`<ifx-card-text>\n            ${args.description}\n            </ifx-card-text>`:""}\n          ${"link"===args.button?'<ifx-card-links slot="buttons">\n          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n        </ifx-card-links>':""}\n  </ifx-card>`).bind({});Horizontal.argTypes={direction:"horizontal",image:{table:{disable:!0}},button:{options:["link","none"],control:{type:"radio"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></ifx-card-image>\n    ${args.overline ? `<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>` : ""}\n      ${args.headline ? `<ifx-card-headline>\n        ${args.headline}\n        </ifx-card-headline>` : ""}\n     ${args.description ? `<ifx-card-text>\n        ${args.description}\n        </ifx-card-text>` : ""}\n      ${args.button === \'button\' ? `<ifx-card-links slot="buttons">\n          <ifx-button color="primary">Button</ifx-button>\n          <ifx-button color="secondary">Button</ifx-button>\n          <ifx-button color="primary">Button</ifx-button>\n          <ifx-button color="secondary">Button</ifx-button>\n          </ifx-card-links>` : ""}\n      ${args.button === \'link\' ? `<ifx-card-links slot="buttons">\n            <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n            <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n          </ifx-card-links>` : ""}\n  </ifx-card>`',...Default.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'args => `<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></ifx-card-image>\n    ${args.overline ? `<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>` : ""}\n      ${args.headline ? `<ifx-card-headline>\n          ${args.headline}\n          </ifx-card-headline>` : ""}\n        ${args.description ? `<ifx-card-text>\n            ${args.description}\n            </ifx-card-text>` : ""}\n          ${args.button === \'link\' ? `<ifx-card-links slot="buttons">\n          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n        </ifx-card-links>` : ""}\n  </ifx-card>`',...Horizontal.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Horizontal"]}}]);