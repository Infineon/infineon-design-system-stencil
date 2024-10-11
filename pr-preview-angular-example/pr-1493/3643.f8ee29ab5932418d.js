"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3643],{3643:(u,h,c)=>{c.r(h),c.d(h,{ifx_chip:()=>p,ifx_chip_item:()=>f,ifx_pagination:()=>m});var t=c(4138);const p=(()=>{let n=class{constructor(e){(0,t.r)(this,e),this.ifxChipChange=(0,t.c)(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleValueChange(e){this.syncSelectedOptionsWithProp(e)}handleReadOnlyChange(e){e&&(this.opened=!1)}closeDropdownOnOutsideClick(e){const a=e.composedPath(),i=this.chip.shadowRoot.querySelector(".chip__wrapper"),l=this.chip.shadowRoot.querySelector(".chip__dropdown");!a.includes(l)&&!a.includes(i)&&this.opened&&this.toggleDropdownMenu()}updateSelectedOptions(e){const a=e.detail,i=[...this.selectedOptions];"multi"!==this.variant?(a.selected?(this.opened=!1,this.getChipItems().forEach(s=>{s.selected&&s!==e.target&&(s.chipState=Object.assign(Object.assign({},s.chipState),{emitIfxChipItemSelect:!1}),s.selected=!1)}),this.selectedOptions=[a]):this.selectedOptions=[],this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0):(a.selected?this.selectedOptions.find(l=>l.value===a.value)||(this.selectedOptions=[...this.selectedOptions,a]):this.selectedOptions=this.selectedOptions.filter(l=>l.key!==a.key),this.value=this.selectedOptions.map(l=>l.value)),a.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection:i,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return"multi"!==this.variant?this.selectedOptions.map(e=>e.label).join(""):this.selectedOptions.slice(0,2).map(e=>e.label).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}handleUnselectButtonClick(e){e.stopPropagation(),this.opened=!1;let a=!1;if(this.getChipItems().forEach(l=>{l.selected&&(a=!0,l.chipState=Object.assign(Object.assign({},l.chipState),{emitIfxChipItemSelect:!1}),l.selected=!1)}),a){const l=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection:l,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(e){!this.readOnly&&("Space"===e.code||"Enter"===e.code)&&this.toggleDropdownMenu()}syncChipState(){const e=this.getChipItems();let a=0;e.forEach(i=>{i.chipState={emitIfxChipItemSelect:!0,size:"small"===this.size?"small":"large",variant:"multi"===this.variant?"multi":"single",key:a++}})}syncSelectedOptionsWithProp(e){this.selectedOptions=[];const a=(()=>{let i=0;return()=>i++})();Array.isArray(e)?this.selectedOptions=e.map(i=>({value:i,label:i,selected:!0,key:a(),emitIfxChipChange:!0})):"string"==typeof e&&(this.selectedOptions=[{value:e,label:e,selected:!0,key:a(),emitIfxChipChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return(0,t.h)("div",{key:"f9d5e345a97664c49afeeeed72ffbf89445c41a2","aria-value":this.getSelectedOptions(),"aria-label":"chip with a dropdown menu",class:"chip"},(0,t.h)("div",{key:"34f2461834eb63d3b9f4cac3385951a7cb257739",class:`chip__wrapper chip__wrapper--${"small"===this.size?"small":"large"}\n                  chip__wrapper--${"multi"===this.variant?"multi":"single"}\n                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}\n                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},onKeyDown:this.readOnly?void 0:e=>{this.handleWrapperKeyDown(e)}},(0,t.h)("div",{key:"97d9b3abb1fe48ed7d9c0724522c30da93b95313",class:"wrapper__label"},0===this.selectedOptions.length&&`${this.placeholder}`,0!==this.selectedOptions.length&&("multi"===this.variant||this.readOnly)&&""!==this.placeholder&&`${this.placeholder}:`,0!==this.selectedOptions.length&&(0,t.h)("div",{key:"800bd86a2eb7472b7ca1eee22889f1285be22777",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&"multi"===this.variant&&(0,t.h)("ifx-number-indicator",{key:"8cb33ab9412af6b4283b346df9ae0a5615b677fd"},"  ","+"+(this.selectedOptions.length-2)," ")),!this.readOnly&&("multi"!==this.variant||"multi"===this.variant&&0===this.selectedOptions.length)&&(0,t.h)("div",{key:"98812073aa937d52de6e793a82f8d490a8083d9e",class:"wrapper__open-button"},(0,t.h)("ifx-icon",{key:1,icon:"chevrondown16"})),"multi"!==this.variant&&!1!==this.readOnly&&this.selectedOptions.length>0&&(0,t.h)("div",{key:"ca94abe3c6a87191c878059322dfa81317fc5fff",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,t.h)("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&"multi"===this.variant&&(0,t.h)("div",{key:"a77e3320999c058a6a8113a08afa1903bd435716",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,t.h)("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&(0,t.h)("div",{key:"a8d9efdbe9edd7d704dd397abff36f9f268c0f13",class:"chip__dropdown"},(0,t.h)("slot",{key:"613c605d04afc80a193621ccaaad0a8ea109a375"})))}get chip(){return(0,t.g)(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}',n})(),f=(()=>{let n=class{constructor(e){(0,t.r)(this,e),this.ifxChipItemSelect=(0,t.c)(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(e){if("single"===this.chipState.variant){const a=e.target;this.chipItem!==a&&this.chipItem.parentElement===a.parentElement&&(this.selected=!1)}}validateSelected(e,a){e!==a&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(e=!0){this.ifxChipItemSelect.emit({emitIfxChipChange:e,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(e){("Enter"===e.code||"Space"===e.code)&&this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return(0,t.h)("div",{key:"704162271118538ba19e0abd85178b54a04ce77e",class:`chip-item chip-item--${this.chipState.size} \n                    chip-item--${"single"===(this.selected&&this.chipState.variant)?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)}},"multi"===this.chipState.variant&&(0,t.h)("ifx-checkbox",{key:"ae94e25e564dbcdba39a9abef5a6c57789020b94",value:this.selected,tabIndex:-1,size:"s"}),(0,t.h)("div",{key:"b0f274faeae39f91c99de6d2589368ef034fb675",class:"chip-item__label"}," ",(0,t.h)("slot",{key:"b40af5f8a341bf496aef9bef5fb1960b542c7d03"})," "),(0,t.h)("div",{key:"646dee881e42a8764dc1de7ca3637394198c896b",class:"chip-item__selected-indicator"},(0,t.h)("ifx-icon",{key:"cd1e2089ea1d1048b41ddc722fe6799bbca45add",icon:"check"+("small"===this.chipState.size?"12":"16")}," ")))}get chipItem(){return(0,t.g)(this)}static get watchers(){return{selected:["validateSelected"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}',n})(),m=(()=>{let n=class{constructor(e){(0,t.r)(this,e),this.ifxPageChange=(0,t.c)(this,"ifxPageChange",7),this.ifxNextPage=(0,t.c)(this,"ifxNextPage",7),this.ifxPrevPage=(0,t.c)(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();let a=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(a,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const i=Math.ceil((this.total<=this.itemsPerPage?this.itemsPerPage:this.total)/this.itemsPerPage);this.internalPage=this.currentPage<=0?1:this.currentPage>i?i:this.currentPage,this.numberOfPages=Array.from({length:i},(l,s)=>s+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),a=e.querySelectorAll("li");this.addEventListenersToPageItems(a,e),e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]:0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let i=this.numberOfPages.length;this.ifxPageChange.emit({currentPage:e+1,totalPages:i,prevPage:0===e?null:e,nextPage:e+2>i?null:e+2,itemsPerPage:this.itemsPerPage})}addEventListenersToPageItems(e,a){e.forEach(i=>{i.addEventListener("click",l=>{var s=a;let r=s.querySelectorAll("li");s.dataset[this.DATA_KEY]=Array.from(r).indexOf(l.currentTarget),this.changePage(s,!1)})})}initPagination(e){var a=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(a).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",i=>this.navigateSinglePage(i,!1)),e.querySelector(".next").addEventListener("click",i=>this.navigateSinglePage(i,!1)),this.addEventListenersToPageItems(a,e)}navigateSinglePage(e,a){let i=e;if("object"==typeof e.target&&(i=e.target),!i.classList.contains(this.CLASS_DISABLED)){var l=i.closest(".pagination"),s=parseInt(l.dataset[this.DATA_KEY],10);-1===(s+=1*(i.classList.contains("prev")?-1:1))&&(s=0),l.dataset[this.DATA_KEY]=s,this.changePage(l,a)}}changePage(e,a){const i=e;var l=i.querySelectorAll("li"),s=parseInt(i.dataset[this.DATA_KEY],10);l.forEach(r=>{r.classList.remove(this.CLASS_ACTIVE),r.classList.remove(this.CLASS_SIBLING_ACTIVE)}),a&&this.internalPage>1&&(s=Math.floor(this.internalPage-1),i.dataset[this.DATA_KEY]=s),this.handleEventEmission(s),l[s].classList.add(this.CLASS_ACTIVE),0===s?(i.querySelector(".prev").classList.add(this.CLASS_DISABLED),i.querySelector(".prev").disabled=!0):(l[s-1].classList.add(this.CLASS_SIBLING_ACTIVE),i.querySelector(".prev").classList.remove(this.CLASS_DISABLED),i.querySelector(".prev").disabled=!1),s===l.length-1?(i.querySelector(".next").classList.add(this.CLASS_DISABLED),i.querySelector(".next").disabled=!0):(i.querySelector(".next").classList.remove(this.CLASS_DISABLED),i.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return(0,t.h)("div",{key:"abf10c60c2d2e1907ba9123e812f371a113ec0e0","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,t.h)("div",{key:"925ef896b0cc9bf49d0d4df76eef6e7d9581292b",class:"items__per-page-wrapper"},(0,t.h)("div",{key:"adb27f907dec15029e3a4f3bcc8654370cc037db",class:"items__per-page-label"},"Results per Page"),(0,t.h)("div",{key:"2aa9568a7e59341b69cbf1d3a53e9ec8379407f8",class:"items__per-page-field"},(0,t.h)("ifx-select",{key:"d3c9fef313b513a5cb7a96c903233a1de54c6ebb",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),(0,t.h)("div",{key:"7adc58a65b9d546140aba594c7bbfbca72cecba2",class:"items__total-wrapper"},(0,t.h)("div",{key:"e2ced433fe94cd3ebf04acea53c4248f09764890",class:"page__numbers-wrapper"},(0,t.h)("div",{key:"b0b7a134187bba7d2336794f3c807c2c3b515ae1",class:"pagination"},(0,t.h)("ifx-icon-button",{key:"1303c533eb11df559b3ffe5d021764f2c7525338",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,t.h)("ol",{key:"6c410d8fd2722a29f40138f1fc1e21b255d1d8d0"},this.numberOfPages.map(e=>(0,t.h)("li",{class:this.internalPage===e?"active":""},(0,t.h)("a",{href:void 0},e)))),(0,t.h)("ifx-icon-button",{key:"562f4d04add00baae3a93c027df9c8dc9d7a7e63",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,t.g)(this)}};return n.style='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',n})()}}]);