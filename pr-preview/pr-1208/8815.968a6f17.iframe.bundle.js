"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8815],{"./dist/esm/ifx-sidebar-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_sidebar_item:()=>SidebarItem});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const SidebarItem=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxSidebarMenu=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSidebarMenu",7),this.ifxSidebarNavigationItem=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSidebarNavigationItem",7),this.ifxSidebarActionItem=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSidebarActionItem",7),this.icon="",this.hasIcon=!1,this.hasIconWrapper=!1,this.href="",this.internalHref="",this.target="_self",this.isExpandable=!1,this.isNested=!0,this.isSubMenuItem=!1,this.numberIndicator=void 0,this.active=!1,this.isActionItem=!1,this.internalActiveState=!1,this.value="",this.handleItemClick=void 0}handleActiveChange(newValue,oldValue){if(this.isActionItem)this.internalActiveState=!1;else if(this.internalActiveState=newValue,newValue!==oldValue){let labelElement=this.getNavItem(this.el.shadowRoot);this.isExpandable||newValue||this.handleClassList(labelElement,"remove","active"),!this.isExpandable&&newValue&&this.handleClassList(labelElement,"add","active")}}handleConsoleError(event){event.detail?this.hasIcon=!1:this.hasIcon=!0}handleEventEmission(){this.ifxSidebarMenu.emit(this.el)}handleClassList(el,type,className){if(el.classList[type](className),"contains"===type)return el.classList.contains(className)}getExpandableMenu(){return this.el.shadowRoot.querySelector(".expandable__submenu")}getNavItem(el){return null==el?void 0:el.querySelector(".sidebar__nav-item")}getSidebarMenuItems(el=this.el){const sidebarItems=el.querySelectorAll("ifx-sidebar-item");return 0===sidebarItems.length?el.shadowRoot.querySelectorAll("ifx-sidebar-item"):sidebarItems}getSidebarMenuItem(){return this.el.shadowRoot.querySelector(".sidebar__nav-item")}toggleSubmenu(){if(this.isExpandable){const menuItem=this.getSidebarMenuItem(),expandableMenu=this.getExpandableMenu();this.handleClassList(expandableMenu,"toggle","open"),this.handleClassList(menuItem,"toggle","open"),this.handleEventEmission()}else{if(this.isActionItem)return void this.ifxSidebarActionItem.emit(this.el);this.handleActiveChange(!0,this.internalActiveState),this.ifxSidebarNavigationItem.emit(this.el),this.handleItemClick&&this.handleItemClick(this.el)}}handleExpandableMenu(sidebarItems){const sidebarExpandableMenu=this.getExpandableMenu();sidebarItems.forEach((el=>{const li=document.createElement("li");li.appendChild(el),sidebarExpandableMenu.appendChild(li)}))}parentElementIsSidebar(){return"IFX-SIDEBAR"===this.el.parentElement.tagName.toUpperCase()}checkIfMenuItemIsNested(){this.parentElementIsSidebar()&&(this.isNested=!1)}checkIfMenuItemIsSubMenu(){const parentElement=this.el.parentElement,navItem=this.getNavItem(parentElement.shadowRoot);"IFX-SIDEBAR-ITEM"!==parentElement.tagName.toUpperCase()||this.handleClassList(navItem,"contains","header__section")?this.isSubMenuItem=!1:this.isSubMenuItem=!0}isActive(iteratedComponent){return"true"===iteratedComponent.getAttribute("active")}getParentSection(el){let parentElement=el.parentElement;for(;parentElement&&"IFX-SIDEBAR"!==parentElement.tagName.toUpperCase();){if("IFX-SIDEBAR-ITEM"===parentElement.tagName.toUpperCase())return parentElement;parentElement=parentElement.parentElement}return null}handleBorderIndicatorDisplacement(menuItem){const handleItem=(item,menuItem)=>{if(this.isActive(item)){const isOpen=this.handleClassList(menuItem,"contains","open"),activeMenuItemSection=this.getActiveItemSection();isOpen?this.handleClassList(activeMenuItemSection,"remove","active-section"):this.handleClassList(activeMenuItemSection,"add","active-section")}this.getSidebarMenuItems(item).forEach((child=>handleItem(child,menuItem)))};this.getSidebarMenuItems().forEach((item=>handleItem(item,menuItem)))}setHref(){""===this.href.toLowerCase().trim()?this.internalHref=void 0:this.internalHref=this.href}getActiveItemSection(){if(this.parentElementIsSidebar()){return this.getNavItem(this.el.shadowRoot)}return this.getNavItem(this.el.shadowRoot)}async setActiveClasses(){const activeMenuItem=this.getNavItem(this.el.shadowRoot);this.handleClassList(activeMenuItem,"add","active")}async expandMenu(ac){const menuItem=this.getSidebarMenuItem(),expandableMenu=this.getExpandableMenu();this.handleClassList(expandableMenu,"add","open"),this.handleClassList(menuItem,"add","open"),ac&&(this.handleClassList(expandableMenu,"remove","active-section"),this.handleClassList(menuItem,"remove","active-section"))}async isItemExpandable(){return this.isExpandable}handleActiveState(){this.internalActiveState&&this.setActiveClasses()}handleKeyDown(event){"Enter"===event.key&&this.toggleSubmenu()}componentDidLoad(){if(this.handleActiveState(),this.isExpandable){const sidebarItems=this.getSidebarMenuItems();this.handleExpandableMenu(sidebarItems)}}componentWillLoad(){this.internalActiveState=this.active,this.checkIfMenuItemIsNested(),this.checkIfMenuItemIsSubMenu(),this.setHref();0!==this.getSidebarMenuItems().length?this.isExpandable=!0:this.isExpandable=!1}componentWillUpdate(){this.active&&!this.internalActiveState&&(this.internalActiveState=this.active,this.ifxSidebarNavigationItem.emit(this.el))}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"cd40adfe5428001fc1af8bf0c6d6d1e294cc3bf1"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"7f510b434962d33fc2cabbf9be1a819bb26c0881",tabIndex:1,onKeyDown:event=>this.handleKeyDown(event),href:this.internalHref,onClick:()=>this.toggleSubmenu(),target:this.target,class:`sidebar__nav-item ${!this.isNested&&this.isExpandable?"header__section":""} ${this.isSubMenuItem?"submenu__item":""}`},this.icon&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"sidebar__nav-item-icon-wrapper "+(this.hasIcon?"":"noIcon")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"be65b2d3640c81de95784386dc11f39fc42cfbf0",class:"sidebar__nav-item-label"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3fdf19c7e47c500121c33329d9a6f4c6d7205ba0"})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"81d95c7764472708f0c5b1353f1bf9220afbc55d",class:"sidebar__nav-item-indicator"},this.isExpandable&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"item__arrow-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-down-12"})),!this.isExpandable&&!this.isNested&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"item__number-indicator"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-number-indicator",null,this.numberIndicator)))),this.isExpandable&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"expandable__submenu"}))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{active:["handleActiveChange"]}}};SidebarItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer;font-family:var(--ifx-font-family)}.sidebar__nav-item.extra-padding__bottom{padding:8px 0px 16px 0px}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open{padding:8px 0px}.sidebar__nav-item.open .sidebar__nav-item-label{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:16px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.no-top-border{border-top:none}.sidebar__nav-item.header__section.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open{padding:16px 0px 8px 0px}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item.submenu__item{padding:4px 0px}.sidebar__nav-item.submenu__item.extra-padding__bottom{padding:4px 0px 16px 0px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:40px}.expandable__submenu.open{display:flex}.header__section+.expandable__submenu{padding-left:0}'}}]);