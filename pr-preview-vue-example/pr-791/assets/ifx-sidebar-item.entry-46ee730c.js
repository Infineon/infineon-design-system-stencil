import{r as l,c as r,h as a,g as c}from"./index-0af4233f.js";const h='*{font-family:"Source Sans 3"}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:"";position:absolute;left:-44px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open .sidebar__nav-item-label{font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:20px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:12px}.expandable__submenu.open{display:flex}',m=class{constructor(e){l(this,e),this.ifxSidebarItem=r(this,"ifxSidebarItem",7),this.ifxSidebarActiveItem=r(this,"ifxSidebarActiveItem",7),this.icon="",this.hasIcon=!1,this.hasIconWrapper=!1,this.href="",this.internalHref="",this.target="_self",this.isExpandable=!1,this.isNested=!0,this.numberIndicator=void 0,this.active=!1,this.internalActiveState=!1,this.value=""}handleActiveChange(e,t){if(this.internalActiveState=this.active,e!==t){let i=this.getNavItem(this.el.shadowRoot);!this.isExpandable&&!e&&this.handleClassList(i,"remove","active"),!this.isExpandable&&e&&(this.ifxSidebarActiveItem.emit(this.el),this.handleClassList(i,"add","active"))}}handleConsoleError(e){e.detail?this.hasIcon=!1:this.hasIcon=!0}handleEventEmission(){this.ifxSidebarItem.emit({value:this.value,component:this.el})}handleClassList(e,t,i){if(e.classList[t](i),t==="contains")return e.classList.contains(i)}getExpandableMenu(){return this.el.shadowRoot.querySelector(".expandable__submenu")}getNavItem(e){return e==null?void 0:e.querySelector(".sidebar__nav-item")}getSidebarMenuItems(e=this.el){const t=e.querySelectorAll("ifx-sidebar-item");return t.length===0?e.shadowRoot.querySelectorAll("ifx-sidebar-item"):t}getSidebarMenuItem(){return this.el.shadowRoot.querySelector(".sidebar__nav-item")}toggleSubmenu(){if(this.handleEventEmission(),this.isExpandable){const e=this.getSidebarMenuItem(),t=this.getExpandableMenu();this.handleClassList(t,"toggle","open"),this.handleClassList(e,"toggle","open"),this.parentElementIsSidebar()&&this.handleBorderIndicatorDisplacement(e)}}handleExpandableMenu(e){const t=this.getExpandableMenu();e.forEach(i=>{const n=document.createElement("li");n.appendChild(i),t.appendChild(n)})}parentElementIsSidebar(){return this.el.parentElement.tagName.toUpperCase()==="IFX-SIDEBAR"}checkIfMenuItemIsNested(){this.parentElementIsSidebar()&&(this.isNested=!1)}isActive(e){return e.getAttribute("active")==="true"}handleBorderIndicatorDisplacement(e){this.getSidebarMenuItems().forEach(i=>{const n=this.getSidebarMenuItems(i);n.length!==0&&n.forEach(o=>{if(this.isActive(o)){const d=this.handleClassList(e,"contains","open"),s=this.getActiveItemSection();d?this.handleClassList(s,"remove","active-section"):this.handleClassList(s,"add","active-section")}})})}setHref(){this.href.toLowerCase().trim()===""?this.internalHref=void 0:this.internalHref=this.href}getActiveItemSection(){return this.parentElementIsSidebar()?this.getNavItem(this.el.shadowRoot):this.getNavItem(this.el.parentElement.shadowRoot)}async setActiveClasses(e=null){const t=this.getActiveItemSection(),i=this.getNavItem(this.el.shadowRoot);if(t)this.handleClassList(t,"add","active-section");else if(e){const n=this.getNavItem(e.shadowRoot);this.handleClassList(n,"add","active-section")}this.handleClassList(i,"add","active")}handleActiveState(){this.internalActiveState&&this.setActiveClasses()}handleKeyDown(e){e.key==="Enter"&&this.toggleSubmenu()}componentDidLoad(){if(this.parentElementIsSidebar()){const t=this.getSidebarMenuItem();this.handleBorderIndicatorDisplacement(t)}if(this.handleActiveState(),this.isExpandable){const t=this.getSidebarMenuItems();this.handleExpandableMenu(t)}}componentWillLoad(){this.internalActiveState=this.active,this.checkIfMenuItemIsNested(),this.setHref(),this.getSidebarMenuItems().length!==0?this.isExpandable=!0:this.isExpandable=!1}render(){return a("div",null,a("a",{tabIndex:1,onKeyDown:e=>this.handleKeyDown(e),href:this.internalHref,onClick:()=>this.toggleSubmenu(),target:this.target,class:`sidebar__nav-item ${!this.isNested&&this.isExpandable?"header__section":""}`},this.icon&&a("div",{class:`sidebar__nav-item-icon-wrapper ${this.hasIcon?"":"noIcon"}`},a("ifx-icon",{icon:this.icon})),a("div",{class:"sidebar__nav-item-label"},a("slot",null)),a("div",{class:"sidebar__nav-item-indicator"},this.isExpandable&&a("span",{class:"item__arrow-wrapper"},a("ifx-icon",{icon:"chevron-down-12"})),!this.isExpandable&&!this.isNested&&a("span",{class:"item__number-indicator"},a("ifx-number-indicator",null,this.numberIndicator)))),this.isExpandable&&a("ul",{class:"expandable__submenu"}))}get el(){return c(this)}static get watchers(){return{active:["handleActiveChange"]}}};m.style=h;export{m as ifx_sidebar_item};
