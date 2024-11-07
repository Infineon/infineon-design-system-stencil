"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1417],{"./dist/esm/ifx-navbar-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_navbar_item:()=>NavbarItem});var _index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-30c509de.js");const NavbarItem=class{constructor(hostRef){(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxNavItem=(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1,this.itemPosition=void 0}handleOutsideClick(event){const path=event.composedPath(),itemMenu=this.getItemMenu();itemMenu&&itemMenu.classList.contains("open")&&(path.includes(this.el)||this.closeItemMenu())}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}async toggleChildren(action){const itemMenu=this.getItemMenu(),arrowIcon=this.getChevronDownIconWrapper();itemMenu&&(this.handleClassList(arrowIcon,action,"hide"),this.handleClassList(itemMenu,action,"itemInMobileMenu"))}async moveChildComponentsIntoSubLayerMenu(){const subLayerMenu=this.getItemMenu();if(subLayerMenu){if(this.handleClassList(subLayerMenu,"contains","open")){const navbarItem=this.getNavBarItem(),subLayerBackButton=this.getSubLayerBackButton();this.handleClassList(navbarItem,"add","layer__item-parent"),this.handleClassList(subLayerBackButton,"add","show"),this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}const navItems=this.el.querySelectorAll('[slot="first__layer"]');this.isSidebarMenuItem=!0;for(let i=0;i<navItems.length;i++)navItems[i].setAttribute("slot","second__layer"),navItems[i].moveChildComponentsIntoSubLayerMenu()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}async toggleFirstLayerItem(actionOne,actionTwo){const navbarItem=this.getNavBarItem(),secondLayerMenu=this.getSubLayerMenu(),subLayerBackButton=this.getSubLayerBackButton();this.handleClassList(subLayerBackButton,[actionOne],"show"),this.handleClassList(navbarItem,[actionTwo],"hide"),this.handleClassList(secondLayerMenu,[actionTwo],"remove__margin")}openSubLayerMenu(){if(this.hasChildNavItems){const subLayerBackButton=this.getSubLayerBackButton(),rightArrowIcon=this.getRightArrowIcon(),navbarItem=this.getNavBarItem(),subLayerMenu=this.getSubLayerMenu(),slotName=this.el.getAttribute("slot");this.handleClassList(subLayerBackButton,"add","show"),this.handleClassList(rightArrowIcon,"add","hide"),this.handleClassList(navbarItem,"add","layer__item-parent"),this.handleClassList(subLayerMenu,"add","open"),"second__layer"===slotName.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(navbarItem,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}async addMenuItemClass(){const navbarItem=this.getNavBarItem();this.handleClassList(navbarItem,"add","menuItem");const rightArrowIcon=this.getRightArrowIcon();this.hasChildNavItems&&this.handleClassList(rightArrowIcon,"remove","hide")}async moveChildComponentsBackIntoNavbar(){const subLayerBackButton=this.getSubLayerBackButton(),navbarItem=this.getNavBarItem(),secondLayerMenu=this.getSubLayerMenu();this.handleClassList(subLayerBackButton,"remove","show"),this.handleClassList(navbarItem,"remove","layer__item-parent"),this.handleClassList(secondLayerMenu,"remove","remove__margin"),this.ifxNavItem.emit({component:this.el,action:"show"});const navItems=this.el.querySelectorAll('[slot="second__layer"]');this.isSidebarMenuItem=!1,this.showComponent(),this.handleClassList(navbarItem,"remove","hide");for(let i=0;i<navItems.length;i++)navItems[i].setAttribute("slot","first__layer"),navItems[i].moveChildComponentsBackIntoNavbar(),navItems[i].addMenuItemClass(),navItems[i].returnToFirstLayer()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}async returnToFirstLayer(){const subLayerBackButton=this.getSubLayerBackButton(),navbarItem=this.getNavBarItem(),rightArrowIcon=this.getRightArrowIcon(),subLayerMenu=this.getSubLayerMenu(),slotName=this.el.getAttribute("slot");this.handleClassList(subLayerBackButton,"remove","show"),this.handleClassList(navbarItem,"remove","layer__item-parent"),this.handleClassList(subLayerMenu,"remove","open"),this.hasChildNavItems&&this.handleClassList(rightArrowIcon,"remove","hide"),"second__layer"===slotName.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"returnToSecondLayer"}),this.handleClassList(navbarItem,"add","menuItem")):this.ifxNavItem.emit({component:this.el,action:"return"})}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren()}componentDidLoad(){if(this.hasChildNavItems){const navItems=this.getNavbarItems();this.relocateItemsToFirstlayer(navItems)}}componentDidUpdate(){const navbarItem=this.getNavBarItem(),isLayerItemParent=this.handleClassList(navbarItem,"contains","layer__item-parent");if(this.isSidebarMenuItem&&isLayerItemParent){const rightArrowIcon=this.getRightArrowIcon();this.handleClassList(rightArrowIcon,"add","hide")}}async setMenuItemPosition(){if(this.isMenuItem&&this.hasChildNavItems){const menuPosition=this.getItemMenuPosition();"left"===menuPosition?this.itemPosition="left":"right"===menuPosition&&(this.itemPosition="right")}}handleClassList(el,type,className){if(el.classList[type](className),"contains"===type)return el.classList.contains(className)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(navItems){navItems.forEach((item=>{item.setAttribute("slot","first__layer")}))}setHref(){""===this.href.toLowerCase().trim()?this.internalHref=void 0:this.internalHref=this.href}checkIfItemIsNested(){const parentElement=this.el.parentElement;"IFX-NAVBAR-ITEM"!==parentElement.tagName.toUpperCase()&&"IFX-NAVBAR-PROFILE"!==parentElement.tagName.toUpperCase()?this.isMenuItem=!1:this.isMenuItem=!0}checkIfItemHasChildren(){0!==this.getNavbarItems().length?this.hasChildNavItems=!0:this.hasChildNavItems=!1}async setItemSideSpecifications(){const menuItem=this.el,itemMenu=this.getItemMenu();return"right-item"===menuItem.getAttribute("slot").toLowerCase().trim()&&this.handleClassList(itemMenu,"add","rightSideItemMenu"),!0}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const itemMenu=this.getItemMenu(),menuItem=this.getNavBarItem();itemMenu&&(this.handleClassList(itemMenu,"remove","open"),this.handleClassList(menuItem,"remove","open"))}getItemMenuPosition(){let parentElement=this.el;for(;parentElement;){if("IFX-NAVBAR-PROFILE"===parentElement.tagName||"right-item"===parentElement.slot)return"left";parentElement=parentElement.parentElement||parentElement.getRootNode().host}return"right"}toggleItemMenu(){const slotName=this.el.getAttribute("slot");if("mobile-menu-top"!==slotName.toLowerCase()&&"second__layer"!==slotName.toLowerCase()||this.openSubLayerMenu(),!this.internalHref&&"mobile-menu-top"!==slotName.toLowerCase()&&"second__layer"!==slotName.toLowerCase()){const itemMenu=this.getItemMenu();if(this.hasChildNavItems){const menuItem=this.getNavBarItem();this.handleClassList(itemMenu,"toggle","open"),this.handleClassList(menuItem,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const itemMenu=this.getItemMenu(),menuPosition=this.getItemMenuPosition();"MOUSEENTER"===e.type.toUpperCase()&&(this.handleClassList(itemMenu,"add","open"),"left"===menuPosition?this.handleClassList(itemMenu,"add","left"):"right"===menuPosition&&this.handleClassList(itemMenu,"add","right")),"MOUSELEAVE"===e.type.toUpperCase()&&(this.handleClassList(itemMenu,"remove","open"),"left"===menuPosition?this.handleClassList(itemMenu,"remove","left"):"right"===menuPosition&&this.handleClassList(itemMenu,"remove","right"))}}render(){return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b18705ccb0ee22c43e0e998c3c59da7327bb9fe1",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2e1f0766adbd7c619e947ffb9bd1c4196ed3f3b0",class:"sub__layer-back-button"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"120ee3acdb5c5e639a11d8b14bb91199b1f746df",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"6e3fb1419e3a71f92e9e16673f83f6cd16e09d83",icon:"arrow-left-16"}),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"98d00e78404958be8b19af3dd29cf396a61b0f66"},"Back"))),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"aa626793a604f89e4e7fa5be097747bcba8e72a7",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.isSidebarMenuItem?"sidebarMenuItem":""} ${this.showLabel?"":"removeLabel"} ${this.isMenuItem?"menuItem":""} ${this.hasChildNavItems?"isParent":""}`},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0facc1cc90f511a017b60f70b99227f938179532",class:"inner__content-wrapper"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a0fb142da4f8ab467a64337ce3042c808c97c493",class:"navbar__container-right-content-navigation-item-icon-wrapper "+(this.icon?"":"removeWrapper")},this.icon&&(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"387578562125925161ecd20ac7ceb001b7d63ab8",icon:this.icon})),"left"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem&&(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f95f9f9862eb2c7c9c54c7b5a245270f3a8054b7",class:"menuItemLeftIconWrapper"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"038fe8d76329792d1fadd5a59c6bc9d4787ca9d9",icon:"chevron-left-12"})),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"59c3743bc91adab8ef607c9fc990f8cb2744a1b7",class:"label__wrapper"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"2f0bf3cfc17ffd60e71ebe8f286a3cb224f91694"}))),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c49861185ca6bff2717daab884484f098c3bbea0",class:"navItemIconWrapper "+(!this.hasChildNavItems||this.isMenuItem||this.isSidebarMenuItem?"hide":"")},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"8093e23a5200e4a0b0d428994f58c42a890927dd",icon:"chevron-down-12"})),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fbb9c1ede4d0c8bfc62ab7231f3423dc0f8ebee0",class:"menuItemRightIconWrapper "+("right"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide")},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"dd683386f51cfd4d351591698be715e8f29ad931",icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"c123af76cf73599bc9e7cff4a3d6f12d5704a816",class:"navbar-menu"}," ",(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"290032991c356d9dcb47406e0368a9c3cb7ab535",name:"first__layer"})," "),this.isSidebarMenuItem&&(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"d567472d49366afc7f77f43dc116aad99c4680c1",class:"sub__layer-menu"}," ",(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d384324e5729a423be05b66880b621bc9e94276a",name:"second__layer"})," "))}get el(){return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavbarItem.style='.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item:hover .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{cursor:pointer;background-color:#08665C}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper:hover .username__tooltip{display:block}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;border-radius:100%;background-color:#0A8276}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper .initials{color:#FFF;text-align:center;font-family:"Source Sans 3";font-size:14px;font-style:normal;font-weight:600;line-height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.container .inner__content-wrapper.no-gap{gap:0px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}'}}]);