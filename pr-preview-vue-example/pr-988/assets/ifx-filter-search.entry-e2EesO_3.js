import{r,c as a,h as t,g as l}from"./index-CuPXhU9k.js";const s=".sidebar-filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.topbar-filter-search-wrapper{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family)}.topbar-filter-search-wrapper ifx-search-field{width:100%;}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}",h=s,f=class{constructor(e){r(this,e),this.ifxFilterSearchChange=a(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0,this.filterKey=void 0,this.showDeleteIcon=!1,this.filterOrientation="sidebar",this.placeholder=void 0}valueChanged(e){this.host.setAttribute("value",e.toString())}handleFilterSearchChange(e){const i=this.host.parentElement.querySelector(`ifx-filter-search[filter-name="${this.filterName}"]`);if(i&&i!==this.host)throw new Error(`A search filter with the name '${this.filterName}' already exists.`);this.filterValue=e.detail,this.showDeleteIcon=this.filterValue!=="",this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return t("div",{key:"03ad8f1c204ef4859d4824287e7625f1b17c821b",class:`${this.filterOrientation==="sidebar"?"sidebar-filter-search-wrapper":"topbar-filter-search-wrapper"}`},t("div",{key:"3243d6c454722fae3ecfc69a67e9a030fa6aa9d3",class:"filter-name"},this.filterName),t("ifx-search-field",{key:"76e22911865332eabe80106dbba338b5dc943c25",placeholder:this.placeholder,"show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return l(this)}static get watchers(){return{value:["valueChanged"]}}};f.style=h;export{f as ifx_filter_search};