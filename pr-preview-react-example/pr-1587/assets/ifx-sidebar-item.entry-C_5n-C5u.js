import{r as l,c as r,h as a,g as c}from"./index-puojA1VQ.js";const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{position:relative}.sidebar__nav-item:focus,.sidebar__nav-item.header__section:focus{outline:none}.sidebar__nav-item:focus .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:focus .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-label,.sidebar__nav-item.header__section:focus .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:focus .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item:hover,.sidebar__nav-item.header__section:hover{outline:none}.sidebar__nav-item:hover .sidebar__nav-item-icon-wrapper,.sidebar__nav-item.header__section:hover .sidebar__nav-item-icon-wrapper{color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-label,.sidebar__nav-item.header__section:hover .sidebar__nav-item-label{outline:none;color:#08665C}.sidebar__nav-item:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon,.sidebar__nav-item.header__section:hover .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{color:#08665C}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D;cursor:pointer;font-family:var(--ifx-font-family)}.sidebar__nav-item.extra-padding__bottom{padding:8px 0px 16px 0px}.sidebar__nav-item.active{color:#0A8276}.sidebar__nav-item.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.open{padding:8px 0px}.sidebar__nav-item.open .sidebar__nav-item-label{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.sidebar__nav-item.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section{box-sizing:padding-box;border-top:1px solid #EEEDED;padding:16px 0px;display:-webkit-flex;-webkit-line-clamp:1;-webkit-box-orient:horizontal;overflow:hidden;text-overflow:ellipsis}.sidebar__nav-item.header__section.no-top-border{border-top:none}.sidebar__nav-item.header__section.active-section::before{content:"";position:absolute;left:-32px;height:40px;width:2px;background:#0A8276}.sidebar__nav-item.header__section.open{padding:16px 0px 8px 0px}.sidebar__nav-item.header__section.open .sidebar__nav-item-indicator .item__arrow-wrapper ifx-icon{transform:rotate(-180deg)}.sidebar__nav-item.header__section .sidebar__nav-item-label{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.sidebar__nav-item.submenu__item{padding:4px 0px}.sidebar__nav-item.submenu__item.extra-padding__bottom{padding:4px 0px 16px 0px}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;flex:none;order:1;flex-grow:1;cursor:pointer}.sidebar__nav-item .sidebar__nav-item-indicator{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}.expandable__submenu{display:none;list-style-type:none;flex-direction:column;padding:0;margin:0;padding-left:40px}.expandable__submenu.open{display:flex}.header__section+.expandable__submenu{padding-left:0}',b=h,m=class{constructor(e){l(this,e),this.ifxSidebarMenu=r(this,"ifxSidebarMenu",7),this.ifxSidebarNavigationItem=r(this,"ifxSidebarNavigationItem",7),this.ifxSidebarActionItem=r(this,"ifxSidebarActionItem",7),this.icon="",this.hasIcon=!0,this.hasIconWrapper=!1,this.href="",this.internalHref="",this.target="_self",this.isExpandable=!1,this.isNested=!0,this.isSubMenuItem=!1,this.numberIndicator=void 0,this.active=!1,this.isActionItem=!1,this.internalActiveState=!1,this.value="",this.handleItemClick=void 0}handleActiveChange(e,t){if(this.isActionItem){this.internalActiveState=!1;return}if(this.internalActiveState=e,e!==t){let i=this.getNavItem(this.el.shadowRoot);!this.isExpandable&&!e&&this.handleClassList(i,"remove","active"),!this.isExpandable&&e&&this.handleClassList(i,"add","active")}}handleConsoleError(e){e.detail?this.hasIcon=!1:this.hasIcon=!0}handleEventEmission(){this.ifxSidebarMenu.emit(this.el)}handleClassList(e,t,i){if(e.classList[t](i),t==="contains")return e.classList.contains(i)}getExpandableMenu(){return this.el.shadowRoot.querySelector(".expandable__submenu")}getNavItem(e){return e==null?void 0:e.querySelector(".sidebar__nav-item")}getSidebarMenuItems(e=this.el){const t=e.querySelectorAll("ifx-sidebar-item");return t.length===0?e.shadowRoot.querySelectorAll("ifx-sidebar-item"):t}getSidebarMenuItem(){return this.el.shadowRoot.querySelector(".sidebar__nav-item")}toggleSubmenu(){if(this.isExpandable){const e=this.getSidebarMenuItem(),t=this.getExpandableMenu();this.handleClassList(t,"toggle","open"),this.handleClassList(e,"toggle","open"),this.handleEventEmission()}else{if(this.isActionItem){this.ifxSidebarActionItem.emit(this.el);return}else this.handleActiveChange(!0,this.internalActiveState),this.ifxSidebarNavigationItem.emit(this.el);this.handleItemClick&&this.handleItemClick(this.el)}}handleExpandableMenu(e){const t=this.getExpandableMenu();e.forEach(i=>{const n=document.createElement("li");n.appendChild(i),t.appendChild(n)})}parentElementIsSidebar(){return this.el.parentElement.tagName.toUpperCase()==="IFX-SIDEBAR"}checkIfMenuItemIsNested(){this.parentElementIsSidebar()&&(this.isNested=!1)}checkIfMenuItemIsSubMenu(){const e=this.el.parentElement,t=this.getNavItem(e.shadowRoot);e.tagName.toUpperCase()==="IFX-SIDEBAR-ITEM"&&!this.handleClassList(t,"contains","header__section")?this.isSubMenuItem=!0:this.isSubMenuItem=!1}isActive(e){return e.getAttribute("active")==="true"}getParentSection(e){let t=e.parentElement;for(;t&&t.tagName.toUpperCase()!=="IFX-SIDEBAR";){if(t.tagName.toUpperCase()==="IFX-SIDEBAR-ITEM")return t;t=t.parentElement}return null}handleBorderIndicatorDisplacement(e){const t=(n,o)=>{if(this.isActive(n)){const s=this.handleClassList(o,"contains","open"),d=this.getActiveItemSection();s?this.handleClassList(d,"remove","active-section"):this.handleClassList(d,"add","active-section")}this.getSidebarMenuItems(n).forEach(s=>t(s,o))};this.getSidebarMenuItems().forEach(n=>t(n,e))}setHref(){this.href.toLowerCase().trim()===""?this.internalHref=void 0:this.internalHref=this.href}getActiveItemSection(){return this.parentElementIsSidebar()?this.getNavItem(this.el.shadowRoot):this.getNavItem(this.el.shadowRoot)}async setActiveClasses(){const e=this.getNavItem(this.el.shadowRoot);this.handleClassList(e,"add","active")}async expandMenu(e){const t=this.getSidebarMenuItem(),i=this.getExpandableMenu();this.handleClassList(i,"add","open"),this.handleClassList(t,"add","open"),e&&(this.handleClassList(i,"remove","active-section"),this.handleClassList(t,"remove","active-section"))}async isItemExpandable(){return this.isExpandable}handleActiveState(){this.internalActiveState&&this.setActiveClasses()}handleKeyDown(e){e.key==="Enter"&&this.toggleSubmenu()}componentDidLoad(){if(this.handleActiveState(),this.isExpandable){const e=this.getSidebarMenuItems();this.handleExpandableMenu(e)}}componentWillLoad(){this.internalActiveState=this.active,this.checkIfMenuItemIsNested(),this.checkIfMenuItemIsSubMenu(),this.setHref(),this.getSidebarMenuItems().length!==0?this.isExpandable=!0:this.isExpandable=!1}componentWillUpdate(){this.active&&!this.internalActiveState&&(this.internalActiveState=this.active,this.ifxSidebarNavigationItem.emit(this.el))}render(){var e,t;return a("div",{key:"3e35a92d13b0f05f15f8503b1ecd15171b842f0e"},a("a",{key:"0f0a859e7eae80830332c31fbde2106ee7cc5109",tabIndex:1,onKeyDown:i=>this.handleKeyDown(i),href:this.internalHref,onClick:()=>this.toggleSubmenu(),target:this.target,class:`sidebar__nav-item ${!this.isNested&&this.isExpandable?"header__section":""} ${this.isSubMenuItem?"submenu__item":""}`},this.icon&&a("div",{key:"9a8f270cb4f2102b6902ab6ba5ac0a261a08bbba",class:`sidebar__nav-item-icon-wrapper ${this.hasIcon?"":"noIcon"}`},a("ifx-icon",{key:"62b5c9569893abfbd68569fe6df317547135c0e9",icon:this.icon})),a("div",{key:"2a94c0e7ddc4d4648029ae77f70fc309d994fb26",class:"sidebar__nav-item-label"},a("slot",{key:"041327de83356d87d251150a61cc215976972bab"})),(this.isExpandable||((e=this.numberIndicator)===null||e===void 0?void 0:e.trim()))&&a("div",{key:"251376a9a98cbff9ee8399319e9771c6d42b3b86",class:"sidebar__nav-item-indicator"},this.isExpandable&&a("span",{key:"9d711269ce896b4b1e981447b505f7d7f71d5ca4",class:"item__arrow-wrapper"},a("ifx-icon",{key:"cb61d9d12efc1d628abd56f2db296e5e5e53f29a",icon:"chevron-down-12"})),((t=this.numberIndicator)===null||t===void 0?void 0:t.trim())&&!this.isExpandable&&!this.isNested&&a("span",{key:"5df812fe492f39872f43ae476ba947b285b18e15",class:"item__number-indicator"},a("ifx-number-indicator",{key:"280cd539c27c94f061178944287dfd891f27a479"},this.numberIndicator)))),this.isExpandable&&a("ul",{key:"ddbf8ff9992fe85b15cb81dad9645368c12ae6da",class:"expandable__submenu"}))}get el(){return c(this)}static get watchers(){return{active:["handleActiveChange"]}}};m.style=b;export{m as ifx_sidebar_item};
