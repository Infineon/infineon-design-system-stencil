import{r as n,h as e,H as i,g as o}from"./index-Bc_tPVQo.js";import{c as r}from"./index-72ac5051-B1g_EHyb.js";const s=":host{display:inline-flex}.btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:1.5rem;outline:none;font-family:var(--ifx-font-family);text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#FFFFFF;background-color:#0A8276}.btn-primary:disabled,.btn-primary.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary{color:#0A8276;background-color:#FFFFFF;border-color:#0A8276}.btn-secondary:disabled,.btn-secondary.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary{background-color:transparent;color:#1D1D1D}.btn-tertiary:disabled,.btn-tertiary.disabled{color:#BFBBBB;pointer-events:none}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px;padding:8px}.btn.icon-button.btn-l{width:48px;height:48px;padding:8px}.btn.btn-primary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C;color:#FFFFFF}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-tertiary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;color:#1D1D1D;box-shadow:0 0 0 0px #FFFFFF, 0 0 0 2px #0A8276}.btn.btn-tertiary:not(:disabled,.disabled):hover{color:#0A8276}.btn.btn-tertiary:not(:disabled,.disabled):active,.btn.btn-tertiary:not(:disabled,.disabled).active{color:#08665C}",a=s,d=class{constructor(t){n(this,t),this.variant=void 0,this.size=void 0,this.disabled=void 0,this.icon=void 0,this.href=void 0,this.target="_self",this.shape="round"}handleClick(t){this.disabled&&t.stopImmediatePropagation()}async setFocus(){this.focusableElement.focus()}componentWillLoad(){this.shape===""&&(this.shape="round")}render(){return e(i,{key:"a13463972d971f052edc7c7483283b9beb150955"},this.href?e("a",{"aria-disabled":this.disabled,"aria-label":"a clickable icon button",ref:t=>this.focusableElement=t,class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:this.target==="_blank"?"noopener noreferrer":void 0},e("ifx-icon",{icon:this.icon})):e("button",{class:this.getClassNames(),type:"button"},e("ifx-icon",{icon:this.icon})))}getVariantClass(){return`${this.variant}`=="secondary"?"secondary":`${this.variant}`=="tertiary"?"tertiary":"primary"}getSizeClass(){return`${this.size}`=="xs"?"xs":`${this.size}`=="s"?"s":`${this.size}`=="l"?"l":""}getClassNames(){return r("btn icon-button",`btn-${this.shape}`,this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return o(this)}};d.style=a;export{d as ifx_icon_button};
