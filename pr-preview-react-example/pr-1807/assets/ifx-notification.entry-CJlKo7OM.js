import{r as t,h as i,H as f}from"./index-DeRQ76ld.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-notification__wrapper{display:flex;flex-direction:row;align-items:center;padding:8px 16px;background-color:#FFFFFF;font-family:var(--ifx-font-family);color:#1D1D1D;border:1px solid #EEEDED}.ifx-notification__wrapper.ifx-notification__wrapper--success{border-left:4px solid #4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--success .ifx-notification__icon{color:#4CA460}.ifx-notification__wrapper.ifx-notification__wrapper--locked{border-left:4px solid #E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--locked .ifx-notification__icon{color:#E16B25}.ifx-notification__wrapper.ifx-notification__wrapper--error{border-left:4px solid #CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--error .ifx-notification__icon{color:#CD002F}.ifx-notification__wrapper.ifx-notification__wrapper--neutral{border-left:4px solid #0A8276}.ifx-notification__wrapper.ifx-notification__wrapper--neutral .ifx-notification__icon{color:#0A8276}.ifx-notification__wrapper .ifx-notification__icon{margin-right:8px;display:flex;align-self:center}.ifx-notification__wrapper .ifx-notification__body{display:flex;flex-direction:row;flex-grow:1;font-size:0.875rem}.ifx-notification__wrapper .ifx-notification__body .ifx-notification__slot{flex-grow:1;display:inline-flex;align-items:center}.ifx-notification__wrapper .ifx-notification__link{font-size:0.875rem}@media (max-width: 576px){.ifx-notification__wrapper .ifx-notification__icon{align-self:flex-start}.ifx-notification__wrapper .ifx-notification__body{flex-direction:column}.ifx-notification__wrapper .ifx-notification__link{margin-top:8px}}',n=a,e=class{constructor(o){t(this,o),this.variant="success",this.linkTarget="_blank"}getClassName(){switch(this.variant){case"success":return"ifx-notification__wrapper--success";case"locked":return"ifx-notification__wrapper--locked";case"error":return"ifx-notification__wrapper--error";case"neutral":return"ifx-notification__wrapper--neutral";default:return"ifx-notification__wrapper--success"}}render(){return i(f,{key:"48ae3443dc099417baaaafbaedfb7735eab8679f"},i("div",{key:"cec3b3b76f3baaae2b7b7e8a8cef32174ebfe79f",class:"ifx-notification__wrapper "+this.getClassName()},i("div",{key:"c0616bba0fb9a52eaeb56b34fceab9e7584001ce",class:"ifx-notification__icon"},i("ifx-icon",{key:"d390856f0339ffb1a86c17560f4d1b14acb95698",icon:this.icon})),i("div",{key:"744ffc85e2b629e0f1df727ec44f8dedceee9604",class:"ifx-notification__body"},i("div",{key:"a432cb13cf9fc867eaaa726c172e554b313e9a4a",class:"ifx-notification__slot"},i("slot",{key:"ca7d41c48c623deef0df3a303aa5e0dc41d558dd"})),this.linkText&&this.linkHref&&i("div",{key:"3f34bb836df2aa45118d0046bb0cf0b0d77ed7f4",class:"ifx-notification__link"},i("ifx-link",{key:"af5e714dfef66cdce1acfd912463fe25866f9b5c",href:this.linkHref,target:this.linkTarget},this.linkText,i("ifx-icon",{key:"9ad209bc71b30df19529ccc14d7c997a70bbeb4f",icon:"arrow-right-16"}))))))}};e.style=n;export{e as ifx_notification};
