"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3141],{3141:(p,r,i)=>{i.r(r),i.d(r,{ifx_navbar_profile:()=>c});var s=i(6330),n=i(2866);const c=(()=>{let o=class{constructor(e){(0,n.r)(this,e),this.defaultProfileImage='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="48" height="48" fill="#0A8276"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14C21.7909 14 20 15.7909 20 18C20 20.2091 21.7909 22 24 22C26.2091 22 28 20.2091 28 18C28 15.7909 26.2091 14 24 14ZM18 18C18 14.6863 20.6863 12 24 12C27.3137 12 30 14.6863 30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18ZM16.5869 28.3984C18.2683 27.0179 20.7466 26 24 26C27.2541 26 29.7324 27.0209 31.4134 28.4024C33.0562 29.7526 34 31.5119 34 33V35C34 35.5523 33.5523 36 33 36H15C14.4477 36 14 35.5523 14 35V33C14 31.5074 14.9433 29.7479 16.5869 28.3984ZM17.8561 29.9441C16.5187 31.0421 16 32.2826 16 33V34H32V33C32 32.2881 31.4818 31.0474 30.1436 29.9476C28.8436 28.8791 26.8219 28 24 28C21.1774 28 19.1557 28.8771 17.8561 29.9441Z" fill="white"/>\n</svg>',this.showLabel=!0,this.href="",this.imageUrl="",this.target="_self",this.alt="",this.userName="",this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.internalImageUrl={type:"",value:""}}handleOutsideClick(e){const t=e.composedPath(),a=this.getItemMenu();a&&a.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}componentWillLoad(){this.setHref(),this.setImage(),this.hasChildNavItems=0!==this.getNavbarItems().length}componentDidLoad(){if(this.setProfileGap(),this.hasChildNavItems){const e=this.getNavbarItems();this.appendNavItemToMenu(e)}}hideComponent(){var e=this;return(0,s.A)(function*(){e.el.style.display="none"})()}showComponent(){var e=this;return(0,s.A)(function*(){e.el.style.display=""})()}handleClassList(e,t,a){if(e.classList[t](a),"contains"===t)return e.classList.contains(a)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}relocateUsingSlot(e){e.forEach(t=>{t.setAttribute("slot","first__layer")})}appendNavItemToMenu(e){this.relocateUsingSlot(e)}isValidHttpUrl(e){let t;try{t=new URL(e)}catch{return!1}return"http:"===t.protocol||"https:"===t.protocol}setImage(){this.internalImageUrl=""===this.imageUrl.toLowerCase().trim()?{type:void 0,value:""}:this.isValidHttpUrl(this.imageUrl)?{type:"url",value:this.imageUrl}:{type:"initials",value:this.imageUrl}}setHref(){this.internalHref=""===this.href.toLowerCase().trim()?void 0:this.href}setProfileGap(){const e=this.el.shadowRoot.querySelector(".inner__content-wrapper");this.el.shadowRoot.querySelector(".label__wrapper").querySelector("slot").assignedNodes().length?this.handleClassList(e,"remove","no-gap"):this.handleClassList(e,"add","no-gap")}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}toggleItemMenu(){if(!this.internalHref){if(this.isMenuItem&&this.hasChildNavItems){const e=this.getItemMenu();this.handleClassList(e,"add","right")}if(this.hasChildNavItems){const e=this.getItemMenu(),t=this.getNavBarItem();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","open")}}}itemHasNestedItems(){return!!this.el.shadowRoot.querySelector("ifx-navbar-item")}render(){return(0,n.h)("div",{key:"009990f69632a2891731f00a270c5d1362a9e650",class:"container"},(0,n.h)("a",{key:"5a4361ceb94d8e25d61bd825fe9862b87144542f",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.showLabel?"":"removeLabel"} ${this.hasChildNavItems?"isParent":""}`},(0,n.h)("div",{key:"8beeef970f8140ccc7511281071cb994cbc7e204",class:"inner__content-wrapper"},(0,n.h)("div",{key:"6a412719acb424417f3fad62c6617519a3f9fa69",class:"navbar__container-right-content-navigation-item-icon-wrapper"},""!==this.userName.trim()&&(0,n.h)("div",{key:"4f31314499a867dd2f0be1d357e7381399d200ce",class:"username__tooltip"},this.userName),"initials"!==this.internalImageUrl.type&&(0,n.h)("img",{key:"661378617fe43e747d27d77546d03ce10c0484d6",src:"url"===this.internalImageUrl.type?this.internalImageUrl.value:`data:image/svg+xml,${encodeURIComponent(this.defaultProfileImage)}`,alt:this.alt}),"initials"===this.internalImageUrl.type&&(0,n.h)("div",{key:"f81cdb6ee2db684c229e9722370a1759cb259c81",class:"initials__wrapper"},(0,n.h)("span",{key:"a4fb616831195ac0bd7352e007d464f329923220",class:"initials"},this.internalImageUrl.value))),(0,n.h)("span",{key:"0271ded4c4378f2372c8734c4f70d9284fd724b1",class:"label__wrapper"},(0,n.h)("slot",{key:"55a07b6aea3228e21ff6fb65cd6a4ad16664c8b7",onSlotchange:()=>this.setProfileGap()})))),this.hasChildNavItems&&(0,n.h)("ul",{key:"88ea1fe28cf5c03dffe1b2f5349c0cde1f630748",class:"navbar-menu rightSideItemMenu"}," ",(0,n.h)("slot",{key:"8acda78db9ce50b7065a8285c6ca6b7ea4cc7b71",name:"first__layer"})," "))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}};return o.style='.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item:hover .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{cursor:pointer;background-color:#08665C}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper:hover .username__tooltip{display:block}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;border-radius:100%;background-color:#0A8276}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper .initials{color:#FFF;text-align:center;font-family:"Source Sans 3";font-size:14px;font-style:normal;font-weight:600;line-height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.container .inner__content-wrapper.no-gap{gap:0px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}',o})()}}]);