import{r,c as a,h as t,g as l}from"./index-DNaUbqiz.js";const s=".sidebar-filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.topbar-filter-search-wrapper{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family)}.topbar-filter-search-wrapper ifx-search-field{width:100%;}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}",h=s,f=class{constructor(e){r(this,e),this.ifxFilterSearchChange=a(this,"ifxFilterSearchChange",7),this.disabled=!1,this.showDeleteIcon=!1,this.filterOrientation="sidebar"}valueChanged(e){this.host.setAttribute("value",e.toString())}handleFilterSearchChange(e){const i=this.host.parentElement.querySelector(`ifx-filter-search[filter-name="${this.filterName}"]`);if(i&&i!==this.host)throw new Error(`A search filter with the name '${this.filterName}' already exists.`);this.filterValue=e.detail,this.showDeleteIcon=this.filterValue!=="",this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return t("div",{key:"7b5ee1b95e95e19d2fc959c2a9ed59fa1d90a4e6",class:`${this.filterOrientation==="sidebar"?"sidebar-filter-search-wrapper":"topbar-filter-search-wrapper"}`},t("div",{key:"c7dfdabe9e9eb6dcea53361df02a2a5e4325f43f",class:"filter-name"},this.filterName),t("ifx-search-field",{key:"5a396959e4ab983a06796203a3efbcc608f1a16c",placeholder:this.placeholder,"show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return l(this)}static get watchers(){return{value:["valueChanged"]}}};f.style=h;export{f as ifx_filter_search};
