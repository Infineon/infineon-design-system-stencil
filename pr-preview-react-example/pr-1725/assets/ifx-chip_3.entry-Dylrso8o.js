import{r,c,h as s,g as o}from"./index-C5mjaRQF.js";const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper:focus{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}',p=h,d=class{constructor(e){r(this,e),this.ifxChange=c(this,"ifxChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleValueChange(e){this.syncSelectedOptionsWithProp(e)}handleReadOnlyChange(e){e&&(this.opened=!1)}closeDropdownOnOutsideClick(e){const i=e.composedPath(),t=this.chip.shadowRoot.querySelector(".chip__wrapper"),a=this.chip.shadowRoot.querySelector(".chip__dropdown");!i.includes(a)&&!i.includes(t)&&this.opened&&this.toggleDropdownMenu()}handleKeyDown(e){e.code!=="Tab"&&e.preventDefault(),e.target.tagName==="IFX-CHIP"?this.handleWrapperKeyDown(e):e.target.tagName==="IFX-CHIP-ITEM"&&this.handleDropdownKeyDown(e)}updateSelectedOptions(e){const i=e.detail,t=[...this.selectedOptions];this.variant!=="multi"?(i.selected?(this.opened=!1,this.getChipItems().forEach(l=>{l.selected&&l!==e.target&&(l.chipState=Object.assign(Object.assign({},l.chipState),{emitIfxChipItemSelect:!1}),l.selected=!1)}),this.selectedOptions=[i]):this.selectedOptions=[],this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0):(i.selected?this.selectedOptions.find(a=>a.value===i.value)||(this.selectedOptions=[...this.selectedOptions,i]):this.selectedOptions=this.selectedOptions.filter(a=>a.value!==i.value),this.value=this.selectedOptions.map(a=>a.value)),i.emitIfxChange&&this.ifxChange.emit({previousSelection:t,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return this.variant!=="multi"?this.selectedOptions.map(e=>e.label).join(""):this.selectedOptions.slice(0,2).map(e=>e.label).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}focusChipItemAt(e=0){this.opened=!0;const i=this.getChipItems();let t;if(e===-1)t=i.item(i.length-1);else if(e>=0&&e<i.length)t=i.item(e);else{console.error(`Invalid index: ${e}`);return}const a=t.shadowRoot.querySelector(".chip-item");a&&setTimeout(()=>{a.focus()},1)}focusChip(){this.chip.shadowRoot.querySelector(".chip__wrapper").focus()}handleUnselectButtonClick(e){e.stopPropagation(),this.opened=!1;let i=!1;if(this.getChipItems().forEach(a=>{a.selected&&(i=!0,a.chipState=Object.assign(Object.assign({},a.chipState),{emitIfxChipItemSelect:!1}),a.selected=!1)}),i){const a=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChange.emit({previousSelection:a,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(e){if(!this.readOnly)if(this.opened)switch(e.code){case"Escape":this.opened=!1,this.focusChip();break}else switch(e.code){case"Space":case"Enter":case"ArrowDown":this.focusChipItemAt(0);break;case"ArrowUp":this.focusChipItemAt(-1);break}}handleDropdownKeyDown(e){let i=this.getChipItems(),t=Array.from(i).indexOf(e.target);if(t===-1){console.error("Target not found in chip items");return}switch(e.code){case"ArrowDown":if(t===i.length-1)break;this.focusChipItemAt(t+1);break;case"ArrowUp":if(t===0)break;this.focusChipItemAt(t-1);break;case"Escape":this.opened=!1,this.focusChip();break;case"Space":this.variant==="single"&&(this.opened=!1,this.focusChip());break;case"Enter":this.opened=!1,this.focusChip();break}}syncChipState(){const e=this.getChipItems();let i=0;e.forEach(t=>{t.chipState={emitIfxChipItemSelect:!0,size:this.size==="small"?"small":"large",variant:this.variant==="multi"?"multi":"single",key:i++}})}syncSelectedOptionsWithProp(e){this.selectedOptions=[];const i=(()=>{let t=0;return()=>t++})();Array.isArray(e)?this.selectedOptions=e.map(t=>({value:t,label:t,selected:!0,key:i(),emitIfxChange:!0})):typeof e=="string"&&(this.selectedOptions=[{value:e,label:e,selected:!0,key:i(),emitIfxChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return s("div",{key:"8c18c26d395086b72e02bc4a93d0704edd066089",class:"chip"},s("div",{key:"c7a091e32092cb523fba9b450a24c482670c066f",class:`chip__wrapper chip__wrapper--${this.size==="small"?"small":"large"}
                  chip__wrapper--${this.variant==="multi"?"multi":"single"}
                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}
                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},role:"combobox","aria-label":this.AriaLabel,"aria-value":this.getSelectedOptions(),"aria-haspopup":this.readOnly?void 0:"listbox","aria-expanded":this.readOnly?void 0:this.opened.toString(),"aria-controls":this.readOnly?void 0:"dropdown","aria-readonly":this.readOnly?"true":void 0,"aria-multiselectable":this.variant==="multi"?"true":void 0},s("div",{key:"aff84b05d8f36b13c59463af3674150d075f0aa9",class:"wrapper__label"},this.selectedOptions.length===0&&`${this.placeholder}`,this.selectedOptions.length!==0&&(this.variant==="multi"||this.readOnly)&&this.placeholder!==""&&`${this.placeholder}:`,this.selectedOptions.length!==0&&s("div",{key:"d6895d41ea10a0c0ae9e20181cc3e112e78f3c06",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&this.variant==="multi"&&s("ifx-number-indicator",{key:"af8892d23246826d39fc866b292042297f1688e7"},"  ",`+${this.selectedOptions.length-2}`," ")),!this.readOnly&&(this.variant!=="multi"||this.variant==="multi"&&this.selectedOptions.length===0)&&s("div",{key:"1995a9d622e80b5639af86214a7084427f7c0ad0",class:"wrapper__open-button"},s("ifx-icon",{key:1,icon:"chevrondown16"})),this.variant!=="multi"&&this.readOnly!==!1&&this.selectedOptions.length>0&&s("div",{key:"20669e78ce405e4d323b7c61c3e4f70b1aded6a5",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},s("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&this.variant==="multi"&&s("div",{key:"b4eebcfbcd125f25cb55f94fbd03bab7202f62da",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},s("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&s("div",{key:"dbd65ac1f1b86541a908b370272dd1f2433043c4",id:"dropdown",role:"listbox",class:"chip__dropdown"},s("slot",{key:"807a0107a2fe23f0d72ed3b0aed7659d7f1a3bb4"})))}get chip(){return o(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};d.style=p;const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item:focus{outline:2px solid #0A8276}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}',m=f,g=class{constructor(e){r(this,e),this.ifxChipItemSelect=c(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(e){if(this.chipState.variant==="single"){const i=e.target;this.chipItem!==i&&this.chipItem.parentElement===i.parentElement&&(this.selected=!1)}}validateSelected(e,i){e!==i&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(e=!0){this.ifxChipItemSelect.emit({emitIfxChange:e,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(e){(e.code==="Enter"||e.code==="Space")&&this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return s("div",{key:"a4d81329a7a5bbbc71b66b0f02f32302e3edd6bd",class:`chip-item chip-item--${this.chipState.size} 
                    chip-item--${(this.selected&&this.chipState.variant)==="single"?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)},role:"option","aria-selected":this.selected.toString()},this.chipState.variant==="multi"&&s("ifx-checkbox",{key:"26865e6c41a95e1a92a0bbcb444ffd99b06b6f6b",checked:this.selected,tabIndex:-1,size:"s"}),s("div",{key:"8a48897962af2131d6f574d602b71e035b2f46a6",class:"chip-item__label"}," ",s("slot",{key:"2945084fa15c686cc6456761f4ca67370d6418b3"})," "),s("div",{key:"94e48f99ce3629f73d2a82530626474a50d0d9c1",class:"chip-item__selected-indicator"},s("ifx-icon",{key:"e9aaef0ae55766df51d8d293bb4405703dcdead8",icon:`check${this.chipState.size==="small"?"12":"16"}`}," ")))}get chipItem(){return o(this)}static get watchers(){return{selected:["validateSelected"]}}};g.style=m;const u='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"…";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"…";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',b=u,_=class{constructor(e){r(this,e),this.ifxPageChange=c(this,"ifxPageChange",7),this.currentPage=0,this.internalPage=1,this.itemsPerPage=10,this.numberOfPages=[],this.total=1,this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination"}setItemsPerPage(e){e.detail?this.itemsPerPage=parseInt(e.detail.label):this.itemsPerPage=10}componentDidLoad(){this.calculateVisiblePageIndices();var e=this.el.shadowRoot.querySelector(".pagination");let i=e.querySelector(".prev");this.navigateSinglePage(i,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const e=this.total<=this.itemsPerPage?this.itemsPerPage:this.total,i=this.itemsPerPage,t=Math.ceil(e/i);this.currentPage<=0?this.internalPage=1:this.currentPage>t?this.internalPage=t:this.internalPage=this.currentPage,this.numberOfPages=Array.from({length:t},(a,l)=>l+1)}componentWillLoad(){this.calculateNumberOfPages()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),i=e.querySelectorAll("li");this.addEventListenersToPageItems(i,e),e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]:e.dataset[this.DATA_KEY]=0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let i=e+1,t=this.numberOfPages.length,a=e===0?null:e,l=e+2>t?null:e+2,n=this.itemsPerPage;this.ifxPageChange.emit({currentPage:i,totalPages:t,prevPage:a,nextPage:l,itemsPerPage:n})}addEventListenersToPageItems(e,i){e.forEach(t=>{t.addEventListener("click",a=>{var l=i;let n=l.querySelectorAll("li");l.dataset[this.DATA_KEY]=Array.from(n).indexOf(a.currentTarget),this.changePage(l,!1)})})}initPagination(e){var i=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(i).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(i,e)}navigateSinglePage(e,i){let t=e;if(typeof e.target=="object"&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var a=t.closest(".pagination"),l=parseInt(a.dataset[this.DATA_KEY],10);l+=1*(t.classList.contains("prev")?-1:1),l===-1&&(l=0),a.dataset[this.DATA_KEY]=l,this.changePage(a,i)}}changePage(e,i){const t=e;var a=t.querySelectorAll("li"),l=parseInt(t.dataset[this.DATA_KEY],10);a.forEach(n=>{n.classList.remove(this.CLASS_ACTIVE),n.classList.remove(this.CLASS_SIBLING_ACTIVE)}),i&&this.internalPage>1&&(l=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=l),this.handleEventEmission(l),a[l].classList.add(this.CLASS_ACTIVE),l===0?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(a[l-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),l===a.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return s("div",{key:"8c0511fb15d35448655931630d0327dcd15decef","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},s("div",{key:"837e788cead111913b8f5c7a85d69806464f9d99",class:"items__per-page-wrapper"},s("div",{key:"b7d44991c21d686b054aa0468d8f00d723258307",class:"items__per-page-label"},"Results per Page"),s("div",{key:"3220f2aff5b6e3bd4277c1d38b2056bd4d2aa7cf",class:"items__per-page-field"},s("ifx-select",{key:"2fa70f09f22b9996e174a36f8422898e0915742f",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:'[{"value":"ten","label":"10","selected":true}, {"value":"Twenty","label":"20","selected":false}, {"value":"Thirty","label":"30","selected":false}]'}))),s("div",{key:"d70ff369ce0157f3697baeaecfcf2f51b360be3f",class:"items__total-wrapper"},s("div",{key:"276b0401d80e9ba2b0a71dca92b5d377ae07f87a",class:"page__numbers-wrapper"},s("div",{key:"1ba61a67594fb314f54c94f99585ba8beec8a4dd",class:"pagination"},s("ifx-icon-button",{key:"1878ff1be80497db9b908bff31ff312713889676",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),s("ol",{key:"255a90ea782385a1eebb8e7addd38973f2e421a2"},this.numberOfPages.map(e=>s("li",{class:`${this.internalPage===e?"active":""}`},s("a",{href:void 0},e)))),s("ifx-icon-button",{key:"d16a8059bf6f3fbb6d17c71bc15a5e8ca8aa816e",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return o(this)}};_.style=b;export{d as ifx_chip,g as ifx_chip_item,_ as ifx_pagination};
