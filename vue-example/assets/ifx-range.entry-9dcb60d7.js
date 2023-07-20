import{r as a,c as n,h as t}from"./index-6fe8e799.js";const r=':host{display:inline-block}.dot{display:inline-block;width:8px;height:8px;border-radius:50%}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-family:"Source Sans Pro";font-size:0.8125rem;color:#7d6f72;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#dcd5d7}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-range{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.ifx-range input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:linear-gradient(to right, #378375 0%, #378375 var(--value-percent, 0%), #ebe9e9 var(--value-percent, 0%), #ebe9e9 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-range input[type=range]:disabled{background:#dcd5d7;cursor:default}.ifx-range input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-webkit-slider-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-webkit-slider-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}.ifx-range input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-moz-range-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-moz-range-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}',s=class{constructor(e){a(this,e),this.valueChanged=n(this,"valueChanged",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0}handleInputChange(e){const i=e.target;this.value=parseInt(i.value),this.valueChanged.emit(this.value),this.updateValuePercent()}updateValuePercent(){if(this.inputRef){const e=(this.value-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent",`${e}%`)}}componentDidLoad(){this.updateValuePercent()}render(){return t("div",{class:"ifx-range"},this.leftText&&t("span",{class:`left-text${this.disabled?" disabled":""}`},this.leftText),this.leftIcon&&t("ifx-icon",{icon:this.leftIcon,class:`left-icon${this.disabled?" disabled":""}`}),t("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.value,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e)}),this.rightIcon&&t("ifx-icon",{icon:this.rightIcon,class:`right-icon${this.disabled?" disabled":""}`}),this.rightText&&t("span",{class:`right-text${this.disabled?" disabled":""}`},this.rightText),this.showPercentage&&t("span",{class:`percentage-display${this.disabled?" disabled":""}`},this.value,"%"))}};s.style=r;export{s as ifx_range};
