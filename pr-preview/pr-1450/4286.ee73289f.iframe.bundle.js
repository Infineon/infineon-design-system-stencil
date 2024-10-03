"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4286],{"./dist/esm/ifx-slider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_slider:()=>IfxSlider});var _index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3655ed9e.js");const IfxSlider=class{constructor(hostRef){(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.min=0,this.max=100,this.step=1,this.value=void 0,this.minValueHandle=void 0,this.maxValueHandle=void 0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.type="single",this.internalValue=0,this.percentage=0,this.internalMinValue=0,this.internalMaxValue=100}valueChanged(newValue){this.internalValue=newValue,this.updateValuePercent()}minValueChanged(newValue){this.internalMinValue=newValue,this.updateValuePercent()}maxValueChanged(newValue){this.internalMaxValue=newValue,this.updateValuePercent()}getRangeSliderWrapper(){return this.el.shadowRoot.querySelector(".range-slider__wrapper")}handleInputChangeOfRangeSlider(event){const target=event.target;parseFloat(this.maxInputRef.value)-parseFloat(this.minInputRef.value)<=0&&("max-slider"===target.id?this.maxInputRef.value=this.minInputRef.value:this.minInputRef.value=this.maxInputRef.value),"max-slider"===target.id?this.internalMaxValue=parseFloat(this.maxInputRef.value):this.internalMinValue=parseFloat(this.minInputRef.value),this.ifxChange.emit({minVal:this.internalMinValue,maxVal:this.internalMaxValue}),this.updateValuePercent()}handleOnMouseLeaveOfRangeSlider(event){const target=event.target,sliderWrapper=this.getRangeSliderWrapper();"max-slider"===target.id?sliderWrapper.insertBefore(this.maxInputRef,this.minInputRef):sliderWrapper.insertBefore(this.minInputRef,this.maxInputRef)}calculatePercentageValue(){const num=1*(this.internalValue-this.min),den=this.max-this.min;this.percentage=+parseFloat(String(num/den*100)).toFixed(2)}handleInputChange(event){const target=event.target;this.internalValue=parseFloat(target.value),this.ifxChange.emit(this.internalValue),this.calculatePercentageValue(),this.updateValuePercent()}roundToValidStep(value){const relativeValue=value-this.min,remainder=relativeValue%this.step;return remainder>=this.step/2?this.min+relativeValue+(this.step-remainder):this.min+relativeValue-remainder}updateValuePercent(){const den=this.max-this.min;if("double"===this.type){if(this.minInputRef){const minPercent=1*(this.roundToValidStep(this.internalMinValue)-this.min)/den*100;this.minInputRef.parentElement.style.setProperty("--min-value-percent",`${minPercent}%`)}if(this.maxInputRef){const maxPercent=1*(this.roundToValidStep(this.internalMaxValue)-this.min)/den*100;this.maxInputRef.parentElement.style.setProperty("--max-value-percent",`${maxPercent}%`)}}else if(this.inputRef){const percentage=1*(this.roundToValidStep(this.internalValue)-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent",`${percentage}%`)}}componentWillLoad(){void 0===this.value?this.internalValue=(this.max-this.min)/2:this.internalValue=Math.max(this.min,Math.min(this.max,this.value)),this.calculatePercentageValue(),void 0!==this.minValueHandle?this.internalMinValue=this.minValueHandle:this.internalMinValue=this.min,void 0!==this.maxValueHandle?this.internalMaxValue=this.maxValueHandle:this.internalMaxValue=this.max}componentDidLoad(){this.updateValuePercent()}render(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1e9374f68b1fd88cda89d13bda0cbea352a4fca7",class:"ifx-slider"},this.leftText&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d4deacccd1fa8cf9e5628faf7baeaa071e7ce16e",class:"left-text"},this.leftText),this.leftIcon&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"d0afeb20bb432bcadc65bc1803f6210650b5c58d",icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),"double"!==this.type?(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"range",min:this.min,max:this.max,step:this.step,value:this.internalValue,disabled:this.disabled,ref:el=>this.inputRef=el,onInput:event=>this.handleInputChange(event),"aria-label":"a slider","aria-value":this.value,"aria-disabled":this.disabled}):(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-slider__wrapper","aria-label":"a range slider","aria-value":this.value,"aria-disabled":this.disabled},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:"min-slider",type:"range",min:this.min,max:this.max,step:this.step,value:this.internalMinValue,disabled:this.disabled,ref:el=>this.minInputRef=el,onInput:event=>this.handleInputChangeOfRangeSlider(event),onMouseUp:event=>this.handleOnMouseLeaveOfRangeSlider(event)}),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:"max-slider",type:"range",min:this.min,max:this.max,step:this.step,value:this.internalMaxValue,disabled:this.disabled,ref:el=>this.maxInputRef=el,onInput:event=>this.handleInputChangeOfRangeSlider(event),onMouseUp:event=>this.handleOnMouseLeaveOfRangeSlider(event)})),this.rightIcon&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"b5af77c727aa97336e799385b40ee7978b0802aa",icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d5ab6bd1a077ae7be8f27ff3a38dafa69c0d50f4",class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&"double"!==this.type&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"6e7af3c879e6f76a4497df95fc1b5a726d536ea6",class:"percentage-display"+(this.disabled?" disabled":"")},this.percentage,"%"))}get el(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"],minValueHandle:["minValueChanged"],maxValueHandle:["maxValueChanged"]}}};IfxSlider.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}.ifx-slider .range-slider__wrapper{position:relative;width:129px;height:4px;display:flex;align-items:center;justify-content:center;margin:0px 2px;background:linear-gradient(to right, #EEEDED 0%, #EEEDED var(--min-value-percent, 100%), #0A8276 var(--min-value-percent, 100%), #0A8276 var(--max-value-percent, 100%), #EEEDED var(--max-value-percent, 100%), #EEEDED 100%)}.ifx-slider .range-slider__wrapper:has(input[type=range]:disabled){background:#BFBBBB}.ifx-slider .range-slider__wrapper input[type=range]{position:absolute;pointer-events:none;background:none}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-ms-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;border:none;background:none;width:100%}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-track{-webkit-appearance:none;border:none;background:none;width:100%}'}}]);