"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[3712],{3712:(l,n,i)=>{i.r(n),i.d(n,{ifx_slider:()=>s});var t=i(5544);const s=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.internalValue=0}valueChanged(e){this.internalValue=e,this.updateValuePercent()}handleInputChange(e){this.internalValue=parseInt(e.target.value),this.ifxChange.emit(this.internalValue),this.updateValuePercent()}updateValuePercent(){this.inputRef&&this.inputRef.style.setProperty("--value-percent",(this.internalValue-this.min)/(this.max-this.min)*100+"%")}componentWillLoad(){this.internalValue=this.value}componentDidLoad(){this.updateValuePercent()}render(){return(0,t.h)("div",{class:"ifx-slider"},this.leftText&&(0,t.h)("span",{class:"left-text"},this.leftText),this.leftIcon&&(0,t.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),(0,t.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e)}),this.rightIcon&&(0,t.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,t.h)("span",{class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&(0,t.h)("span",{class:"percentage-display"+(this.disabled?" disabled":"")},this.internalValue,"%"))}static get watchers(){return{value:["valueChanged"]}}};s.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("./fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("./fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("./fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3", sans-serif}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}'}}]);