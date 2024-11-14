/*! For license information please see 2847.2794b4f2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2847],{"./dist/esm/ifx-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_button:()=>Button});var _index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-30c509de.js"),_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-72ac5051.js");const Button=class{constructor(hostRef){(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.handleClick=ev=>{if(this.el.shadowRoot){const parentForm=this.el.closest("form");if(parentForm)if(ev.preventDefault(),"reset"===this.type)this.resetClickHandler();else{const fakeButton=document.createElement("button");this.type&&(fakeButton.type=this.type),fakeButton.style.display="none",parentForm.appendChild(fakeButton),fakeButton.click(),fakeButton.remove()}}},this.variant="primary",this.theme="default",this.size="m",this.disabled=!1,this.internalHref=void 0,this.href=void 0,this.target="_self",this.type="button",this.fullWidth=!1,this.AriaLabel=void 0}setInternalHref(newValue){this.internalHref=newValue}async setFocus(){this.focusableElement.focus()}insertNativeButton(){this.nativeButton=document.createElement("button"),this.nativeButton.type=this.type,this.nativeButton.style.display="none",this.el.closest("form").appendChild(this.nativeButton)}handleFormAndInternalHref(){this.el.closest("form")?(this.el.href&&(this.el.internalHref=void 0),this.insertNativeButton()):this.internalHref=this.href}handleButtonWidth(){this.fullWidth?this.el.style.setProperty("--bw","100%"):this.el.style.setProperty("--bw","fit-content")}componentWillLoad(){this.handleFormAndInternalHref()}componentWillRender(){this.handleButtonWidth()}resetClickHandler(){this.el.closest("form").querySelectorAll("ifx-text-field, ifx-textarea").forEach((element=>{element.reset()}))}handleKeyDown(ev){(" "===ev.key||"Enter"===ev.key&&!this.disabled)&&this.focusableElement.click()}handleHostClick(event){!0===this.disabled&&event.stopImmediatePropagation()}handleFocus(event){this.disabled&&(event.preventDefault(),this.focusableElement.blur())}render(){return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"7c8fba0e57ae1cdfa075d8e165e694a5fc05b763"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"dd0d98ba6e5277087d390f5e297d445873826478",role:this.href?"link":"button",tabIndex:this.disabled?-1:0,ref:el=>this.focusableElement=el,class:this.getClassNames(),href:this.disabled?void 0:this.internalHref,target:this.target,onClick:this.handleClick,rel:"_blank"===this.target?"noopener noreferrer":void 0,onFocus:event=>this.handleFocus(event),"aria-disabled":this.disabled?"true":null,"aria-describedby":"danger"===this.theme?"Dangerous action":void 0,"aria-label":this.AriaLabel||void 0},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"acfbfb434c7b0f8705b31564a15f59f20c854036"})))}getVariantClass(){return"secondary"==`${this.variant}`?`secondary-${this.theme}`:"tertiary"==`${this.variant}`?`tertiary-${this.theme}`:`${this.theme}`}getSizeClass(){return"xs"==`${this.size}`?"xs":"s"==`${this.size}`?"s":"l"==`${this.size}`?"l":""}getClassNames(){return(0,_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__.c)("btn",this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{href:["setInternalHref"]}}};Button.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{vertical-align:bottom;display:inline-flex;width:var(--bw, fit-content)}.btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;font-weight:600;border-radius:1px;line-height:1.5rem;font-family:var(--ifx-font-family);font-style:normal;text-decoration:none;user-select:none;font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;width:var(--bw, fit-content)}.btn:not(.disabled){cursor:pointer}.btn.disabled{pointer-events:none}.btn-default{color:#FFFFFF;background-color:#0A8276}.btn-default:disabled,.btn-default.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-default{background-color:#FFFFFF;color:#0A8276;border:1px solid #0A8276}.btn-secondary-default:disabled,.btn-secondary-default.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-default{background-color:transparent;color:#0A8276}.btn-tertiary-default:disabled,.btn-tertiary-default.disabled{color:#BFBBBB;pointer-events:none}.btn-danger{color:#FFFFFF;background-color:#CD002F;border-color:#CD002F}.btn-danger:disabled,.btn-danger.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-danger{background-color:#FFFFFF;color:#CD002F;border:1px solid #CD002F}.btn-secondary-danger:disabled,.btn-secondary-danger.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-danger{background-color:transparent;color:#CD002F}.btn-tertiary-danger:disabled,.btn-tertiary-danger.disabled{background-color:#FFFFFF;color:#BFBBBB;pointer-events:none}.btn-inverse{color:#0A8276;background-color:#FFFFFF}.btn-inverse:disabled,.btn-inverse.disabled{opacity:1;background-color:#FFFFFF;color:#0A8276;pointer-events:none}.btn-secondary-inverse{color:#FFFFFF;border:1px solid #FFFFFF}.btn-secondary-inverse:disabled,.btn-secondary-inverse.disabled{border:1px solid #FFFFFF;color:#FFFFFF;pointer-events:none}.btn-tertiary-inverse{color:#FFFFFF}.btn-tertiary-inverse:disabled,.btn-tertiary-inverse.disabled{color:#FFFFFF;opacity:1;pointer-events:none}.btn ifx-icon:empty{display:none}.btn.btn-xs{font-size:0.875rem;height:32px;line-height:1rem}.btn.btn-s{font-size:0.875rem;height:36px;line-height:1.25rem}.btn.btn-l{font-size:1.25rem;height:48px;line-height:1.75rem}.btn.btn-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-default:not(:disabled,.disabled):hover{background-color:#08665C}.btn.btn-default:not(:disabled,.disabled):active,.btn.btn-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-default:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#08665C}.btn.btn-secondary-default:not(:disabled,.disabled):active,.btn.btn-secondary-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#9C216E}.btn.btn-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#A2001E}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-secondary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-danger:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#A2001E}.btn.btn-secondary-danger:not(:disabled,.disabled):active,.btn.btn-secondary-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-inverse:not(:disabled,.disabled):hover{background-color:#EEEDED}.btn.btn-inverse:not(:disabled,.disabled):active,.btn.btn-inverse:not(:disabled,.disabled).active{background-color:#BFBBBB}.btn.btn-secondary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-secondary-inverse:not(:disabled,.disabled):hover{color:#0A8276;background-color:#EEEDED}.btn.btn-secondary-inverse:not(:disabled,.disabled):active,.btn.btn-secondary-inverse:not(:disabled,.disabled).active{color:#0A8276;background-color:#BFBBBB}.btn.btn-tertiary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):hover{color:#08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):active,.btn.btn-tertiary-default:not(:disabled,.disabled).active{color:#06534B}.btn.btn-tertiary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):hover{color:#A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):active,.btn.btn-tertiary-danger:not(:disabled,.disabled).active{color:#900021}.btn.btn-tertiary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-tertiary-inverse:not(:disabled,.disabled):hover{color:#EEEDED}.btn.btn-tertiary-inverse:not(:disabled,.disabled):active,.btn.btn-tertiary-inverse:not(:disabled,.disabled).active{color:#BFBBBB}'},"./dist/esm/index-72ac5051.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classNames});var module,classnames={exports:{}};module=classnames,function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}();const classNames=classnames.exports}}]);