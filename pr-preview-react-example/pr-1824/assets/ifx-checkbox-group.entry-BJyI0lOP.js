import{r as a,h as t,g as i}from"./index-BTckB5kE.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.checkbox-group-container{display:flex;flex-direction:column}.checkbox-group{display:flex;font-family:var(--ifx-font-family);gap:8px}.checkbox-group.horizontal{flex-direction:row;column-gap:12px}.checkbox-group.vertical{flex-direction:column;row-gap:12px}.group-label{font:400 0.75rem/1rem "Source Sans 3";margin-bottom:8px;text-align:left;text-underline-position:from-font;text-decoration-skip-ink:none}.caption{margin-top:8px;align-self:flex-start;display:flex;width:100%;column-gap:8px;justify-content:space-between;align-items:center}.caption.default{color:#1D1D1D}.caption.error{color:#CD002F}.caption-text{font:400 0.75rem/1rem "Source Sans 3";flex:1;text-align:left;text-underline-position:from-font;text-decoration-skip-ink:none}.caption-icon{flex:0;display:flex}',c=s,n=class{constructor(e){a(this,e),this.errorStates=new Map,this.alignment="vertical",this.groupLabelText="Group Label Text",this.hasErrors=!1,this.handleSlotChange=()=>{this.initializeState()}}handleCheckboxError(e){const o=e.target;o.tagName==="ifx-checkbox"&&(this.errorStates.set(o,e.detail),this.updateHasErrors())}async setGroupError(e){Array.from(this.el.querySelectorAll("ifx-checkbox")).forEach(r=>{r.error=e})}componentWillLoad(){this.initializeState()}initializeState(){this.errorStates.clear(),Array.from(this.el.querySelectorAll("ifx-checkbox")).forEach(o=>{this.errorStates.has(o)||this.errorStates.set(o,o.error||!1)}),this.updateHasErrors()}updateHasErrors(){this.hasErrors=Array.from(this.errorStates.values()).some(e=>e)}render(){return t("div",{key:"2f455a4fa40d089e1aafab0b669aa4f4ded80be0",class:"checkbox-group-container"},this.showGroupLabel?t("div",{class:"group-label"},this.groupLabelText," *"):"",t("div",{key:"eb6f16bf53e13620681c87eb7cb4062a37abd068",class:`checkbox-group ${this.alignment} ${this.size}`},t("slot",{key:"00ec08507a2ef1ff8e893b6c8b9aa917a7735224",onSlotchange:this.handleSlotChange})),this.showCaption?t("div",{class:`caption ${this.hasErrors?"error":"default"}`},this.showCaptionIcon?t("div",{class:"caption-icon"},t("ifx-icon",{icon:"c-info-16"})):"",t("div",{class:"caption-text"},this.captionText)):"")}static get formAssociated(){return!0}get el(){return i(this)}};n.style=c;export{n as ifx_checkbox_group};
