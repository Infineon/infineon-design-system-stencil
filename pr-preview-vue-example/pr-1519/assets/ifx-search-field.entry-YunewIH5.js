import{r as t,c as a,h as s}from"./index-D1iRlja6.js";import{c as l}from"./index-72ac5051-B1g_EHyb.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%;font-family:var(--ifx-font-family)}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}',o=r,n=class{constructor(e){t(this,e),this.ifxInput=a(this,"ifxInput",7),this.handleInput=()=>{const i=this.inputElement.value;this.value=i,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.value="",this.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1,this.placeholder="Search...",this.maxlength=null}handleOutsideClick(e){e.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}focusInput(){this.inputElement.focus(),this.isFocused=!0}componentWillUpdate(){this.value!==""?this.showDeleteIconInternalState=!0:this.showDeleteIconInternalState=!1}render(){return s("div",{key:"e20b94bb2b697b9d2781486284d82c824e6db33f","aria-label":"a search field for user input","aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},s("div",{key:"4c9499fc8fb1c776872e06bed1c34e1b9a6cf073",class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},s("ifx-icon",{key:"374f06964171fb11b5d2ab4218f7b9dd8d71316c",icon:"search-16",class:"search-icon"}),s("input",{key:"15be1f9c1bf82a4270460acad77c05ded57686f7",ref:e=>this.inputElement=e,type:"text",onInput:()=>this.handleInput(),placeholder:this.placeholder,disabled:this.disabled,maxlength:this.maxlength,value:this.value}),this.showDeleteIcon&&this.showDeleteIconInternalState?s("ifx-icon",{icon:"cremove16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return`${this.size}`=="s"?"search-field__wrapper-s":""}getWrapperClassNames(){return l("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,`${this.isFocused?"focused":""}`)}static get watchers(){return{value:["valueWatcher"]}}};n.style=o;export{n as ifx_search_field};
