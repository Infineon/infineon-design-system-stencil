import{r as n,h as t,H as o,g as i}from"./index-27933f59.js";import{c as r}from"./index-3c58b0c1-03c37d78.js";import"./_commonjsHelpers-e9b9b14e-cda1f04d.js";const s=':host{display:inline-flex}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:1.5rem;outline:none;font-family:"Source Sans 3";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#FFFFFF;background-color:#0A8276}.btn-primary:disabled,.btn-primary.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary{color:#0A8276;background-color:#FFFFFF;border-color:#0A8276}.btn-secondary:disabled,.btn-secondary.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary{background-color:transparent;color:#1D1D1D}.btn-tertiary:disabled,.btn-tertiary.disabled{color:#BFBBBB;pointer-events:none}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px;padding:8px}.btn.icon-button.btn-l{width:48px;height:48px;padding:8px}.btn.btn-primary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C;color:#FFFFFF}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-tertiary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;color:#1D1D1D;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-tertiary:not(:disabled,.disabled):hover{color:#0A8276}.btn.btn-tertiary:not(:disabled,.disabled):active,.btn.btn-tertiary:not(:disabled,.disabled).active{color:#08665C}',a=class{constructor(e){n(this,e),this.variant=void 0,this.size=void 0,this.disabled=void 0,this.icon=void 0,this.href=void 0,this.target="_self",this.shape="round"}async setFocus(){this.focusableElement.focus()}componentWillLoad(){this.shape===""&&(this.shape="round")}render(){return t(o,null,this.href?t("a",{ref:e=>this.focusableElement=e,class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:this.target==="_blank"?"noopener noreferrer":void 0},t("ifx-icon",{icon:this.icon})):t("button",{class:this.getClassNames(),type:"button"},t("ifx-icon",{icon:this.icon})))}getVariantClass(){return`${this.variant}`=="secondary"?"secondary":`${this.variant}`=="tertiary"?"tertiary":"primary"}getSizeClass(){return`${this.size}`=="xs"?"xs":`${this.size}`=="s"?"s":`${this.size}`=="l"?"l":""}getClassNames(){return r("btn icon-button",`btn-${this.shape}`,this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return i(this)}};a.style=s;export{a as ifx_icon_button};
