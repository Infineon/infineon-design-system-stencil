"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3680],{3680:(p,o,r)=>{r.r(o),r.d(o,{ifx_breadcrumb_item:()=>i});var n=r(6821);const i=(()=>{let s=class{constructor(e){(0,n.r)(this,e),this.isLastItem=!1,this.hasDropdownMenu=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}handleKeyDown(e){"Enter"===e.key||" "===e.key?this.toggleDropdownMenu():"Escape"===e.key&&this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(e){this.emittedElement=e.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(e,t,d){e.classList[t](d)}closeDropdownMenu(){if(this.hasDropdownMenu){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","show")}}toggleDropdownMenu(){if(this.hasDropdownMenu){const e=this.getDropdownMenu(),t=this.getMenuIconWrapper();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","show")}}isDropdownMenuOpen(){const e=this.getDropdownMenu();return this.hasDropdownMenu&&e&&e.classList.contains("open")}handleLastItem(){const e=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.isLastItem=this.el===e[e.length-1]}generateUniqueId(e="id"){return`${e}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("breadcrumb-dropdown")),this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentWillRender(){this.setHasDropdownMenuState()}setHasDropdownMenuState(){const e=this.getIfxDropdownMenuComponent();e&&(this.hasDropdownMenu=!!e)}getIfxDropdownMenuComponent(){return this.el.querySelector("ifx-dropdown-menu")}componentDidLoad(){const e=this.getIfxDropdownMenuComponent();if(this.hasDropdownMenu)e.isOpen=!0;else{const t=this.getMenuIconWrapper();this.handleClassList(t,"toggle","hide")}}render(){return(0,n.h)("li",{key:"5779bbe0854a084c33c1bb535655fe484165784e",class:"breadcrumb-parent","aria-current":this.isLastItem?"page":""},(0,n.h)("li",{key:"63e956424dda4002a84c7da17bfe42b3f7f830b0",role:"button",tabindex:this.hasDropdownMenu?0:-1,class:"breadcrumb-wrapper",onClick:()=>this.toggleDropdownMenu(),"aria-controls":this.uniqueId,"aria-haspopup":"menu","aria-label":"Toggle dropdown menu"},(0,n.h)("slot",{key:"14f66501d9ac8efc9ff9e6b771757e30c70814a6",name:"label"}),(0,n.h)("div",{key:"9620ab0608dc5c74aa39fe321a332421ee4c76b3",id:this.uniqueId,class:"dropdown-menu","aria-expanded":this.isDropdownMenuOpen(),"aria-label":"Dropdown menu"},(0,n.h)("slot",{key:"c4e6e9b1650f2467876f7824201139b369625b3d"}))),!this.isLastItem&&(0,n.h)("span",{key:"5c028ab8720841b8a2777a84d7ad3f933ab43b79",class:"breadcrumb-divider","aria-hidden":"true"},"/"))}get el(){return(0,n.g)(this)}};return s.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px;min-height:24px;justify-content:center}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}',s})()}}]);