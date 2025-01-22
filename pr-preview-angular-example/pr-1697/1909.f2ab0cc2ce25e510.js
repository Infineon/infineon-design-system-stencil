"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1909],{1909:(u,v,d)=>{d.r(v),d.d(v,{ifx_navbar:()=>f});var p=d(6330),t=d(4115);const f=(()=>{let h=class{constructor(n){(0,t.r)(this,n),this.ifxNavbarMobileMenuIsOpen=(0,t.c)(this,"ifxNavbarMobileMenuIsOpen",7),this.main=!0,this.products=!1,this.applications=!1,this.design=!1,this.support=!1,this.about=!1,this.applicationName="",this.hasLeftMenuItems=!0,this.fixed=!0,this.showLogoAndAppname=!0,this.logoHref="",this.internalLogoHref="",this.logoHrefTarget="_self",this.internalLogoHrefTarget="_self"}addEventListenersToHandleCustomFocusState(){const n=this.el.shadowRoot.firstChild;if(!n)return void console.error("element not found");n.tabIndex=-1;const a=n.querySelectorAll("a");for(let r=0;r<a.length;r++)a[r].tabIndex=-1;const e=n.querySelector("slot");if(e){const r=e.assignedNodes();for(let i=0;i<r.length;i++){const _=r[i];if("IFX-NAVBAR-ITEM"===_.nodeName){const c=_,s=c?.shadowRoot.querySelectorAll("a");for(let o=0;o<s.length;o++)s[o].tabIndex=-1}}}}clearFirstLayerMenu(n){if("hideFirstLayer"===n.detail.action){const a=this.getMobileMenuTop();for(let e=0;e<a.length;e++)a[e].isSameNode(n.detail.component)||a[e].hideComponent()}if("hideSecondLayer"===n.detail.action){const a=n.detail.parent,e=a.children;a.toggleFirstLayerItem("remove","add");for(let r=0;r<e.length;r++)e[r].isSameNode(n.detail.component)||e[r].hideComponent()}if("returnToSecondLayer"===n.detail.action){const a=n.detail.parent,e=a.children;a.toggleFirstLayerItem("add","remove");for(let r=0;r<e.length;r++)e[r].isSameNode(n.detail.component)||e[r].showComponent()}if("show"===n.detail.action){const a=this.el.querySelectorAll('[slot="left-item"]');for(let e=0;e<a.length;e++)a[e].isSameNode(n.detail.component)||a[e].showComponent()}if("return"===n.detail.action){const a=this.getMobileMenuTop();for(let e=0;e<a.length;e++)a[e].isSameNode(n.detail.component)||a[e].showComponent()}}getWrappers(){const n=this.el.shadowRoot.querySelector(".navbar__container-right-content-navigation-item-search-bar-icon-wrapper"),a=this.el.shadowRoot.querySelector(".navbar__container-left-content-navigation-item-search-bar"),e=n.querySelector("slot"),r=a.querySelector("slot"),i=e.assignedNodes(),_=r.assignedNodes();return{rightSideSlot:e,leftSideSlot:r,rightAssignedNodes:i,leftAssignedNodes:_,navbarProfile:this.el.querySelector("ifx-navbar-profile"),leftMenuItems:this.el.querySelectorAll('[slot="left-item"]'),rightMenuItems:this.el.querySelectorAll('[slot="right-item"]'),topRowWrapper:this.el.shadowRoot.querySelector(".navbar__sidebar-top-row-wrapper")}}hideNavItems(){const{rightAssignedNodes:n,leftAssignedNodes:a,navbarProfile:e,leftMenuItems:r,rightMenuItems:i,topRowWrapper:_}=this.getWrappers();0!==n.length?this.searchBarIsOpen="right":0!==a.length&&(this.searchBarIsOpen="left"),e&&e.hideComponent();for(let c=0;c<r.length;c++)_.classList.contains("expand")||r[c].hideComponent();for(let c=0;c<i.length;c++)_.classList.contains("expand")&&i[c].hideOnMobile||i[c].hideComponent()}showNavItems(){const{navbarProfile:n,leftMenuItems:a,rightMenuItems:e,topRowWrapper:r}=this.getWrappers();this.searchBarIsOpen=void 0,n&&n.showComponent();for(let i=0;i<a.length;i++)r.classList.contains("expand")||a[i].showComponent();for(let i=0;i<e.length;i++)r.classList.contains("expand")&&e[i].hideOnMobile||e[i].showComponent()}handleSearchBarToggle(n){n.detail?this.hideNavItems():n.detail||this.showNavItems()}toggleClass(n,a){n.classList.toggle(a)}handleSidebar(n){const a=n.currentTarget.closest(".navbar__burger-icon-wrapper"),e=a.querySelector(".navbar__burger-icon"),r=a.querySelector(".navbar__cross-icon"),i=n.currentTarget.closest(".navbar__main-container"),_=n.currentTarget.closest(".navbar__wrapper"),c=_.querySelector(".navbar__sidebar");this.toggleClass(_,"show"),this.toggleClass(i,"show"),this.toggleClass(c,"show"),this.toggleClass(e,"close"),this.toggleClass(r,"show"),r.classList.contains("show")?this.handleBodyScroll("hide"):this.handleBodyScroll("show")}handleBodyScroll(n){const a=this.el.closest("body");this.fixed||"hide"!==n?"show"===n&&(a.style.overflow="visible"):a.style.overflow="hidden"}handleDropdownMenu(n){n.currentTarget.querySelector(".navbar__dropdown-wrapper").classList.toggle("open"),n.currentTarget.querySelector("a").classList.toggle("open")}setItemMenuPosition(){var n=this;return(0,p.A)(function*(){const a=n.el.querySelectorAll("ifx-navbar-item"),e=n.el.querySelector("ifx-navbar-profile");if(e){const r=e.querySelectorAll("ifx-navbar-item");0!==r.length&&r.forEach(i=>{i.setMenuItemPosition(),n.setMenuItemChildrenPosition(i)})}if(0!==a.length)for(let r=0;r<a.length;r++){const i=a[r],_=i.querySelectorAll("ifx-navbar-item");0!==_.length&&(yield i.setItemSideSpecifications())&&_.forEach(s=>{s.setMenuItemPosition(),n.setMenuItemChildrenPosition(s)})}})()}setMenuItemChildrenPosition(n){const a=n.querySelectorAll("ifx-navbar-item");0!==a.length&&a.forEach(e=>{e.setMenuItemPosition(),this.setMenuItemChildrenPosition(e)})}getMediaQueryList(){return window.matchMedia("(max-width: 800px)")}componentDidLoad(){this.setItemMenuPosition(),this.addEventListenersToHandleCustomFocusState(),this.getMediaQueryList().matches&&this.moveNavItemsToSidebar()}handleMobileMenuBottom(n){const a=this.el.shadowRoot.querySelector(".navbar__sidebar-bottom-row");n.target.assignedNodes().length>0?a.classList.add("show"):a.classList.remove("show")}handleLogoHrefAndTarget(){this.internalLogoHref=""===this.logoHref.trim()?void 0:this.logoHref,this.internalLogoHrefTarget=["_self","_blank","_parent"].includes(this.logoHrefTarget.trim())?this.logoHrefTarget:"_self"}componentWillLoad(){this.RemoveSpaceOnStorybookSnippet();const n=this.el.querySelector("ifx-navbar-menu");!this.el.querySelectorAll('[slot="left-item"]').length&&!n&&(this.hasLeftMenuItems=!1),this.handleLogoHrefAndTarget(),window.matchMedia("(max-width: 800px)").addEventListener("change",r=>this.moveNavItemsToSidebar(r))}getSearchBarLeftWrapper(){return this.el.shadowRoot.querySelector(".navbar__container-left-content-navigation-item-search-bar")}getMobileMenuTop(){return this.el.querySelectorAll('[slot="mobile-menu-top"]')}getMobileMenuBottom(){return this.el.querySelectorAll('[slot="mobile-menu-bottom"]')}handleBurgerIcon(){const n=this.getMobileMenuTop(),a=this.getMobileMenuBottom();if(!n.length&&!a.length){const e=this.el.shadowRoot.querySelector(".navbar__burger-icon-wrapper");this.toggleClass(e,"hide")}}moveNavItemsToSidebar(n){const a=this.el.shadowRoot.querySelector(".navbar__sidebar-top-row-wrapper"),e=this.getMediaQueryList();if(n?n.matches:e.matches){a.classList.add("expand"),this.el.shadowRoot.querySelector(".navbar__cross-icon").classList.contains("show")&&this.handleBodyScroll("hide");const _=this.el.querySelector('[slot="search-bar-left"]');_&&(this.searchBarIsOpen&&_.onNavbarMobile(),this.getSearchBarLeftWrapper().classList.add("initial"),_.setAttribute("slot","search-bar-right"));const c=this.el.querySelectorAll('[slot="left-item"]');for(let o=0;o<c.length;o++)c[o].setAttribute("slot","mobile-menu-top"),c[o].moveChildComponentsIntoSubLayerMenu(),this.searchBarIsOpen&&c[o].showComponent();const s=this.el.querySelectorAll('[slot="right-item"]');for(let o=0;o<s.length;o++)"IFX-NAVBAR-PROFILE"===s[o].tagName.toUpperCase()?s[o].showLabel=!1:s[o].hideOnMobile&&(s[o].setAttribute("slot","mobile-menu-bottom"),s[o].toggleChildren("add"),s[o].showLabel=!0,this.searchBarIsOpen&&s[o].showComponent());this.handleBurgerIcon()}else{a.classList.remove("expand"),this.handleBodyScroll("show");const _=this.getSearchBarLeftWrapper().classList.contains("initial"),c=this.el.querySelector('[slot="search-bar-right"]');_&&(this.searchBarIsOpen&&c.onNavbarMobile(),c&&c.setAttribute("slot","search-bar-left"));const s=this.getMobileMenuTop();for(let b=0;b<s.length;b++)s[b].setAttribute("slot","left-item"),s[b].moveChildComponentsBackIntoNavbar();const o=this.getMobileMenuBottom(),l=this.el.querySelector("ifx-navbar-profile");if(l){const b=l.getAttribute("show-label");l.setAttribute("show-label",b)}for(let b=0;b<o.length;b++){o[b].setAttribute("slot","right-item"),o[b].toggleChildren("remove");const m=o[b].getAttribute("show-label");o[b].setAttribute("show-label",m),this.searchBarIsOpen&&o[b].hideComponent()}}}RemoveSpaceOnStorybookSnippet(){let n=this.el.parentElement;if(n){let a=n.closest(".css-xzp052");a&&(a.style.overflow="visible")}}render(){return(0,t.h)("div",{key:"f2a010d3aa5960179c84c0b6ef797b19242d0ef2","aria-label":"a navigation navbar",class:"navbar__wrapper "+(this.fixed?"fixed":"")},(0,t.h)("div",{key:"c57f5cae212116674d736a9200642877b525526c",class:"navbar__main-container "+(this.fixed?"fixed":"")},(0,t.h)("div",{key:"90d705d53567630dce006a811f49865ff184d884",class:"navbar__container "+(this.searchBarIsOpen?"expanded":"")},(0,t.h)("div",{key:"e18e2a88665b19225b06503a01e7fb05c4c4b29b",class:"navbar__container-left "+("left"===this.searchBarIsOpen?"expand":"right"===this.searchBarIsOpen?"hide":"")},this.showLogoAndAppname&&(0,t.h)("div",{key:"006a8f8c5e61c22eb347b2b62fe87080b67ab763",class:"navbar__container-left-logo "+("left"===this.searchBarIsOpen?"hide":"")},(0,t.h)("div",{key:"785605045c6c0d3fa42c328e8a50349fc4cc4b17",class:"navbar__container-left-logo-default"},(0,t.h)("a",{key:"7205c2de72583d0b8467579a552c1932d7a608ed",href:this.internalLogoHref,target:this.internalLogoHrefTarget},(0,t.h)("svg",{key:"4f77f1ef0e51202a684dc02eecd0f0438272e8ff",width:"91",height:"40",viewBox:"0 0 91 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("g",{key:"74d46ba72072e46ee51b9cef1c00ac36a13eb41a","clip-path":"url(#clip0_2396_2480)"},(0,t.h)("path",{key:"0355efbdc40235b5e2124128f530c471a8fc0686",d:"M67.691 26.7766C71.0884 26.7766 72.1461 23.1841 72.1461 19.8802C72.1461 15.4536 70.2871 13.1441 67.691 13.1441C64.4219 13.1441 63.2681 16.7367 63.3001 19.9443C63.3322 23.1199 64.2296 26.7766 67.691 26.7766ZM66.0244 19.8481C66.0244 18.533 66.0244 15.4536 67.691 15.4536C69.4859 15.4536 69.4218 18.5009 69.4218 19.9123C69.4218 21.2595 69.4218 24.5313 67.7551 24.5313C65.9603 24.4992 66.0244 21.2274 66.0244 19.8481ZM57.8195 26.7766C59.1976 26.7766 60.3835 26.2313 61.5053 25.0445L60.5117 23.1841C59.7425 24.018 58.9733 24.4671 58.0438 24.4671C57.2746 24.4671 56.6336 24.018 56.249 23.2482C55.9285 22.5746 55.8644 21.8048 55.8644 20.9708V20.7142H61.6335V20.1368C61.6335 17.282 61.2809 15.7102 60.3835 14.5234C59.7104 13.6253 58.7169 13.1441 57.499 13.1441C56.2169 13.1441 55.1593 13.7215 54.39 14.8442C53.5567 16.0631 53.2042 17.699 53.2042 19.9443C53.1721 24.2426 54.8708 26.7766 57.8195 26.7766ZM57.531 15.2612C58.172 15.2612 58.5566 15.614 58.813 16.1914C59.0053 16.7046 59.1015 17.5707 59.1015 18.5971H55.8644C55.8964 16.3197 56.3772 15.2612 57.531 15.2612ZM74.2614 26.4559H76.7614V16.8329C77.3703 16.0952 78.0754 15.6782 78.5882 15.6782C78.9087 15.6782 79.2292 15.7423 79.4215 15.9989C79.6138 16.2876 79.71 16.7046 79.71 17.699V26.4559H82.21V16.5442C82.21 15.6782 82.1138 14.8121 81.601 14.1706C81.1523 13.5932 80.4472 13.2404 79.5497 13.2404C78.3959 13.2404 77.2101 13.914 76.569 14.6838C76.537 14.0102 76.3126 13.3687 76.2485 13.1441L73.9089 13.7536C74.0371 14.4593 74.2294 15.3253 74.2294 16.8971V26.4559H74.2614ZM45.2236 14.6838C45.1915 14.0102 44.9672 13.3687 44.9031 13.1441L42.5634 13.7536C42.6916 14.4593 42.8839 15.3253 42.8839 16.8971V26.4238H45.3838V16.8008C45.9928 16.0631 46.6979 15.6461 47.2107 15.6461C47.5312 15.6461 47.8517 15.7102 48.044 15.9669C48.2363 16.2555 48.3325 16.6725 48.3325 17.6669V26.4238H50.8324V16.5442C50.8324 15.6782 50.7363 14.8121 50.2235 14.1706C49.7748 13.5932 49.0696 13.2404 48.1722 13.2404C47.0505 13.2404 45.8646 13.914 45.2236 14.6838ZM14.6473 9.07042C16.1216 9.07042 17.3075 7.88359 17.3075 6.40807C17.3075 4.93256 16.1216 3.74573 14.6473 3.74573C13.173 3.74573 11.9871 4.93256 11.9871 6.40807C11.9871 7.88359 13.173 9.07042 14.6473 9.07042ZM26.9227 26.4559V16.5442C26.9227 15.6782 26.8265 14.8121 26.3137 14.1706C25.865 13.5932 25.1599 13.2404 24.2625 13.2404C23.1087 13.2404 21.9228 13.914 21.2818 14.6838C21.2497 14.0102 21.0254 13.3687 20.9613 13.1441L18.6536 13.7857C18.7818 14.4913 18.9741 15.3574 18.9741 16.9291V26.4559H21.4741V16.8329C22.0831 16.0952 22.7882 15.6782 23.301 15.6782C23.6215 15.6782 23.942 15.7423 24.1343 15.9989C24.3266 16.2876 24.4227 16.7046 24.4227 17.699V26.4559H26.9227ZM38.4289 8.36474C37.4994 8.36474 36.7622 9.10249 36.7622 10.0327C36.7622 10.9629 37.4994 11.7007 38.3968 11.7007C39.3263 11.7007 40.0634 10.9629 40.0634 10.0327C40.0634 9.10249 39.3263 8.36474 38.4289 8.36474ZM13.4614 26.4559H15.9614V10.8346L13.4614 11.1554V26.4559ZM33.8777 9.90441C34.3264 9.90441 34.7751 10.0648 35.0635 10.2893L35.7687 8.33266C35.0956 7.85151 34.3584 7.62698 33.429 7.62698C32.788 7.62698 32.1149 7.78736 31.5059 8.26851C30.897 8.78173 30.256 9.80818 30.256 11.7328C30.256 12.5667 30.288 13.4328 30.288 13.4328H29.4226V15.6461H30.288V26.4238H32.8521V15.6782H34.743L35.2238 13.4649H32.8841V11.4762C32.8841 10.5139 33.2687 9.90441 33.8777 9.90441ZM37.1468 26.4559H39.6788V13.2404L37.1468 13.5611V26.4559Z",fill:"#005DA9"}),(0,t.h)("path",{key:"d74aba1e7cd295982e3e24d36b288c31f86b7155",d:"M77.0816 33.5126C68.6203 36.0146 58.3321 37.1052 48.2682 37.1052C22.7239 37.1052 6.24986 29.5993 5.09604 19.6877C4.67938 15.9668 7.59599 12.3422 12.4677 9.26285C11.6023 8.62132 11.0575 7.59488 11.0254 6.44012C3.97427 10.161 0 15.0366 0 19.9764C0 30.9145 19.5188 40.1525 48.5246 39.7676C58.6205 39.6393 67.0498 38.1958 74.6778 35.6939C83.7482 32.7428 89.4532 28.5087 90.8313 26.6483C89.1968 28.1238 85.3186 31.0748 77.0816 33.5126ZM23.2687 4.38723C24.9674 3.80985 27.3712 3.0721 27.3712 3.0721C34.1339 1.21166 41.6017 0.121063 48.5566 0.185215C40.544 -0.295931 33.2365 0.185215 26.8584 1.33997C26.8584 1.33997 24.743 1.69281 22.4675 2.27018C22.4675 2.27018 21.3777 2.55887 20.7047 2.75133C20.0316 2.94379 19.1021 3.2004 19.1021 3.2004C18.4611 3.39286 17.8201 3.6174 17.1791 3.84193C17.8201 4.48346 18.2047 5.31745 18.2368 6.27974C19.3586 5.76652 21.5059 4.99668 23.2687 4.38723Z",fill:"#E30034"})),(0,t.h)("defs",{key:"957168ec812187a7da2a8ab13d6203ab73e566bf"},(0,t.h)("clipPath",{key:"082ed7ea2d8ae67bdb79efd66fc53566f72781ae",id:"clip0_2396_2480"},(0,t.h)("rect",{key:"6d874885510ededd834be3719191176a0efc6bee",width:"91",height:"40",fill:"white"})))))),this.applicationName&&(0,t.h)("h6",{key:"a984d76005d39df4da9ecb1e2fe2829a7c75dcc0"},this.applicationName),this.applicationName&&this.hasLeftMenuItems&&(0,t.h)("div",{key:"f7633a09c2cd74c264eeaafee2781c1ad501e14d",class:"navbar__container-left-logo-divider"})),(0,t.h)("div",{key:"6a4e7e61a240f3eaa877db3edada59c6fa5191a9",class:"navbar__container-left-content"},(0,t.h)("div",{key:"a995f8bfb08b112e67c736879444059ade422035",class:"navbar__container-left-content-navigation-group"},(0,t.h)("slot",{key:"1e9d67c5d7eca87010b51b579efb64b017abf4d2",name:"left-item"}),(0,t.h)("div",{key:"40d1f62d4016f292b2e19c541d6b5629ce9e9b6b",class:"navbar__container-left-content-navigation-item-search-bar"},(0,t.h)("slot",{key:"81e2637e4be85bcb7f7e45c7f9420de97da033f8",name:"search-bar-left"}))))),(0,t.h)("div",{key:"c05ba0e8255adb9321850f073e0b25c430ec49cd",class:"navbar__container-right "+("right"===this.searchBarIsOpen?"expand":"left"===this.searchBarIsOpen?"hide":"")},(0,t.h)("div",{key:"f29353be7bb55afdd07833ad9750504cd2b4e2c5",class:"navbar__container-right-content"},(0,t.h)("div",{key:"ccffe47d70b05c2e99019a2d160f9cc54591d6be",class:"navbar__container-right-content-navigation-group"},(0,t.h)("div",{key:"6468bb70542cba4cc3509d60ab22ac01afce4c7a",class:"navbar__container-right-content-navigation-item-search-bar"},(0,t.h)("div",{key:"81bbb34a92750d0f5bd3dd2844466f53a988d98d",class:"navbar__container-right-content-navigation-item-search-bar-icon-wrapper"},(0,t.h)("slot",{key:"e76faf9d851c0f4a93dfdf5cbf9011c2b4c42141",name:"search-bar-right"}))),(0,t.h)("slot",{key:"706138bf95472f7beb70fb5f56b7cdde857e03be",name:"right-item"}))),(0,t.h)("div",{key:"d1185c813a3df1ad854e5be269dc1812c2e7b443",class:"navbar__burger-icon-wrapper",onClick:this.handleSidebar.bind(this)},(0,t.h)("div",{key:"fda7444dc28b97b1631aeaca47004670b46906b2",class:"navbar__burger-icon"},(0,t.h)("ifx-icon",{key:"3333978ae7b60837953e0e7fbb65a147c63733f9",icon:"menu-right-24"})),(0,t.h)("div",{key:"7db005f3b9e29ed7bf09d66700059f0c22eb7290",class:"navbar__cross-icon"},(0,t.h)("ifx-icon",{key:"6f0c859eacb11df81fbda684f0300cc3fc901d76",icon:"cross-24"})))))),(0,t.h)("div",{key:"3966ebae4041ec00095d074ffda905e4fb2ae013",class:"navbar__sidebar"},(0,t.h)("div",{key:"97d8bca4b2ba168d63778c90cad26a6552f2b16b",class:"navbar__sidebar-top-row"},(0,t.h)("div",{key:"1c9f014298c40ba89f3efc1e9475dee041013f68",class:"navbar__sidebar-top-row-wrapper"},(0,t.h)("slot",{key:"462b0b383821a7b1f1767c5e30ada24b536e12b3",name:"mobile-menu-top"}))),(0,t.h)("div",{key:"b16f27b40f5ac721ede0475062cacafeb4ac6faa",class:"navbar__sidebar-bottom-row"},(0,t.h)("slot",{key:"1e5af7fabbb01f5360a04b28f80759d25002aba8",name:"mobile-menu-bottom",onSlotchange:n=>this.handleMobileMenuBottom(n)}))))}get el(){return(0,t.g)(this)}};return h.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{width:100%;display:block}.navbar__wrapper{font-family:var(--ifx-font-family);height:63px;position:sticky;z-index:1030;border-bottom:1px solid #EEEDED}.navbar__wrapper.fixed{border-bottom:none}.navbar__main-container{position:absolute;top:0;width:100%;transition:all 1s;z-index:1020}.navbar__main-container.fixed{position:fixed}.navbar__main-container.fixed .navbar__container{border-bottom:1px solid #EEEDED}.navbar__main-container.show{height:100vh;bottom:0;background-color:rgba(29, 29, 29, 0.2);transition:1s;z-index:1}.navbar__sidebar{box-sizing:border-box;position:fixed;right:-100%;top:64px;display:flex;flex-direction:column;align-items:flex-start;width:375px;height:calc(100vh - 64px);background-color:#FFFFFF;transition:right 1s;z-index:1030}.navbar__sidebar.show{right:0;transition:right 1s}.navbar__sidebar .navbar__sidebar-top-row{display:flex;padding:var(--borderRadius-none, 0px) var(--space-300, 24px) 30px var(--space-300, 24px);flex-direction:column;align-items:flex-start;gap:var(--space-200, 16px);flex:1 0 0;align-self:stretch;overflow-y:auto}.navbar__sidebar .navbar__sidebar-top-row .navbar__sidebar-top-row-wrapper{display:flex;padding-top:var(--space-200, 16px);flex-direction:column;align-items:flex-start;align-self:stretch;gap:16px}.navbar__sidebar .navbar__sidebar-top-row .navbar__sidebar-top-row-wrapper.expand{align-items:initial}.navbar__sidebar .navbar__sidebar-top-row .navbar__sidebar-top-row-wrapper .navbar__sidebar-top-row-item{display:flex;padding:var(--space-200, 0px) var(--space-50, 4px) var(--space-200, 0px) 0px;align-items:center;gap:var(--space-100, 8px);align-self:stretch;justify-content:space-between}.navbar__sidebar .navbar__sidebar-top-row .navbar__sidebar-top-row-wrapper .navbar__sidebar-top-row-item .navbar__sidebar-top-row-item-icon-wrapper ifx-icon{vertical-align:middle}.navbar__sidebar .navbar__sidebar-top-row .navbar__sidebar-top-row-wrapper .navbar__sidebar-top-row-item:hover{cursor:pointer}.navbar__sidebar .navbar__sidebar-top-row .navbar__sidebar-top-row-wrapper .navbar__sidebar-top-row-item .navbar__sidebar-top-row-item-label{color:var(--color-base-black, #1D1D1D);font-family:"Source Sans 3";font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__sidebar .navbar__sidebar-bottom-row{display:none;padding:var(--space-150, 12px) var(--space-300, 24px) var(--space-150, 12px) var(--space-200, 16px);flex-direction:column;align-items:flex-start;align-self:stretch;background:var(--color-engineering-100, #F7F7F7);border-top:1px solid var(--color-engineering-200, #EEEDED);gap:10px;max-height:160px;overflow-y:auto}.navbar__sidebar .navbar__sidebar-bottom-row.show{display:flex}.navbar__sidebar .navbar__sidebar-bottom-row .navbar__sidebar-bottom-row-item{display:flex;height:40px;padding-right:var(--space-50, 4px);align-items:center;gap:var(--space-100, 8px);flex:1 0 0}.navbar__sidebar .navbar__sidebar-bottom-row .navbar__sidebar-bottom-row-item .navbar__sidebar-bottom-row-item-label{color:var(--color-base-black, #1D1D1D);font-family:"Source Sans 3";font-size:16px;font-style:normal;font-weight:400;line-height:24px}.navbar__sidebar .navbar__sidebar-bottom-row .navbar__sidebar-bottom-row-item .navbar__sidebar-bottom-row-item-icon-wrapper{display:flex;align-items:center}.navbar__sidebar .navbar__sidebar-content-products,.navbar__sidebar .navbar__sidebar-content-main{display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:24px;flex:none;order:0;align-self:stretch;flex-grow:0}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-header,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-about-header,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-header,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-about-header{display:flex;flex-direction:row;align-items:center;padding:0px;gap:16px;flex:none;order:0;align-self:stretch;flex-grow:0;color:#BFBBBB}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-header span,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-about-header span,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-header span,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-about-header span{color:#1D1D1D;font-weight:600;font-size:18px;line-height:28px;display:flex;align-items:center}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu{display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:16px;flex:none;order:1;flex-grow:0;width:100%}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu .navbar__sidebar-content-products-menu-item,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu .navbar__sidebar-content-products-menu-item,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu .navbar__sidebar-content-products-menu-item,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu .navbar__sidebar-content-products-menu-item,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item{display:flex;flex-direction:row;align-items:center;padding:0px;flex:none;order:0;flex-grow:0}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu .navbar__sidebar-content-products-menu-item a,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item a,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu .navbar__sidebar-content-products-menu-item a,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item a,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu .navbar__sidebar-content-products-menu-item a,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item a,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu .navbar__sidebar-content-products-menu-item a,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item a{text-decoration:none;font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;align-items:center;color:#1D1D1D}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item{color:#BFBBBB}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item a,.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item a,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-products-menu .navbar__sidebar-content-main-menu-item a,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu .navbar__sidebar-content-main-menu-item a{font-style:normal;font-weight:600;font-size:18px;line-height:28px;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:1}.navbar__sidebar .navbar__sidebar-content-products .navbar__sidebar-content-main-menu,.navbar__sidebar .navbar__sidebar-content-main .navbar__sidebar-content-main-menu{align-items:normal}.navbar__container{display:flex;justify-content:space-between;align-items:center;padding:8px 40px;gap:16px;background-color:#FFFFFF;font-family:var(--ifx-font-family)}.navbar__container.expanded{justify-content:initial}.navbar__container .navbar__container-search-field-wrapper{display:none}.navbar__container .navbar__container-search-field-wrapper.show{display:flex}.navbar__container .navbar__container-left{display:flex;flex-direction:row;align-items:center;padding:0;gap:16px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-left.hide{display:none}.navbar__container .navbar__container-left.expand{justify-content:initial;flex:1}.navbar__container .navbar__container-left.expand .navbar__container-left-content{align-items:initial;flex:1}.navbar__container .navbar__container-left.expand .navbar__container-left-content .navbar__container-left-content-navigation-group{justify-content:initial;flex:1}.navbar__container .navbar__container-left.expand .navbar__container-left-content .navbar__container-left-content-navigation-group .navbar__container-left-content-navigation-item-search-bar{flex:1}.navbar__container .navbar__container-left .navbar__container-left-logo{display:flex;flex-direction:row;align-items:center;padding:0px;gap:16px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-logo.hide{display:none}.navbar__container .navbar__container-left .navbar__container-left-logo h6{position:relative;margin:0;padding:0;font-style:normal;font-weight:600;font-size:16px;display:flex;align-items:center;color:#1D1D1D;flex:none;order:1;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-logo .navbar__container-left-logo-default{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px 0px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-logo .navbar__container-left-logo-default svg{width:91px;height:40px;flex:none;order:0;flex-grow:0;vertical-align:bottom}.navbar__container .navbar__container-left .navbar__container-left-logo .navbar__container-left-logo-divider{width:1px;height:32px;background:#EEEDED;flex:none;order:2;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-content{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:0px;flex:none;order:1;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-content .navbar__container-left-content-navigation-group{display:flex;flex-direction:row;align-items:center;padding:0px;gap:4px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-content .navbar__container-left-content-navigation-group .navbar__container-left-content-navigation-item-search-bar{display:flex;flex-direction:row;align-items:center;padding:0px 8px;flex:none;order:5;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-content .navbar__container-left-content-navigation-group .navbar__container-left-content-navigation-item{display:flex;flex-direction:row;align-items:center;padding:0px 8px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-left .navbar__container-left-content .navbar__container-left-content-navigation-group .navbar__container-left-content-navigation-item a{display:flex;align-items:center;font-weight:400;font-size:16px;line-height:24px;color:#1D1D1D;text-decoration:none;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;padding:0;gap:8px;flex:none;order:1;flex-grow:0}.navbar__container .navbar__container-right.hide{display:none}.navbar__container .navbar__container-right.expand{justify-content:initial;flex:1}.navbar__container .navbar__container-right.expand .navbar__container-right-content{align-items:initial;flex:1}.navbar__container .navbar__container-right.expand .navbar__container-right-content .navbar__container-right-content-navigation-group{justify-content:initial;flex:1}.navbar__container .navbar__container-right.expand .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar{flex:1}.navbar__container .navbar__container-right.expand .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar .navbar__container-right-content-navigation-item-search-bar-icon-wrapper{flex:1}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4px 0px 4px 16px;border-left:1px solid #BFBBBB;gap:16px;flex:none;order:1;flex-grow:0;width:41px;height:40px}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper.hide{display:none}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper .navbar__burger-icon{display:flex;align-items:center}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper .navbar__burger-icon:hover{cursor:pointer}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper .navbar__burger-icon.close{display:none}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper .navbar__cross-icon{display:none;align-items:center}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper .navbar__cross-icon.show{display:flex}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper .navbar__cross-icon.show:hover{cursor:pointer}.navbar__container .navbar__container-right .navbar__container-right-content{display:flex;flex-direction:column;align-items:flex-start;padding:0px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group{position:relative;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;padding:0px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar{display:flex;flex-direction:row;align-items:center;padding:0px 8px;gap:4px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item .navbar__container-right-content-navigation-item-search-bar-icon-wrapper,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile .navbar__container-right-content-navigation-item-search-bar-icon-wrapper,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar .navbar__container-right-content-navigation-item-search-bar-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item .navbar__container-right-content-navigation-item-search-bar-icon-wrapper.isOpen,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile .navbar__container-right-content-navigation-item-search-bar-icon-wrapper.isOpen,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar .navbar__container-right-content-navigation-item-search-bar-icon-wrapper.isOpen{position:absolute;top:10px}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile .navbar__container-right-content-navigation-item-navigation-profile,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar .navbar__container-right-content-navigation-item-navigation-profile{position:relative;width:24px;height:24px;background:#0A8276;border-radius:100px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile a,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile .navbar__container-right-content-navigation-item-navigation-profile a,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar .navbar__container-right-content-navigation-item-navigation-profile a{position:absolute;width:22px;height:20px;left:calc(50% - 11px);top:calc(50% - 10px);font-style:normal;font-weight:600;font-size:14px;line-height:20px;text-decoration:none;display:flex;align-items:center;justify-content:center;text-align:center;color:#FFFFFF}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile .navbar__container-right-content-navigation-item-icon-wrapper,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item a,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-profile a,.navbar__container .navbar__container-right .navbar__container-right-content .navbar__container-right-content-navigation-group .navbar__container-right-content-navigation-item-search-bar a{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1D1D1D;text-decoration:none;display:flex;align-items:center;flex:none;order:1;flex-grow:0}@media screen and (max-width: 800px){.navbar__container{padding:0px 16px;height:64px;gap:initial}.navbar__container.expanded .navbar__container-right .navbar__burger-icon-wrapper{display:none}.navbar__container .navbar__container-left .navbar__container-left-content{display:none}.navbar__container .navbar__container-left .navbar__container-left-logo .navbar__container-left-logo-divider{display:none}.navbar__container .navbar__container-right{flex:1}.navbar__sidebar{width:0;transition:1s}}@media screen and (max-width: 500px){.navbar__sidebar.show{width:100%}}@media screen and (min-width: 500px){.navbar__sidebar.show{width:50%}}@media screen and (min-width: 800px){.navbar__wrapper{height:63px}.navbar__container{padding:0px 16px;height:63px;gap:initial}.navbar__container .navbar__container-right .navbar__burger-icon-wrapper{display:none}.navbar__main-container.show{height:auto;background-color:inherit;transition:none}.navbar__sidebar{width:0;transition:1s}.navbar__sidebar.show{right:-100%}}@media screen and (min-width: 1024px){.navbar__wrapper{height:72px}.navbar__container{padding:0px 24px;height:72px}.navbar__container .navbar__container-left{gap:12px;display:flex}.navbar__container .navbar__container-left .navbar__container-left-content{display:flex}.navbar__container .navbar__container-left .navbar__container-left-logo-default svg{width:72.8px;height:32px}.navbar__main-container.show{height:auto;background-color:inherit;transition:none}}@media screen and (min-width: 1200px){.navbar__wrapper{height:80px}.navbar__container{padding:0px 32px;height:80px}.navbar__container .navbar__container-left .navbar__container-left-content{justify-content:inherit}.navbar__container .navbar__container-right .navbar__container-right-content{justify-content:inherit}}@media screen and (min-width: 1440px){.navbar__wrapper{height:80px}.navbar__container{padding:0px 40px;height:80px}.navbar__container .navbar__container-left .navbar__container-left-content{justify-content:center}.navbar__container .navbar__container-right .navbar__container-right-content{justify-content:inherit}}',h})()}}]);