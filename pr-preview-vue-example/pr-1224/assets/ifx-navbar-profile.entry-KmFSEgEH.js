import{r as i,a as r,h as n,g as s}from"./index-1_Ol4fj2.js";const o=".navbar__item{position:relative;display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:0;flex-grow:0;font-family:var(--ifx-font-family);text-decoration:none;font-weight:400;font-size:16px;color:#1D1D1D}.navbar__item.hide{display:none}.navbar__item.isParent{gap:8px}.navbar__item .navItemIconWrapper{transition:0.3s}.navbar__item.open .navItemIconWrapper{transform:rotate(-180deg);transition:0.3s}.navbar__item:hover{color:#0A8276;cursor:pointer}.navbar__item.remove{display:none}.navbar__item.removeLabel .label__wrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper img{width:24px;height:24px;border-radius:100%}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.container{position:relative}.container .sub__layer-back-button{display:none}.container .sub__layer-back-button.show{display:flex;justify-content:flex-start}.container .sub__layer-back-button.show .back__button-wrapper{display:flex;align-items:center;gap:8px;padding:8px 0 16px 0;color:#0A8276;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.container .sub__layer-back-button.show .back__button-wrapper span:hover,.container .sub__layer-back-button.show .back__button-wrapper ifx-icon:hover{cursor:pointer}.container.hide{display:none}.container .inner__content-wrapper{display:flex;justify-content:space-between;align-items:center;gap:8px}.navbar-menu{position:absolute;display:none;list-style-type:none;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.navbar-menu.open:not(.itemInMobileMenu){display:flex}.navbar-menu.itemInMobileMenu{display:none}.navbar-menu.right{left:100%;top:-40%}.navbar-menu.left{top:-40%;right:100%}.navbar-menu.rightSideItemMenu{left:initial;right:0px}.navbar__item.layer__item-parent{color:#1D1D1D;font-size:24px;font-style:normal;font-weight:600;line-height:32px;letter-spacing:-0.24px;cursor:initial}.navbar__item.layer__item-parent .navbar__container-right-content-navigation-item-icon-wrapper ifx-icon svg{width:24px;height:24px}.navbar__item.sidebarMenuItem{justify-content:space-between;padding:0}.navbar__item.menuItem{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.navbar__item.menuItem.hide{display:none}.navbar__item.menuItem .label__wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__item.menuItem:hover{cursor:pointer;background-color:#EEEDED}.navbar__item.menuItem:active{background-color:#BFBBBB}.sub__layer-menu{padding:5px;display:none}.sub__layer-menu.remove__margin{margin:0;padding:0}.sub__layer-menu.open{display:block}.navbar__item.hide{display:none}.menuItemRightIconWrapper.hide{display:none}.navItemIconWrapper.hide{display:none}",l=o,m=class{constructor(e){i(this,e),this.defaultProfileImage=r("https://raw.githubusercontent.com/Infineon/Infineon-Icons/f4feadb1e9aa26e70aecbe579a4bb1a14efbc168/svg/user-24.svg"),this.showLabel=!0,this.href="",this.imageUrl="",this.target="_self",this.alt="",this.internalHref="",this.isMenuItem=!1,this.hasChildNavItems=!1,this.internalImageUrl=""}handleOutsideClick(e){const t=e.composedPath(),a=this.getItemMenu();a&&a.classList.contains("open")&&(t.includes(this.el)||this.closeItemMenu())}componentWillLoad(){this.setHref(),this.setImage(),this.getNavbarItems().length!==0?this.hasChildNavItems=!0:this.hasChildNavItems=!1}componentDidLoad(){if(this.hasChildNavItems){const e=this.getNavbarItems();this.appendNavItemToMenu(e)}}async hideComponent(){this.el.style.display="none"}async showComponent(){this.el.style.display=""}handleClassList(e,t,a){if(e.classList[t](a),t==="contains")return e.classList.contains(a)}getNavbarItems(){return this.el.querySelectorAll("ifx-navbar-item")}getNavBarItem(){return this.el.shadowRoot.querySelector(".navbar__item")}relocateUsingSlot(e){e.forEach(t=>{t.setAttribute("slot","first__layer")})}appendNavItemToMenu(e){this.relocateUsingSlot(e)}setImage(){this.imageUrl.toLowerCase().trim()===""?this.internalImageUrl=void 0:this.internalImageUrl=this.imageUrl}setHref(){this.href.toLowerCase().trim()===""?this.internalHref=void 0:this.internalHref=this.href}getItemMenu(){return this.el.shadowRoot.querySelector(".navbar-menu")}closeItemMenu(){const e=this.getItemMenu(),t=this.getNavBarItem();e&&(this.handleClassList(e,"remove","open"),this.handleClassList(t,"remove","open"))}toggleItemMenu(){if(!this.internalHref){if(this.isMenuItem&&this.hasChildNavItems){const e=this.getItemMenu();this.handleClassList(e,"add","right")}if(this.hasChildNavItems){const e=this.getItemMenu(),t=this.getNavBarItem();this.handleClassList(e,"toggle","open"),this.handleClassList(t,"toggle","open")}}}itemHasNestedItems(){return!!this.el.shadowRoot.querySelector("ifx-navbar-item")}render(){return n("div",{key:"0452a72c364dfa612c007c5a3e04a494acfd18bb",class:"container"},n("a",{key:"0be93a593b592600d5b0ca6931d48d03048d35b9",href:this.internalHref,target:this.target,onClick:()=>this.toggleItemMenu(),class:`navbar__item ${this.showLabel?"":"removeLabel"} ${this.hasChildNavItems?"isParent":""}`},n("div",{key:"b43239933c33de60e81e3da80920467008e1e38e",class:"inner__content-wrapper"},n("div",{key:"04d2ac44766958387bb4545193a187a1a106a71f",class:"navbar__container-right-content-navigation-item-icon-wrapper"},n("img",{key:"847f6a817bb70bf84b90dddbdb68859c7cbcc9b2",src:this.internalImageUrl?this.internalImageUrl:this.defaultProfileImage,alt:this.alt})),n("span",{key:"22fb7dada2ae2a7f060284624ab3f747163f6471",class:"label__wrapper"},n("slot",{key:"075bfd079504882fd311e421097ab5c227422648"})))),this.hasChildNavItems&&n("ul",{class:"navbar-menu rightSideItemMenu"}," ",n("slot",{name:"first__layer"})," "))}static get assetsDirs(){return["assets"]}get el(){return s(this)}};m.style=l;export{m as ifx_navbar_profile};
