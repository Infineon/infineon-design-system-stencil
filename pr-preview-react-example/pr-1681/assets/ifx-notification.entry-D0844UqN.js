import{r as t,h as i,H as n}from"./index-BimPz98Z.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--locked{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--locked .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--neutral{border-left:4px solid #0A8276}.ifx-notification__wrapper.ifx-notification__wrapper--neutral .ifx-notification__icon{color:#0A8276}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex;align-self:center}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1;font-size:0.875rem}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1;display:inline-flex;align-items:center}.ifx-notification__wrapper .ifx-notification__link{font-size:0.875rem}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}.ifx-notification__wrapper .ifx-notification__link{margin-top:8px}}',f=a,e=class{constructor(o){t(this,o),this.variant="success",this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"locked":return"ifx-notification__wrapper--locked";case"error":return"ifx-notification__wrapper--error";case"neutral":return"ifx-notification__wrapper--neutral";default:return"ifx-notification__wrapper--success"}}render(){return i(n,{key:"36a06240e7b16812742ec58cdd3556881796605e"},i("div",{key:"1ea4e609e2c31b5cdcb87cc8fe6e658606ad812d",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"da2f7500ad2c59389e1f5048fcc3bca51f3dcb1b",class:"ifx-notification__icon"},i("ifx-icon",{key:"a9ac76e39a752c60489864203d52ff8115f10cee",icon:this.icon})),i("div",{key:"6c0b121aa4065b3b3bef3508ee503d5f833d0ea8",class:"ifx-notification__body"},i("div",{key:"ad28d84cafeb0541d078774b2c7a1a2485ae1c30",class:"ifx-notification__slot"},i("slot",{key:"4feed53176c764030c926ab3fe1d8e2fa78b097d"})),this.linkText&&this.linkHref&&i("div",{key:"bbd64e701de615fbb0c3af18f14f5a51e44bb651",class:"ifx-notification__link"},i("ifx-link",{key:"14a4343ed4bc1e3ddab01df32290858f372b7dfa",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"65dd1181c9d27fcf8c3cb741e3dc00a635cc4d21",icon:"arrow-right-16"}))))))}};e.style=f;export{e as ifx_notification};
