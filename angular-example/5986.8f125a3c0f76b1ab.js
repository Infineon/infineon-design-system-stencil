"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5986],{5986:(c,i,l)=>{l.r(i),l.d(i,{ifx_set_filter:()=>r});var t=l(2916);const r=(()=>{let s=class{constructor(e){(0,t.r)(this,e),this.ifxFilterSelect=(0,t.c)(this,"ifxFilterSelect",7),this.type="text",this.filterValues=[]}handleTextInputChange(e){this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:[e.target.value],type:this.type})}handleSingleSelectChange(e){this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:[e.detail.value],type:this.type})}handleMultiselectOptionChange(e){this.filterValues=e.detail,this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:this.filterValues,type:this.type})}render(){switch(this.type){case"text":return(0,t.h)("ifx-text-field",{error:!1,disabled:!1,placeholder:this.placeholder,onIfxInput:e=>this.handleTextInputChange(e)},this.filterLabel);case"single-select":return(0,t.h)("ifx-select",{placeholder:"true","search-enabled":"true","search-placeholder-value":"Search...",onIfxSelect:e=>this.handleSingleSelectChange(e),"ifx-placeholder-value":this.placeholder,"ifx-label":this.filterLabel,"ifx-options":this.options});case"multi-select":return(0,t.h)("ifx-multiselect",{label:this.filterLabel,placeholder:this.placeholder,options:this.options,onIfxSelect:e=>this.handleMultiselectOptionChange(e)});default:return null}}};return s.style="",s})()}}]);