"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2138],{2138:(f,n,r)=>{r.r(n),r.d(n,{ifx_search_field:()=>a});var i=r(7518),c=r(1912);const a=(()=>{let o=class{constructor(s){(0,i.r)(this,s),this.ifxInput=(0,i.c)(this,"ifxInput",7),this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1,this.placeholder="Search...",this.maxlength=null,this.handleInput=()=>{this.value=this.inputElement.value,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.value="",this.ifxInput.emit(this.value)}}handleOutsideClick(s){s.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(s){s!==this.inputElement.value&&(this.inputElement.value=s)}focusInput(){this.inputElement.focus(),this.isFocused=!0}componentWillUpdate(){this.showDeleteIconInternalState=""!==this.value}render(){return(0,i.h)("div",{key:"97056685e044ef83e9da78455a25ffc2347c43b3","aria-label":"a search field for user input","aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},(0,i.h)("div",{key:"f7f004953a2687b6aa937d21847a43a8abfc06b9",class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},(0,i.h)("ifx-icon",{key:"49aa10a205a30704c2936bffc18dc2673dcc9ad3",icon:"search-16",class:"search-icon"}),(0,i.h)("input",{key:"2626ee1e512110afa75f5cb01219b874a8e0a9f1",ref:s=>this.inputElement=s,type:"text",onInput:()=>this.handleInput(),placeholder:this.placeholder,disabled:this.disabled,maxlength:this.maxlength,value:this.value}),this.showDeleteIcon&&this.showDeleteIconInternalState?(0,i.h)("ifx-icon",{icon:"cremove16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return"s"==`${this.size}`?"search-field__wrapper-s":""}getWrapperClassNames(){return(0,c.c)("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,this.isFocused?"focused":"")}static get watchers(){return{value:["valueWatcher"]}}};return o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%;font-family:var(--ifx-font-family)}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}',o})()},1912:(f,n,r)=>{r.d(n,{c:()=>c});var h,i={exports:{}};h=i,function(){var d={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=s(e,o(l)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)d.call(e,l)&&e[l]&&(t=s(t,l));return t}function s(e,t){return t?e?e+" "+t:e+t:e}h.exports?(a.default=a,h.exports=a):window.classNames=a}();const c=i.exports}}]);