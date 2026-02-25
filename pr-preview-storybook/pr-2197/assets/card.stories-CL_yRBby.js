import{b as i}from"./iframe-CeSR5tSk.js";const r={title:"Components/Card",tags:["autodocs"],args:{overline:"Overline",headline:"Headline",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",direction:"vertical",button:"button",href:"",target:"_blank",position:"right",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg",ariaLabel:"Card"},argTypes:{overline:{name:"Overline",description:"Sets the overline text of the card.",type:{name:"string"},table:{category:"story controls"}},headline:{name:"Headline",description:"Sets the headline text of the card.",type:{name:"string"},table:{category:"story controls"}},description:{name:"Description",description:"Sets the description text of the card.",type:{name:"string"},table:{category:"story controls"}},button:{name:"Button",options:["button","link","none"],description:"Sets the button type of the card.",control:{type:"radio"},table:{category:"story controls"}},direction:{description:"Sets the direction of the card layout.",table:{category:"ifx-card props",defaultValue:{summary:"vertical"},type:{summary:"horizontal | vertical",disable:!0}},options:["horizontal","vertical"],control:{type:"radio"}},ariaLabel:{control:{type:"text"},description:"Sets the aria-label attribute of the card. Enhances accessibility.",table:{category:"ifx-card props"}},position:{description:"Sets the position of the image in the card.",table:{category:"ifx-card-image props"},options:["left","right"],control:{type:"radio"},if:{arg:"direction",eq:"horizontal"}},href:{description:"Sets the hyperlink reference.",type:{name:"string"},table:{category:"ifx-card props"}},target:{description:"Sets the target of the hyperlink reference",table:{category:"ifx-card props",defaultValue:{summary:"_self"}},options:["_blank","_self","_parent"],control:{type:"radio"}},src:{description:"Sets the image source.",type:{name:"string"},table:{category:"ifx-card-image props"}},alt:{description:"Sets the alternative text for the image.",type:{name:"string"},table:{category:"ifx-card-image props"}}}},a=t=>i`<ifx-card direction="${t.direction}" href="${t.href}" target="${t.target}" aria-label="${t.ariaLabel}">
    <ifx-card-image position="${t.position}" src="${t.src}" alt="${t.alt}" slot="img"></ifx-card-image>
    ${t.overline?i`<ifx-card-overline>
        ${t.overline}
        </ifx-card-overline>`:""}
      ${t.headline?i`<ifx-card-headline>
        ${t.headline}
        </ifx-card-headline>`:""}
     ${t.description?i`<ifx-card-text>
        ${t.description}
        </ifx-card-text>`:""}
      ${t.button==="button"?i`<ifx-card-links slot="buttons">
          <ifx-button variant="primary">Button</ifx-button>
          <ifx-button variant="secondary">Button</ifx-button>
          </ifx-card-links>`:""}
      ${t.button==="link"?i`<ifx-card-links slot="buttons">
            <ifx-link href="https://google.com" target="_blank">
              <ifx-icon icon="calendar16"></ifx-icon>
              Link
            </ifx-link>
            <ifx-link href="https://yahoo.com" target="_blank">
              <ifx-icon icon="calendar16"></ifx-icon>
              Link
            </ifx-link>
          </ifx-card-links>`:""}
  </ifx-card>`,n=a.bind({});n.args={alt:"Coffee",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"};const o=t=>i`<ifx-card direction="${t.direction}" href="${t.href}" target="${t.target}">
    <ifx-card-image position="${t.position}" src="${t.src}" alt="${t.alt}" slot="img"></ifx-card-image>
    ${t.overline?i`<ifx-card-overline>
        ${t.overline}
        </ifx-card-overline>`:""}
      ${t.headline?i`<ifx-card-headline>
          ${t.headline}
          </ifx-card-headline>`:""}
        ${t.description?i`<ifx-card-text>
            ${t.description}
            </ifx-card-text>`:""}
      ${t.button==="button"?i`<ifx-card-links slot="buttons">
          <ifx-button variant="primary">Button</ifx-button>
          <ifx-button variant="secondary">Button</ifx-button>
          </ifx-card-links>`:""}
          ${t.button==="link"?i`<ifx-card-links slot="buttons">
          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">
            <ifx-icon icon="calendar16"></ifx-icon>
            Link
          </ifx-link>
          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">
            <ifx-icon icon="calendar16"></ifx-icon>
            Link
          </ifx-link>
        </ifx-card-links>`:""}
  </ifx-card>`,e=o.bind({});e.args={direction:"horizontal",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg"};e.argTypes={direction:{table:{disable:!0}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'args => html`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}" aria-label="${args.ariaLabel}">\n    <ifx-card-image position="${args.position}" src="${args.src}" alt="${args.alt}" slot="img"></ifx-card-image>\n    ${args.overline ? html`<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>` : ""}\n      ${args.headline ? html`<ifx-card-headline>\n        ${args.headline}\n        </ifx-card-headline>` : ""}\n     ${args.description ? html`<ifx-card-text>\n        ${args.description}\n        </ifx-card-text>` : ""}\n      ${args.button === "button" ? html`<ifx-card-links slot="buttons">\n          <ifx-button variant="primary">Button</ifx-button>\n          <ifx-button variant="secondary">Button</ifx-button>\n          </ifx-card-links>` : ""}\n      ${args.button === "link" ? html`<ifx-card-links slot="buttons">\n            <ifx-link href="https://google.com" target="_blank">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n            <ifx-link href="https://yahoo.com" target="_blank">\n              <ifx-icon icon="calendar16"></ifx-icon>\n              Link\n            </ifx-link>\n          </ifx-card-links>` : ""}\n  </ifx-card>`',...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'args => html`<ifx-card direction="${args.direction}" href="${args.href}" target="${args.target}">\n    <ifx-card-image position="${args.position}" src="${args.src}" alt="${args.alt}" slot="img"></ifx-card-image>\n    ${args.overline ? html`<ifx-card-overline>\n        ${args.overline}\n        </ifx-card-overline>` : ""}\n      ${args.headline ? html`<ifx-card-headline>\n          ${args.headline}\n          </ifx-card-headline>` : ""}\n        ${args.description ? html`<ifx-card-text>\n            ${args.description}\n            </ifx-card-text>` : ""}\n      ${args.button === "button" ? html`<ifx-card-links slot="buttons">\n          <ifx-button variant="primary">Button</ifx-button>\n          <ifx-button variant="secondary">Button</ifx-button>\n          </ifx-card-links>` : ""}\n          ${args.button === "link" ? html`<ifx-card-links slot="buttons">\n          <ifx-link color="primary" href="https://google.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n          <ifx-link color="primary" href="https://yahoo.com" target="_blank" underline="false">\n            <ifx-icon icon="calendar16"></ifx-icon>\n            Link\n          </ifx-link>\n        </ifx-card-links>` : ""}\n  </ifx-card>`',...e.parameters?.docs?.source}}};const c=["Default","Horizontal"],s=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Horizontal:e,__namedExportsOrder:c,default:r},Symbol.toStringTag,{value:"Module"}));export{s as C};
