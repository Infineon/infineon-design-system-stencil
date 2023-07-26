import{r as i,h as t,c as n,g as a}from"./index-22601340.js";import{c as r}from"./index-661c2409-85b2c879.js";const l='*{font-family:"Source Sans Pro"}.link{font-weight:400;font-size:16px;text-decoration:none;color:#1d1d1d}.link.bold{font-weight:600}.link.primary{color:#378375}.link.secondary{color:#ab377a}.link.warning{color:#f07f3c}.link.danger{color:#cd002f}.link.success{color:#aec067}.link.underline{text-decoration:underline}',p=class{constructor(e){i(this,e),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}render(){return t("a",{href:this.href,target:this.target,class:this.linkClassNames()},t("slot",null))}linkClassNames(){return r("link",this.color,this.bold&&"bold",this.underline&&"underline")}};p.style=l;const o='.search-input{background:#FFFFFF;flex-direction:row;align-items:center;flex:1;width:100%}.search-input.inside-dropdown{max-width:192px}.search-input .search-input__wrapper{height:40px;box-sizing:border-box;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%}.search-input .search-input__wrapper.search-input__wrapper-s{height:40px}.search-input .search-input__wrapper.search-input__wrapper-outline-light{border:1px solid #8D8786}.search-input .search-input__wrapper.search-input__wrapper-outline-dark{border:1px solid #3C3A39}.search-input .search-input__wrapper.search-input__wrapper-outline-green{border:1px solid #0A8276}.search-input .search-input__wrapper ::slotted(.search-icon){left:12px}.search-input .search-input__wrapper .delete-icon{right:12px}.search-input .search-input__wrapper input[type=text]{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%}.search-input .search-input__wrapper input[type=text]:focus{outline:none}.search-input .search-input__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-input .search-input__wrapper:has(input[disabled]){background-color:#EEEDED}',h=class{constructor(e){i(this,e),this.ifxInput=n(this,"ifxInput",7),this.handleInput=()=>{const s=this.inputElement.value;this.value=s,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.ifxInput.emit(null)},this.value="",this.width="100%",this.insideDropdown=!1,this.showDeleteIcon=!1,this.disabled=!1,this.borderColor=void 0,this.size=void 0}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}render(){return t("div",{class:this.getClassNames()},t("div",{class:this.getWrapperClassNames()},t("slot",{name:"search-icon"}),t("input",{ref:e=>this.inputElement=e,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon?t("ifx-icon",{icon:"delete-x-16",class:"delete-icon",onClick:this.handleDelete}):null))}getBorderClasses(){return`search-input__wrapper-outline-${this.borderColor}`}getSizeClass(){return`${this.size}`=="s"?"search-input__wrapper-s":""}getClassNames(){return r("search-input",{"inside-dropdown":this.insideDropdown})}getWrapperClassNames(){return r(`search-input__wrapper ${this.getBorderClasses()}`,`search-input__wrapper ${this.getSizeClass()}`,this.disabled?"disabled":"")}get el(){return a(this)}static get watchers(){return{value:["valueWatcher"]}}};h.style=o;export{p as ifx_link,h as ifx_search_input};
