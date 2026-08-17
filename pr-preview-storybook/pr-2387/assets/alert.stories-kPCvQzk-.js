import{i as o}from"./icons-CdnviRe7.js";import{b as r}from"./iframe-C9dXd4Tk.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,s={title:"Components/Alert",tags:["autodocs"],args:{label:"Attention! This is an alert message — check it out!",variant:"primary",closable:!0,icon:"c-info-16",AriaLiveText:"assertive"},argTypes:{label:{name:"Label of Alert",description:"Sets the label of *<ifx-alert>*.",table:{category:"story controls"}},variant:{description:"Sets the style variant of the alert.",options:["primary","success","danger","warning"],control:"radio",table:{category:"ifx-alert props",defaultValue:{summary:"primary"}}},icon:{description:"The icon to be displayed. Choose ***none*** to display no icon.",options:Object.keys(o),control:"select",table:{category:"ifx-alert props",defaultValue:{summary:"c-info-16"}}},closable:{description:"Defines whether the alert should be closable or not.",control:"boolean",table:{category:"ifx-alert props",defaultValue:{summary:"true"}}},ifxClose:{action:"ifxClose",description:"Custom event emitted when close button clicked.",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxClose={handleChange}
Vue:@ifxClose="handleChange"
Angular:(ifxClose)="handleChange()"
VanillaJs:.addEventListener("ifxClose", (event) => {//handle change});`}}},AriaLiveText:{options:["off","polite","assertive"],control:"radio",description:"The aria-live-text attribute to indicate a dynamic content.",table:{category:"ifx-alert props",defaultValue:{summary:"assertive"}}}}},l=e=>{const t=document.createElement("ifx-alert");return t.setAttribute("aria-live-text",e.AriaLiveText),t.setAttribute("variant",e.variant),t.setAttribute("icon",e.icon==="none"?"":e.icon),t.setAttribute("closable",String(e.closable)),t.textContent=e.label,t.addEventListener("ifxClose",n("ifxClose")),t},i=l.bind({}),c=e=>r`<ifx-alert variant="info" closable="${e.closable}">
      <div slot="headline">Headline</div>
      <div slot="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi voluptatum quia esse dolor corrupti veniam dolorum. Voluptatem ut enim voluptate. Provident modi molestiae at atque rerum cupiditate, dicta recusandae ab libero veniam iusto possimus quia sequi amet, tempora dolore nobis excepturi est illo blanditiis nihil laborum enim ducimus consequuntur.
      </div>
    </ifx-alert>`,a=c.bind({});a.argTypes={variant:{table:{disable:!0}},icon:{table:{disable:!0}},showIcon:{table:{disable:!0}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: any) => {
  const alert = document.createElement("ifx-alert");
  alert.setAttribute("aria-live-text", args.AriaLiveText);
  alert.setAttribute("variant", args.variant);
  alert.setAttribute("icon", args.icon === "none" ? "" : args.icon);
  alert.setAttribute("closable", String(args.closable));
  alert.textContent = args.label;
  alert.addEventListener("ifxClose", action("ifxClose"));
  return alert;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: any) => html\`<ifx-alert variant="info" closable="\${args.closable}">
      <div slot="headline">Headline</div>
      <div slot="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi voluptatum quia esse dolor corrupti veniam dolorum. Voluptatem ut enim voluptate. Provident modi molestiae at atque rerum cupiditate, dicta recusandae ab libero veniam iusto possimus quia sequi amet, tempora dolore nobis excepturi est illo blanditiis nihil laborum enim ducimus consequuntur.
      </div>
    </ifx-alert>\``,...a.parameters?.docs?.source}}};const u=["Default","Info"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Info:a,__namedExportsOrder:u,default:s},Symbol.toStringTag,{value:"Module"}));export{p as A};
