"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3174],{3174:(f,r,i)=>{i.r(r),i.d(r,{ifx_filter_search:()=>h});var e=i(221);const h=(()=>{let a=class{constructor(t){(0,e.r)(this,t),this.ifxFilterSearchChange=(0,e.c)(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0,this.filterKey=void 0,this.showDeleteIcon=!1,this.filterOrientation="sidebar",this.placeholder=void 0}valueChanged(t){this.host.setAttribute("value",t.toString())}handleFilterSearchChange(t){const l=this.host.parentElement.querySelector(`ifx-filter-search[filter-name="${this.filterName}"]`);if(l&&l!==this.host)throw new Error(`A search filter with the name '${this.filterName}' already exists.`);this.filterValue=t.detail,this.showDeleteIcon=""!==this.filterValue,this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return(0,e.h)("div",{key:"8cdd4193200169a952c6e555fee923e5b56c4704",class:"sidebar"===this.filterOrientation?"sidebar-filter-search-wrapper":"topbar-filter-search-wrapper"},(0,e.h)("div",{key:"a177bc89bac2793bd46a087e98418c5a95ab21ef",class:"filter-name"},this.filterName),(0,e.h)("ifx-search-field",{key:"40d03e426b30cb13974aba88e456d4dc930313e0",placeholder:this.placeholder,"show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return(0,e.g)(this)}static get watchers(){return{value:["valueChanged"]}}};return a.style=".sidebar-filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.topbar-filter-search-wrapper{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family)}.topbar-filter-search-wrapper ifx-search-field{width:100%;}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}",a})()}}]);