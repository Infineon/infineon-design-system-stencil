"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[9055],{9055:(e,t,i)=>{i.r(t),i.d(t,{ifx_set_filter:()=>s});var l=i(7770);const s=class{constructor(e){(0,l.r)(this,e),this.ifxFilterChange=(0,l.c)(this,"ifxFilterChange",7),this.filterName=void 0,this.filterLabel=void 0,this.placeholder=void 0,this.type="text",this.options=void 0,this.filterValues=[]}handleTextInputChange(e){const t=e.target.value;this.ifxFilterChange.emit({filterName:this.filterName,filterValues:[t],type:this.type})}handleSingleSelectChange(e){const t=e.detail.value;this.ifxFilterChange.emit({filterName:this.filterName,filterValues:[t],type:this.type})}handleMultiselectOptionChange(e){this.filterValues=e.detail,this.ifxFilterChange.emit({filterName:this.filterName,filterValues:this.filterValues,type:this.type})}render(){switch(this.type){case"text":return(0,l.h)("ifx-text-field",{error:!1,disabled:!1,placeholder:this.placeholder,onIfxInput:e=>this.handleTextInputChange(e)},this.filterLabel);case"single-select":return(0,l.h)("ifx-select",{placeholder:"true","search-enabled":"true","search-placeholder-value":"Search...",onIfxSelect:e=>this.handleSingleSelectChange(e),"ifx-placeholder-value":this.placeholder,"ifx-label":this.filterLabel,"ifx-options":this.options});case"multi-select":return(0,l.h)("ifx-multiselect",{label:this.filterLabel,placeholder:this.placeholder,options:this.options,onIfxSelect:e=>this.handleMultiselectOptionChange(e)});default:return null}}};s.style=":host{width:200px}"}}]);
//# sourceMappingURL=9055.2ca6fcf2.chunk.js.map