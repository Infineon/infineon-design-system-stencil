"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5050],{"./dist/esm/ifx-icon_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icon:()=>InfineonIconStencil,ifx_slider:()=>IfxSlider});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js"),_icons_af2bd2c4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-af2bd2c4.js");const InfineonIconStencil=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.consoleError=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(htmlString){const div=document.createElement("div");return div.innerHTML=htmlString,div.firstChild}convertHtmlToObject(htmlElement){return Array.from(htmlElement.attributes,(({name,value})=>({name,value}))).reduce(((acc,current)=>(acc[current.name]=current.value,acc)),{})}convertPathsToVnode(htmlPath){let svgPaths=[];const parentPath=this.convertHtmlToObject(htmlPath),parentPathToVnode=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",parentPath);if(svgPaths.push(parentPathToVnode),htmlPath.firstChild){const paths=htmlPath.querySelectorAll("path"),pathLength=htmlPath.querySelectorAll("path").length;for(let i=0;i<pathLength;i++){let pathToObject=this.convertHtmlToObject(paths[i]),objToVnode=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",pathToObject);svgPaths.push(objToVnode)}}return svgPaths}getSVG(svgPath){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...svgPath)}constructIcon(){if(this.ifxIcon){const htmlPath=this.convertStringToHtml(this.ifxIcon.svgContent),svgPath=this.convertPathsToVnode(htmlPath),SVG=this.getSVG(svgPath);return this.consoleError.emit(!1),SVG}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,_icons_af2bd2c4_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((_m,chr)=>chr)))}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"ed0c1e2ee6bcc28ffbac02aed5820f0c0056ab37"},this.constructIcon())}};InfineonIconStencil.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}";const IfxSlider=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.min=0,this.max=100,this.value=0,this.minValue=void 0,this.maxValue=void 0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.type="default",this.internalValue=0,this.internalMinValue=0,this.internalMaxValue=100}valueChanged(newValue){this.internalValue=newValue,this.updateValuePercent()}minValueChanged(newValue){this.internalMinValue=newValue,this.updateValuePercent()}maxValueChanged(newValue){this.internalMaxValue=newValue,this.updateValuePercent()}getRangeSliderWrapper(){return this.el.shadowRoot.querySelector(".range-slider__wrapper")}handleInputChangeOfRangeSlider(event){const target=event.target;parseInt(this.maxInputRef.value)-parseInt(this.minInputRef.value)<=0&&("max-slider"===target.id?this.maxInputRef.value=this.minInputRef.value:this.minInputRef.value=this.maxInputRef.value),"max-slider"===target.id?this.internalMaxValue=parseInt(this.maxInputRef.value):this.internalMinValue=parseInt(this.minInputRef.value),this.ifxChange.emit({minVal:this.internalMaxValue,maxVal:this.internalMinValue}),this.updateValuePercent()}handleOnMouseLeaveOfRangeSlider(event){const target=event.target,sliderWrapper=this.getRangeSliderWrapper();"max-slider"===target.id?sliderWrapper.insertBefore(this.maxInputRef,this.minInputRef):sliderWrapper.insertBefore(this.minInputRef,this.maxInputRef)}handleInputChange(event){const target=event.target;this.internalValue=parseInt(target.value),this.ifxChange.emit(this.internalValue),this.updateValuePercent()}updateValuePercent(){if("range"===this.type){if(this.minInputRef){const minPercent=(this.internalMinValue-this.min)/(this.max-this.min)*100;this.minInputRef.parentElement.style.setProperty("--min-value-percent",`${minPercent}%`)}if(this.maxInputRef){const maxPercent=(this.internalMaxValue-this.min)/(this.max-this.min)*100;this.maxInputRef.parentElement.style.setProperty("--max-value-percent",`${maxPercent}%`)}}else if(this.inputRef){const percent=(this.internalValue-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent",`${percent}%`)}}componentWillLoad(){this.internalValue=this.value,void 0!==this.minValue?this.internalMinValue=this.minValue:this.internalMinValue=this.min,void 0!==this.maxValue?this.internalMaxValue=this.maxValue:this.internalMaxValue=this.max}componentDidLoad(){this.updateValuePercent()}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"89dc1b870c372872c349a76ecc5509e348bfc110",class:"ifx-slider"},this.leftText&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"left-text"},this.leftText),this.leftIcon&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),"range"!==this.type?(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,ref:el=>this.inputRef=el,onInput:event=>this.handleInputChange(event),"aria-label":"a slider","aria-value":this.value,"aria-disabled":this.disabled}):(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-slider__wrapper","aria-label":"a range slider","aria-value":this.value,"aria-disabled":this.disabled},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:"min-slider",type:"range",min:this.min,max:this.max,value:this.internalMinValue,disabled:this.disabled,ref:el=>this.minInputRef=el,onInput:event=>this.handleInputChangeOfRangeSlider(event),onMouseUp:event=>this.handleOnMouseLeaveOfRangeSlider(event)}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:"max-slider",type:"range",min:this.min,max:this.max,value:this.internalMaxValue,disabled:this.disabled,ref:el=>this.maxInputRef=el,onInput:event=>this.handleInputChangeOfRangeSlider(event),onMouseUp:event=>this.handleOnMouseLeaveOfRangeSlider(event)})),this.rightIcon&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&"range"!==this.type&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"percentage-display"+(this.disabled?" disabled":"")},this.internalValue,"%"))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"],minValue:["minValueChanged"],maxValue:["maxValueChanged"]}}};IfxSlider.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}.ifx-slider .range-slider__wrapper{position:relative;width:129px;height:4px;display:flex;align-items:center;justify-content:center;margin:0px 2px;background:linear-gradient(to right, #EEEDED 0%, #EEEDED var(--min-value-percent, 100%), #0A8276 var(--min-value-percent, 100%), #0A8276 var(--max-value-percent, 100%), #EEEDED var(--max-value-percent, 100%), #EEEDED 100%)}.ifx-slider .range-slider__wrapper:has(input[type=range]:disabled){background:#BFBBBB}.ifx-slider .range-slider__wrapper input[type=range]{position:absolute;pointer-events:none;background:none}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-ms-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;border:none;background:none;width:100%}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-track{-webkit-appearance:none;border:none;background:none;width:100%}'}}]);