import{r as s,c as a,h as t}from"./index-5Lhvdr6t.js";const r="",h=r,n=class{constructor(e){s(this,e),this.ifxFilterSelect=a(this,"ifxFilterSelect",7),this.filterName=void 0,this.filterLabel=void 0,this.placeholder=void 0,this.type="text",this.options=void 0,this.filterValues=[]}handleTextInputChange(e){const i=e.target.value;this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:[i],type:this.type})}handleSingleSelectChange(e){const l=e.detail.value;this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:[l],type:this.type})}handleMultiselectOptionChange(e){this.filterValues=e.detail,this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:this.filterValues,type:this.type})}render(){switch(this.type){case"text":return t("ifx-text-field",{error:!1,disabled:!1,placeholder:this.placeholder,onIfxInput:e=>this.handleTextInputChange(e)},this.filterLabel);case"single-select":return t("ifx-select",{placeholder:"true","search-enabled":"true","search-placeholder-value":"Search...",onIfxSelect:e=>this.handleSingleSelectChange(e),"ifx-placeholder-value":this.placeholder,"ifx-label":this.filterLabel,"ifx-options":this.options});case"multi-select":return t("ifx-multiselect",{label:this.filterLabel,placeholder:this.placeholder,options:this.options,onIfxSelect:e=>this.handleMultiselectOptionChange(e)});default:return null}}};n.style=h;export{n as ifx_set_filter};
