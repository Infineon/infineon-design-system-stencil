/*! For license information please see 2782.f9024525.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2782],{"./dist/esm/_commonjsHelpers-e9b9b14e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}__webpack_require__.d(__webpack_exports__,{c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs})},"./dist/esm/ifx-icon-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icon_button:()=>IconButton});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js"),_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-3c58b0c1.js");const IconButton=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.variant=void 0,this.size=void 0,this.disabled=void 0,this.icon=void 0,this.href=void 0,this.target="_self",this.shape="round"}async setFocus(){this.focusableElement.focus()}componentWillLoad(){""===this.shape&&(this.shape="round")}render(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.a,null,this.href?(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{ref:el=>this.focusableElement=el,class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:"_blank"===this.target?"noopener noreferrer":void 0},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})):(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:this.getClassNames(),type:"button"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})))}getVariantClass(){return"secondary"==`${this.variant}`?"secondary":"tertiary"==`${this.variant}`?"tertiary":"primary"}getSizeClass(){return"xs"==`${this.size}`?"xs":"s"==`${this.size}`?"s":"l"==`${this.size}`?"l":""}getClassNames(){return(0,_index_3c58b0c1_js__WEBPACK_IMPORTED_MODULE_1__.c)("btn icon-button",`btn-${this.shape}`,this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};IconButton.style='.btn{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:1.5rem;outline:none;font-family:"Source Sans 3";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#FFFFFF;background-color:#0A8276}.btn-primary:disabled,.btn-primary.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary{color:#0A8276;background-color:#FFFFFF;border-color:#0A8276}.btn-secondary:disabled,.btn-secondary.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary{background-color:transparent;color:#1D1D1D}.btn-tertiary:disabled,.btn-tertiary.disabled{color:#BFBBBB;pointer-events:none}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px;padding:8px}.btn.icon-button.btn-l{width:48px;height:48px;padding:8px}.btn.btn-primary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C;color:#FFFFFF}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-tertiary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;color:#1D1D1D;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-tertiary:not(:disabled,.disabled):hover{color:#0A8276}.btn.btn-tertiary:not(:disabled,.disabled):active,.btn.btn-tertiary:not(:disabled,.disabled).active{color:#08665C}'},"./dist/esm/index-3c58b0c1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=(0,__webpack_require__("./dist/esm/_commonjsHelpers-e9b9b14e.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);