"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7562],{7562:(e,i,t)=>{t.r(i),t.d(i,{ifx_sidebar_item:()=>n});var a=t(1597);const n=class{constructor(e){(0,a.r)(this,e),this.ifxSidebarMenu=(0,a.c)(this,"ifxSidebarMenu",7),this.ifxSidebarNavigationItem=(0,a.c)(this,"ifxSidebarNavigationItem",7),this.ifxSidebarActionItem=(0,a.c)(this,"ifxSidebarActionItem",7),this.icon="",this.hasIcon=!1,this.hasIconWrapper=!1,this.href="",this.internalHref="",this.target="_self",this.isExpandable=!1,this.isNested=!0,this.numberIndicator=void 0,this.active=!1,this.isActionItem=!1,this.internalActiveState=!1,this.value="",this.handleItemClick=void 0}handleActiveChange(e,i){if(this.isActionItem)this.internalActiveState=!1;else if(this.internalActiveState=e,e!==i){let i=this.getNavItem(this.el.shadowRoot);this.isExpandable||e||this.handleClassList(i,"remove","active"),!this.isExpandable&&e&&this.handleClassList(i,"add","active")}}handleConsoleError(e){e.detail?this.hasIcon=!1:this.hasIcon=!0}handleEventEmission(){this.ifxSidebarMenu.emit(this.el)}handleClassList(e,i,t){if(e.classList[i](t),"contains"===i)return e.classList.contains(t)}getExpandableMenu(){return this.el.shadowRoot.querySelector(".expandable__submenu")}getNavItem(e){return null===e||void 0===e?void 0:e.querySelector(".sidebar__nav-item")}getSidebarMenuItems(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;const i=e.querySelectorAll("ifx-sidebar-item");return 0===i.length?e.shadowRoot.querySelectorAll("ifx-sidebar-item"):i}getSidebarMenuItem(){return this.el.shadowRoot.querySelector(".sidebar__nav-item")}toggleSubmenu(){if(this.isExpandable){const e=this.getSidebarMenuItem(),i=this.getExpandableMenu();this.handleClassList(i,"toggle","open"),this.handleClassList(e,"toggle","open"),this.handleEventEmission()}else{if(this.isActionItem)return void this.ifxSidebarActionItem.emit(this.el);this.handleActiveChange(!0,this.internalActiveState),this.ifxSidebarNavigationItem.emit(this.el),this.handleItemClick&&this.handleItemClick(this.el)}}handleExpandableMenu(e){const i=this.getExpandableMenu();e.forEach((e=>{const t=document.createElement("li");t.appendChild(e),i.appendChild(t)}))}parentElementIsSidebar(){return"IFX-SIDEBAR"===this.el.parentElement.tagName.toUpperCase()}checkIfMenuItemIsNested(){this.parentElementIsSidebar()&&(this.isNested=!1)}isActive(e){return"true"===e.getAttribute("active")}getParentSection(e){let i=e.parentElement;for(;i&&"IFX-SIDEBAR"!==i.tagName.toUpperCase();){if("IFX-SIDEBAR-ITEM"===i.tagName.toUpperCase())return i;i=i.parentElement}return null}handleBorderIndicatorDisplacement(e){const i=(e,t)=>{if(this.isActive(e)){const e=this.handleClassList(t,"contains","open"),i=this.getActiveItemSection();e?this.handleClassList(i,"remove","active-section"):this.handleClassList(i,"add","active-section")}this.getSidebarMenuItems(e).forEach((e=>i(e,t)))};this.getSidebarMenuItems().forEach((t=>i(t,e)))}setHref(){""===this.href.toLowerCase().trim()?this.internalHref=void 0:this.internalHref=this.href}getActiveItemSection(){if(this.parentElementIsSidebar()){return this.getNavItem(this.el.shadowRoot)}return this.getNavItem(this.el.shadowRoot)}async setActiveClasses(){const e=this.getNavItem(this.el.shadowRoot);this.handleClassList(e,"add","active")}handleActiveState(){this.internalActiveState&&this.setActiveClasses()}handleKeyDown(e){"Enter"===e.key&&this.toggleSubmenu()}componentDidLoad(){if(this.handleActiveState(),this.isExpandable){const e=this.getSidebarMenuItems();this.handleExpandableMenu(e)}}componentWillLoad(){this.internalActiveState=this.active,this.checkIfMenuItemIsNested(),this.setHref();0!==this.getSidebarMenuItems().length?this.isExpandable=!0:this.isExpandable=!1}componentWillUpdate(){this.active&&!this.internalActiveState&&(this.internalActiveState=this.active,this.ifxSidebarNavigationItem.emit(this.el))}render(){return(0,a.h)("div",null,(0,a.h)("a",{tabIndex:1,onKeyDown:e=>this.handleKeyDown(e),href:this.internalHref,onClick:()=>this.toggleSubmenu(),target:this.target,class:"sidebar__nav-item ".concat(!this.isNested&&this.isExpandable?"header__section":"")},this.icon&&(0,a.h)("div",{class:"sidebar__nav-item-icon-wrapper ".concat(this.hasIcon?"":"noIcon")},(0,a.h)("ifx-icon",{icon:this.icon})),(0,a.h)("div",{class:"sidebar__nav-item-label"},(0,a.h)("slot",null)),(0,a.h)("div",{class:"sidebar__nav-item-indicator"},this.isExpandable&&(0,a.h)("span",{class:"item__arrow-wrapper"},(0,a.h)("ifx-icon",{icon:"chevron-down-12"})),!this.isExpandable&&!this.isNested&&(0,a.h)("span",{class:"item__number-indicator"},(0,a.h)("ifx-number-indicator",null,this.numberIndicator)))),this.isExpandable&&(0,a.h)("ul",{class:"expandable__submenu"}))}get el(){return(0,a.g)(this)}static get watchers(){return{active:["handleActiveChange"]}}};n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer;font-family:var(--ifx-font-family)}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:"";position:absolute;left:-44px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open .sidebar__nav-item-label{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:20px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:12px}.expandable__submenu.open{display:flex}'}}]);
//# sourceMappingURL=7562.009937fa.chunk.js.map