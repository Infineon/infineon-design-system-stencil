/*! For license information please see 8927.6ad6f560.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[8927],{8927:(e,t,i)=>{i.r(t),i.d(t,{ifx_search_field:()=>a});var r=i(7770),s=i(9609);const a=class{constructor(e){(0,r.r)(this,e),this.ifxInput=(0,r.c)(this,"ifxInput",7),this.handleInput=()=>{const e=this.inputElement.value;this.value=e,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.value="",this.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1}handleOutsideClick(e){e.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}focusInput(){this.inputElement.focus(),this.isFocused=!0}componentWillUpdate(){""!==this.value?this.showDeleteIconInternalState=!0:this.showDeleteIconInternalState=!1}render(){return(0,r.h)("div",{key:"72a2db581fc856f091c2063d4bf0761cd46e8e12","aria-label":"a search field for user input","aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},(0,r.h)("div",{key:"ab36d2e5be8bbac136992ee8bee2494a2552144b",class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},(0,r.h)("ifx-icon",{key:"aeceea986cdcbba738c290284cc791d5131ef1dc",icon:"search-16",class:"search-icon"}),(0,r.h)("input",{key:"d4925c3fd0967fe90a6f9046518ac626635cb503",ref:e=>this.inputElement=e,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon&&this.showDeleteIconInternalState?(0,r.h)("ifx-icon",{icon:"cremove16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return"s"==="".concat(this.size)?"search-field__wrapper-s":""}getWrapperClassNames(){return(0,s.c)("search-field__wrapper","search-field__wrapper ".concat(this.getSizeClass()),"".concat(this.isFocused?"focused":""))}static get watchers(){return{value:["valueWatcher"]}}};a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%;font-family:var(--ifx-font-family)}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}'},9609:(e,t,i)=>{i.d(t,{c:()=>a});var r,s={exports:{}};r=s,function(){var e={}.hasOwnProperty;function t(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,i(r)))}return e}function i(i){if("string"===typeof i||"number"===typeof i)return i;if("object"!==typeof i)return"";if(Array.isArray(i))return t.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var r="";for(var a in i)e.call(i,a)&&i[a]&&(r=s(r,a));return r}function s(e,t){return t?e?e+" "+t:e+t:e}r.exports?(t.default=t,r.exports=t):window.classNames=t}();const a=s.exports}}]);
//# sourceMappingURL=8927.6ad6f560.chunk.js.map