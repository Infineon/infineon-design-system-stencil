import{r as c,c as r,h as a,g as o}from"./index-pnPD4H_J.js";const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}',p=h,d=class{constructor(e){c(this,e),this.ifxChipChange=r(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleValueChange(e){this.syncSelectedOptionsWithProp(e)}handleReadOnlyChange(e){e&&(this.opened=!1)}closeDropdownOnOutsideClick(e){const i=e.composedPath(),t=this.chip.shadowRoot.querySelector(".chip__wrapper"),l=this.chip.shadowRoot.querySelector(".chip__dropdown");!i.includes(l)&&!i.includes(t)&&this.opened&&this.toggleDropdownMenu()}updateSelectedOptions(e){const i=e.detail,t=[...this.selectedOptions];this.variant!=="multi"?(i.selected?(this.opened=!1,this.getChipItems().forEach(s=>{s.selected&&s!==e.target&&(s.chipState=Object.assign(Object.assign({},s.chipState),{emitIfxChipItemSelect:!1}),s.selected=!1)}),this.selectedOptions=[i]):this.selectedOptions=[],this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0):(i.selected?this.selectedOptions.find(l=>l.value===i.value)||(this.selectedOptions=[...this.selectedOptions,i]):this.selectedOptions=this.selectedOptions.filter(l=>l.key!==i.key),this.value=this.selectedOptions.map(l=>l.value)),i.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection:t,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return this.variant!=="multi"?this.selectedOptions.map(e=>e.label).join(""):this.selectedOptions.slice(0,2).map(e=>e.label).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}handleUnselectButtonClick(e){e.stopPropagation(),this.opened=!1;let i=!1;if(this.getChipItems().forEach(l=>{l.selected&&(i=!0,l.chipState=Object.assign(Object.assign({},l.chipState),{emitIfxChipItemSelect:!1}),l.selected=!1)}),i){const l=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection:l,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(e){!this.readOnly&&(e.code==="Space"||e.code==="Enter")&&this.toggleDropdownMenu()}syncChipState(){const e=this.getChipItems();let i=0;e.forEach(t=>{t.chipState={emitIfxChipItemSelect:!0,size:this.size==="small"?"small":"large",variant:this.variant==="multi"?"multi":"single",key:i++}})}syncSelectedOptionsWithProp(e){this.selectedOptions=[];const i=(()=>{let t=0;return()=>t++})();Array.isArray(e)?this.selectedOptions=e.map(t=>({value:t,label:t,selected:!0,key:i(),emitIfxChipChange:!0})):typeof e=="string"&&(this.selectedOptions=[{value:e,label:e,selected:!0,key:i(),emitIfxChipChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return a("div",{key:"f9d5e345a97664c49afeeeed72ffbf89445c41a2","aria-value":this.getSelectedOptions(),"aria-label":"chip with a dropdown menu",class:"chip"},a("div",{key:"34f2461834eb63d3b9f4cac3385951a7cb257739",class:`chip__wrapper chip__wrapper--${this.size==="small"?"small":"large"}
                  chip__wrapper--${this.variant==="multi"?"multi":"single"}
                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}
                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},onKeyDown:this.readOnly?void 0:e=>{this.handleWrapperKeyDown(e)}},a("div",{key:"97d9b3abb1fe48ed7d9c0724522c30da93b95313",class:"wrapper__label"},this.selectedOptions.length===0&&`${this.placeholder}`,this.selectedOptions.length!==0&&(this.variant==="multi"||this.readOnly)&&this.placeholder!==""&&`${this.placeholder}:`,this.selectedOptions.length!==0&&a("div",{key:"800bd86a2eb7472b7ca1eee22889f1285be22777",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&this.variant==="multi"&&a("ifx-number-indicator",{key:"8cb33ab9412af6b4283b346df9ae0a5615b677fd"},"  ",`+${this.selectedOptions.length-2}`," ")),!this.readOnly&&(this.variant!=="multi"||this.variant==="multi"&&this.selectedOptions.length===0)&&a("div",{key:"98812073aa937d52de6e793a82f8d490a8083d9e",class:"wrapper__open-button"},a("ifx-icon",{key:1,icon:"chevrondown16"})),this.variant!=="multi"&&this.readOnly!==!1&&this.selectedOptions.length>0&&a("div",{key:"ca94abe3c6a87191c878059322dfa81317fc5fff",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},a("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&this.variant==="multi"&&a("div",{key:"a77e3320999c058a6a8113a08afa1903bd435716",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},a("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&a("div",{key:"a8d9efdbe9edd7d704dd397abff36f9f268c0f13",class:"chip__dropdown"},a("slot",{key:"613c605d04afc80a193621ccaaad0a8ea109a375"})))}get chip(){return o(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};d.style=p;const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}',g=f,m=class{constructor(e){c(this,e),this.ifxChipItemSelect=r(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(e){if(this.chipState.variant==="single"){const i=e.target;this.chipItem!==i&&this.chipItem.parentElement===i.parentElement&&(this.selected=!1)}}validateSelected(e,i){e!==i&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(e=!0){this.ifxChipItemSelect.emit({emitIfxChipChange:e,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(e){(e.code==="Enter"||e.code==="Space")&&this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return a("div",{key:"704162271118538ba19e0abd85178b54a04ce77e",class:`chip-item chip-item--${this.chipState.size} 
                    chip-item--${(this.selected&&this.chipState.variant)==="single"?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)}},this.chipState.variant==="multi"&&a("ifx-checkbox",{key:"ae94e25e564dbcdba39a9abef5a6c57789020b94",value:this.selected,tabIndex:-1,size:"s"}),a("div",{key:"b0f274faeae39f91c99de6d2589368ef034fb675",class:"chip-item__label"}," ",a("slot",{key:"b40af5f8a341bf496aef9bef5fb1960b542c7d03"})," "),a("div",{key:"646dee881e42a8764dc1de7ca3637394198c896b",class:"chip-item__selected-indicator"},a("ifx-icon",{key:"cd1e2089ea1d1048b41ddc722fe6799bbca45add",icon:`check${this.chipState.size==="small"?"12":"16"}`}," ")))}get chipItem(){return o(this)}static get watchers(){return{selected:["validateSelected"]}}};m.style=g;const u='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',b=u,_=class{constructor(e){c(this,e),this.ifxPageChange=r(this,"ifxPageChange",7),this.ifxNextPage=r(this,"ifxNextPage",7),this.ifxPrevPage=r(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){this.itemsPerPage=parseInt(e.detail.label)}componentDidLoad(){this.calculateVisiblePageIndices();var e=this.el.shadowRoot.querySelector(".pagination");let i=e.querySelector(".prev");this.navigateSinglePage(i,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const e=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,i=this.itemsPerPage,t=Math.ceil(e/i);this.currentPage<=0?this.internalPage=1:this.currentPage>t?this.internalPage=t:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:t},(l,s)=>s+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),i=e.querySelectorAll("li");this.addEventListenersToPageItems(i,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let i=e+1,t=this.numberOfPages.length,l=e===0?null:e,s=e+2>t?null:e+2,n=this.itemsPerPage;this.ifxPageChange.emit({currentPage:i,totalPages:t,prevPage:l,nextPage:s,itemsPerPage:n})}addEventListenersToPageItems(e,i){e.forEach(t=>{t.addEventListener("click",l=>{var s=i;let n=s.querySelectorAll("li");s.dataset[this.DATA_KEY]=Array.from(n).indexOf(l.currentTarget),this.changePage(s,!1)})})}initPagination(e){var i=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(i).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(i,e)}navigateSinglePage(e,i){let t=e;if(typeof e.target=="object"&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var l=t.closest(".pagination"),s=parseInt(l.dataset[this.DATA_KEY],10);s+=1*(t.classList.contains("prev")?-1:1),s===-1&&(s=0),l.dataset[this.DATA_KEY]=s,this.changePage(l,i)}}changePage(e,i){const t=e;var l=t.querySelectorAll("li"),s=parseInt(t.dataset[this.DATA_KEY],10);l.forEach(n=>{n.classList.remove(this.CLASS_ACTIVE),n.classList.remove(this.CLASS_SIBLING_ACTIVE)}),i&&this.internalPage>1&&(s=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=s),this.handleEventEmission(s),l[s].classList.add(this.CLASS_ACTIVE),s===0?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(l[s-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),s===l.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return a("div",{key:"f6cde0d25c983336048d1f41499a228aa00832f2","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},a("div",{key:"1d7c3aeea6005d8a0212b13847fce83bb14d6f45",class:"items__per-page-wrapper"},a("div",{key:"af0360dcb884ffbd9ea7db9fd0af7d610a9eae94",class:"items__per-page-label"},"Results per Page"),a("div",{key:"d5425a0046367cfc9260345d13573fc4ffcb349b",class:"items__per-page-field"},a("ifx-select",{key:"431ac83dd46c0d1fa5f2cc689ca6abeb2e3c016c",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),a("div",{key:"11cbf3a0a914a6d5f25ef7ece5f5772e9abc1b17",class:"items__total-wrapper"},a("div",{key:"5f0a03b146b1d873de3739fde13ff9b101c2ed3e",class:"page__numbers-wrapper"},a("div",{key:"046a0b4b29c6dfe5556fd51ec77617b659f8eb3b",class:"pagination"},a("ifx-icon-button",{key:"cc62414c1a9bcd63d9d3c84069ffe1828a7922d5",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),a("ol",{key:"65a66c1fe769cf9d2b5815dba37e3832598563be"},this.numberOfPages.map(e=>a("li",{class:`${this.internalPage===e?"active":""}`},a("a",{href:void 0},e)))),a("ifx-icon-button",{key:"9518a4a5ed013dca655b8b5d89a15c4b9fad9999",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return o(this)}};_.style=b;export{d as ifx_chip,m as ifx_chip_item,_ as ifx_pagination};
