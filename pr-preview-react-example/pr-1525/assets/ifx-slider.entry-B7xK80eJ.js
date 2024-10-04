import{r,c as s,h as a,g as l}from"./index-Cirexk2R.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}.ifx-slider .range-slider__wrapper{position:relative;width:129px;height:4px;display:flex;align-items:center;justify-content:center;margin:0px 2px;background:linear-gradient(to right, #EEEDED 0%, #EEEDED var(--min-value-percent, 100%), #0A8276 var(--min-value-percent, 100%), #0A8276 var(--max-value-percent, 100%), #EEEDED var(--max-value-percent, 100%), #EEEDED 100%)}.ifx-slider .range-slider__wrapper:has(input[type=range]:disabled){background:#BFBBBB}.ifx-slider .range-slider__wrapper input[type=range]{position:absolute;pointer-events:none;background:none}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-ms-thumb{-webkit-appearance:none;border:none;pointer-events:auto;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider .range-slider__wrapper input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;border:none;background:none;width:100%}.ifx-slider .range-slider__wrapper input[type=range]::-moz-range-track{-webkit-appearance:none;border:none;background:none;width:100%}',h=d,p=class{constructor(e){r(this,e),this.ifxChange=s(this,"ifxChange",7),this.min=0,this.max=100,this.step=1,this.value=void 0,this.minValueHandle=void 0,this.maxValueHandle=void 0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.type="single",this.internalValue=0,this.percentage=0,this.internalMinValue=0,this.internalMaxValue=100}valueChanged(e){this.internalValue=e,this.updateValuePercent()}minValueChanged(e){this.internalMinValue=e,this.updateValuePercent()}maxValueChanged(e){this.internalMaxValue=e,this.updateValuePercent()}getRangeSliderWrapper(){return this.el.shadowRoot.querySelector(".range-slider__wrapper")}handleInputChangeOfRangeSlider(e){const t=e.target;parseFloat(this.maxInputRef.value)-parseFloat(this.minInputRef.value)<=0&&(t.id==="max-slider"?this.maxInputRef.value=this.minInputRef.value:this.minInputRef.value=this.maxInputRef.value),t.id==="max-slider"?this.internalMaxValue=parseFloat(this.maxInputRef.value):this.internalMinValue=parseFloat(this.minInputRef.value),this.ifxChange.emit({minVal:this.internalMinValue,maxVal:this.internalMaxValue}),this.updateValuePercent()}handleOnMouseLeaveOfRangeSlider(e){const t=e.target,i=this.getRangeSliderWrapper();t.id==="max-slider"?i.insertBefore(this.maxInputRef,this.minInputRef):i.insertBefore(this.minInputRef,this.maxInputRef)}calculatePercentageValue(){const e=(this.internalValue-this.min)*1,t=this.max-this.min;this.percentage=+parseFloat(String(e/t*100)).toFixed(2)}handleInputChange(e){const t=e.target;this.internalValue=parseFloat(t.value),this.ifxChange.emit(this.internalValue),this.calculatePercentageValue(),this.updateValuePercent()}roundToValidStep(e){const t=e-this.min,i=t%this.step;return i>=this.step/2?this.min+t+(this.step-i):this.min+t-i}updateValuePercent(){const e=this.max-this.min;if(this.type==="double"){if(this.minInputRef){const i=(this.roundToValidStep(this.internalMinValue)-this.min)*1/e*100;this.minInputRef.parentElement.style.setProperty("--min-value-percent",`${i}%`)}if(this.maxInputRef){const i=(this.roundToValidStep(this.internalMaxValue)-this.min)*1/e*100;this.maxInputRef.parentElement.style.setProperty("--max-value-percent",`${i}%`)}}else if(this.inputRef){const t=(this.roundToValidStep(this.internalValue)-this.min)*1,i=this.max-this.min,n=t/i*100;this.inputRef.style.setProperty("--value-percent",`${n}%`)}}componentWillLoad(){this.value===void 0?this.internalValue=(this.max-this.min)/2:this.internalValue=Math.max(this.min,Math.min(this.max,this.value)),this.calculatePercentageValue(),this.minValueHandle!==void 0?this.internalMinValue=this.minValueHandle:this.internalMinValue=this.min,this.maxValueHandle!==void 0?this.internalMaxValue=this.maxValueHandle:this.internalMaxValue=this.max}componentDidLoad(){this.updateValuePercent()}render(){return a("div",{key:"a43cedb2f8a118f8a6a86d1bdaa0becb7dc59676",class:"ifx-slider"},this.leftText&&a("span",{key:"c013fdd2754317d98ea6882c636f44f00ef49f3a",class:"left-text"},this.leftText),this.leftIcon&&a("ifx-icon",{key:"dd9b43a9ca925b5e97029e70f46b1907f1ca6b54",icon:this.leftIcon,class:`left-icon${this.disabled?" disabled":""}`}),this.type!=="double"?a("input",{type:"range",min:this.min,max:this.max,step:this.step,value:this.internalValue,disabled:this.disabled,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e),"aria-label":"a slider","aria-value":this.value,"aria-disabled":this.disabled}):a("div",{class:"range-slider__wrapper","aria-label":"a range slider","aria-value":this.value,"aria-disabled":this.disabled},a("input",{id:"min-slider",type:"range",min:this.min,max:this.max,step:this.step,value:this.internalMinValue,disabled:this.disabled,ref:e=>this.minInputRef=e,onInput:e=>this.handleInputChangeOfRangeSlider(e),onMouseUp:e=>this.handleOnMouseLeaveOfRangeSlider(e)}),a("input",{id:"max-slider",type:"range",min:this.min,max:this.max,step:this.step,value:this.internalMaxValue,disabled:this.disabled,ref:e=>this.maxInputRef=e,onInput:e=>this.handleInputChangeOfRangeSlider(e),onMouseUp:e=>this.handleOnMouseLeaveOfRangeSlider(e)})),this.rightIcon&&a("ifx-icon",{key:"133d2a11468ae3e1c48b3aa543ab43a3d9de3735",icon:this.rightIcon,class:`right-icon${this.disabled?" disabled":""}`}),this.rightText&&a("span",{key:"9e28405ffc91d044fbc2ae178c9f004f29fd5a19",class:`right-text${this.disabled?" disabled":""}`},this.rightText),this.showPercentage&&this.type!=="double"&&a("span",{key:"a54a45df4a23867d2764301d93595ef6ef6891f3",class:`percentage-display${this.disabled?" disabled":""}`},this.percentage,"%"))}get el(){return l(this)}static get watchers(){return{value:["valueChanged"],minValueHandle:["minValueChanged"],maxValueHandle:["maxValueChanged"]}}};p.style=h;export{p as ifx_slider};
