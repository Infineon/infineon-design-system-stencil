import{r as n,h as i,H as o}from"./index-Bv40tCEP.js";const t=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--warning{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--warning .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex;align-self:flex-start;padding-top:2px}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}.ifx-notification__wrapper .ifx-notification__link{margin-top:8px}}',a=t,e=class{constructor(f){n(this,f),this.icon=void 0,this.variant="success",this.linkText=void 0,this.linkHref=void 0,this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"warning":return"ifx-notification__wrapper--warning";case"error":return"ifx-notification__wrapper--error";default:return"ifx-notification__wrapper--success"}}render(){return i(o,{key:"0bd4234870363bd814985bc5d0583eed2be7db46"},i("div",{key:"f0f9263f865bf2698f7d82d839a47aa7d240defe",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"89a510add70e7136aebccd2f3448f4f2be993a8c",class:"ifx-notification__icon"},i("ifx-icon",{key:"9bc8cc4c1ef631a3c5f4031841e017ad56fb04d2",icon:this.icon})),i("div",{key:"11a30ba727a6da41b5f97e0c6d4d39c3f2d48fff",class:"ifx-notification__body"},i("div",{key:"ef61b07c3f07ee7e494725d972015119dcffce08",class:"ifx-notification__slot"},i("slot",{key:"068c2ec364d8bc30f53d4f236a556f6d1cfee4c6"})),this.linkText&&this.linkHref&&i("div",{key:"59ef023f93c24c84e40bacb2fe75e7d920d17768",class:"ifx-notification__link"},i("ifx-link",{key:"301c06577ad333a83be9c60caf3ce2a758747cbb",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"a00a577925fd5654f334e84dadd1a67aca462ace",icon:"arrow-right-16"}))))))}};e.style=a;export{e as ifx_notification};
