"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5030],{5030:(e,t,i)=>{i.r(t),i.d(t,{ifx_navbar_item:()=>n});var a=i(7770);const n=class{constructor(e){(0,a.r)(this,e),this.ifxNavItem=(0,a.c)(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1,this.itemPosition=void 0}handleOutsideClick(e){const t=e.composedPath(),i=this.getItemMenu();i&&i.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}async toggleChildren(e){const t=this.getItemMenu(),i=this.getChevronDownIconWrapper();t&&(this.handleClassList(i,e,"hide"),this.handleClassList(t,e,"itemInMobileMenu"))}async moveChildComponentsIntoSubLayerMenu(){const e=this.getItemMenu();if(e){if(this.handleClassList(e,"contains","open")){const e=this.getNavBarItem(),t=this.getSubLayerBackButton();this.handleClassList(e,"add","layer__item-parent"),this.handleClassList(t,"add","show"),this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}const t=this.el.querySelectorAll('[slot="first__layer"]');this.isSidebarMenuItem=!0;for(let i=0;i<t.length;i++)t[i].setAttribute("slot","second__layer"),t[i].moveChildComponentsIntoSubLayerMenu()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}async toggleFirstLayerItem(e,t){const i=this.getNavBarItem(),a=this.getSubLayerMenu(),n=this.getSubLayerBackButton();this.handleClassList(n,[e],"show"),this.handleClassList(i,[t],"hide"),this.handleClassList(a,[t],"remove__margin")}openSubLayerMenu(){if(this.hasChildNavItems){const e=this.getSubLayerBackButton(),t=this.getRightArrowIcon(),i=this.getNavBarItem(),a=this.getSubLayerMenu(),n=this.el.getAttribute("slot");this.handleClassList(e,"add","show"),this.handleClassList(t,"add","hide"),this.handleClassList(i,"add","layer__item-parent"),this.handleClassList(a,"add","open"),"second__layer"===n.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(i,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}async addMenuItemClass(){const e=this.getNavBarItem();this.handleClassList(e,"add","menuItem");const t=this.getRightArrowIcon();this.hasChildNavItems&&this.handleClassList(t,"remove","hide")}async moveChildComponentsBackIntoNavbar(){const e=this.getSubLayerBackButton(),t=this.getNavBarItem(),i=this.getSubLayerMenu();this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","layer__item-parent"),this.handleClassList(i,"remove","remove__margin"),this.ifxNavItem.emit({component:this.el,action:"show"});const a=this.el.querySelectorAll('[slot="second__layer"]');this.isSidebarMenuItem=!1,this.showComponent(),this.handleClassList(t,"remove","hide");for(let n=0;n<a.length;n++)a[n].setAttribute("slot","first__layer"),a[n].moveChildComponentsBackIntoNavbar(),a[n].addMenuItemClass(),a[n].returnToFirstLayer()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}async returnToFirstLayer(){const e=this.getSubLayerBackButton(),t=this.getNavBarItem(),i=this.getRightArrowIcon(),a=this.getSubLayerMenu(),n=this.el.getAttribute("slot");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","layer__item-parent"),this.handleClassList(a,"remove","open"),this.hasChildNavItems&&this.handleClassList(i,"remove","hide"),"second__layer"===n.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"returnToSecondLayer"}),this.handleClassList(t,"add","menuItem")):this.ifxNavItem.emit({component:this.el,action:"return"})}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren()}componentDidLoad(){if(this.hasChildNavItems){const e=this.getNavbarItems();this.relocateItemsToFirstlayer(e)}}componentDidUpdate(){const e=this.getNavBarItem(),t=this.handleClassList(e,"contains","layer__item-parent");if(this.isSidebarMenuItem&&t){const e=this.getRightArrowIcon();this.handleClassList(e,"add","hide")}}async setMenuItemPosition(){if(this.isMenuItem&&this.hasChildNavItems){const e=this.getItemMenuPosition();"left"===e?this.itemPosition="left":"right"===e&&(this.itemPosition="right")}}handleClassList(e,t,i){if(e.classList[t](i),"contains"===t)return e.classList.contains(i)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(e){e.forEach((e=>{e.setAttribute("slot","first__layer")}))}setHref(){""===this.href.toLowerCase().trim()?this.internalHref=void 0:this.internalHref=this.href}checkIfItemIsNested(){const e=this.el.parentElement;"IFX-NAVBAR-ITEM"!==e.tagName.toUpperCase()&&"IFX-NAVBAR-PROFILE"!==e.tagName.toUpperCase()?this.isMenuItem=!1:this.isMenuItem=!0}checkIfItemHasChildren(){0!==this.getNavbarItems().length?this.hasChildNavItems=!0:this.hasChildNavItems=!1}async setItemSideSpecifications(){const e=this.el,t=this.getItemMenu();return"right-item"===e.getAttribute("slot").toLowerCase().trim()&&this.handleClassList(t,"add","rightSideItemMenu"),!0}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}getItemMenuPosition(){let e=this.el;for(;e;){if("IFX-NAVBAR-PROFILE"===e.tagName||"right-item"===e.slot)return"left";e=e.parentElement||e.getRootNode().host}return"right"}toggleItemMenu(){const e=this.el.getAttribute("slot");if("mobile-menu-top"!==e.toLowerCase()&&"second__layer"!==e.toLowerCase()||this.openSubLayerMenu(),!this.internalHref&&"mobile-menu-top"!==e.toLowerCase()&&"second__layer"!==e.toLowerCase()){const e=this.getItemMenu();if(this.hasChildNavItems){const t=this.getNavBarItem();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const t=this.getItemMenu(),i=this.getItemMenuPosition();"MOUSEENTER"===e.type.toUpperCase()&&(this.handleClassList(t,"add","open"),"left"===i?this.handleClassList(t,"add","left"):"right"===i&&this.handleClassList(t,"add","right")),"MOUSELEAVE"===e.type.toUpperCase()&&(this.handleClassList(t,"remove","open"),"left"===i?this.handleClassList(t,"remove","left"):"right"===i&&this.handleClassList(t,"remove","right"))}}render(){return(0,a.h)("div",{key:"25b4b8159a81dc1d39b9f1e989ecf44224a370c6",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},(0,a.h)("div",{key:"2c28aae0ed0bf04312f7610bcd6e430b3223e331",class:"sub__layer-back-button"},(0,a.h)("div",{key:"535a64a1491bf09f7dec15bca8d090fdc19578d6",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},(0,a.h)("ifx-icon",{key:"cad4fd3e6531d6e2816448e6f6fe6f80bce6a317",icon:"arrow-left-16"}),(0,a.h)("span",{key:"39bbb75e1b8d6e69ccfa0540c9b7d86ee74739ed"},"Back"))),(0,a.h)("a",{key:"fd14c37e98eeb23fa59d74b148b69dcb29caf227",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:"navbar__item ".concat(this.isSidebarMenuItem?"sidebarMenuItem":""," ").concat(this.showLabel?"":"removeLabel"," ").concat(this.isMenuItem?"menuItem":""," ").concat(this.hasChildNavItems?"isParent":"")},(0,a.h)("div",{key:"2f1d6858b1a9e9f3ac4eb2f2e1b2d39a586666a2",class:"inner__content-wrapper"},(0,a.h)("div",{key:"b5a6b5d85f1410c04d6d322393a95229cedff375",class:"navbar__container-right-content-navigation-item-icon-wrapper ".concat(this.icon?"":"removeWrapper")},this.icon&&(0,a.h)("ifx-icon",{icon:this.icon})),"left"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem&&(0,a.h)("div",{class:"menuItemLeftIconWrapper"},(0,a.h)("ifx-icon",{icon:"chevron-left-12"})),(0,a.h)("span",{key:"8d9044d4be34812c64d13827fb516ff335316e48",class:"label__wrapper"},(0,a.h)("slot",{key:"f89b32909041bb46de2153716165271a00760de0"}))),(0,a.h)("div",{key:"684f7e25e7b8d4dfa9c2e7851dc3efcdd904a246",class:"navItemIconWrapper ".concat(!this.hasChildNavItems||this.isMenuItem||this.isSidebarMenuItem?"hide":"")},(0,a.h)("ifx-icon",{key:"fee035b67e0a87010aecaa16c47bf129b6a17bbb",icon:"chevron-down-12"})),(0,a.h)("div",{class:"menuItemRightIconWrapper ".concat("right"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide")},(0,a.h)("ifx-icon",{icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&(0,a.h)("ul",{class:"navbar-menu"}," ",(0,a.h)("slot",{name:"first__layer"})," "),this.isSidebarMenuItem&&(0,a.h)("ul",{class:"sub__layer-menu"}," ",(0,a.h)("slot",{name:"second__layer"})," "))}get el(){return(0,a.g)(this)}};n.style='.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}'}}]);
//# sourceMappingURL=5030.1afa8058.chunk.js.map