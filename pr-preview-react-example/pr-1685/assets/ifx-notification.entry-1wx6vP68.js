import{r as t,h as i,H as n}from"./index-C_futyct.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--warning{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--warning .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex;align-self:flex-start;padding-top:2px}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}.ifx-notification__wrapper .ifx-notification__link{margin-top:8px}}',f=a,r=class{constructor(o){t(this,o),this.variant="success",this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"warning":return"ifx-notification__wrapper--warning";case"error":return"ifx-notification__wrapper--error";default:return"ifx-notification__wrapper--success"}}render(){return i(n,{key:"34a1392c2507471c9bf219f7280e509161f50a24"},i("div",{key:"affa76beeb92783511eaa33598ac658aa491717b",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"57d2d2787cb71ac18c806c4511b806020c0518ec",class:"ifx-notification__icon"},i("ifx-icon",{key:"989bd140171ebcd000efb51971ae8d74786302f7",icon:this.icon})),i("div",{key:"d94b62c41921c98abebe7bc7e2d53681545fc83f",class:"ifx-notification__body"},i("div",{key:"5627e0c24b170eea649a37450004c063829ada64",class:"ifx-notification__slot"},i("slot",{key:"2452192f9c2679dd68c6e4eab317c07331dfc6b2"})),this.linkText&&this.linkHref&&i("div",{key:"3b4827404a0895c58bd3dff0fc6cc19d2e6c9fd2",class:"ifx-notification__link"},i("ifx-link",{key:"2eb74961455b1942b6382ec293b723e341112944",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"3bdd8be3b8a2e53b2adf994ceaba4199959840a1",icon:"arrow-right-16"}))))))}};r.style=f;export{r as ifx_notification};
