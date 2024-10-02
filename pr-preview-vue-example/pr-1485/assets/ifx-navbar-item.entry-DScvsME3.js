import{r,c as o,h as a,g as l}from"./index-D4bz33iy.js";const h='.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item:hover .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{cursor:pointer;background-color:#08665C}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper:hover .username__tooltip{display:block}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;border-radius:100%;background-color:#0A8276}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper .initials{color:#FFF;text-align:center;font-family:"Source Sans 3";font-size:14px;font-style:normal;font-weight:600;line-height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.container .inner__content-wrapper.no-gap{gap:0px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}',c=h,m=class{constructor(e){r(this,e),this.ifxNavItem=o(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1,this.itemPosition=void 0}handleOutsideClick(e){const t=e.composedPath(),n=this.getItemMenu();n&&n.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}async toggleChildren(e){const t=this.getItemMenu(),n=this.getChevronDownIconWrapper();t&&(this.handleClassList(n,e,"hide"),this.handleClassList(t,e,"itemInMobileMenu"))}async moveChildComponentsIntoSubLayerMenu(){const e=this.getItemMenu();if(e&&this.handleClassList(e,"contains","open")){const s=this.getNavBarItem(),i=this.getSubLayerBackButton();this.handleClassList(s,"add","layer__item-parent"),this.handleClassList(i,"add","show"),this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}const t=this.el.querySelectorAll('[slot="first__layer"]');this.isSidebarMenuItem=!0;for(let n=0;n<t.length;n++)t[n].setAttribute("slot","second__layer"),t[n].moveChildComponentsIntoSubLayerMenu()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}async toggleFirstLayerItem(e,t){const n=this.getNavBarItem(),s=this.getSubLayerMenu(),i=this.getSubLayerBackButton();this.handleClassList(i,[e],"show"),this.handleClassList(n,[t],"hide"),this.handleClassList(s,[t],"remove__margin")}openSubLayerMenu(){if(this.hasChildNavItems){const e=this.getSubLayerBackButton(),t=this.getRightArrowIcon(),n=this.getNavBarItem(),s=this.getSubLayerMenu(),i=this.el.getAttribute("slot");this.handleClassList(e,"add","show"),this.handleClassList(t,"add","hide"),this.handleClassList(n,"add","layer__item-parent"),this.handleClassList(s,"add","open"),i.toLowerCase()==="second__layer"?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(n,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}async addMenuItemClass(){const e=this.getNavBarItem();this.handleClassList(e,"add","menuItem");const t=this.getRightArrowIcon();this.hasChildNavItems&&this.handleClassList(t,"remove","hide")}async moveChildComponentsBackIntoNavbar(){const e=this.getSubLayerBackButton(),t=this.getNavBarItem(),n=this.getSubLayerMenu();this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","layer__item-parent"),this.handleClassList(n,"remove","remove__margin"),this.ifxNavItem.emit({component:this.el,action:"show"});const s=this.el.querySelectorAll('[slot="second__layer"]');this.isSidebarMenuItem=!1,this.showComponent(),this.handleClassList(t,"remove","hide");for(let i=0;i<s.length;i++)s[i].setAttribute("slot","first__layer"),s[i].moveChildComponentsBackIntoNavbar(),s[i].addMenuItemClass(),s[i].returnToFirstLayer()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}async returnToFirstLayer(){const e=this.getSubLayerBackButton(),t=this.getNavBarItem(),n=this.getRightArrowIcon(),s=this.getSubLayerMenu(),i=this.el.getAttribute("slot");this.handleClassList(e,"remove","show"),this.handleClassList(t,"remove","layer__item-parent"),this.handleClassList(s,"remove","open"),this.hasChildNavItems&&this.handleClassList(n,"remove","hide"),i.toLowerCase()==="second__layer"?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"returnToSecondLayer"}),this.handleClassList(t,"add","menuItem")):this.ifxNavItem.emit({component:this.el,action:"return"})}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren()}componentDidLoad(){if(this.hasChildNavItems){const e=this.getNavbarItems();this.relocateItemsToFirstlayer(e)}}componentDidUpdate(){const e=this.getNavBarItem(),t=this.handleClassList(e,"contains","layer__item-parent");if(this.isSidebarMenuItem&&t){const n=this.getRightArrowIcon();this.handleClassList(n,"add","hide")}}async setMenuItemPosition(){if(this.isMenuItem&&this.hasChildNavItems){const e=this.getItemMenuPosition();e==="left"?this.itemPosition="left":e==="right"&&(this.itemPosition="right")}}handleClassList(e,t,n){if(e.classList[t](n),t==="contains")return e.classList.contains(n)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(e){e.forEach(t=>{t.setAttribute("slot","first__layer")})}setHref(){this.href.toLowerCase().trim()===""?this.internalHref=void 0:this.internalHref=this.href}checkIfItemIsNested(){const e=this.el.parentElement;if(e.tagName.toUpperCase()==="IFX-NAVBAR-ITEM"||e.tagName.toUpperCase()==="IFX-NAVBAR-PROFILE"){this.isMenuItem=!0;return}else this.isMenuItem=!1}checkIfItemHasChildren(){this.getNavbarItems().length!==0?this.hasChildNavItems=!0:this.hasChildNavItems=!1}async setItemSideSpecifications(){const e=this.el,t=this.getItemMenu();return e.getAttribute("slot").toLowerCase().trim()==="right-item"&&this.handleClassList(t,"add","rightSideItemMenu"),!0}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}getItemMenuPosition(){let e=this.el;for(;e;){if(e.tagName==="IFX-NAVBAR-PROFILE"||e.slot==="right-item")return"left";e=e.parentElement||e.getRootNode().host}return"right"}toggleItemMenu(){const e=this.el.getAttribute("slot");if((e.toLowerCase()==="mobile-menu-top"||e.toLowerCase()==="second__layer")&&this.openSubLayerMenu(),!this.internalHref&&e.toLowerCase()!=="mobile-menu-top"&&e.toLowerCase()!=="second__layer"){const t=this.getItemMenu();if(this.hasChildNavItems){const n=this.getNavBarItem();this.handleClassList(t,"toggle","open"),this.handleClassList(n,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const t=this.getItemMenu(),n=this.getItemMenuPosition();e.type.toUpperCase()==="MOUSEENTER"&&(this.handleClassList(t,"add","open"),n==="left"?this.handleClassList(t,"add","left"):n==="right"&&this.handleClassList(t,"add","right")),e.type.toUpperCase()==="MOUSELEAVE"&&(this.handleClassList(t,"remove","open"),n==="left"?this.handleClassList(t,"remove","left"):n==="right"&&this.handleClassList(t,"remove","right"))}}render(){return a("div",{key:"7a861168a8259ffbc251e7443a5fa0bcf9981eab",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},a("div",{key:"1de3896ef62f6860ff32705865e32a613a1ea628",class:"sub__layer-back-button"},a("div",{key:"7261a2f3598b30428f842be51fe067da76307232",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},a("ifx-icon",{key:"c78cdc08ba88fc7c51be9904b5fdf5232b0f54d2",icon:"arrow-left-16"}),a("span",{key:"5dca18efa9fc6e0659b52852e8f7bf54469e06e5"},"Back"))),a("a",{key:"7cc5ac3708272477875f4bd9440cd8222cd8fcca",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.isSidebarMenuItem?"sidebarMenuItem":""} ${this.showLabel?"":"removeLabel"} ${this.isMenuItem?"menuItem":""} ${this.hasChildNavItems?"isParent":""}`},a("div",{key:"b6708e79d7dc03957160c3a27fbed641c297293f",class:"inner__content-wrapper"},a("div",{key:"dd0335db39acbded40f6bbd02f38dfaba5ba4d60",class:`navbar__container-right-content-navigation-item-icon-wrapper ${this.icon?"":"removeWrapper"}`},this.icon&&a("ifx-icon",{key:"afb0f652046375a6436ca9d29b9427bfc344fafa",icon:this.icon})),this.itemPosition==="left"&&this.hasChildNavItems&&this.isMenuItem&&a("div",{key:"7c1d89f0ae0e91cd9828305d15bbbad4b3245991",class:"menuItemLeftIconWrapper"},a("ifx-icon",{key:"c830dec8681a16aed5db4076607a3b387a64645c",icon:"chevron-left-12"})),a("span",{key:"838ba598e79fc06b38c6eee60e05a84c4f810abc",class:"label__wrapper"},a("slot",{key:"9d324195db4029a63b825b0607dd3997fe862aff"}))),a("div",{key:"dee45508802632650da4635ae444522c7f2d2e47",class:`navItemIconWrapper ${this.hasChildNavItems&&!this.isMenuItem&&!this.isSidebarMenuItem?"":"hide"}`},a("ifx-icon",{key:"9246f0805d058f8814b0f1c26ddb128e0c152ce9",icon:"chevron-down-12"})),a("div",{key:"08b233457ff05f3c0aaffdab7849645ccfbc3e15",class:`menuItemRightIconWrapper ${this.itemPosition==="right"&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide"}`},a("ifx-icon",{key:"43b3ecc85787e45754d913c13a1bf20e0e1608a1",icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&a("ul",{key:"66b755d60a3906187918af2e9db6c495b5fda247",class:"navbar-menu"}," ",a("slot",{key:"709b7589b270a4631a2f373375b6c20f9ade74ea",name:"first__layer"})," "),this.isSidebarMenuItem&&a("ul",{key:"d6565202f701f7ce89f0234f05df840aaef2634e",class:"sub__layer-menu"}," ",a("slot",{key:"e14f1ef102253aae998d5e3b0dffbab713c7b8ec",name:"second__layer"})," "))}get el(){return l(this)}};m.style=c;export{m as ifx_navbar_item};
