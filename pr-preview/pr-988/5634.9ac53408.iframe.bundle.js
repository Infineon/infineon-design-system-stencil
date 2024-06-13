"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5634],{"./dist/esm/ifx-chip_4.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_chip:()=>Chip,ifx_dropdown_item:()=>DropdownItem,ifx_dropdown_menu:()=>DropdownMenu,ifx_pagination:()=>Pagination});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const Chip=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxDropdownMenu=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownMenu",7),this.placeholder=void 0,this.selectedValue="",this.active=!1}handleOutsideClick(event){const path=event.composedPath(),chipWrapper=this.el.shadowRoot.querySelector(".wrapper"),dropdownMenu=this.getDropdownMenu();path.includes(dropdownMenu)||path.includes(chipWrapper)||this.closedMenu()}handleDropdownItemValueEmission(event){this.selectedValue=event.detail,this.ifxDropdownMenu.emit(event.detail),this.toggleMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu")}closedMenu(){let dropdownMenuComponent=this.getDropdownMenu();dropdownMenuComponent.isOpen&&this.toggleCloseIcon(),dropdownMenuComponent.isOpen=!1,this.active=!1}toggleMenu(){let dropdownMenuComponent=this.getDropdownMenu();dropdownMenuComponent.isOpen=!dropdownMenuComponent.isOpen,this.active=dropdownMenuComponent.isOpen,this.toggleCloseIcon()}toggleCloseIcon(){this.el.shadowRoot.querySelector(".wrapper-close-button").classList.toggle("show")}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"182ec72ccc009923423d5100497b9f23b2a3c607","aria-value":this.selectedValue,"aria-label":"chip with a dropdown menu",class:"dropdown container"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4623a9020da926b0ec54569b144fd6a6cac67662",class:`wrapper ${this.active?"active":""} ${""!==this.selectedValue?"selected":""}`,onClick:()=>this.toggleMenu(),tabIndex:0},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0f6a7dc6e8845b143bf88c43d7144e108645a011",class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ddb275e1b7e1d055ccbe1a9977f3e105e1217c38",class:"wrapper-close-button"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"e6f9ffd4ff4226800d552f37f525c1d4859dee49",icon:"chevrondown12"}))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"23a79904a975df591e6eb33a9d5a40dac9719c48",name:"menu"}))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Chip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.container{position:relative;font-family:var(--ifx-font-family)}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper.active{border:1px solid #0A8276;outline:none}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button{display:flex;align-items:center}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:transform 0.3s;transform:rotate(-180deg)}.container .wrapper.selected{border:1px solid #0A8276;outline:2px solid #0A8276;outline-offset:-3px}.container .wrapper.selected .wrapper-label{font-style:normal;font-weight:600;font-size:0.875rem;line-height:1.25rem;color:#0A8276}.container .wrapper.selected ifx-icon{color:#0A8276}.container .wrapper.selected:hover{border:1px solid #08665C;outline:2px solid #08665C}.container .wrapper.selected:hover ifx-icon,.container .wrapper.selected:hover .wrapper-label{color:#08665C}';const DropdownItem=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxDropdownItem=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownItem",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(event){this.size=event.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let hrefAttr=this.href?{href:this.href,target:this.target}:{};return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({key:"338eb1a1ca3d1ca3240a0aa0465e80a7ac7fbd9e"},hrefAttr,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${"s"===this.size?"small":""} ${this.hide?"hide":""}`}),this.icon&&(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{class:"icon",icon:this.icon}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"ee62e58dbd035e3ba1cde37bd27947b718dd12a7"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"cc2e22d42df728024c928e7b7812c39006c501ac"})))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}';const DropdownMenu=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.menuSize=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(event){const searchValue=event.detail;this.filterDropdownItems(searchValue)}handleDropdownItemValueEmission(event){this.ifxDropdownMenuItem.emit(event.detail)}filterDropdownItems(searchValue){const allItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let dropdownItem,txtValue,query=searchValue.toUpperCase();for(let i=0;i<allItems.length;i++)dropdownItem=allItems[i],txtValue=dropdownItem.textContent||dropdownItem.innerText,txtValue.toUpperCase().indexOf(query)>-1?dropdownItem.setAttribute("hide",!1):dropdownItem.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const searchField=this.el.querySelector("ifx-search-field"),dropdownHeader=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!searchField&&!dropdownHeader)}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"24583268df1fced1b9346399e0b97f8a2ff4259b",class:`dropdown-menu \n      ${this.isOpen?"show":""} \n      ${this.hideTopPadding?"hideTopPadding":""}\n      ${"s"===this.size?"small":""}`},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"7497285c6cb5c7540a0588e6a594efd1900227d8"}))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownMenu.style=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible;position:absolute}";const Pagination=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxPageChange=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();let leftArrow=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(leftArrow,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const total=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,itemsPerPage=this.itemsPerPage,totalPageNumber=Math.ceil(total/itemsPerPage);this.currentPage<=0?this.internalPage=1:this.currentPage>totalPageNumber?this.internalPage=totalPageNumber:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:totalPageNumber},((_,index)=>index+1))}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var paginationElement=this.el.shadowRoot.querySelector(".pagination"),listItems=paginationElement.querySelectorAll("li");this.addEventListenersToPageItems(listItems,paginationElement),paginationElement.dataset[this.DATA_KEY]<this.numberOfPages?paginationElement.dataset[this.DATA_KEY]=paginationElement.dataset[this.DATA_KEY]:paginationElement.dataset[this.DATA_KEY]=0,this.changePage(paginationElement,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(currActive){let currentPage=currActive+1,totalPages=this.numberOfPages.length,prevPage=0===currActive?null:currActive,nextPage=currActive+2>totalPages?null:currActive+2,itemsPerPage=this.itemsPerPage;this.ifxPageChange.emit({currentPage,totalPages,prevPage,nextPage,itemsPerPage})}addEventListenersToPageItems(listItems,paginationContainer){listItems.forEach((item=>{item.addEventListener("click",(e=>{var parent=paginationContainer;let listItems=parent.querySelectorAll("li");parent.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(e.currentTarget),this.changePage(parent,!1)}))}))}initPagination(paginationContainer){var listItems=paginationContainer.querySelectorAll("li");paginationContainer.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(paginationContainer.querySelector(".active")),paginationContainer.querySelector(".prev").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),paginationContainer.querySelector(".next").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),this.addEventListenersToPageItems(listItems,paginationContainer)}navigateSinglePage(e,initialValue){let el=e;if("object"==typeof e.target&&(el=e.target),!el.classList.contains(this.CLASS_DISABLED)){var parent=el.closest(".pagination"),currActive=parseInt(parent.dataset[this.DATA_KEY],10);-1===(currActive+=1*(el.classList.contains("prev")?-1:1))&&(currActive=0),parent.dataset[this.DATA_KEY]=currActive,this.changePage(parent,initialValue)}}changePage(pagination,initialValue){const paginationContainer=pagination;var listItems=paginationContainer.querySelectorAll("li"),currActive=parseInt(paginationContainer.dataset[this.DATA_KEY],10);listItems.forEach((item=>{item.classList.remove(this.CLASS_ACTIVE),item.classList.remove(this.CLASS_SIBLING_ACTIVE)})),initialValue&&this.internalPage>1&&(currActive=Math.floor(this.internalPage-1),paginationContainer.dataset[this.DATA_KEY]=currActive),this.handleEventEmission(currActive),listItems[currActive].classList.add(this.CLASS_ACTIVE),0===currActive?(paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!0):(listItems[currActive-1].classList.add(this.CLASS_SIBLING_ACTIVE),paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!1),currActive===listItems.length-1?(paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!0):(paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var paginationElement=this.el.shadowRoot.querySelector(".pagination");this.initPagination(paginationElement)}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9e889309201093548b6781e910c31e3224c2a487","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4ea44b3e51455f9bf077300cbbc36eb2d538fcc0",class:"items__per-page-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8f9651befde8ea8bf48e532c2cc386098cec8014",class:"items__per-page-label"},"Results per Page"),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"80dd4a8d69d967a90e7d54ae225a28b453ae7b7e",class:"items__per-page-field"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-select",{key:"cb167547bc2343cbd7a9a7379af375b2288672ef",type:"single",value:"undefined","ifx-size":"s",placeholder:"false","search-enabled":"false","search-placeholder-value":"Search...","ifx-disabled":"false","ifx-error":"false","ifx-error-message":"Error","ifx-label":"","ifx-placeholder-value":"Placeholder","ifx-options":'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3661e4c95bc52774206d5360f3f469d0a5930875",class:"items__total-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e5309e8540ebd5ebffeb84a3b185c00974a3f7b1",class:"page__numbers-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"15dcaa2ea610da13643015ec543c2c550407f3e0",class:"pagination"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"e158f18ac949822900cd51af5b18ca8f6657d2e3",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{key:"aa305426d30170bdd95c66ee13a36bf5a6f1a0fa"},this.numberOfPages.map((item=>(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:""+(this.internalPage===item?"active":"")},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:void 0},item))))),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"04bbf3b4d80ef7295a22a9091a51f1fb91de9d79",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Pagination.style='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:6px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);