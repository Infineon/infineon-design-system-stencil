"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[8680],{8680:(d,s,n)=>{n.r(s),n.d(s,{ifx_breadcrumb_item:()=>o});var t=n(9525);const o=class{constructor(e){(0,t.r)(this,e),this.isLastItem=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(e){this.emittedElement=e.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(e,r,i){e.classList[r](i)}closeDropdownMenu(){const e=this.getDropdownMenu(),r=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(r,"remove","show")}toggleDropdownMenu(){const e=this.getDropdownMenu(),r=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(r,"toggle","show")}handleLastItem(){const e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.isLastItem=this.el===e[e.length-1]}componentWillLoad(){this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentDidLoad(){const e=this.el.querySelector("ifx-dropdown-menu");if(e)e.isOpen=!0;else{const r=this.getMenuIconWrapper();this.handleClassList(r,"toggle","hide")}}render(){return(0,t.h)("li",{class:"breadcrumb-parent","aria-current":this.isLastItem?"page":"",onClick:()=>this.toggleDropdownMenu()},(0,t.h)("li",{class:"breadcrumb-wrapper"},(0,t.h)("slot",{name:"label"}),(0,t.h)("div",{class:"dropdown-menu"},(0,t.h)("slot",null))),!this.isLastItem&&(0,t.h)("span",{class:"breadcrumb-divider"},"/"))}get el(){return(0,t.g)(this)}};o.style='*{font-family:"Source Sans 3"}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}'}}]);