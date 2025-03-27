"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1010],{1010:(p,s,n)=>{n.r(s),n.d(s,{ifx_slider:()=>d});var i=n(1032);const d=(()=>{let r=class{constructor(e){(0,i.r)(this,e),this.ifxChange=(0,i.c)(this,"ifxChange",7),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.showPercentage=!1,this.type="single",this.internalValue=0,this.percentage=0,this.internalMinValue=0,this.internalMaxValue=100}valueChanged(e){this.internalValue=e,this.updateValuePercent()}minValueChanged(e){this.internalMinValue=e,this.updateValuePercent()}maxValueChanged(e){this.internalMaxValue=e,this.updateValuePercent()}getRangeSliderWrapper(){return this.el.shadowRoot.querySelector(".range-slider__wrapper")}handleInputChangeOfRangeSlider(e){const t=e.target;parseFloat(this.maxInputRef.value)-parseFloat(this.minInputRef.value)<=0&&("max-slider"===t.id?this.maxInputRef.value=this.minInputRef.value:this.minInputRef.value=this.maxInputRef.value),"max-slider"===t.id?this.internalMaxValue=parseFloat(this.maxInputRef.value):this.internalMinValue=parseFloat(this.minInputRef.value),this.ifxChange.emit({minVal:this.internalMinValue,maxVal:this.internalMaxValue}),this.updateValuePercent(),this.updateZIndexIfRangeSlider(t.id)}handleOnMouseLeaveOfRangeSlider(e){const t=e.target,a=this.getRangeSliderWrapper();"max-slider"===t.id?a.insertBefore(this.maxInputRef,this.minInputRef):a.insertBefore(this.minInputRef,this.maxInputRef)}calculatePercentageValue(){this.percentage=+parseFloat(String(1*(this.internalValue-this.min)/(this.max-this.min)*100)).toFixed(2)}handleInputChange(e){this.internalValue=parseFloat(e.target.value),this.ifxChange.emit(this.internalValue),this.calculatePercentageValue(),this.updateValuePercent()}roundToValidStep(e){const t=e-this.min,a=t%this.step;return a>=this.step/2?this.min+t+(this.step-a):this.min+t-a}updateValuePercent(){const e=this.max-this.min;if("double"===this.type){if(this.minInputRef){const a=1*(this.roundToValidStep(this.internalMinValue)-this.min)/e*100;this.minInputRef.parentElement.style.setProperty("--min-value-percent",`${a}%`)}if(this.maxInputRef){const a=1*(this.roundToValidStep(this.internalMaxValue)-this.min)/e*100;this.maxInputRef.parentElement.style.setProperty("--max-value-percent",`${a}%`)}}else if(this.inputRef){const t=1*(this.roundToValidStep(this.internalValue)-this.min);this.inputRef.style.setProperty("--value-percent",t/(this.max-this.min)*100+"%")}}updateZIndexIfRangeSlider(e=""){"max-slider"===e?(this.minInputRef.style.zIndex="1",this.maxInputRef.style.zIndex="2"):(this.minInputRef.style.zIndex="2",this.maxInputRef.style.zIndex="1")}componentWillLoad(){this.internalValue=void 0===this.value?(this.max-this.min)/2:Math.max(this.min,Math.min(this.max,this.value)),this.calculatePercentageValue(),this.internalMinValue=void 0!==this.minValueHandle?this.minValueHandle:this.min,this.internalMaxValue=void 0!==this.maxValueHandle?this.maxValueHandle:this.max}componentDidLoad(){this.updateValuePercent()}render(){return(0,i.h)("div",{key:"69946c370ab91e7f6c079bd843b32e1be44985bb",class:"ifx-slider"},this.leftText&&(0,i.h)("span",{key:"20d1ec4c8689c9aa64817d33be5731636262d514",class:"left-text"},this.leftText),this.leftIcon&&(0,i.h)("ifx-icon",{key:"691b4f00af0cf47b2886a0553b7d3ee39a432092",icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),"double"!==this.type?(0,i.h)("input",{type:"range",min:this.min,max:this.max,step:this.step,value:this.internalValue,disabled:this.disabled,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e),"aria-label":"a slider","aria-value":this.value,"aria-disabled":this.disabled}):(0,i.h)("div",{class:"range-slider__wrapper","aria-label":"a range slider","aria-value":this.value,"aria-disabled":this.disabled},(0,i.h)("input",{id:"min-slider",type:"range",min:this.min,max:this.max,step:this.step,value:this.internalMinValue,disabled:this.disabled,ref:e=>this.minInputRef=e,onInput:e=>this.handleInputChangeOfRangeSlider(e),onMouseUp:e=>this.handleOnMouseLeaveOfRangeSlider(e)}),(0,i.h)("input",{id:"max-slider",type:"range",min:this.min,max:this.max,step:this.step,value:this.internalMaxValue,disabled:this.disabled,ref:e=>this.maxInputRef=e,onInput:e=>this.handleInputChangeOfRangeSlider(e),onMouseUp:e=>this.handleOnMouseLeaveOfRangeSlider(e)})),this.rightIcon&&(0,i.h)("ifx-icon",{key:"61f8eb88af993d11b384ed562f08fc1c00dbf2c8",icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,i.h)("span",{key:"01ddb91c8989f5c069671e411ffa1d2e788c9cd5",class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&"double"!==this.type&&(0,i.h)("span",{key:"aecbab66dd57a9b716862a9c4a957ba35eb0856e",class:"percentage-display"+(this.disabled?" disabled":"")},this.percentage,"%"))}get el(){return(0,i.g)(this)}static get watchers(){return{value:["valueChanged"],minValueHandle:["minValueChanged"],maxValueHandle:["maxValueChanged"]}}};return r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}.ifx-slider .range-slider__wrapper{position:relative;width:129px;height:4px;display:flex;align-items:center;justify-content:center;margin:0px 2px;background:linear-gradient(to right, #EEEDED 0%, #EEEDED var(--min-value-percent, 100%), #0A8276 var(--min-value-percent, 100%), #0A8276 var(--max-value-percent, 100%), #EEEDED var(--max-value-percent, 100%), #EEEDED 100%)}.ifx-slider .range-slider__wrapper:has(input[type=range]:disabled){background:#BFBBBB}.ifx-slider .range-slider__wrapper input[type=range]{position:absolute;pointer-events:none;background:none}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-ms-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;border:none;background:none;width:100%}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-track{-webkit-appearance:none;border:none;background:none;width:100%}',r})()}}]);