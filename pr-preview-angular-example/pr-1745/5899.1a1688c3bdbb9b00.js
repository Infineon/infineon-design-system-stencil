"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5899],{5899:(m,d,s)=>{s.r(d),s.d(d,{ifx_sidebar_item:()=>b});var r=s(6330),i=s(787);const b=(()=>{let l=class{constructor(e){(0,i.r)(this,e),this.ifxSidebarMenu=(0,i.c)(this,"ifxSidebarMenu",7),this.ifxSidebarNavigationItem=(0,i.c)(this,"ifxSidebarNavigationItem",7),this.ifxSidebarActionItem=(0,i.c)(this,"ifxSidebarActionItem",7),this.icon="",this.showIcon=!0,this.showIconWrapper=!1,this.href="",this.internalHref="",this.target="_self",this.isExpandable=!1,this.isNested=!0,this.isSubMenuItem=!1,this.active=!1,this.isActionItem=!1,this.internalActiveState=!1}handleActiveChange(e,t){if(this.isActionItem)this.internalActiveState=!1;else if(this.internalActiveState=e,e!==t){let a=this.getNavItem(this.el.shadowRoot);!this.isExpandable&&!e&&this.handleClassList(a,"remove","active"),!this.isExpandable&&e&&this.handleClassList(a,"add","active")}}handleConsoleError(e){this.showIcon=!e.detail}handleEventEmission(){this.ifxSidebarMenu.emit(this.el)}handleClassList(e,t,a){if(e.classList[t](a),"contains"===t)return e.classList.contains(a)}getExpandableMenu(){return this.el.shadowRoot.querySelector(".expandable__submenu")}getNavItem(e){return e?.querySelector(".sidebar__nav-item")}getSidebarMenuItems(e=this.el){const t=e.querySelectorAll("ifx-sidebar-item");return 0===t.length?e.shadowRoot.querySelectorAll("ifx-sidebar-item"):t}getSidebarMenuItem(){return this.el.shadowRoot.querySelector(".sidebar__nav-item")}toggleSubmenu(){if(this.isExpandable){const e=this.getSidebarMenuItem(),t=this.getExpandableMenu();this.handleClassList(t,"toggle","open"),this.handleClassList(e,"toggle","open"),this.handleEventEmission()}else{if(this.isActionItem)return void this.ifxSidebarActionItem.emit(this.el);this.handleActiveChange(!0,this.internalActiveState),this.ifxSidebarNavigationItem.emit(this.el),this.handleItemClick&&this.handleItemClick(this.el)}}handleExpandableMenu(e){const t=this.getExpandableMenu();e.forEach(a=>{const n=document.createElement("li");n.appendChild(a),t.appendChild(n)})}parentElementIsSidebar(){return"IFX-SIDEBAR"===this.el.parentElement.tagName.toUpperCase()}checkIfMenuItemIsNested(){this.parentElementIsSidebar()&&(this.isNested=!1)}checkIfMenuItemIsSubMenu(){const e=this.el.parentElement,t=this.getNavItem(e.shadowRoot);this.isSubMenuItem="IFX-SIDEBAR-ITEM"===e.tagName.toUpperCase()&&!this.handleClassList(t,"contains","header__section")}isActive(e){return"true"===e.getAttribute("active")}getParentSection(e){let t=e.parentElement;for(;t&&"IFX-SIDEBAR"!==t.tagName.toUpperCase();){if("IFX-SIDEBAR-ITEM"===t.tagName.toUpperCase())return t;t=t.parentElement}return null}handleBorderIndicatorDisplacement(e){const t=(n,c)=>{if(this.isActive(n)){const o=this.handleClassList(c,"contains","open"),h=this.getActiveItemSection();this.handleClassList(h,o?"remove":"add","active-section")}this.getSidebarMenuItems(n).forEach(o=>t(o,c))};this.getSidebarMenuItems().forEach(n=>t(n,e))}setHref(){this.internalHref=""===this.href.toLowerCase().trim()?void 0:this.href}getActiveItemSection(){return this.parentElementIsSidebar(),this.getNavItem(this.el.shadowRoot)}setActiveClasses(){var e=this;return(0,r.A)(function*(){const t=e.getNavItem(e.el.shadowRoot);e.handleClassList(t,"add","active")})()}expandMenu(e){var t=this;return(0,r.A)(function*(){const a=t.getSidebarMenuItem(),n=t.getExpandableMenu();t.handleClassList(n,"add","open"),t.handleClassList(a,"add","open"),e&&(t.handleClassList(n,"remove","active-section"),t.handleClassList(a,"remove","active-section"))})()}isItemExpandable(){var e=this;return(0,r.A)(function*(){return e.isExpandable})()}handleActiveState(){this.internalActiveState&&this.setActiveClasses()}handleKeyDown(e){"Enter"===e.key&&this.toggleSubmenu()}componentDidLoad(){if(this.handleActiveState(),this.isExpandable){const e=this.getSidebarMenuItems();this.handleExpandableMenu(e)}}componentWillLoad(){this.internalActiveState=this.active,this.checkIfMenuItemIsNested(),this.checkIfMenuItemIsSubMenu(),this.setHref(),this.isExpandable=0!==this.getSidebarMenuItems().length}componentWillUpdate(){this.active&&!this.internalActiveState&&(this.internalActiveState=this.active,this.ifxSidebarNavigationItem.emit(this.el))}render(){return(0,i.h)("div",{key:"08de1d4a1f8a5ce1e8e5c9b9bdc661a6ca920f45"},(0,i.h)("a",{key:"837ff1f065497266813874d198b6607e8c90c340",tabIndex:1,onKeyDown:e=>this.handleKeyDown(e),href:this.internalHref,onClick:()=>this.toggleSubmenu(),target:this.target,class:`sidebar__nav-item ${!this.isNested&&this.isExpandable?"header__section":""} ${this.isSubMenuItem?"submenu__item":""}`},this.icon&&(0,i.h)("div",{key:"ae267e2ea854c72994311a2476245ccab7ac1926",class:"sidebar__nav-item-icon-wrapper "+(this.showIcon?"":"noIcon")},(0,i.h)("ifx-icon",{key:"3dc413bc7f8c3c04e8a1ae0e0ffd415d7da339c7",icon:this.icon})),(0,i.h)("div",{key:"8b39697aa8530e42dc8b6f54e4da50c8b7b5ca9b",class:"sidebar__nav-item-label"},(0,i.h)("slot",{key:"fd09e382ea845e155823e7fc5bab04d80ceb0d98"})),(this.isExpandable||!isNaN(this.numberIndicator))&&(0,i.h)("div",{key:"5eb6f0ea5ea665e31dc488cadd16112aeb7c9b62",class:"sidebar__nav-item-indicator"},this.isExpandable&&(0,i.h)("span",{key:"ec9ed73554ffb13a925e3f4109320d6f12fc8d0e",class:"item__arrow-wrapper"},(0,i.h)("ifx-icon",{key:"56fccb57e6aec559415b25323df2dea119d6621f",icon:"chevron-down-12"})),!isNaN(this.numberIndicator)&&!this.isExpandable&&!this.isNested&&(0,i.h)("span",{key:"a94d570a6f664742e8815dcd8084b5f96081c863",class:"item__number-indicator"},(0,i.h)("ifx-number-indicator",{key:"17854a9d7d3e5ebb1db46849f31040a8d1bcd01f"},this.numberIndicator)))),this.isExpandable&&(0,i.h)("ul",{key:"9b71c7ee0f03c66476c6c12b73dfb5b663c5bce7",class:"expandable__submenu"}))}get el(){return(0,i.g)(this)}static get watchers(){return{active:["handleActiveChange"]}}};return l.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer;font-family:var(--ifx-font-family)}.sidebar__nav-item.extra-padding__bottom{padding:8px 0px 16px 0px}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open{padding:8px 0px}.sidebar__nav-item.open .sidebar__nav-item-label{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:16px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.no-top-border{border-top:none}.sidebar__nav-item.header__section.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open{padding:16px 0px 8px 0px}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item.submenu__item{padding:4px 0px}.sidebar__nav-item.submenu__item.extra-padding__bottom{padding:4px 0px 16px 0px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:40px}.expandable__submenu.open{display:flex}.header__section+.expandable__submenu{padding-left:0}',l})()}}]);