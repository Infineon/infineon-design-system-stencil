/*! For license information please see 4537.e7075d4f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4537],{"./dist/esm/_commonjsHelpers-e9b9b14e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}__webpack_require__.d(__webpack_exports__,{c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs})},"./dist/esm/ifx-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_button:()=>Button});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js"),_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-3c58b0c1.js");const Button=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.variant="primary",this.color="primary",this.size="m",this.disabled=!1,this.internalHref=void 0,this.href=void 0,this.target="_self"}setInternalHref(newValue){this.internalHref=newValue}async setFocus(){this.focusableElement.focus()}componentWillLoad(){this.el.closest("form")?(this.el.href&&(this.el.internalHref=void 0),this.nativeButton=document.createElement("button"),this.nativeButton.type="submit",this.nativeButton.style.display="none",this.el.closest("form").appendChild(this.nativeButton)):this.internalHref=this.href}handleClick(){this.nativeButton&&this.nativeButton.click()}render(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.a,null,(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{ref:el=>this.focusableElement=el,class:this.getClassNames(),href:this.disabled?void 0:this.internalHref,target:this.target,onClick:this.handleClick.bind(this),rel:"_blank"===this.target?"noopener noreferrer":void 0},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}getVariantClass(){return"secondary"==`${this.variant}`?`secondary-${this.color}`:"tertiary"==`${this.variant}`?`${this.color}-tertiary`:`${this.color}`}getSizeClass(){return"xs"==`${this.size}`?"xs":"s"==`${this.size}`?"s":"l"==`${this.size}`?"l":""}getClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)("btn",this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{href:["setInternalHref"]}}};Button.style='*{font-family:"Source Sans 3"}:host{vertical-align:bottom}.btn{display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:1.5rem;outline:none;font-family:"Source Sans 3";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#FFFFFF;background-color:#0A8276;border-color:#0A8276}.btn-secondary-primary{background-color:#FFFFFF;color:#0A8276;border-color:#0A8276}.btn-secondary{color:#FFFFFF;background-color:#9C216E;border-color:#9C216E}.btn-secondary-secondary{background-color:#FFFFFF;color:#9C216E;border-color:#9C216E}.btn-success{color:#1D1D1D;background-color:#4CA460;border-color:#4CA460}.btn-secondary-success{background-color:#FFFFFF;border-color:#4CA460}.btn-danger{color:#FFFFFF;background-color:#CD002F;border-color:#CD002F}.btn-secondary-danger{background-color:#FFFFFF;color:#CD002F;border-color:#CD002F}.btn-warning{color:#1D1D1D;background-color:#E16B25;border-color:#E16B25}.btn-secondary-warning{background-color:#FFFFFF;border-color:#E16B25}.btn ifx-icon:empty{display:none}.btn.btn-xs{font-size:0.875rem;height:32px;line-height:1rem}.btn.btn-s{font-size:0.875rem;height:36px;line-height:1.25rem}.btn.btn-l{font-size:1.25rem;height:48px;line-height:1.75rem}.btn.btn-primary:focus,.btn.btn-secondary-primary:focus,.btn.btn-secondary:focus,.btn.btn-secondary-secondary:focus,.btn.btn-success:focus,.btn.btn-secondary-success:focus,.btn.btn-danger:focus,.btn.btn-secondary-danger:focus,.btn.btn-warning:focus,.btn.btn-secondary-warning:focus,.btn.btn-tertiary:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-secondary-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-secondary-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-secondary-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-secondary-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-secondary-warning:focus-visible,.btn.btn-tertiary:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#BFBBBB;border-color:#BFBBBB;color:#FFFFFF}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#0A8276;border-color:#0A8276}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-secondary-primary:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#08665C;border-color:#08665C}.btn.btn-secondary-primary:not(:disabled,.disabled):active,.btn.btn-secondary-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#9C216E;border-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#9C216E;border-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#9C216E;border-color:#9C216E}.btn.btn-secondary-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-secondary-secondary:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#9C216E;border-color:#9C216E}.btn.btn-secondary-secondary:not(:disabled,.disabled):active,.btn.btn-secondary-secondary:not(:disabled,.disabled).active{background-color:#9C216E;border-color:#9C216E}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#4CA460;border-color:#4CA460}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#4CA460;border-color:#4CA460}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#4CA460;border-color:#4CA460}.btn.btn-secondary-success:not(:disabled,.disabled){color:#1D1D1D}.btn.btn-secondary-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-secondary-success:not(:disabled,.disabled):hover{background-color:#4CA460;border-color:#4CA460}.btn.btn-secondary-success:not(:disabled,.disabled):active,.btn.btn-secondary-success:not(:disabled,.disabled).active{background-color:#4CA460;border-color:#4CA460}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#CD002F;border-color:#CD002F}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#A2001E;border-color:#A2001E}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-secondary-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-secondary-danger:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#A2001E;border-color:#A2001E}.btn.btn-secondary-danger:not(:disabled,.disabled):active,.btn.btn-secondary-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#E16B25;border-color:#E16B25}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#E16B25;border-color:#E16B25}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#E16B25;border-color:#E16B25}.btn.btn-secondary-warning:not(:disabled,.disabled){color:#1D1D1D}.btn.btn-secondary-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-secondary-warning:not(:disabled,.disabled):hover{background-color:#E16B25;border-color:#E16B25}.btn.btn-secondary-warning:not(:disabled,.disabled):active,.btn.btn-secondary-warning:not(:disabled,.disabled).active{background-color:#E16B25;border-color:#E16B25}.btn.btn-primary-tertiary{background-color:transparent;color:#0A8276}.btn.btn-primary-tertiary:hover{color:#08665C}.btn.btn-primary-tertiary:active,.btn.btn-primary-tertiary.active{color:#06534B}.btn.btn-primary-tertiary:disabled,.btn.btn-primary-tertiary.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-secondary-tertiary{background-color:transparent;color:#9C216E}.btn.btn-secondary-tertiary:hover{color:#9C216E}.btn.btn-secondary-tertiary:active,.btn.btn-secondary-tertiary.active{color:#9C216E}.btn.btn-secondary-tertiary:disabled,.btn.btn-secondary-tertiary.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-success-tertiary{background-color:transparent;color:#4CA460}.btn.btn-success-tertiary:hover{color:#4CA460}.btn.btn-success-tertiary:active,.btn.btn-success-tertiary.active{color:#4CA460}.btn.btn-success-tertiary:disabled,.btn.btn-success-tertiary.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-danger-tertiary{background-color:transparent;color:#CD002F}.btn.btn-danger-tertiary:hover{color:#A2001E}.btn.btn-danger-tertiary:active,.btn.btn-danger-tertiary.active{color:#900021}.btn.btn-danger-tertiary:disabled,.btn.btn-danger-tertiary.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}.btn.btn-warning-tertiary{background-color:transparent;color:#E16B25}.btn.btn-warning-tertiary:hover{color:#E16B25}.btn.btn-warning-tertiary:active,.btn.btn-warning-tertiary.active{color:#E16B25}.btn.btn-warning-tertiary:disabled,.btn.btn-warning-tertiary.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#BFBBBB}'},"./dist/esm/index-3c58b0c1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=(0,__webpack_require__("./dist/esm/_commonjsHelpers-e9b9b14e.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);