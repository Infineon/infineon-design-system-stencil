import{r,c as a,h as t,g as l}from"./index-CcPIQBvs.js";const s=".sidebar-filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.topbar-filter-search-wrapper{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family)}.topbar-filter-search-wrapper ifx-search-field{width:100%;}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}",f=s,h=class{constructor(e){r(this,e),this.ifxFilterSearchChange=a(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0,this.filterKey=void 0,this.showDeleteIcon=!1,this.filterOrientation="sidebar",this.placeholder=void 0}valueChanged(e){this.host.setAttribute("value",e.toString())}handleFilterSearchChange(e){const i=this.host.parentElement.querySelector(`ifx-filter-search[filter-name="${this.filterName}"]`);if(i&&i!==this.host)throw new Error(`A search filter with the name '${this.filterName}' already exists.`);this.filterValue=e.detail,this.showDeleteIcon=this.filterValue!=="",this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return t("div",{key:"3cc4123552bfeab400fcd8544d98099cd7bed5f5",class:`${this.filterOrientation==="sidebar"?"sidebar-filter-search-wrapper":"topbar-filter-search-wrapper"}`},t("div",{key:"1d8cd259139875d04bc4c57a91c999ebf49a5bf7",class:"filter-name"},this.filterName),t("ifx-search-field",{key:"ae27be70af0912cef341943008a036620e502bfc",placeholder:this.placeholder,"show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return l(this)}static get watchers(){return{value:["valueChanged"]}}};h.style=f;export{h as ifx_filter_search};
