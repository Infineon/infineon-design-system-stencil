"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9981],{9981:(p,h,l)=>{l.r(h),l.d(h,{ifx_navbar_item:()=>m});var o=l(6330),a=l(1032);const m=(()=>{let c=class{constructor(e){(0,a.r)(this,e),this.ifxNavItem=(0,a.c)(this,"ifxNavItem",7),this.showLabel=!0,this.icon="",this.href="",this.target="_self",this.hideOnMobile=!0,this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.isSidebarMenuItem=!1,this.dotIndicator=!1}handleOutsideClick(e){const t=e.composedPath(),n=this.getItemMenu();n&&n.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}hideComponent(){var e=this;return(0,o.A)(function*(){e.el.style.display="none"})()}showComponent(){var e=this;return(0,o.A)(function*(){e.el.style.display=""})()}toggleChildren(e){var t=this;return(0,o.A)(function*(){const n=t.getItemMenu(),i=t.getChevronDownIconWrapper();n&&(t.handleClassList(i,e,"hide"),t.handleClassList(n,e,"itemInMobileMenu"))})()}moveChildComponentsIntoSubLayerMenu(){var e=this;return(0,o.A)(function*(){const t=e.getItemMenu();if(t&&e.handleClassList(t,"contains","open")){const s=e.getNavBarItem(),r=e.getSubLayerBackButton();e.handleClassList(s,"add","layer__item-parent"),e.handleClassList(r,"add","show"),e.ifxNavItem.emit({component:e.el,action:"hideFirstLayer"})}const n=e.el.querySelectorAll('[slot="first__layer"]');e.isSidebarMenuItem=!0;for(let i=0;i<n.length;i++)n[i].setAttribute("slot","second__layer"),n[i].moveChildComponentsIntoSubLayerMenu()})()}getSubLayerBackButton(){return this.el.shadowRoot.querySelector(".sub__layer-back-button")}toggleFirstLayerItem(e,t){var n=this;return(0,o.A)(function*(){const i=n.getNavBarItem(),s=n.getSubLayerMenu(),r=n.getSubLayerBackButton();n.handleClassList(r,[e],"show"),n.handleClassList(i,[t],"hide"),n.handleClassList(s,[t],"remove__margin")})()}openSubLayerMenu(){if(this.hasChildNavItems){const e=this.getSubLayerBackButton(),t=this.getRightArrowIcon(),n=this.getNavBarItem(),i=this.getSubLayerMenu(),s=this.el.getAttribute("slot");this.handleClassList(e,"add","show"),this.handleClassList(t,"add","hide"),this.handleClassList(n,"add","layer__item-parent"),this.handleClassList(i,"add","open"),"second__layer"===s.toLowerCase()?(this.ifxNavItem.emit({component:this.el,parent:this.el.parentElement,action:"hideSecondLayer"}),this.handleClassList(n,"remove","menuItem")):this.ifxNavItem.emit({component:this.el,action:"hideFirstLayer"})}}addMenuItemClass(){var e=this;return(0,o.A)(function*(){const t=e.getNavBarItem();e.handleClassList(t,"add","menuItem");const n=e.getRightArrowIcon();e.hasChildNavItems&&e.handleClassList(n,"remove","hide")})()}moveChildComponentsBackIntoNavbar(){var e=this;return(0,o.A)(function*(){const t=e.getSubLayerBackButton(),n=e.getNavBarItem(),i=e.getSubLayerMenu();e.handleClassList(t,"remove","show"),e.handleClassList(n,"remove","layer__item-parent"),e.handleClassList(i,"remove","remove__margin"),e.ifxNavItem.emit({component:e.el,action:"show"});const s=e.el.querySelectorAll('[slot="second__layer"]');e.isSidebarMenuItem=!1,e.showComponent(),e.handleClassList(n,"remove","hide");for(let r=0;r<s.length;r++)s[r].setAttribute("slot","first__layer"),s[r].moveChildComponentsBackIntoNavbar(),s[r].addMenuItemClass(),s[r].returnToFirstLayer()})()}getRightArrowIcon(){return this.el.shadowRoot.querySelector(".menuItemRightIconWrapper")}getChevronDownIconWrapper(){return this.el.shadowRoot.querySelector(".navItemIconWrapper")}returnToFirstLayer(){var e=this;return(0,o.A)(function*(){const t=e.getSubLayerBackButton(),n=e.getNavBarItem(),i=e.getRightArrowIcon(),s=e.getSubLayerMenu(),r=e.el.getAttribute("slot");e.handleClassList(t,"remove","show"),e.handleClassList(n,"remove","layer__item-parent"),e.handleClassList(s,"remove","open"),e.hasChildNavItems&&e.handleClassList(i,"remove","hide"),"second__layer"===r.toLowerCase()?(e.ifxNavItem.emit({component:e.el,parent:e.el.parentElement,action:"returnToSecondLayer"}),e.handleClassList(n,"add","menuItem")):e.ifxNavItem.emit({component:e.el,action:"return"})})()}componentWillLoad(){this.setHref(),this.checkIfItemIsNested(),this.checkIfItemHasChildren(),this.removeEmptyItem()}componentDidLoad(){if(this.handleItemGap(),this.handleLabelWrapper(),this.hasChildNavItems){const e=this.getNavbarItems();this.relocateItemsToFirstlayer(e)}}componentDidUpdate(){const e=this.getNavBarItem(),t=this.handleClassList(e,"contains","layer__item-parent");if(this.isSidebarMenuItem&&t){const n=this.getRightArrowIcon();this.handleClassList(n,"add","hide")}}setMenuItemPosition(){var e=this;return(0,o.A)(function*(){if(e.isMenuItem&&e.hasChildNavItems){const t=e.getItemMenuPosition();"left"===t?e.itemPosition="left":"right"===t&&(e.itemPosition="right")}})()}handleClassList(e,t,n){if(e.classList[t](n),"contains"===t)return e.classList.contains(n)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}getSubLayerMenu(){return this.el.shadowRoot.querySelector(".sub__layer-menu")}relocateItemsToFirstlayer(e){e.forEach(t=>{t.setAttribute("slot","first__layer")})}setHref(){this.internalHref=""===this.href.toLowerCase().trim()?void 0:this.href}checkIfItemIsNested(){const e=this.el.parentElement;this.isMenuItem="IFX-NAVBAR-ITEM"===e.tagName.toUpperCase()||"IFX-NAVBAR-PROFILE"===e.tagName.toUpperCase()}checkIfItemHasChildren(){this.hasChildNavItems=0!==this.getNavbarItems().length}setItemSideSpecifications(){var e=this;return(0,o.A)(function*(){const t=e.el,n=e.getItemMenu();return"right-item"===t.getAttribute("slot").toLowerCase().trim()&&e.handleClassList(n,"add","rightSideItemMenu"),!0})()}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}getItemMenuPosition(){let e=this.el;for(;e;){if("IFX-NAVBAR-PROFILE"===e.tagName||"right-item"===e.slot)return"left";e=e.parentElement||e.getRootNode().host}return"right"}toggleItemMenu(){const e=this.el.getAttribute("slot");if(("mobile-menu-top"===e.toLowerCase()||"second__layer"===e.toLowerCase())&&this.openSubLayerMenu(),!this.internalHref&&"mobile-menu-top"!==e.toLowerCase()&&"second__layer"!==e.toLowerCase()){const t=this.getItemMenu();if(this.hasChildNavItems){const n=this.getNavBarItem();this.handleClassList(t,"toggle","open"),this.handleClassList(n,"toggle","open")}}}handleNestedLayerMenu(e){if(this.isMenuItem&&this.hasChildNavItems&&!this.isSidebarMenuItem){const t=this.getItemMenu(),n=this.getItemMenuPosition();"MOUSEENTER"===e.type.toUpperCase()&&(this.handleClassList(t,"add","open"),"left"===n?this.handleClassList(t,"add","left"):"right"===n&&this.handleClassList(t,"add","right")),"MOUSELEAVE"===e.type.toUpperCase()&&(this.handleClassList(t,"remove","open"),"left"===n?this.handleClassList(t,"remove","left"):"right"===n&&this.handleClassList(t,"remove","right"))}}handleLabelWrapper(){const e=this.el.shadowRoot.querySelector(".label__wrapper"),t=this.getNavBarItem();e.querySelector("slot").assignedNodes().length?this.showLabel&&t.classList.contains("removeLabel")&&t.classList.remove("removeLabel"):t.classList.add("removeLabel")}handleItemGap(){const t=this.el.shadowRoot.querySelector(".navbar__item").querySelector(".navbar__container-right-content-navigation-item-icon-wrapper");this.handleClassList(t,this.numberIndicator||this.dotIndicator?"add":"remove","no-gap")}removeEmptyItem(){!this.showLabel&&!this.icon&&this.handleClassList(this.el.shadowRoot.host,"add","hidden")}render(){return(0,a.h)("div",{key:"98a3a5584ce6970b42c1362533aeceb82009e91b",class:"container",onMouseLeave:e=>this.handleNestedLayerMenu(e),onMouseEnter:e=>this.handleNestedLayerMenu(e)},(0,a.h)("div",{key:"21eeccfc5a01721c14033b98c3ebe38522ba6ab9",class:"sub__layer-back-button"},(0,a.h)("div",{key:"08825ed5d7c6c3a1e0dd582a7e6528b201240959",class:"back__button-wrapper",onClick:()=>this.returnToFirstLayer()},(0,a.h)("ifx-icon",{key:"5763b65a915c8bf0d554e79cae52dabe8b810986",icon:"arrow-left-16"}),(0,a.h)("span",{key:"300ddc647f93f8ef78921ba67ce12233affe3cb4"},"Back"))),(0,a.h)("a",{key:"dab2a111f7170f50b30de5824cdcdd471899adfc",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.isSidebarMenuItem?"sidebarMenuItem":""} ${this.showLabel?"":"removeLabel"} ${this.isMenuItem?"menuItem":""} ${this.hasChildNavItems?"isParent":""}`},(0,a.h)("div",{key:"f2c6800d93b7607cf2952e63aa5ab34ecaae48be",class:"inner__content-wrapper"},(0,a.h)("div",{key:"fafd3d1472c2dfca443e655e1acd2dc697489621",class:"navbar__container-right-content-navigation-item-icon-wrapper "+(this.icon?"":"removeWrapper")},this.icon&&(0,a.h)("ifx-icon",{key:"6f00f8d13482ab9ecd74db4de66f4367abcd255e",icon:this.icon}),this.icon&&!this.showLabel&&!isNaN(this.numberIndicator)&&(0,a.h)("div",{key:"f0d7d1be990c6583be95b5d65569381c85195bff",class:"number__indicator-wrapper"},(0,a.h)("ifx-number-indicator",{key:"d0139e514dadeefdc09f2ace9ba1bc754a42ecfc"},this.numberIndicator)),this.icon&&!this.showLabel&&!this.numberIndicator&&this.dotIndicator&&(0,a.h)("div",{key:"1d616918f156bc28a91c9e734b04df5facc45ee8",class:"dot__indicator-wrapper"})),"left"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem&&(0,a.h)("div",{key:"c23a19ba3b2b6fe3c5eb79a3a004c0d0107d682b",class:"menuItemLeftIconWrapper"},(0,a.h)("ifx-icon",{key:"373e318e386e976213fbd9592a37b7afa7488d7b",icon:"chevron-left-12"})),(0,a.h)("span",{key:"a4463d2ee853ca5731b276f14c9e6cbe3b7f8108",class:"label__wrapper"},(0,a.h)("slot",{key:"d682377d8e98e612bf2597e4b749c0ff18b10774"}))),this.showLabel&&this.numberIndicator&&!isNaN(this.numberIndicator)?(0,a.h)("div",{class:"number__indicator-wrapper"},(0,a.h)("ifx-number-indicator",null,this.numberIndicator)):"",this.showLabel&&!this.numberIndicator&&this.dotIndicator?(0,a.h)("div",{class:"dot__indicator-wrapper"}):"",(0,a.h)("div",{key:"0dade0d6eb4062bd0e31804ff501a93711dccd43",class:"navItemIconWrapper "+(!this.hasChildNavItems||this.isMenuItem||this.isSidebarMenuItem?"hide":"")},(0,a.h)("ifx-icon",{key:"8ec6bff717321e37a8e36ae8623f9d9cd5506ed0",icon:"chevron-down-12"})),(0,a.h)("div",{key:"6d75cd61b28fa198e55436d0b783725943c5d314",class:"menuItemRightIconWrapper "+("right"===this.itemPosition&&this.hasChildNavItems&&this.isMenuItem||this.isSidebarMenuItem&&this.hasChildNavItems?"":"hide")},(0,a.h)("ifx-icon",{key:"26c1d540a395b96c4d699bb050065f7e104d263b",icon:"chevron-right-12"}))),this.hasChildNavItems&&!this.isSidebarMenuItem&&(0,a.h)("ul",{key:"35c6a68f085200d3b1c3da2d994448b87201d7f9",class:"navbar-menu"}," ",(0,a.h)("slot",{key:"a7fff45b205883f0a7e83a1d2b98f52e40e3caa0",name:"first__layer"})," "),this.isSidebarMenuItem&&(0,a.h)("ul",{key:"1af92bb3811e89b576b7794e214d750bb7e340c2",class:"sub__layer-menu"}," ",(0,a.h)("slot",{key:"629fb9090d0382885b248ed1b98a260b969e3b43",name:"second__layer"})," "))}get el(){return(0,a.g)(this)}};return c.style=':host(.hidden){display:none}.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item:hover .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{cursor:pointer;background-color:#08665C}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .number__indicator-wrapper{position:relative;top:-11px}.navbar__item .dot__indicator-wrapper{display:flex;width:8px;height:8px;justify-content:center;align-items:center;flex-shrink:0;border-radius:50%;background-color:#0A8276;position:relative;top:-11px}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper:hover .username__tooltip{display:block}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;border-radius:100%;background-color:#0A8276}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper .initials{color:#FFF;text-align:center;font-family:"Source Sans 3";font-size:14px;font-style:normal;font-weight:600;line-height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{position:relative;display:flex;justify-content:space-between;align-items:center;gap:8px}.container .inner__content-wrapper.no-gap{gap:0px}.container .inner__content-wrapper .navbar__container-right-content-navigation-item-icon-wrapper.no-gap{gap:0px}.container .inner__content-wrapper .number__indicator-wrapper{position:relative;top:-11px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}',c})()}}]);