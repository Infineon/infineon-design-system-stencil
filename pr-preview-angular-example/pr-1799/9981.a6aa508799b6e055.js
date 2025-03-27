"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9981],{9981:(u,h,l)=>{l.r(h),l.d(h,{ifx_navbar_item:()=>d});var o=l(6330),a=l(1032);const d=(()=>{let c=class{constructor(e){(0,a.r)(this,e),this.ifxNavItem=(0,a.c)(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1}handleOutsideClick(e){const t=e.composedPath(),n=this.getItemMenu();n&&n.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}hideComponent(){var e=this;return(0,o.A)(function*(){e.el.style.display="none"})()}showComponent(){var e=this;return(0,o.A)(function*(){e.el.style.display=""})()}toggleChildren(e){var t=this;return(0,o.A)(function*(){const n=t.getItemMenu(),i=t.getChevronDownIconWrapper();n&&(t.handleClassList(i,e,"hide"),t.handleClassList(n,e,"itemInMobileMenu"))})()}moveChildComponentsIntoSubLayerMenu(){var e=this;return(0,o.A)(function*(){const t=e.getItemMenu();if(t&&e.handleClassList(t,"contains","open")){const s=e.getNavBarItem(),r=e.getSubLayerBackButton();e.handleClassList(s,"add","layer__item-parent"),e.handleClassList(r,"add","show"),e.ifxNavItem.emit({component:e.el,action:"hideFirstLayer"})}const n=e.el.querySelectorAll('[slot="first__layer"]');e.isSidebarMenuItem=!0;for(let i=0;i<n.length;i++)n[i].setAttribute("slot","second__layer"),n[i].moveChildComponentsIntoSubLayerMenu()})()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}toggleFirstLayerItem(e,t){var n=this;return(0,o.A)(function*(){const i=n.getNavBarItem(),s=n.getSubLayerMenu(),r=n.getSubLayerBackButton();n.handleClassList(r,[e],"show"),n.handleClassList(i,[t],"hide"),n.handleClassList(s,[t],"remove__margin")})()}openSubLayerMenu(){if(this.hasChildNavItems){const e=this.getSubLayerBackButton(),t=this.getRightArrowIcon(),n=this.getNavBarItem(),i=this.getSubLayerMenu(),s=this.el.getAttribute("slot");this.handleClassList(e,"add","show"),this.handleClassList(t,"add","hide"),this.handleClassList(n,"add","layer__item-parent"),this.handleClassList(i,"add","open"),"second__layer"===s.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(n,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}addMenuItemClass(){var e=this;return(0,o.A)(function*(){const t=e.getNavBarItem();e.handleClassList(t,"add","menuItem");const n=e.getRightArrowIcon();e.hasChildNavItems&&e.handleClassList(n,"remove","hide")})()}moveChildComponentsBackIntoNavbar(){var e=this;return(0,o.A)(function*(){const t=e.getSubLayerBackButton(),n=e.getNavBarItem(),i=e.getSubLayerMenu();e.handleClassList(t,"remove","show"),e.handleClassList(n,"remove","layer__item-parent"),e.handleClassList(i,"remove","remove__margin"),e.ifxNavItem.emit({component:e.el,action:"show"});const s=e.el.querySelectorAll('[slot="second__layer"]');e.isSidebarMenuItem=!1,e.showComponent(),e.handleClassList(n,"remove","hide");for(let r=0;r<s.length;r++)s[r].setAttribute("slot","first__layer"),s[r].moveChildComponentsBackIntoNavbar(),s[r].addMenuItemClass(),s[r].returnToFirstLayer()})()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}returnToFirstLayer(){var e=this;return(0,o.A)(function*(){const t=e.getSubLayerBackButton(),n=e.getNavBarItem(),i=e.getRightArrowIcon(),s=e.getSubLayerMenu(),r=e.el.getAttribute("slot");e.handleClassList(t,"remove","show"),e.handleClassList(n,"remove","layer__item-parent"),e.handleClassList(s,"remove","open"),e.hasChildNavItems&&e.handleClassList(i,"remove","hide"),"second__layer"===r.toLowerCase()?(e.ifxNavItem.emit({component:e.el,parent:e.el.parentElement,action:"returnToSecondLayer"}),e.handleClassList(n,"add","menuItem")):e.ifxNavItem.emit({component:e.el,action:"return"})})()}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren()}componentDidLoad(){if(this.hasChildNavItems){const e=this.getNavbarItems();this.relocateItemsToFirstlayer(e)}}componentDidUpdate(){const e=this.getNavBarItem(),t=this.handleClassList(e,"contains","layer__item-parent");if(this.isSidebarMenuItem&&t){const n=this.getRightArrowIcon();this.handleClassList(n,"add","hide")}}setMenuItemPosition(){var e=this;return(0,o.A)(function*(){if(e.isMenuItem&&e.hasChildNavItems){const t=e.getItemMenuPosition();"left"===t?e.itemPosition="left":"right"===t&&(e.itemPosition="right")}})()}handleClassList(e,t,n){if(e.classList[t](n),"contains"===t)return e.classList.contains(n)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(e){e.forEach(t=>{t.setAttribute("slot","first__layer")})}setHref(){this.internalHref=""===this.href.toLowerCase().trim()?void 0:this.href}checkIfItemIsNested(){const e=this.el.parentElement;this.isMenuItem="IFX-NAVBAR-ITEM"===e.tagName.toUpperCase()||"IFX-NAVBAR-PROFILE"===e.tagName.toUpperCase()}checkIfItemHasChildren(){this.hasChildNavItems=0!==this.getNavbarItems().length}setItemSideSpecifications(){var e=this;return(0,o.A)(function*(){const t=e.el,n=e.getItemMenu();return"right-item"===t.getAttribute("slot").toLowerCase().trim()&&e.handleClassList(n,"add","rightSideItemMenu"),!0})()}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}getItemMenuPosition(){let e=this.el;for(;e;){if("IFX-NAVBAR-PROFILE"===e.tagName||"right-item"===e.slot)return"left";e=e.parentElement||e.getRootNode().host}return"right"}toggleItemMenu(){const e=this.el.getAttribute("slot");if(("mobile-menu-top"===e.toLowerCase()||"second__layer"===e.toLowerCase())&&this.openSubLayerMenu(),!this.internalHref&&"mobile-menu-top"!==e.toLowerCase()&&"second__layer"!==e.toLowerCase()){const t=this.getItemMenu();if(this.hasChildNavItems){const n=this.getNavBarItem();this.handleClassList(t,"toggle","open"),this.handleClassList(n,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const t=this.getItemMenu(),n=this.getItemMenuPosition();"MOUSEENTER"===e.type.toUpperCase()&&(this.handleClassList(t,"add","open"),"left"===n?this.handleClassList(t,"add","left"):"right"===n&&this.handleClassList(t,"add","right")),"MOUSELEAVE"===e.type.toUpperCase()&&(this.handleClassList(t,"remove","open"),"left"===n?this.handleClassList(t,"remove","left"):"right"===n&&this.handleClassList(t,"remove","right"))}}render(){return(0,a.h)("div",{key:"5b65be83f2cfb07f308a9b99205b15bbcfe1e08b",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},(0,a.h)("div",{key:"20812f3741980e59222bb4d637d72be96a16b619",class:"sub__layer-back-button"},(0,a.h)("div",{key:"66a8d7ca5525202927e86578c58e5008e568b920",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},(0,a.h)("ifx-icon",{key:"802c01c949e123218f5c8fb36fc9b4911d7ab924",icon:"arrow-left-16"}),(0,a.h)("span",{key:"9f1581bc59c8c56515b1a4e51a0b7144d99d789f"},"Back"))),(0,a.h)("a",{key:"96f327e7a1eae82b1eba021594523e7996df5833",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.isSidebarMenuItem?"sidebarMenuItem":""} ${this.showLabel?"":"removeLabel"} ${this.isMenuItem?"menuItem":""} ${this.hasChildNavItems?"isParent":""}`},(0,a.h)("div",{key:"a47c03718e64b435ff1dc6342aa8e88d68b083a0",class:"inner__content-wrapper"},(0,a.h)("div",{key:"f65c2c121f141e18ad94da961c13983b3bbdb0a1",class:"navbar__container-right-content-navigation-item-icon-wrapper "+(this.icon?"":"removeWrapper")},this.icon&&(0,a.h)("ifx-icon",{key:"0e17c1d706ec06c2e8ddcd1a9b9f6fae4ce355ab",icon:this.icon})),"left"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem&&(0,a.h)("div",{key:"aefd4a4b2b9af089ecb5c6d726a763a036d1e98c",class:"menuItemLeftIconWrapper"},(0,a.h)("ifx-icon",{key:"05dce48bb77ee8bb64a558285d0254067c38a61e",icon:"chevron-left-12"})),(0,a.h)("span",{key:"be839503bff15e5989eb1a00039ea15f21af3472",class:"label__wrapper"},(0,a.h)("slot",{key:"dfd429829b5de74085d4fb57220a9a853378c707"}))),(0,a.h)("div",{key:"348f2bf8cab8fd31c157c492946663e0f7a5863f",class:"navItemIconWrapper "+(!this.hasChildNavItems||this.isMenuItem||this.isSidebarMenuItem?"hide":"")},(0,a.h)("ifx-icon",{key:"19b283e115d745655b65b2034ff4f16fe9852e9d",icon:"chevron-down-12"})),(0,a.h)("div",{key:"4a38f100fa37457394da5b983283d090dff3f0c8",class:"menuItemRightIconWrapper "+("right"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide")},(0,a.h)("ifx-icon",{key:"59c0ddcdf860b9fb61175dd6c2d6e3998ae266b3",icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&(0,a.h)("ul",{key:"6c605f96e45dc758f4f35e564c5f8ee34480f07b",class:"navbar-menu"}," ",(0,a.h)("slot",{key:"cfa160cbffee10a913b2aba13692b9404b3f7bff",name:"first__layer"})," "),this.isSidebarMenuItem&&(0,a.h)("ul",{key:"db20f6aaca4363add49777a75c528f6a2290c1cc",class:"sub__layer-menu"}," ",(0,a.h)("slot",{key:"1e5d7b58c5b1ebeaf8e664338f4e23ab2b6dfbbc",name:"second__layer"})," "))}get el(){return(0,a.g)(this)}};return c.style='.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item:hover .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{cursor:pointer;background-color:#08665C}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper:hover .username__tooltip{display:block}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;border-radius:100%;background-color:#0A8276}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper .initials{color:#FFF;text-align:center;font-family:"Source Sans 3";font-size:14px;font-style:normal;font-weight:600;line-height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.container .inner__content-wrapper.no-gap{gap:0px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}',c})()}}]);