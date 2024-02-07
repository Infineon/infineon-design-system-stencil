/*! For license information please see 3600.d2948c85.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[3600],{2e3:(e,t,n)=>{function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}n.d(t,{c:()=>r,g:()=>o})},3600:(e,t,n)=>{n.r(t),n.d(t,{ifx_button:()=>a});var o=n(2216),r=n(9400);const a=class{constructor(e){(0,o.r)(this,e),this.handleClick=e=>{if(this.el.shadowRoot){const t=this.el.closest("form");if(t)if(e.preventDefault(),"reset"===this.type)this.resetClickHandler();else{const e=document.createElement("button");this.type&&(e.type=this.type),e.style.display="none",t.appendChild(e),e.click(),e.remove()}}},this.variant="primary",this.theme="default",this.size="m",this.disabled=!1,this.internalHref=void 0,this.href=void 0,this.target="_self",this.type="button",this.fullWidth=!1}setInternalHref(e){this.internalHref=e}async setFocus(){this.focusableElement.focus()}insertNativeButton(){this.nativeButton=document.createElement("button"),this.nativeButton.type=this.type,this.nativeButton.style.display="none",this.el.closest("form").appendChild(this.nativeButton)}handleFormAndInternalHref(){this.el.closest("form")?(this.el.href&&(this.el.internalHref=void 0),this.insertNativeButton()):this.internalHref=this.href}handleButtonWidth(){this.fullWidth?this.el.style.setProperty("--bw","100%"):this.el.style.setProperty("--bw","fit-content")}componentWillLoad(){this.handleFormAndInternalHref()}componentWillRender(){this.handleButtonWidth()}resetClickHandler(){this.el.closest("form").querySelectorAll("ifx-text-field").forEach((e=>{e.reset()}))}handleKeyDown(e){"Enter"!==e.key||this.disabled||this.handleClick(e)}handleHostClick(e){!0===this.disabled&&e.stopImmediatePropagation()}handleFocus(e){this.disabled&&(e.preventDefault(),this.focusableElement.blur())}render(){return(0,o.h)(o.a,null,(0,o.h)("a",{tabIndex:0,ref:e=>this.focusableElement=e,class:this.getClassNames(),href:this.disabled?void 0:this.internalHref,target:this.target,onClick:this.handleClick,rel:"_blank"===this.target?"noopener noreferrer":void 0,onFocus:e=>this.handleFocus(e),"aria-disabled":this.disabled,"aria-labelledby":"label"},(0,o.h)("slot",null)))}getVariantClass(){return"secondary"==="".concat(this.variant)?"secondary-".concat(this.theme):"tertiary"==="".concat(this.variant)?"tertiary-".concat(this.theme):"".concat(this.theme)}getSizeClass(){return"xs"==="".concat(this.size)?"xs":"s"==="".concat(this.size)?"s":"l"==="".concat(this.size)?"l":""}getClassNames(){return(0,r.c)("btn",this.size&&"btn-".concat(this.getSizeClass()),"btn-".concat(this.getVariantClass()),this.disabled?"disabled":"")}get el(){return(0,o.g)(this)}static get watchers(){return{href:["setInternalHref"]}}};a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{vertical-align:bottom;display:inline-flex;width:var(--bw, fit-content)}.btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;font-weight:600;border-radius:1px;line-height:1.5rem;font-family:var(--ifx-font-family);font-style:normal;text-decoration:none;user-select:none;font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;width:var(--bw, fit-content)}.btn:not(.disabled){cursor:pointer}.btn.disabled{pointer-events:none}.btn-default{color:#FFFFFF;background-color:#0A8276}.btn-default:disabled,.btn-default.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-default{background-color:#FFFFFF;color:#0A8276;border:1px solid #0A8276}.btn-secondary-default:disabled,.btn-secondary-default.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-default{background-color:transparent;color:#0A8276}.btn-tertiary-default:disabled,.btn-tertiary-default.disabled{color:#BFBBBB;pointer-events:none}.btn-danger{color:#FFFFFF;background-color:#CD002F;border-color:#CD002F}.btn-danger:disabled,.btn-danger.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-danger{background-color:#FFFFFF;color:#CD002F;border:1px solid #CD002F}.btn-secondary-danger:disabled,.btn-secondary-danger.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-danger{background-color:transparent;color:#CD002F}.btn-tertiary-danger:disabled,.btn-tertiary-danger.disabled{background-color:#FFFFFF;color:#BFBBBB;pointer-events:none}.btn-inverse{color:#0A8276;background-color:#FFFFFF}.btn-inverse:disabled,.btn-inverse.disabled{opacity:1;background-color:#FFFFFF;color:#0A8276;pointer-events:none}.btn-secondary-inverse{color:#FFFFFF;border:1px solid #FFFFFF}.btn-secondary-inverse:disabled,.btn-secondary-inverse.disabled{border:1px solid #FFFFFF;color:#FFFFFF;pointer-events:none}.btn-tertiary-inverse{color:#FFFFFF}.btn-tertiary-inverse:disabled,.btn-tertiary-inverse.disabled{color:#FFFFFF;opacity:1;pointer-events:none}.btn ifx-icon:empty{display:none}.btn.btn-xs{font-size:0.875rem;height:32px;line-height:1rem}.btn.btn-s{font-size:0.875rem;height:36px;line-height:1.25rem}.btn.btn-l{font-size:1.25rem;height:48px;line-height:1.75rem}.btn.btn-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-default:not(:disabled,.disabled):hover{background-color:#08665C}.btn.btn-default:not(:disabled,.disabled):active,.btn.btn-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-default:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#08665C}.btn.btn-secondary-default:not(:disabled,.disabled):active,.btn.btn-secondary-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#9C216E}.btn.btn-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#A2001E}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-secondary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-danger:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#A2001E}.btn.btn-secondary-danger:not(:disabled,.disabled):active,.btn.btn-secondary-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-inverse:not(:disabled,.disabled):hover{background-color:#EEEDED}.btn.btn-inverse:not(:disabled,.disabled):active,.btn.btn-inverse:not(:disabled,.disabled).active{background-color:#BFBBBB}.btn.btn-secondary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-secondary-inverse:not(:disabled,.disabled):hover{color:#0A8276;background-color:#EEEDED}.btn.btn-secondary-inverse:not(:disabled,.disabled):active,.btn.btn-secondary-inverse:not(:disabled,.disabled).active{color:#0A8276;background-color:#BFBBBB}.btn.btn-tertiary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):hover{color:#08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):active,.btn.btn-tertiary-default:not(:disabled,.disabled).active{color:#06534B}.btn.btn-tertiary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):hover{color:#A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):active,.btn.btn-tertiary-danger:not(:disabled,.disabled).active{color:#900021}.btn.btn-tertiary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-tertiary-inverse:not(:disabled,.disabled):hover{color:#EEEDED}.btn.btn-tertiary-inverse:not(:disabled,.disabled):active,.btn.btn-tertiary-inverse:not(:disabled,.disabled).active{color:#BFBBBB}'},9400:(e,t,n)=>{n.d(t,{c:()=>o});var o=(0,n(2e3).c)((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,o(n)))}return e}function o(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var a in e)t.call(e,a)&&e[a]&&(o=r(o,a));return o}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}))}}]);
//# sourceMappingURL=3600.d2948c85.chunk.js.map