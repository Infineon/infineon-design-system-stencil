import{r as s,h as r,g as o}from"./index-6a2b3aba.js";const i=".breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}",a=class{constructor(e){s(this,e),this.isLastItem=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(e){this.emittedElement=e.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(e,t,n){e.classList[t](n)}closeDropdownMenu(){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","show")}toggleDropdownMenu(){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","show")}handleLastItem(){const e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===e[e.length-1]?this.isLastItem=!0:this.isLastItem=!1}componentWillLoad(){this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentDidLoad(){const e=this.el.querySelector("ifx-dropdown-menu");if(e)e.isOpen=!0;else{const t=this.getMenuIconWrapper();this.handleClassList(t,"toggle","hide")}}render(){return r("li",{class:"breadcrumb-parent","aria-current":`${this.isLastItem?"page":""}`,onClick:()=>this.toggleDropdownMenu()},r("li",{class:"breadcrumb-wrapper"},r("slot",{name:"label"}),r("div",{class:"dropdown-menu"},r("slot",null))),!this.isLastItem&&r("span",{class:"breadcrumb-divider"},"/"))}get el(){return o(this)}};a.style=i;export{a as ifx_breadcrumb_item};
