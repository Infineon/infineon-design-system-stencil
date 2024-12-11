"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4551],{"./dist/esm/ifx-chip_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_chip:()=>Chip,ifx_chip_item:()=>ChipItem,ifx_pagination:()=>Pagination});var _index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fc6a5751.js");const Chip=class{constructor(hostRef){(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChipChange=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.AriaLabel=void 0,this.opened=!1,this.selectedOptions=[]}handleValueChange(newValue){this.syncSelectedOptionsWithProp(newValue)}handleReadOnlyChange(newValue){newValue&&(this.opened=!1)}closeDropdownOnOutsideClick(event){const path=event.composedPath(),chipWrapper=this.chip.shadowRoot.querySelector(".chip__wrapper"),chipDropdown=this.chip.shadowRoot.querySelector(".chip__dropdown");path.includes(chipDropdown)||path.includes(chipWrapper)||!this.opened||this.toggleDropdownMenu()}handleKeyDown(event){"Tab"!==event.code&&event.preventDefault(),"IFX-CHIP"===event.target.tagName?this.handleWrapperKeyDown(event):"IFX-CHIP-ITEM"===event.target.tagName&&this.handleDropdownKeyDown(event)}updateSelectedOptions(event){const eventDetail=event.detail,previousSelection=[...this.selectedOptions];if("multi"!==this.variant){if(eventDetail.selected){this.opened=!1;this.getChipItems().forEach((chipItem=>{chipItem.selected&&chipItem!==event.target&&(chipItem.chipState=Object.assign(Object.assign({},chipItem.chipState),{emitIfxChipItemSelect:!1}),chipItem.selected=!1)})),this.selectedOptions=[eventDetail]}else this.selectedOptions=[];this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0}else eventDetail.selected?this.selectedOptions.find((option=>option.value===eventDetail.value))||(this.selectedOptions=[...this.selectedOptions,eventDetail]):this.selectedOptions=this.selectedOptions.filter((option=>option.key!==eventDetail.key)),this.value=this.selectedOptions.map((option=>option.value));eventDetail.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return"multi"!==this.variant?this.selectedOptions.map((option=>option.label)).join(""):this.selectedOptions.slice(0,2).map((option=>option.label)).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}focusChipItemAt(index=0){this.opened=!0;const chipItems=this.getChipItems();let item;if(-1===index)item=chipItems.item(chipItems.length-1);else{if(!(index>=0&&index<chipItems.length))return void console.error(`Invalid index: ${index}`);item=chipItems.item(index)}const shadowItem=item.shadowRoot.querySelector(".chip-item");shadowItem&&setTimeout((()=>{shadowItem.focus()}),1)}focusChip(){this.chip.shadowRoot.querySelector(".chip__wrapper").focus()}handleUnselectButtonClick(event){event.stopPropagation(),this.opened=!1;let itemGotUnselected=!1;if(this.getChipItems().forEach((chipItem=>{chipItem.selected&&(itemGotUnselected=!0,chipItem.chipState=Object.assign(Object.assign({},chipItem.chipState),{emitIfxChipItemSelect:!1}),chipItem.selected=!1)})),itemGotUnselected){const previousSelection=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(event){if(!this.readOnly)if(this.opened){if("Escape"===event.code)this.opened=!1,this.focusChip()}else switch(event.code){case"Space":case"Enter":case"ArrowDown":this.focusChipItemAt(0);break;case"ArrowUp":this.focusChipItemAt(-1)}}handleDropdownKeyDown(event){let chipitems=this.getChipItems(),targetIndex=Array.from(chipitems).indexOf(event.target);if(-1!==targetIndex)switch(event.code){case"ArrowDown":if(targetIndex===chipitems.length-1)break;this.focusChipItemAt(targetIndex+1);break;case"ArrowUp":if(0===targetIndex)break;this.focusChipItemAt(targetIndex-1);break;case"Escape":case"Enter":this.opened=!1,this.focusChip();break;case"Space":"single"===this.variant&&(this.opened=!1,this.focusChip())}else console.error("Target not found in chip items")}syncChipState(){const chipItems=this.getChipItems();let key=0;chipItems.forEach((chipItem=>{chipItem.chipState={emitIfxChipItemSelect:!0,size:"small"===this.size?"small":"large",variant:"multi"===this.variant?"multi":"single",key:key++}}))}syncSelectedOptionsWithProp(newValue){this.selectedOptions=[];const generateKey=(()=>{let count=0;return()=>count++})();Array.isArray(newValue)?this.selectedOptions=newValue.map((value=>({value,label:value,selected:!0,key:generateKey(),emitIfxChipChange:!0}))):"string"==typeof newValue&&(this.selectedOptions=[{value:newValue,label:newValue,selected:!0,key:generateKey(),emitIfxChipChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0ea9f8bc1e504d9a9b121b4b37fb04da775a28b3",class:"chip"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"cbdb74df0885c675763cbd1fc9493283b5a95a8c",class:`chip__wrapper chip__wrapper--${"small"===this.size?"small":"large"}\n                  chip__wrapper--${"multi"===this.variant?"multi":"single"}\n                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}\n                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},role:"combobox","aria-label":this.AriaLabel,"aria-value":this.getSelectedOptions(),"aria-haspopup":this.readOnly?void 0:"listbox","aria-expanded":this.readOnly?void 0:this.opened.toString(),"aria-controls":this.readOnly?void 0:"dropdown","aria-readonly":this.readOnly?"true":void 0,"aria-multiselectable":"multi"===this.variant?"true":void 0},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1f93a1f27efaa044100c5f1fe3ed720232112232",class:"wrapper__label"},0===this.selectedOptions.length&&`${this.placeholder}`,0!==this.selectedOptions.length&&("multi"===this.variant||this.readOnly)&&""!==this.placeholder&&`${this.placeholder}:`,0!==this.selectedOptions.length&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"216a7663b96a48f44d79802763d6ea8000d03cc5",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&"multi"===this.variant&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-number-indicator",{key:"ac04bcbf6f5789522efa21185d4dcc17684985c9"},"  ","+"+(this.selectedOptions.length-2)," ")),!this.readOnly&&("multi"!==this.variant||"multi"===this.variant&&0===this.selectedOptions.length)&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"03fc2724de22f23fa9537bd1b14e975575f664b6",class:"wrapper__open-button"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:1,icon:"chevrondown16"})),"multi"!==this.variant&&!1!==this.readOnly&&this.selectedOptions.length>0&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6f70aa5b6c60ef934cf8c79f662fea4e30e00255",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&"multi"===this.variant&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1abb95276478647b1b3da79b71e157433bb41a15",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"aa9ab179da64d1d0977ed10f72a04fda828335b5",id:"dropdown",role:"listbox",class:"chip__dropdown"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"4d66e458a164782487bc052cb9eb66f7443836d1"})))}get chip(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};Chip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper:focus{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}';const ChipItem=class{constructor(hostRef){(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChipItemSelect=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(event){if("single"===this.chipState.variant){const target=event.target;this.chipItem!==target&&this.chipItem.parentElement===target.parentElement&&(this.selected=!1)}}validateSelected(newValue,oldValue){newValue!==oldValue&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(emitIfxChipChange=!0){this.ifxChipItemSelect.emit({emitIfxChipChange,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(event){"Enter"!==event.code&&"Space"!==event.code||this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"493fe2e521f96fbe65792b4364c32a3010a4ae86",class:`chip-item chip-item--${this.chipState.size} \n                    chip-item--${"single"===(this.selected&&this.chipState.variant)?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)},role:"option","aria-selected":this.selected.toString()},"multi"===this.chipState.variant&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{key:"3f65da6457afbeca9e5e803f2569263b499fe839",checked:this.selected,tabIndex:-1,size:"s"}),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"02a710f81308419623960d15270f719c45f5fd11",class:"chip-item__label"}," ",(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"ad971a10884b08cf3775f7296a44c7aff1769a0b"})," "),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2ba702249a7fc67ded010890181f5b35494df843",class:"chip-item__selected-indicator"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"887b43ff1b8c6539b01c0fc620f51d9bc04a05d9",icon:"check"+("small"===this.chipState.size?"12":"16")}," ")))}get chipItem(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{selected:["validateSelected"]}}};ChipItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item:focus{outline:2px solid #0A8276}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}';const Pagination=class{constructor(hostRef){(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxPageChange=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){e.detail?this.itemsPerPage=parseInt(e.detail.label):this.itemsPerPage=10}componentDidLoad(){this.calculateVisiblePageIndices();let leftArrow=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(leftArrow,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const total=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,itemsPerPage=this.itemsPerPage,totalPageNumber=Math.ceil(total/itemsPerPage);this.currentPage<=0?this.internalPage=1:this.currentPage>totalPageNumber?this.internalPage=totalPageNumber:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:totalPageNumber},((_,index)=>index+1))}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var paginationElement=this.el.shadowRoot.querySelector(".pagination"),listItems=paginationElement.querySelectorAll("li");this.addEventListenersToPageItems(listItems,paginationElement),paginationElement.dataset[this.DATA_KEY]<this.numberOfPages?paginationElement.dataset[this.DATA_KEY]=paginationElement.dataset[this.DATA_KEY]:paginationElement.dataset[this.DATA_KEY]=0,this.changePage(paginationElement,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(currActive){let currentPage=currActive+1,totalPages=this.numberOfPages.length,prevPage=0===currActive?null:currActive,nextPage=currActive+2>totalPages?null:currActive+2,itemsPerPage=this.itemsPerPage;this.ifxPageChange.emit({currentPage,totalPages,prevPage,nextPage,itemsPerPage})}addEventListenersToPageItems(listItems,paginationContainer){listItems.forEach((item=>{item.addEventListener("click",(e=>{var parent=paginationContainer;let listItems=parent.querySelectorAll("li");parent.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(e.currentTarget),this.changePage(parent,!1)}))}))}initPagination(paginationContainer){var listItems=paginationContainer.querySelectorAll("li");paginationContainer.dataset[this.DATA_KEY]=Array.from(listItems).indexOf(paginationContainer.querySelector(".active")),paginationContainer.querySelector(".prev").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),paginationContainer.querySelector(".next").addEventListener("click",(e=>this.navigateSinglePage(e,!1))),this.addEventListenersToPageItems(listItems,paginationContainer)}navigateSinglePage(e,initialValue){let el=e;if("object"==typeof e.target&&(el=e.target),!el.classList.contains(this.CLASS_DISABLED)){var parent=el.closest(".pagination"),currActive=parseInt(parent.dataset[this.DATA_KEY],10);-1===(currActive+=1*(el.classList.contains("prev")?-1:1))&&(currActive=0),parent.dataset[this.DATA_KEY]=currActive,this.changePage(parent,initialValue)}}changePage(pagination,initialValue){const paginationContainer=pagination;var listItems=paginationContainer.querySelectorAll("li"),currActive=parseInt(paginationContainer.dataset[this.DATA_KEY],10);listItems.forEach((item=>{item.classList.remove(this.CLASS_ACTIVE),item.classList.remove(this.CLASS_SIBLING_ACTIVE)})),initialValue&&this.internalPage>1&&(currActive=Math.floor(this.internalPage-1),paginationContainer.dataset[this.DATA_KEY]=currActive),this.handleEventEmission(currActive),listItems[currActive].classList.add(this.CLASS_ACTIVE),0===currActive?(paginationContainer.querySelector(".prev").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!0):(listItems[currActive-1].classList.add(this.CLASS_SIBLING_ACTIVE),paginationContainer.querySelector(".prev").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".prev").disabled=!1),currActive===listItems.length-1?(paginationContainer.querySelector(".next").classList.add(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!0):(paginationContainer.querySelector(".next").classList.remove(this.CLASS_DISABLED),paginationContainer.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var paginationElement=this.el.shadowRoot.querySelector(".pagination");this.initPagination(paginationElement)}render(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fa57bfbd14b7ccfb8dbd5ef450c7db53a98bce50","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f4eff578aa7189bbb52c0ac161faadd6a9ca2774",class:"items__per-page-wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c199973fbd9d3518d21634fda3bc695bda392a24",class:"items__per-page-label"},"Results per Page"),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3f8318383647cf41d67b5b1a0fd9c387dffe0e50",class:"items__per-page-field"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-select",{key:"1cc33baebbb0d8930c8314ee5f39dbc393984d53",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"992b8b3219a3017fafc44d7d66be2d5997758945",class:"items__total-wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ec4061b565a4dcd5fbe20fa655315328305bee4e",class:"page__numbers-wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"67dfe394137b0edb704afe8367ed87697bbb52ee",class:"pagination"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"d6207f9becee00b57bda596fc7117bf4f757c10f",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{key:"c5a7300ffb926ab41a77a0e673cde2b85c8e196c"},this.numberOfPages.map((item=>(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:""+(this.internalPage===item?"active":"")},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:void 0},item))))),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"f2f96994c6cbd1b7c401eb9d81228d4b5dc7cfde",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Pagination.style='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}'}}]);