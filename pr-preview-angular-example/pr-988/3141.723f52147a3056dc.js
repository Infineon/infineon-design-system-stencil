"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3141],{3141:(m,s,i)=>{i.r(s),i.d(s,{ifx_navbar_profile:()=>o});var r=i(6330),t=i(3415);const o=class{constructor(e){(0,t.r)(this,e),this.defaultProfileImage=(0,t.d)("https://raw.githubusercontent.com/Infineon/Infineon-Icons/f4feadb1e9aa26e70aecbe579a4bb1a14efbc168/svg/user-24.svg"),this.showLabel=!0,this.href="",this.imageUrl="",this.target="_self",this.alt="",this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.internalImageUrl=""}handleOutsideClick(e){const n=e.composedPath(),a=this.getItemMenu();a&&a.classList.contains("open")&&(n.includes(this.el)||this.closeItemMenu())}componentWillLoad(){this.setHref(),this.setImage(),this.hasChildNavItems=0!==this.getNavbarItems().length}componentDidLoad(){if(this.hasChildNavItems){const e=this.getNavbarItems();this.appendNavItemToMenu(e)}}hideComponent(){var e=this;return(0,r.A)(function*(){e.el.style.display="none"})()}showComponent(){var e=this;return(0,r.A)(function*(){e.el.style.display=""})()}handleClassList(e,n,a){if(e.classList[n](a),"contains"===n)return e.classList.contains(a)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}relocateUsingSlot(e){e.forEach(n=>{n.setAttribute("slot","first__layer")})}appendNavItemToMenu(e){this.relocateUsingSlot(e)}setImage(){this.internalImageUrl=""===this.imageUrl.toLowerCase().trim()?void 0:this.imageUrl}setHref(){this.internalHref=""===this.href.toLowerCase().trim()?void 0:this.href}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),n=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(n,"remove","open"))}toggleItemMenu(){if(!this.internalHref){if(this.isMenuItem&&this.hasChildNavItems){const e=this.getItemMenu();this.handleClassList(e,"add","right")}if(this.hasChildNavItems){const e=this.getItemMenu(),n=this.getNavBarItem();this.handleClassList(e,"toggle","open"),this.handleClassList(n,"toggle","open")}}}itemHasNestedItems(){return!!this.el.shadowRoot.querySelector("ifx-navbar-item")}render(){return(0,t.h)("div",{key:"dd437a9d0a0f4dc07ed8d05533f1844679b55ab9",class:"container"},(0,t.h)("a",{key:"a265fdebf0348a344e58b4a7f8d9eba99506d563",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.showLabel?"":"removeLabel"} ${this.hasChildNavItems?"isParent":""}`},(0,t.h)("div",{key:"b2a68c3758ac3f3a37c975a0316a56bf6b5789e8",class:"inner__content-wrapper"},(0,t.h)("div",{key:"288e88d38b6aa03228133e59611e66b6ee4dac6d",class:"navbar__container-right-content-navigation-item-icon-wrapper"},(0,t.h)("img",{key:"d241ef210b87a8be80b11ce8d251896772f18fb4",src:this.internalImageUrl?this.internalImageUrl:this.defaultProfileImage,alt:this.alt})),(0,t.h)("span",{key:"2c4ecaf65d8b5c12eee5e5906baedbfaec14cef4",class:"label__wrapper"},(0,t.h)("slot",{key:"b48c9e8ea7a4ad6f5881f8c95474fac8ff1dca20"})))),this.hasChildNavItems&&(0,t.h)("ul",{class:"navbar-menu rightSideItemMenu"}," ",(0,t.h)("slot",{name:"first__layer"})," "))}static get assetsDirs(){return["assets"]}get el(){return(0,t.g)(this)}};o.style=".navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}"}}]);