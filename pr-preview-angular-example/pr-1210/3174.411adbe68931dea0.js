"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3174],{3174:(s,a,i)=>{i.r(a),i.d(a,{ifx_filter_search:()=>l});var e=i(3415);const l=class{constructor(t){(0,e.r)(this,t),this.ifxFilterSearchChange=(0,e.c)(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0}valueChanged(t){this.host.setAttribute("value",t.toString())}handleFilterSearchChange(t){this.filterValue=t.detail,this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue})}render(){return(0,e.h)("div",{key:"6dc51b042dbb8f6db94cb50201a9d3ba85bab528",class:"filter-search-wrapper"},(0,e.h)("div",{key:"2b8441c143f088a1fc11e06ac3782f7add6075e6",class:"filter-name"},this.filterName),(0,e.h)("ifx-search-field",{key:"14ab3e3dce99c81b607186f82539294d17bef0db",disabled:this.disabled,value:this.filterValue}))}get host(){return(0,e.g)(this)}static get watchers(){return{value:["valueChanged"]}}};l.style=".filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}"}}]);