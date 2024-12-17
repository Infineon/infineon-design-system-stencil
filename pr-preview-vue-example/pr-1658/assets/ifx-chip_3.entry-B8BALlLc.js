import{r as c,c as r,h as s,g as o}from"./index-CzNRERTn.js";const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper:focus{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}',p=h,d=class{constructor(e){c(this,e),this.ifxChipChange=r(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.AriaLabel=void 0,this.opened=!1,this.selectedOptions=[]}handleValueChange(e){this.syncSelectedOptionsWithProp(e)}handleReadOnlyChange(e){e&&(this.opened=!1)}closeDropdownOnOutsideClick(e){const i=e.composedPath(),t=this.chip.shadowRoot.querySelector(".chip__wrapper"),a=this.chip.shadowRoot.querySelector(".chip__dropdown");!i.includes(a)&&!i.includes(t)&&this.opened&&this.toggleDropdownMenu()}handleKeyDown(e){e.code!=="Tab"&&e.preventDefault(),e.target.tagName==="IFX-CHIP"?this.handleWrapperKeyDown(e):e.target.tagName==="IFX-CHIP-ITEM"&&this.handleDropdownKeyDown(e)}updateSelectedOptions(e){const i=e.detail,t=[...this.selectedOptions];this.variant!=="multi"?(i.selected?(this.opened=!1,this.getChipItems().forEach(l=>{l.selected&&l!==e.target&&(l.chipState=Object.assign(Object.assign({},l.chipState),{emitIfxChipItemSelect:!1}),l.selected=!1)}),this.selectedOptions=[i]):this.selectedOptions=[],this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0):(i.selected?this.selectedOptions.find(a=>a.value===i.value)||(this.selectedOptions=[...this.selectedOptions,i]):this.selectedOptions=this.selectedOptions.filter(a=>a.key!==i.key),this.value=this.selectedOptions.map(a=>a.value)),i.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection:t,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return this.variant!=="multi"?this.selectedOptions.map(e=>e.label).join(""):this.selectedOptions.slice(0,2).map(e=>e.label).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}focusChipItemAt(e=0){this.opened=!0;const i=this.getChipItems();let t;if(e===-1)t=i.item(i.length-1);else if(e>=0&&e<i.length)t=i.item(e);else{console.error(`Invalid index: ${e}`);return}const a=t.shadowRoot.querySelector(".chip-item");a&&setTimeout(()=>{a.focus()},1)}focusChip(){this.chip.shadowRoot.querySelector(".chip__wrapper").focus()}handleUnselectButtonClick(e){e.stopPropagation(),this.opened=!1;let i=!1;if(this.getChipItems().forEach(a=>{a.selected&&(i=!0,a.chipState=Object.assign(Object.assign({},a.chipState),{emitIfxChipItemSelect:!1}),a.selected=!1)}),i){const a=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection:a,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(e){if(!this.readOnly)if(this.opened)switch(e.code){case"Escape":this.opened=!1,this.focusChip();break}else switch(e.code){case"Space":case"Enter":case"ArrowDown":this.focusChipItemAt(0);break;case"ArrowUp":this.focusChipItemAt(-1);break}}handleDropdownKeyDown(e){let i=this.getChipItems(),t=Array.from(i).indexOf(e.target);if(t===-1){console.error("Target not found in chip items");return}switch(e.code){case"ArrowDown":if(t===i.length-1)break;this.focusChipItemAt(t+1);break;case"ArrowUp":if(t===0)break;this.focusChipItemAt(t-1);break;case"Escape":this.opened=!1,this.focusChip();break;case"Space":this.variant==="single"&&(this.opened=!1,this.focusChip());break;case"Enter":this.opened=!1,this.focusChip();break}}syncChipState(){const e=this.getChipItems();let i=0;e.forEach(t=>{t.chipState={emitIfxChipItemSelect:!0,size:this.size==="small"?"small":"large",variant:this.variant==="multi"?"multi":"single",key:i++}})}syncSelectedOptionsWithProp(e){this.selectedOptions=[];const i=(()=>{let t=0;return()=>t++})();Array.isArray(e)?this.selectedOptions=e.map(t=>({value:t,label:t,selected:!0,key:i(),emitIfxChipChange:!0})):typeof e=="string"&&(this.selectedOptions=[{value:e,label:e,selected:!0,key:i(),emitIfxChipChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return s("div",{key:"0ea9f8bc1e504d9a9b121b4b37fb04da775a28b3",class:"chip"},s("div",{key:"cbdb74df0885c675763cbd1fc9493283b5a95a8c",class:`chip__wrapper chip__wrapper--${this.size==="small"?"small":"large"}
                  chip__wrapper--${this.variant==="multi"?"multi":"single"}
                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}
                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},role:"combobox","aria-label":this.AriaLabel,"aria-value":this.getSelectedOptions(),"aria-haspopup":this.readOnly?void 0:"listbox","aria-expanded":this.readOnly?void 0:this.opened.toString(),"aria-controls":this.readOnly?void 0:"dropdown","aria-readonly":this.readOnly?"true":void 0,"aria-multiselectable":this.variant==="multi"?"true":void 0},s("div",{key:"1f93a1f27efaa044100c5f1fe3ed720232112232",class:"wrapper__label"},this.selectedOptions.length===0&&`${this.placeholder}`,this.selectedOptions.length!==0&&(this.variant==="multi"||this.readOnly)&&this.placeholder!==""&&`${this.placeholder}:`,this.selectedOptions.length!==0&&s("div",{key:"216a7663b96a48f44d79802763d6ea8000d03cc5",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&this.variant==="multi"&&s("ifx-number-indicator",{key:"ac04bcbf6f5789522efa21185d4dcc17684985c9"},"  ",`+${this.selectedOptions.length-2}`," ")),!this.readOnly&&(this.variant!=="multi"||this.variant==="multi"&&this.selectedOptions.length===0)&&s("div",{key:"03fc2724de22f23fa9537bd1b14e975575f664b6",class:"wrapper__open-button"},s("ifx-icon",{key:1,icon:"chevrondown16"})),this.variant!=="multi"&&this.readOnly!==!1&&this.selectedOptions.length>0&&s("div",{key:"6f70aa5b6c60ef934cf8c79f662fea4e30e00255",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},s("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&this.variant==="multi"&&s("div",{key:"1abb95276478647b1b3da79b71e157433bb41a15",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},s("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&s("div",{key:"aa9ab179da64d1d0977ed10f72a04fda828335b5",id:"dropdown",role:"listbox",class:"chip__dropdown"},s("slot",{key:"4d66e458a164782487bc052cb9eb66f7443836d1"})))}get chip(){return o(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};d.style=p;const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item:focus{outline:2px solid #0A8276}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}',g=f,m=class{constructor(e){c(this,e),this.ifxChipItemSelect=r(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(e){if(this.chipState.variant==="single"){const i=e.target;this.chipItem!==i&&this.chipItem.parentElement===i.parentElement&&(this.selected=!1)}}validateSelected(e,i){e!==i&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(e=!0){this.ifxChipItemSelect.emit({emitIfxChipChange:e,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(e){(e.code==="Enter"||e.code==="Space")&&this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return s("div",{key:"493fe2e521f96fbe65792b4364c32a3010a4ae86",class:`chip-item chip-item--${this.chipState.size} 
                    chip-item--${(this.selected&&this.chipState.variant)==="single"?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)},role:"option","aria-selected":this.selected.toString()},this.chipState.variant==="multi"&&s("ifx-checkbox",{key:"3f65da6457afbeca9e5e803f2569263b499fe839",checked:this.selected,tabIndex:-1,size:"s"}),s("div",{key:"02a710f81308419623960d15270f719c45f5fd11",class:"chip-item__label"}," ",s("slot",{key:"ad971a10884b08cf3775f7296a44c7aff1769a0b"})," "),s("div",{key:"2ba702249a7fc67ded010890181f5b35494df843",class:"chip-item__selected-indicator"},s("ifx-icon",{key:"887b43ff1b8c6539b01c0fc620f51d9bc04a05d9",icon:`check${this.chipState.size==="small"?"12":"16"}`}," ")))}get chipItem(){return o(this)}static get watchers(){return{selected:["validateSelected"]}}};m.style=g;const u='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',b=u,_=class{constructor(e){c(this,e),this.ifxPageChange=r(this,"ifxPageChange",7),this.ifxNextPage=r(this,"ifxNextPage",7),this.ifxPrevPage=r(this,"ifxPrevPage",7),this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination",this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1}setItemsPerPage(e){e.detail?this.itemsPerPage=parseInt(e.detail.label):this.itemsPerPage=10}componentDidLoad(){this.calculateVisiblePageIndices();var e=this.el.shadowRoot.querySelector(".pagination");let i=e.querySelector(".prev");this.navigateSinglePage(i,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const e=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,i=this.itemsPerPage,t=Math.ceil(e/i);this.currentPage<=0?this.internalPage=1:this.currentPage>t?this.internalPage=t:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:t},(a,l)=>l+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),i=e.querySelectorAll("li");this.addEventListenersToPageItems(i,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let i=e+1,t=this.numberOfPages.length,a=e===0?null:e,l=e+2>t?null:e+2,n=this.itemsPerPage;this.ifxPageChange.emit({currentPage:i,totalPages:t,prevPage:a,nextPage:l,itemsPerPage:n})}addEventListenersToPageItems(e,i){e.forEach(t=>{t.addEventListener("click",a=>{var l=i;let n=l.querySelectorAll("li");l.dataset[this.DATA_KEY]=Array.from(n).indexOf(a.currentTarget),this.changePage(l,!1)})})}initPagination(e){var i=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(i).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(i,e)}navigateSinglePage(e,i){let t=e;if(typeof e.target=="object"&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var a=t.closest(".pagination"),l=parseInt(a.dataset[this.DATA_KEY],10);l+=1*(t.classList.contains("prev")?-1:1),l===-1&&(l=0),a.dataset[this.DATA_KEY]=l,this.changePage(a,i)}}changePage(e,i){const t=e;var a=t.querySelectorAll("li"),l=parseInt(t.dataset[this.DATA_KEY],10);a.forEach(n=>{n.classList.remove(this.CLASS_ACTIVE),n.classList.remove(this.CLASS_SIBLING_ACTIVE)}),i&&this.internalPage>1&&(l=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=l),this.handleEventEmission(l),a[l].classList.add(this.CLASS_ACTIVE),l===0?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(a[l-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),l===a.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return s("div",{key:"fa57bfbd14b7ccfb8dbd5ef450c7db53a98bce50","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},s("div",{key:"f4eff578aa7189bbb52c0ac161faadd6a9ca2774",class:"items__per-page-wrapper"},s("div",{key:"c199973fbd9d3518d21634fda3bc695bda392a24",class:"items__per-page-label"},"Results per Page"),s("div",{key:"3f8318383647cf41d67b5b1a0fd9c387dffe0e50",class:"items__per-page-field"},s("ifx-select",{key:"1cc33baebbb0d8930c8314ee5f39dbc393984d53",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),s("div",{key:"992b8b3219a3017fafc44d7d66be2d5997758945",class:"items__total-wrapper"},s("div",{key:"ec4061b565a4dcd5fbe20fa655315328305bee4e",class:"page__numbers-wrapper"},s("div",{key:"67dfe394137b0edb704afe8367ed87697bbb52ee",class:"pagination"},s("ifx-icon-button",{key:"d6207f9becee00b57bda596fc7117bf4f757c10f",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),s("ol",{key:"c5a7300ffb926ab41a77a0e673cde2b85c8e196c"},this.numberOfPages.map(e=>s("li",{class:`${this.internalPage===e?"active":""}`},s("a",{href:void 0},e)))),s("ifx-icon-button",{key:"f2f96994c6cbd1b7c401eb9d81228d4b5dc7cfde",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return o(this)}};_.style=b;export{d as ifx_chip,m as ifx_chip_item,_ as ifx_pagination};
