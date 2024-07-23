"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2138],{2138:(h,t,i)=>{i.r(t),i.d(t,{ifx_search_field:()=>a});var s=i(3639),r=i(1912);const a=class{constructor(e){(0,s.r)(this,e),this.ifxInput=(0,s.c)(this,"ifxInput",7),this.handleInput=()=>{this.value=this.inputElement.value,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.value="",this.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1,this.placeholder="Search..."}handleOutsideClick(e){e.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}focusInput(){this.inputElement.focus(),this.isFocused=!0}componentWillUpdate(){this.showDeleteIconInternalState=""!==this.value}render(){return(0,s.h)("div",{key:"9f838ce58d99444d6b9e32301826c41c9b3c0c0e","aria-label":"a search field for user input","aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},(0,s.h)("div",{key:"f61fb96b25fd55e26db0eb8c8404e153694a0281",class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},(0,s.h)("ifx-icon",{key:"a52ec6cc46a5a0cda09058c7ce0a288e4f8e44a9",icon:"search-16",class:"search-icon"}),(0,s.h)("input",{key:"baf0906b985c21b952689c0c4ce89ff52bc63871",ref:e=>this.inputElement=e,type:"text",onInput:()=>this.handleInput(),placeholder:this.placeholder,disabled:this.disabled,value:this.value}),this.showDeleteIcon&&this.showDeleteIconInternalState?(0,s.h)("ifx-icon",{icon:"cremove16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return"s"==`${this.size}`?"search-field__wrapper-s":""}getWrapperClassNames(){return(0,r.c)("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,this.isFocused?"focused":"")}static get watchers(){return{value:["valueWatcher"]}}};a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%;font-family:var(--ifx-font-family)}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}'}}]);