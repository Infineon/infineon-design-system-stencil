import{r as n,h as i,H as t}from"./index-Bz-wAaeD.js";const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--warning{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--warning .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}}',a=f,e=class{constructor(o){n(this,o),this.icon=void 0,this.variant="success",this.linkText=void 0,this.linkHref=void 0,this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"warning":return"ifx-notification__wrapper--warning";case"error":return"ifx-notification__wrapper--error";default:return"ifx-notification__wrapper--success"}}render(){return i(t,{key:"a7caa668294469084810a6196f79ab9475809355"},i("div",{key:"cc16d18f31f920683b2596baae8653bedc8e9fd0",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"49ab84f78e2c318261d572fd643c9e3520d9b172",class:"ifx-notification__icon"},i("ifx-icon",{key:"0c038b2e6cbc76950644fecb17160009417dbad6",icon:this.icon})),i("div",{key:"6e83b8cec05b55dc05e30b8de2fdc52710c591e4",class:"ifx-notification__body"},i("div",{key:"398d0c7f1060bfbab85b40c30d2046bee301d19a",class:"ifx-notification__slot"},i("slot",{key:"41b2a9bf380f0dc62727afcd3629167dc8e6a02a"})),this.linkText&&this.linkHref&&i("div",{key:"684a204262c4e57216857de0ea6f73262355afdd",class:"ifx-notification__link"},i("ifx-link",{key:"b717e3805271d42595f676b502d18e73f7575a36",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"9fb59fcdfaadfd0b76b47ea6f4cc8e4c6659b719",icon:"arrow-right-16"}))))))}};e.style=a;export{e as ifx_notification};
