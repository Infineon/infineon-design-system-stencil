"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6593],{"./dist/esm/ifx-navbar-profile.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_navbar_profile:()=>NavbarProfile});var _index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fc6a5751.js");const NavbarProfile=class{constructor(hostRef){(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.defaultProfileImage='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="48" height="48" fill="#0A8276"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M24 14C21.7909 14 20 15.7909 20 18C20 20.2091 21.7909 22 24 22C26.2091 22 28 20.2091 28 18C28 15.7909 26.2091 14 24 14ZM18 18C18 14.6863 20.6863 12 24 12C27.3137 12 30 14.6863 30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18ZM16.5869 28.3984C18.2683 27.0179 20.7466 26 24 26C27.2541 26 29.7324 27.0209 31.4134 28.4024C33.0562 29.7526 34 31.5119 34 33V35C34 35.5523 33.5523 36 33 36H15C14.4477 36 14 35.5523 14 35V33C14 31.5074 14.9433 29.7479 16.5869 28.3984ZM17.8561 29.9441C16.5187 31.0421 16 32.2826 16 33V34H32V33C32 32.2881 31.4818 31.0474 30.1436 29.9476C28.8436 28.8791 26.8219 28 24 28C21.1774 28 19.1557 28.8771 17.8561 29.9441Z" fill="white"/>\n</svg>',this.showLabel=!0,this.href="",this.imageUrl="",this.target="_self",this.alt="",this.userName="",this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.internalImageUrl={type:"",value:""}}handleOutsideClick(event){const path=event.composedPath(),itemMenu=this.getItemMenu();itemMenu&&itemMenu.classList.contains("open")&&(path.includes(this.el)||this.closeItemMenu())}componentWillLoad(){this.setHref(),this.setImage();0!==this.getNavbarItems().length?this.hasChildNavItems=!0:this.hasChildNavItems=!1}componentDidLoad(){if(this.setProfileGap(),this.hasChildNavItems){const navItems=this.getNavbarItems();this.appendNavItemToMenu(navItems)}}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}handleClassList(el,type,className){if(el.classList[type](className),"contains"===type)return el.classList.contains(className)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}relocateUsingSlot(navItems){navItems.forEach((item=>{item.setAttribute("slot","first__layer")}))}appendNavItemToMenu(navItems){this.relocateUsingSlot(navItems)}isValidHttpUrl(string){let url;try{url=new URL(string)}catch(_){return!1}return"http:"===url.protocol||"https:"===url.protocol}setImage(){""===this.imageUrl.toLowerCase().trim()?this.internalImageUrl={type:void 0,value:""}:this.isValidHttpUrl(this.imageUrl)?this.internalImageUrl={type:"url",value:this.imageUrl}:this.internalImageUrl={type:"initials",value:this.imageUrl}}setHref(){""===this.href.toLowerCase().trim()?this.internalHref=void 0:this.internalHref=this.href}setProfileGap(){const innerContentWrapper=this.el.shadowRoot.querySelector(".inner__content-wrapper");this.el.shadowRoot.querySelector(".label__wrapper").querySelector("slot").assignedNodes().length?this.handleClassList(innerContentWrapper,"remove","no-gap"):this.handleClassList(innerContentWrapper,"add","no-gap")}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const itemMenu=this.getItemMenu(),menuItem=this.getNavBarItem();itemMenu&&(this.handleClassList(itemMenu,"remove","open"),this.handleClassList(menuItem,"remove","open"))}toggleItemMenu(){if(!this.internalHref){if(this.isMenuItem&&this.hasChildNavItems){const itemMenu=this.getItemMenu();this.handleClassList(itemMenu,"add","right")}if(this.hasChildNavItems){const itemMenu=this.getItemMenu(),menuItem=this.getNavBarItem();this.handleClassList(itemMenu,"toggle","open"),this.handleClassList(menuItem,"toggle","open")}}}itemHasNestedItems(){return!!this.el.shadowRoot.querySelector("ifx-navbar-item")}render(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"797660412d96c79ccf48e083d5d19e8f186ecade",class:"container"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"5a95136f74584a4cbc567c0e4b567135c12b78b6",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.showLabel?"":"removeLabel"} ${this.hasChildNavItems?"isParent":""}`},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a7489767b6aa9892384a45af97ef7c05ccc9a359",class:"inner__content-wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ec500c86a832c700acb7c848b9b2740777e07e8b",class:"navbar__container-right-content-navigation-item-icon-wrapper"},""!==this.userName.trim()&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"67d6ef0ff02582a69558c9575a0b948598e72eef",class:"username__tooltip"},this.userName),"initials"!==this.internalImageUrl.type&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{key:"37b30f85e8f5a9127770723e57a7bb8192371985",src:"url"===this.internalImageUrl.type?this.internalImageUrl.value:`data:image/svg+xml,${encodeURIComponent(this.defaultProfileImage)}`,alt:this.alt}),"initials"===this.internalImageUrl.type&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"dbb2366a0388fbad70386284a661374f2fd306a8",class:"initials__wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"1b2ef20d22523b031435d14a9816c24545e058d3",class:"initials"},this.internalImageUrl.value))),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"92d777a80f9568f797ef75dac3b81dc43d8e601e",class:"label__wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"13beba9ae50f2d339a8085a7c88bca1e08a0e62d",onSlotchange:()=>this.setProfileGap()})))),this.hasChildNavItems&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"eba33eeb9303cf271ccfd50a9612e9a88ace254f",class:"navbar-menu rightSideItemMenu"}," ",(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"dd9333aab9b25898095f26fe6b95f0d57ba4e66d",name:"first__layer"})," "))}static get assetsDirs(){return["assets"]}get el(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};NavbarProfile.style='.navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item:hover .username__tooltip{display:block}.navbar__item:hover .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{cursor:pointer;background-color:#08665C}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .username__tooltip{display:none;position:absolute;top:35px;right:0;text-wrap:nowrap;padding:1px 5px;font-size:13px;font-family:"Source Sans 3";background-color:black;color:#fff;z-index:99}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper:hover .username__tooltip{display:block}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;border-radius:100%;background-color:#0A8276}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper .initials__wrapper .initials{color:#FFF;text-align:center;font-family:"Source Sans 3";font-size:14px;font-style:normal;font-weight:600;line-height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.container .inner__content-wrapper.no-gap{gap:0px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}'}}]);