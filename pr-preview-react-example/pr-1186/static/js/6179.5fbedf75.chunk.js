"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[6179],{6179:(e,t,i)=>{i.r(t),i.d(t,{ifx_slider:()=>n});var a=i(7770);const n=class{constructor(e){(0,a.r)(this,e),this.ifxChange=(0,a.c)(this,"ifxChange",7),this.min=0,this.max=100,this.step=1,this.value=void 0,this.minValueHandle=void 0,this.maxValueHandle=void 0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.type="single",this.internalValue=0,this.percentage=0,this.internalMinValue=0,this.internalMaxValue=100}valueChanged(e){this.internalValue=e,this.updateValuePercent()}minValueChanged(e){this.internalMinValue=e,this.updateValuePercent()}maxValueChanged(e){this.internalMaxValue=e,this.updateValuePercent()}getRangeSliderWrapper(){return this.el.shadowRoot.querySelector(".range-slider__wrapper")}handleInputChangeOfRangeSlider(e){const t=e.target;parseInt(this.maxInputRef.value)-parseInt(this.minInputRef.value)<=0&&("max-slider"===t.id?this.maxInputRef.value=this.minInputRef.value:this.minInputRef.value=this.maxInputRef.value),"max-slider"===t.id?this.internalMaxValue=parseInt(this.maxInputRef.value):this.internalMinValue=parseInt(this.minInputRef.value),this.ifxChange.emit({minVal:this.internalMinValue,maxVal:this.internalMaxValue}),this.updateValuePercent()}handleOnMouseLeaveOfRangeSlider(e){const t=e.target,i=this.getRangeSliderWrapper();"max-slider"===t.id?i.insertBefore(this.maxInputRef,this.minInputRef):i.insertBefore(this.minInputRef,this.maxInputRef)}calculatePercentageValue(){const e=1*(this.internalValue-this.min),t=this.max-this.min;this.percentage=+parseFloat(String(e/t*100)).toFixed(2)}handleInputChange(e){const t=e.target;this.internalValue=parseInt(t.value),this.ifxChange.emit(this.internalValue),this.calculatePercentageValue(),this.updateValuePercent()}updateValuePercent(){if("double"===this.type){if(this.minInputRef){const e=(this.internalMinValue-this.min)/(this.max-this.min)*100;this.minInputRef.parentElement.style.setProperty("--min-value-percent","".concat(e,"%"))}if(this.maxInputRef){const e=(this.internalMaxValue-this.min)/(this.max-this.min)*100;this.maxInputRef.parentElement.style.setProperty("--max-value-percent","".concat(e,"%"))}}else this.inputRef&&this.inputRef.style.setProperty("--value-percent","".concat(this.percentage,"%"))}componentWillLoad(){void 0===this.value?this.internalValue=(this.max-this.min)/2:this.internalValue=Math.max(this.min,Math.min(this.max,this.value)),this.calculatePercentageValue(),void 0!==this.minValueHandle?this.internalMinValue=this.minValueHandle:this.internalMinValue=this.min,void 0!==this.maxValueHandle?this.internalMaxValue=this.maxValueHandle:this.internalMaxValue=this.max}componentDidLoad(){this.updateValuePercent()}render(){return(0,a.h)("div",{key:"78f1ecc9e24ff00579934341f2bcb3475d37246f",class:"ifx-slider"},this.leftText&&(0,a.h)("span",{class:"left-text"},this.leftText),this.leftIcon&&(0,a.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon".concat(this.disabled?" disabled":"")}),"double"!==this.type?(0,a.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,step:this.step,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e),"aria-label":"a slider","aria-value":this.value,"aria-disabled":this.disabled}):(0,a.h)("div",{class:"range-slider__wrapper","aria-label":"a range slider","aria-value":this.value,"aria-disabled":this.disabled},(0,a.h)("input",{id:"min-slider",type:"range",min:this.min,max:this.max,value:this.internalMinValue,disabled:this.disabled,ref:e=>this.minInputRef=e,onInput:e=>this.handleInputChangeOfRangeSlider(e),onMouseUp:e=>this.handleOnMouseLeaveOfRangeSlider(e)}),(0,a.h)("input",{id:"max-slider",type:"range",min:this.min,max:this.max,value:this.internalMaxValue,disabled:this.disabled,ref:e=>this.maxInputRef=e,onInput:e=>this.handleInputChangeOfRangeSlider(e),onMouseUp:e=>this.handleOnMouseLeaveOfRangeSlider(e)})),this.rightIcon&&(0,a.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon".concat(this.disabled?" disabled":"")}),this.rightText&&(0,a.h)("span",{class:"right-text".concat(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&"double"!==this.type&&(0,a.h)("span",{class:"percentage-display".concat(this.disabled?" disabled":"")},this.percentage,"%"))}get el(){return(0,a.g)(this)}static get watchers(){return{value:["valueChanged"],minValueHandle:["minValueChanged"],maxValueHandle:["maxValueChanged"]}}};n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}.ifx-slider .range-slider__wrapper{position:relative;width:129px;height:4px;display:flex;align-items:center;justify-content:center;margin:0px 2px;background:linear-gradient(to right, #EEEDED 0%, #EEEDED var(--min-value-percent, 100%), #0A8276 var(--min-value-percent, 100%), #0A8276 var(--max-value-percent, 100%), #EEEDED var(--max-value-percent, 100%), #EEEDED 100%)}.ifx-slider .range-slider__wrapper:has(input[type=range]:disabled){background:#BFBBBB}.ifx-slider .range-slider__wrapper input[type=range]{position:absolute;pointer-events:none;background:none}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-ms-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;border:none;background:none;width:100%}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-track{-webkit-appearance:none;border:none;background:none;width:100%}'}}]);
//# sourceMappingURL=6179.5fbedf75.chunk.js.map