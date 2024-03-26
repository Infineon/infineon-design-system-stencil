"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7954],{"./dist/esm/ifx-navbar-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_navbar_item:()=>NavbarItem});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const NavbarItem=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxNavItem=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1,this.itemPosition=void 0}handleOutsideClick(event){const path=event.composedPath(),itemMenu=this.getItemMenu();itemMenu&&itemMenu.classList.contains("open")&&(path.includes(this.el)||this.closeItemMenu())}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}async toggleChildren(action){const itemMenu=this.getItemMenu(),arrowIcon=this.getChevronDownIconWrapper();itemMenu&&(this.handleClassList(arrowIcon,action,"hide"),this.handleClassList(itemMenu,action,"itemInMobileMenu"))}async moveChildComponentsIntoSubLayerMenu(){const subLayerMenu=this.getItemMenu();if(subLayerMenu){if(this.handleClassList(subLayerMenu,"contains","open")){const navbarItem=this.getNavBarItem(),subLayerBackButton=this.getSubLayerBackButton();this.handleClassList(navbarItem,"add","layer__item-parent"),this.handleClassList(subLayerBackButton,"add","show"),this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}const navItems=this.el.querySelectorAll('[slot="first__layer"]');this.isSidebarMenuItem=!0;for(let i=0;i<navItems.length;i++)navItems[i].setAttribute("slot","second__layer"),navItems[i].moveChildComponentsIntoSubLayerMenu()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}async toggleFirstLayerItem(actionOne,actionTwo){const navbarItem=this.getNavBarItem(),secondLayerMenu=this.getSubLayerMenu(),subLayerBackButton=this.getSubLayerBackButton();this.handleClassList(subLayerBackButton,[actionOne],"show"),this.handleClassList(navbarItem,[actionTwo],"hide"),this.handleClassList(secondLayerMenu,[actionTwo],"remove__margin")}openSubLayerMenu(){if(this.hasChildNavItems){const subLayerBackButton=this.getSubLayerBackButton(),rightArrowIcon=this.getRightArrowIcon(),navbarItem=this.getNavBarItem(),subLayerMenu=this.getSubLayerMenu(),slotName=this.el.getAttribute("slot");this.handleClassList(subLayerBackButton,"add","show"),this.handleClassList(rightArrowIcon,"add","hide"),this.handleClassList(navbarItem,"add","layer__item-parent"),this.handleClassList(subLayerMenu,"add","open"),"second__layer"===slotName.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(navbarItem,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}async addMenuItemClass(){const navbarItem=this.getNavBarItem();this.handleClassList(navbarItem,"add","menuItem");const rightArrowIcon=this.getRightArrowIcon();this.hasChildNavItems&&this.handleClassList(rightArrowIcon,"remove","hide")}async moveChildComponentsBackIntoNavbar(){const subLayerBackButton=this.getSubLayerBackButton(),navbarItem=this.getNavBarItem(),secondLayerMenu=this.getSubLayerMenu();this.handleClassList(subLayerBackButton,"remove","show"),this.handleClassList(navbarItem,"remove","layer__item-parent"),this.handleClassList(secondLayerMenu,"remove","remove__margin"),this.ifxNavItem.emit({component:this.el,action:"show"});const navItems=this.el.querySelectorAll('[slot="second__layer"]');this.isSidebarMenuItem=!1,this.showComponent(),this.handleClassList(navbarItem,"remove","hide");for(let i=0;i<navItems.length;i++)navItems[i].setAttribute("slot","first__layer"),navItems[i].moveChildComponentsBackIntoNavbar(),navItems[i].addMenuItemClass(),navItems[i].returnToFirstLayer()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}async returnToFirstLayer(){const subLayerBackButton=this.getSubLayerBackButton(),navbarItem=this.getNavBarItem(),rightArrowIcon=this.getRightArrowIcon(),subLayerMenu=this.getSubLayerMenu(),slotName=this.el.getAttribute("slot");this.handleClassList(subLayerBackButton,"remove","show"),this.handleClassList(navbarItem,"remove","layer__item-parent"),this.handleClassList(subLayerMenu,"remove","open"),this.hasChildNavItems&&this.handleClassList(rightArrowIcon,"remove","hide"),"second__layer"===slotName.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"returnToSecondLayer"}),this.handleClassList(navbarItem,"add","menuItem")):this.ifxNavItem.emit({component:this.el,action:"return"})}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren()}componentDidLoad(){if(this.hasChildNavItems){const navItems=this.getNavbarItems();this.relocateItemsToFirstlayer(navItems)}}componentDidUpdate(){const navbarItem=this.getNavBarItem(),isLayerItemParent=this.handleClassList(navbarItem,"contains","layer__item-parent");if(this.isSidebarMenuItem&&isLayerItemParent){const rightArrowIcon=this.getRightArrowIcon();this.handleClassList(rightArrowIcon,"add","hide")}}async setMenuItemPosition(){if(this.isMenuItem&&this.hasChildNavItems){const menuPosition=this.getItemMenuPosition();"left"===menuPosition?this.itemPosition="left":"right"===menuPosition&&(this.itemPosition="right")}}handleClassList(el,type,className){if(el.classList[type](className),"contains"===type)return el.classList.contains(className)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(navItems){navItems.forEach((item=>{item.setAttribute("slot","first__layer")}))}setHref(){""===this.href.toLowerCase().trim()?this.internalHref=void 0:this.internalHref=this.href}checkIfItemIsNested(){const parentElement=this.el.parentElement;"IFX-NAVBAR-ITEM"!==parentElement.tagName.toUpperCase()&&"IFX-NAVBAR-PROFILE"!==parentElement.tagName.toUpperCase()?this.isMenuItem=!1:this.isMenuItem=!0}checkIfItemHasChildren(){0!==this.getNavbarItems().length?this.hasChildNavItems=!0:this.hasChildNavItems=!1}async setItemSideSpecifications(){const menuItem=this.el,itemMenu=this.getItemMenu();return"right-item"===menuItem.getAttribute("slot").toLowerCase().trim()&&this.handleClassList(itemMenu,"add","rightSideItemMenu"),!0}setInternalContent(){this.el.shadowRoot.querySelector("slot").assignedNodes().forEach((node=>{}))}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const itemMenu=this.getItemMenu(),menuItem=this.getNavBarItem();itemMenu&&(this.handleClassList(itemMenu,"remove","open"),this.handleClassList(menuItem,"remove","open"))}getItemMenuPosition(){let parentElement=this.el;for(;parentElement;){if("IFX-NAVBAR-PROFILE"===parentElement.tagName||"right-item"===parentElement.slot)return"left";parentElement=parentElement.parentElement||parentElement.getRootNode().host}return"right"}toggleItemMenu(){const slotName=this.el.getAttribute("slot");if("mobile-menu-top"!==slotName.toLowerCase()&&"second__layer"!==slotName.toLowerCase()||this.openSubLayerMenu(),!this.internalHref&&"mobile-menu-top"!==slotName.toLowerCase()&&"second__layer"!==slotName.toLowerCase()){const itemMenu=this.getItemMenu();if(this.hasChildNavItems){const menuItem=this.getNavBarItem();this.handleClassList(itemMenu,"toggle","open"),this.handleClassList(menuItem,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const itemMenu=this.getItemMenu(),menuPosition=this.getItemMenuPosition();"MOUSEENTER"===e.type.toUpperCase()&&(this.handleClassList(itemMenu,"add","open"),"left"===menuPosition?this.handleClassList(itemMenu,"add","left"):"right"===menuPosition&&this.handleClassList(itemMenu,"add","right")),"MOUSELEAVE"===e.type.toUpperCase()&&(this.handleClassList(itemMenu,"remove","open"),"left"===menuPosition?this.handleClassList(itemMenu,"remove","left"):"right"===menuPosition&&this.handleClassList(itemMenu,"remove","right"))}}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a69816bc42a541ea3ffbc0abe5563d1a52ce3cd0",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"366ec6d2f68553c5dd5fd1bd8a143fa18cb89eee",class:"sub__layer-back-button"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2d6cd4381e166a0925436df3325285270403f0a6",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"0f0e7093e56e2971feeb0aeeceac173454bcde71",icon:"arrow-left-16"}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"69989db1fc3d9aaceac5117e84abad0827cc51cb"},"Back"))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"5ce7461ae4709a0e0510f009b56b0f29a2df15f7",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.isSidebarMenuItem?"sidebarMenuItem":""} ${this.showLabel?"":"removeLabel"} ${this.isMenuItem?"menuItem":""} ${this.hasChildNavItems?"isParent":""}`},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8bed2b29a371d75a09f556b08340f8634ca163ec",class:"inner__content-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4d56989780fbc9acd6479e08d461bda3858c5866",class:"navbar__container-right-content-navigation-item-icon-wrapper "+(this.icon?"":"removeWrapper")},this.icon&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})),"left"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menuItemLeftIconWrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-left-12"})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"0111ea40750021c9aca933809acdedd743f0c877",class:"label__wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"9b168d6f24271e370d90cd0d377f42404946baa7"}))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a8417d8c9be93157a90beb5da866f0df483933c3",class:"navItemIconWrapper "+(!this.hasChildNavItems||this.isMenuItem||this.isSidebarMenuItem?"hide":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"e98c07c66173234cd83e4d56988750e0030598dc",icon:"chevron-down-12"})),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"menuItemRightIconWrapper "+("right"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"navbar-menu"}," ",(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"first__layer"})," "),this.isSidebarMenuItem&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"sub__layer-menu"}," ",(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"second__layer"})," "))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavbarItem.style=".navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}"}}]);