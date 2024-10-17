"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4551],{"./dist/esm/ifx-chip_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_chip:()=>Chip,ifx_chip_item:()=>ChipItem,ifx_pagination:()=>Pagination});var _index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3a99c8dc.js");const Chip=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChipChange=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleValueChange(newValue){this.syncSelectedOptionsWithProp(newValue)}handleReadOnlyChange(newValue){newValue&&(this.opened=!1)}closeDropdownOnOutsideClick(event){const path=event.composedPath(),chipWrapper=this.chip.shadowRoot.querySelector(".chip__wrapper"),chipDropdown=this.chip.shadowRoot.querySelector(".chip__dropdown");path.includes(chipDropdown)||path.includes(chipWrapper)||!this.opened||this.toggleDropdownMenu()}updateSelectedOptions(event){const eventDetail=event.detail,previousSelection=[...this.selectedOptions];if("multi"!==this.variant){if(eventDetail.selected){this.opened=!1;this.getChipItems().forEach((chipItem=>{chipItem.selected&&chipItem!==event.target&&(chipItem.chipState=Object.assign(Object.assign({},chipItem.chipState),{emitIfxChipItemSelect:!1}),chipItem.selected=!1)})),this.selectedOptions=[eventDetail]}else this.selectedOptions=[];this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0}else eventDetail.selected?this.selectedOptions.find((option=>option.value===eventDetail.value))||(this.selectedOptions=[...this.selectedOptions,eventDetail]):this.selectedOptions=this.selectedOptions.filter((option=>option.key!==eventDetail.key)),this.value=this.selectedOptions.map((option=>option.value));eventDetail.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return"multi"!==this.variant?this.selectedOptions.map((option=>option.label)).join(""):this.selectedOptions.slice(0,2).map((option=>option.label)).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}handleUnselectButtonClick(event){event.stopPropagation(),this.opened=!1;let itemGotUnselected=!1;if(this.getChipItems().forEach((chipItem=>{chipItem.selected&&(itemGotUnselected=!0,chipItem.chipState=Object.assign(Object.assign({},chipItem.chipState),{emitIfxChipItemSelect:!1}),chipItem.selected=!1)})),itemGotUnselected){const previousSelection=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(event){this.readOnly||"Space"!==event.code&&"Enter"!==event.code||this.toggleDropdownMenu()}syncChipState(){const chipItems=this.getChipItems();let key=0;chipItems.forEach((chipItem=>{chipItem.chipState={emitIfxChipItemSelect:!0,size:"small"===this.size?"small":"large",variant:"multi"===this.variant?"multi":"single",key:key++}}))}syncSelectedOptionsWithProp(newValue){this.selectedOptions=[];const generateKey=(()=>{let count=0;return()=>count++})();Array.isArray(newValue)?this.selectedOptions=newValue.map((value=>({value,label:value,selected:!0,key:generateKey(),emitIfxChipChange:!0}))):"string"==typeof newValue&&(this.selectedOptions=[{value:newValue,label:newValue,selected:!0,key:generateKey(),emitIfxChipChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f9d5e345a97664c49afeeeed72ffbf89445c41a2","aria-value":this.getSelectedOptions(),"aria-label":"chip with a dropdown menu",class:"chip"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"34f2461834eb63d3b9f4cac3385951a7cb257739",class:`chip__wrapper chip__wrapper--${"small"===this.size?"small":"large"}\n                  chip__wrapper--${"multi"===this.variant?"multi":"single"}\n                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}\n                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},onKeyDown:this.readOnly?void 0:e=>{this.handleWrapperKeyDown(e)}},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"97d9b3abb1fe48ed7d9c0724522c30da93b95313",class:"wrapper__label"},0===this.selectedOptions.length&&`${this.placeholder}`,0!==this.selectedOptions.length&&("multi"===this.variant||this.readOnly)&&""!==this.placeholder&&`${this.placeholder}:`,0!==this.selectedOptions.length&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"800bd86a2eb7472b7ca1eee22889f1285be22777",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&"multi"===this.variant&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-number-indicator",{key:"8cb33ab9412af6b4283b346df9ae0a5615b677fd"},"  ","+"+(this.selectedOptions.length-2)," ")),!this.readOnly&&("multi"!==this.variant||"multi"===this.variant&&0===this.selectedOptions.length)&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"98812073aa937d52de6e793a82f8d490a8083d9e",class:"wrapper__open-button"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:1,icon:"chevrondown16"})),"multi"!==this.variant&&!1!==this.readOnly&&this.selectedOptions.length>0&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ca94abe3c6a87191c878059322dfa81317fc5fff",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&"multi"===this.variant&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a77e3320999c058a6a8113a08afa1903bd435716",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a8d9efdbe9edd7d704dd397abff36f9f268c0f13",class:"chip__dropdown"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"613c605d04afc80a193621ccaaad0a8ea109a375"})))}get chip(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};Chip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}';const ChipItem=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChipItemSelect=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(event){if("single"===this.chipState.variant){const target=event.target;this.chipItem!==target&&this.chipItem.parentElement===target.parentElement&&(this.selected=!1)}}validateSelected(newValue,oldValue){newValue!==oldValue&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(emitIfxChipChange=!0){this.ifxChipItemSelect.emit({emitIfxChipChange,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(event){"Enter"!==event.code&&"Space"!==event.code||this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"704162271118538ba19e0abd85178b54a04ce77e",class:`chip-item chip-item--${this.chipState.size} \n                    chip-item--${"single"===(this.selected&&this.chipState.variant)?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)}},"multi"===this.chipState.variant&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{key:"ae94e25e564dbcdba39a9abef5a6c57789020b94",value:this.selected,tabIndex:-1,size:"s"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b0f274faeae39f91c99de6d2589368ef034fb675",class:"chip-item__label"}," ",(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"b40af5f8a341bf496aef9bef5fb1960b542c7d03"})," "),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"646dee881e42a8764dc1de7ca3637394198c896b",class:"chip-item__selected-indicator"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"cd1e2089ea1d1048b41ddc722fe6799bbca45add",icon:"check"+("small"===this.chipState.size?"12":"16")}," ")))}get chipItem(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{selected:["validateSelected"]}}};ChipItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}';const Pagination=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxPageChange=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();let leftArrow=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(leftArrow,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const total=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,itemsPerPage=this.itemsPerPage,totalPageNumber=Math.ceil(total/itemsPerPage);this.currentPage<=0?this.internalPage=1:this.currentPage>totalPageNumber?this.internalPage=totalPageNumber:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:totalPageNumber},((_,index)=>index+1))}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var paginationElement=this.el.shadowRoot.querySelector(".pagination"),listItems=paginationElement.querySelectorAll("li");this.addEventListenersToPageItems(listItems,paginationElement),paginationElement.dataset[this.DATA_KEY]<this.numberOfPages?paginationElement.dataset[this.DATA_KEY]=paginationElement.dataset[this.DATA_KEY]:paginationElement.dataset[this.DATA_KEY]=0,this.changePage(paginationElement,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(currActive){let currentPage=currActive+1,totalPages=this.numberOfPages.length,prevPage=0===currActive?null:currActive,nextPage=currActive+2>totalPages?null:currActive+2,itemsPerPage=this.itemsPerPage;this.ifxPageChange.emit({currentPage,totalPages,prevPage,nextPage,itemsPerPage})}addEventListenersToPageItems(listItems,paginationContainer){listItems.forEach((item=>{item.addEventListener("click",(e=>{var parent=paginationContainer;let listItems=parent.querySelectorAll("li");parent.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(e.currentTarget),this.changePage(parent,!1)}))}))}initPagination(paginationContainer){var listItems=paginationContainer.querySelectorAll("li");paginationContainer.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(paginationContainer.querySelector(".active")),paginationContainer.querySelector(".prev").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),paginationContainer.querySelector(".next").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),this.addEventListenersToPageItems(listItems,paginationContainer)}navigateSinglePage(e,initialValue){let el=e;if("object"==typeof e.target&&(el=e.target),!el.classList.contains(this.CLASS_DISABLED)){var parent=el.closest(".pagination"),currActive=parseInt(parent.dataset[this.DATA_KEY],10);-1===(currActive+=1*(el.classList.contains("prev")?-1:1))&&(currActive=0),parent.dataset[this.DATA_KEY]=currActive,this.changePage(parent,initialValue)}}changePage(pagination,initialValue){const paginationContainer=pagination;var listItems=paginationContainer.querySelectorAll("li"),currActive=parseInt(paginationContainer.dataset[this.DATA_KEY],10);listItems.forEach((item=>{item.classList.remove(this.CLASS_ACTIVE),item.classList.remove(this.CLASS_SIBLING_ACTIVE)})),initialValue&&this.internalPage>1&&(currActive=Math.floor(this.internalPage-1),paginationContainer.dataset[this.DATA_KEY]=currActive),this.handleEventEmission(currActive),listItems[currActive].classList.add(this.CLASS_ACTIVE),0===currActive?(paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!0):(listItems[currActive-1].classList.add(this.CLASS_SIBLING_ACTIVE),paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!1),currActive===listItems.length-1?(paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!0):(paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var paginationElement=this.el.shadowRoot.querySelector(".pagination");this.initPagination(paginationElement)}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f6cde0d25c983336048d1f41499a228aa00832f2","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1d7c3aeea6005d8a0212b13847fce83bb14d6f45",class:"items__per-page-wrapper"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"af0360dcb884ffbd9ea7db9fd0af7d610a9eae94",class:"items__per-page-label"},"Results per Page"),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d5425a0046367cfc9260345d13573fc4ffcb349b",class:"items__per-page-field"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-select",{key:"431ac83dd46c0d1fa5f2cc689ca6abeb2e3c016c",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"11cbf3a0a914a6d5f25ef7ece5f5772e9abc1b17",class:"items__total-wrapper"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5f0a03b146b1d873de3739fde13ff9b101c2ed3e",class:"page__numbers-wrapper"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"046a0b4b29c6dfe5556fd51ec77617b659f8eb3b",class:"pagination"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"cc62414c1a9bcd63d9d3c84069ffe1828a7922d5",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{key:"65a66c1fe769cf9d2b5815dba37e3832598563be"},this.numberOfPages.map((item=>(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:""+(this.internalPage===item?"active":"")},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:void 0},item))))),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"9518a4a5ed013dca655b8b5d89a15c4b9fad9999",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Pagination.style='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);