import{r as o,h as i,H as t}from"./index-BgGzSVWR.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--warning{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--warning .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex;align-self:flex-start;padding-top:2px}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}.ifx-notification__wrapper .ifx-notification__link{margin-top:8px}}',f=a,c=class{constructor(n){o(this,n),this.icon=void 0,this.variant="success",this.linkText=void 0,this.linkHref=void 0,this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"warning":return"ifx-notification__wrapper--warning";case"error":return"ifx-notification__wrapper--error";default:return"ifx-notification__wrapper--success"}}render(){return i(t,{key:"3d28651110536d156d1d46fdc4132976f9fc1b9f"},i("div",{key:"16754d0614cf7549399d67017580abb195489ca8",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"cf2a2ceca3a2adda5550c7596921649067617acc",class:"ifx-notification__icon"},i("ifx-icon",{key:"dcc6f3c61403a3058ba80cc2f0166ba337ff47cf",icon:this.icon})),i("div",{key:"d699a690ebea2df352b3fd6c64cfd7be51eec142",class:"ifx-notification__body"},i("div",{key:"72f022aed523157084d895b55d915178c9197285",class:"ifx-notification__slot"},i("slot",{key:"b3bfaed5c351532e94d2f77e6145fc87ed78eb10"})),this.linkText&&this.linkHref&&i("div",{key:"944ca5f81419a7c100333c7440257a84465c7e4c",class:"ifx-notification__link"},i("ifx-link",{key:"5fec6813a29c234a01bc84b000529389bc2421e4",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"92484764a6408aa9e65c920c575c3180a479b1ba",icon:"arrow-right-16"}))))))}};c.style=f;export{c as ifx_notification};
