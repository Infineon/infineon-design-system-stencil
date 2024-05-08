"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[393],{6393:function(e,t,i){i.r(t),i.d(t,{ifx_range:function(){return s}});var a=i(5671),n=i(9466),r=i(9813),s=function(){function e(t){(0,a.Z)(this,e),(0,r.r)(this,t),this.valueChanged=(0,r.c)(this,"valueChanged",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0}return(0,n.Z)(e,[{key:"handleInputChange",value:function(e){var t=e.target;this.value=parseInt(t.value),this.valueChanged.emit(this.value),this.updateValuePercent()}},{key:"updateValuePercent",value:function(){if(this.inputRef){var e=(this.value-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent","".concat(e,"%"))}}},{key:"componentDidLoad",value:function(){this.updateValuePercent()}},{key:"render",value:function(){var e=this;return(0,r.h)("div",{class:"ifx-range"},this.leftText&&(0,r.h)("span",{class:"left-text".concat(this.disabled?" disabled":"")},this.leftText),this.leftIcon&&(0,r.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon".concat(this.disabled?" disabled":"")}),(0,r.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.value,ref:function(t){return e.inputRef=t},onInput:function(t){return e.handleInputChange(t)}}),this.rightIcon&&(0,r.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon".concat(this.disabled?" disabled":"")}),this.rightText&&(0,r.h)("span",{class:"right-text".concat(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&(0,r.h)("span",{class:"percentage-display".concat(this.disabled?" disabled":"")},this.value,"%"))}}]),e}();s.style=':host{display:inline-block}.dot{display:inline-block;width:8px;height:8px;border-radius:50%}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-family:"Source Sans Pro";font-size:0.8125rem;color:#7d6f72;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#dcd5d7}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-range{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.ifx-range input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:linear-gradient(to right, #378375 0%, #378375 var(--value-percent, 0%), #ebe9e9 var(--value-percent, 0%), #ebe9e9 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-range input[type=range]:disabled{background:#dcd5d7;cursor:default}.ifx-range input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-webkit-slider-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-webkit-slider-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}.ifx-range input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-moz-range-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-moz-range-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}'}}]);
//# sourceMappingURL=393.bab96c87.chunk.js.map