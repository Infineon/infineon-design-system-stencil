import{r as t,h as i,H as n}from"./index-DnthRwOL.js";const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--locked{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--locked .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--neutral{border-left:4px solid #0A8276}.ifx-notification__wrapper.ifx-notification__wrapper--neutral .ifx-notification__icon{color:#0A8276}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex;align-self:center}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1;font-size:0.875rem}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1;display:inline-flex;align-items:center}.ifx-notification__wrapper .ifx-notification__link{font-size:0.875rem}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}.ifx-notification__wrapper .ifx-notification__link{margin-top:8px}}',a=f,e=class{constructor(o){t(this,o),this.variant="success",this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"locked":return"ifx-notification__wrapper--locked";case"error":return"ifx-notification__wrapper--error";case"neutral":return"ifx-notification__wrapper--neutral";default:return"ifx-notification__wrapper--success"}}render(){return i(n,{key:"58c1e582dacc8ce8e0023a33fbad8385256ee061"},i("div",{key:"72b9751e1e25424ac7b65de457cdf19f58dc3c1d",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"7e5278aa5a6d87f865a42ca43aee7218f8497758",class:"ifx-notification__icon"},i("ifx-icon",{key:"51b76a1c0ac9b6a1a0ce8cb94402d985dc1f84bf",icon:this.icon})),i("div",{key:"0ec9c7e9e5f95d65f8ff3e0fd08b350f2147b9fc",class:"ifx-notification__body"},i("div",{key:"3eb4c1b5dd82d6d8fcbad40f5894bae6ba6bbc46",class:"ifx-notification__slot"},i("slot",{key:"ab0f20176ba655ae1d6114436e5a91e2228b5382"})),this.linkText&&this.linkHref&&i("div",{key:"b1886bb5eda5799c83f2153eadde9559640594fc",class:"ifx-notification__link"},i("ifx-link",{key:"be4defdd90d68907de57cce3810e0c682a13141b",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"1ffc89db07072d1e83f51f9c7ebba662d2254bff",icon:"arrow-right-16"}))))))}};e.style=a;export{e as ifx_notification};
