"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3643],{3643:(u,o,c)=>{c.r(o),c.d(o,{ifx_chip:()=>p,ifx_chip_item:()=>f,ifx_pagination:()=>g});var a=c(1032);const p=(()=>{let n=class{constructor(e){(0,a.r)(this,e),this.ifxChange=(0,a.c)(this,"ifxChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleValueChange(e){this.syncSelectedOptionsWithProp(e)}handleReadOnlyChange(e){e&&(this.opened=!1)}closeDropdownOnOutsideClick(e){const i=e.composedPath(),t=this.chip.shadowRoot.querySelector(".chip__wrapper"),s=this.chip.shadowRoot.querySelector(".chip__dropdown");!i.includes(s)&&!i.includes(t)&&this.opened&&this.toggleDropdownMenu()}handleKeyDown(e){"Tab"!==e.code&&e.preventDefault(),"IFX-CHIP"===e.target.tagName?this.handleWrapperKeyDown(e):"IFX-CHIP-ITEM"===e.target.tagName&&this.handleDropdownKeyDown(e)}updateSelectedOptions(e){const i=e.detail,t=[...this.selectedOptions];"multi"!==this.variant?(i.selected?(this.opened=!1,this.getChipItems().forEach(l=>{l.selected&&l!==e.target&&(l.chipState=Object.assign(Object.assign({},l.chipState),{emitIfxChipItemSelect:!1}),l.selected=!1)}),this.selectedOptions=[i]):this.selectedOptions=[],this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0):(i.selected?this.selectedOptions.find(s=>s.value===i.value)||(this.selectedOptions=[...this.selectedOptions,i]):this.selectedOptions=this.selectedOptions.filter(s=>s.value!==i.value),this.value=this.selectedOptions.map(s=>s.value)),i.emitIfxChange&&this.ifxChange.emit({previousSelection:t,currentSelection:this.selectedOptions,name:this.placeholder})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return"multi"!==this.variant?this.selectedOptions.map(e=>e.label).join(""):this.selectedOptions.slice(0,2).map(e=>e.label).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}focusChipItemAt(e=0){this.opened=!0;const i=this.getChipItems();let t;if(-1===e)t=i.item(i.length-1);else{if(!(e>=0&&e<i.length))return void console.error(`Invalid index: ${e}`);t=i.item(e)}const s=t.shadowRoot.querySelector(".chip-item");s&&setTimeout(()=>{s.focus()},1)}focusChip(){this.chip.shadowRoot.querySelector(".chip__wrapper").focus()}handleUnselectButtonClick(e){e.stopPropagation(),this.opened=!1;let i=!1;if(this.getChipItems().forEach(s=>{s.selected&&(i=!0,s.chipState=Object.assign(Object.assign({},s.chipState),{emitIfxChipItemSelect:!1}),s.selected=!1)}),i){const s=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChange.emit({previousSelection:s,currentSelection:[],name:this.placeholder})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(e){if(!this.readOnly)if(this.opened)"Escape"===e.code&&(this.opened=!1,this.focusChip());else switch(e.code){case"Space":case"Enter":case"ArrowDown":this.focusChipItemAt(0);break;case"ArrowUp":this.focusChipItemAt(-1)}}handleDropdownKeyDown(e){let i=this.getChipItems(),t=Array.from(i).indexOf(e.target);if(-1!==t)switch(e.code){case"ArrowDown":if(t===i.length-1)break;this.focusChipItemAt(t+1);break;case"ArrowUp":if(0===t)break;this.focusChipItemAt(t-1);break;case"Escape":case"Enter":this.opened=!1,this.focusChip();break;case"Space":"single"===this.variant&&(this.opened=!1,this.focusChip())}else console.error("Target not found in chip items")}syncChipState(){const e=this.getChipItems();let i=0;e.forEach(t=>{t.chipState={emitIfxChipItemSelect:!0,size:"small"===this.size?"small":"large",variant:"multi"===this.variant?"multi":"single",key:i++}})}syncSelectedOptionsWithProp(e){this.selectedOptions=[];const i=(()=>{let t=0;return()=>t++})();Array.isArray(e)?this.selectedOptions=e.map(t=>({value:t,label:t,selected:!0,key:i(),emitIfxChange:!0})):"string"==typeof e&&(this.selectedOptions=[{value:e,label:e,selected:!0,key:i(),emitIfxChange:!0}]),this.syncChipState()}componentWillLoad(){this.syncSelectedOptionsWithProp(this.value)}render(){return(0,a.h)("div",{key:"fc668c031275a7c69f8cc2002fbf26c9252495ae",class:"chip"},(0,a.h)("div",{key:"4705146d122cc620644e24dbd3d4e26c73a72f53",class:`chip__wrapper chip__wrapper--${"small"===this.size?"small":"large"}\n                  chip__wrapper--${"multi"===this.variant?"multi":"single"}\n                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}\n                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},role:"combobox","aria-label":this.AriaLabel,"aria-value":this.getSelectedOptions(),"aria-haspopup":this.readOnly?void 0:"listbox","aria-expanded":this.readOnly?void 0:this.opened.toString(),"aria-controls":this.readOnly?void 0:"dropdown","aria-readonly":this.readOnly?"true":void 0,"aria-multiselectable":"multi"===this.variant?"true":void 0},(0,a.h)("div",{key:"8f1720b1940e2a722c45f6a2efaa42897e6f62f0",class:"wrapper__label"},0===this.selectedOptions.length&&`${this.placeholder}`,0!==this.selectedOptions.length&&("multi"===this.variant||this.readOnly)&&""!==this.placeholder&&`${this.placeholder}:`,0!==this.selectedOptions.length&&(0,a.h)("div",{key:"048ca51b1fc52273cfee76fde5a0e15c21834590",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&"multi"===this.variant&&(0,a.h)("ifx-number-indicator",{key:"8b1b5ad4331fbd3d74cdc6b4358cb952d0fcd500"},"  ","+"+(this.selectedOptions.length-2)," ")),!this.readOnly&&("multi"!==this.variant||"multi"===this.variant&&0===this.selectedOptions.length)&&(0,a.h)("div",{key:"d0d4782cd9ab4048ce57c09e7add80a6d232f96a",class:"wrapper__open-button"},(0,a.h)("ifx-icon",{key:1,icon:"chevrondown16"})),"multi"!==this.variant&&!1!==this.readOnly&&this.selectedOptions.length>0&&(0,a.h)("div",{key:"9696e7c54fcfdfe911b84636405c8fac89205272",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,a.h)("ifx-icon",{key:2,icon:"cross16"})),this.selectedOptions.length>=1&&"multi"===this.variant&&(0,a.h)("div",{key:"287a2f6e6167e1d595d7256fa7638d8be6184b2e",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,a.h)("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&(0,a.h)("div",{key:"b1e1a33e17bb951b60f2086e4c16825a9194c3bb",id:"dropdown",role:"listbox",class:"chip__dropdown"},(0,a.h)("slot",{key:"64693b69905a1cbbdf6c16c70558e6087534523d"})))}get chip(){return(0,a.g)(this)}static get watchers(){return{value:["handleValueChange"],readOnly:["handleReadOnlyChange"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper:focus{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}',n})(),f=(()=>{let n=class{constructor(e){(0,a.r)(this,e),this.ifxChipItemSelect=(0,a.c)(this,"ifxChipItemSelect",5),this.value=void 0,this.chipState={emitIfxChipItemSelect:!0,variant:"multi",size:"large"},this.selected=!1}updateItemSelection(e){if("single"===this.chipState.variant){const i=e.target;this.chipItem!==i&&this.chipItem.parentElement===i.parentElement&&(this.selected=!1)}}validateSelected(e,i){e!==i&&(this.chipState.emitIfxChipItemSelect?this.emitIfxChipItemSelectEvent():this.chipState.emitIfxChipItemSelect=!0)}getItemLabel(){return this.chipItem.innerText}toggleItemSelection(){this.selected=!this.selected}emitIfxChipItemSelectEvent(e=!0){this.ifxChipItemSelect.emit({emitIfxChange:e,key:this.chipState.key,label:this.getItemLabel(),selected:this.selected,value:this.value})}handleItemClick(){this.toggleItemSelection()}handleItemKeyDown(e){("Enter"===e.code||"Space"===e.code)&&this.toggleItemSelection()}handleSelectedState(){this.selected&&this.emitIfxChipItemSelectEvent(!1)}componentWillLoad(){this.handleSelectedState()}render(){return(0,a.h)("div",{key:"7ceff18d0a41b419a188d925fd854cc97d7a9ecd",class:`chip-item chip-item--${this.chipState.size} \n                    chip-item--${"single"===(this.selected&&this.chipState.variant)?"selected":""}`,tabIndex:0,onClick:()=>{this.handleItemClick()},onKeyDown:e=>{this.handleItemKeyDown(e)},role:"option","aria-selected":this.selected.toString()},"multi"===this.chipState.variant&&(0,a.h)("ifx-checkbox",{key:"d2f717951d288aa0863081e54cabf7edd1c6f7e6",checked:this.selected,tabIndex:-1,size:"s"}),(0,a.h)("div",{key:"fff335d9009c93863012f6a4307ed4322413c4f7",class:"chip-item__label"}," ",(0,a.h)("slot",{key:"a093e9caf2eecba28c58674dde3f788be1f5849b"})," "),(0,a.h)("div",{key:"ea76c6b3d0bdd2a687acfbe323ebd9e6d6034a40",class:"chip-item__selected-indicator"},(0,a.h)("ifx-icon",{key:"b581de80777bbfe5a39bc393ec90af46276b7ae9",icon:"check"+("small"===this.chipState.size?"12":"16")}," ")))}get chipItem(){return(0,a.g)(this)}static get watchers(){return{selected:["validateSelected"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.chip-item{display:flex;align-items:center;gap:8px;padding:8px 16px;user-select:none;transition:all 100ms ease;transition-property:background, color}.chip-item:hover{cursor:pointer;background-color:#EEEDED}.chip-item:active{background-color:#BFBBBB}.chip-item:focus{outline:2px solid #0A8276}.chip-item.chip-item--large{font:400 1rem/1.5rem "Source Sans 3"}.chip-item.chip-item--small{font:400 0.875rem/1.25rem "Source Sans 3"}.chip-item.chip-item--selected{color:#0A8276}.chip-item.chip-item--selected .chip-item__selected-indicator{display:block}.chip-item__selected-indicator{display:none;margin-left:auto}',n})(),g=(()=>{let n=class{constructor(e){(0,a.r)(this,e),this.ifxPageChange=(0,a.c)(this,"ifxPageChange",7),this.currentPage=0,this.internalPage=1,this.internalItemsPerPage=10,this.numberOfPages=[],this.total=1,this.CLASS_DISABLED="disabled",this.CLASS_ACTIVE="active",this.CLASS_SIBLING_ACTIVE="active-sibling",this.DATA_KEY="pagination"}setItemsPerPage(e){this.internalItemsPerPage=e.detail?parseInt(e.detail.label):10}componentDidLoad(){this.calculateVisiblePageIndices();let i=this.el.shadowRoot.querySelector(".pagination").querySelector(".prev");this.navigateSinglePage(i,!0)}calculateNumberOfPages(){isNaN(this.currentPage)&&(this.currentPage=1);const t=Math.ceil((this.total<=this.internalItemsPerPage?this.internalItemsPerPage:this.total)/this.internalItemsPerPage);this.internalPage=this.currentPage<=0?1:this.currentPage>t?t:this.currentPage,this.numberOfPages=Array.from({length:t},(s,l)=>l+1)}filterOptionsArray(){let e=Array.isArray(this.itemsPerPage)?this.itemsPerPage:JSON.parse(this.itemsPerPage);for(let i=0;i<e.length;i++){let t=e[i];t.label||(t.label=t.value)}this.filteredItemsPerPage=e}componentWillLoad(){this.calculateNumberOfPages(),this.filterOptionsArray()}componentDidUpdate(){var e=this.el.shadowRoot.querySelector(".pagination"),i=e.querySelectorAll("li");this.addEventListenersToPageItems(i,e),e.dataset[this.DATA_KEY]=e.dataset[this.DATA_KEY]<this.numberOfPages?e.dataset[this.DATA_KEY]:0,this.changePage(e,!1)}componentWillUpdate(){this.calculateNumberOfPages()}handleEventEmission(e){let t=this.numberOfPages.length;this.ifxPageChange.emit({currentPage:e+1,totalPages:t,prevPage:0===e?null:e,nextPage:e+2>t?null:e+2,itemsPerPage:this.internalItemsPerPage})}addEventListenersToPageItems(e,i){e.forEach(t=>{t.addEventListener("click",s=>{var l=i;let r=l.querySelectorAll("li");l.dataset[this.DATA_KEY]=Array.from(r).indexOf(s.currentTarget),this.changePage(l,!1)})})}initPagination(e){var i=e.querySelectorAll("li");e.dataset[this.DATA_KEY]=Array.from(i).indexOf(e.querySelector(".active")),e.querySelector(".prev").addEventListener("click",t=>this.navigateSinglePage(t,!1)),e.querySelector(".next").addEventListener("click",t=>this.navigateSinglePage(t,!1)),this.addEventListenersToPageItems(i,e)}navigateSinglePage(e,i){let t=e;if("object"==typeof e.target&&(t=e.target),!t.classList.contains(this.CLASS_DISABLED)){var s=t.closest(".pagination"),l=parseInt(s.dataset[this.DATA_KEY],10);-1===(l+=1*(t.classList.contains("prev")?-1:1))&&(l=0),s.dataset[this.DATA_KEY]=l,this.changePage(s,i)}}changePage(e,i){const t=e;var s=t.querySelectorAll("li"),l=parseInt(t.dataset[this.DATA_KEY],10);s.forEach(r=>{r.classList.remove(this.CLASS_ACTIVE),r.classList.remove(this.CLASS_SIBLING_ACTIVE)}),i&&this.internalPage>1&&(l=Math.floor(this.internalPage-1),t.dataset[this.DATA_KEY]=l),this.handleEventEmission(l),s[l].classList.add(this.CLASS_ACTIVE),0===l?(t.querySelector(".prev").classList.add(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!0):(s[l-1].classList.add(this.CLASS_SIBLING_ACTIVE),t.querySelector(".prev").classList.remove(this.CLASS_DISABLED),t.querySelector(".prev").disabled=!1),l===s.length-1?(t.querySelector(".next").classList.add(this.CLASS_DISABLED),t.querySelector(".next").disabled=!0):(t.querySelector(".next").classList.remove(this.CLASS_DISABLED),t.querySelector(".next").disabled=!1)}calculateVisiblePageIndices(){var e=this.el.shadowRoot.querySelector(".pagination");this.initPagination(e)}render(){return(0,a.h)("div",{key:"047acbff50fc5a5675d6f6d8a603c7e252d6b39c","aria-label":"a pagination","aria-value":this.currentPage,class:"container"},(0,a.h)("div",{key:"a3b268b9c31899907cb3482fe85ce07fea1f41cd",class:"items__per-page-wrapper"},(0,a.h)("div",{key:"f656c2de9e56caa9c5cc65f2a77246417bc8299c",class:"items__per-page-label"},"Results per Page"),(0,a.h)("div",{key:"709b4cdf496caf104e9e7b9c8536a1e91acd7347",class:"items__per-page-field"},(0,a.h)("ifx-select",{key:"ba80a030e442f779174a2550fdcdc4caa90004a1",value:"undefined",size:"s",placeholder:"false","show-search":"false","search-placeholder-value":"Search...",disabled:!1,error:!1,"error-message":"Error",label:"","placeholder-value":"Placeholder",options:this.filteredItemsPerPage}))),(0,a.h)("div",{key:"90de785f8a6b820dc8c637130c04c1bb2a15040c",class:"items__total-wrapper"},(0,a.h)("div",{key:"70a345e2ef50adbf50fcde5b904c52e233ccaf73",class:"page__numbers-wrapper"},(0,a.h)("div",{key:"9f8a403786df3e3b9cc762dc2c4a37daabf5d37d",class:"pagination"},(0,a.h)("ifx-icon-button",{key:"81dba532c99afd848ab49029bc8dd20d17a766f1",variant:"secondary",class:"prev",color:"primary",icon:"arrow-left-24"}),(0,a.h)("ol",{key:"e0275ab45d41f17523fd44da14ac0183f35c0047"},this.numberOfPages.map(e=>(0,a.h)("li",{class:this.internalPage===e?"active":""},(0,a.h)("a",{href:void 0},e)))),(0,a.h)("ifx-icon-button",{key:"f12af4914fecb3e2fbea69d2a37ef5638fa8ecea",class:"next",variant:"secondary",color:"primary",icon:"arrow-right-24"})))))}get el(){return(0,a.g)(this)}};return n.style='@charset "UTF-8";:root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.container{display:inline-flex;justify-content:center;align-items:center;gap:32px;font-family:var(--ifx-font-family)}.container .items__per-page-wrapper{display:flex;align-items:center;gap:16px}.container .items__per-page-wrapper .items__per-page-label{color:#1D1D1D;font-size:14px;font-style:normal;font-weight:600;line-height:20px}.container .items__per-page-wrapper .items__per-page-field{display:flex;flex-direction:column;align-items:flex-start}.container .items__per-page-wrapper .items__per-page-field ifx-select{width:92px}.container .items__total-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .items__total-button{display:flex;width:40px;height:40px;justify-content:center;align-items:center;border-radius:100px;border:1px solid #BFBBBB;background:#FFF}.container .items__total-wrapper .page__numbers-wrapper{display:flex;justify-content:center;align-items:center;gap:12px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item{display:flex;padding:6px;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:100px}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active{background-color:#0A8276}.container .items__total-wrapper .page__numbers-wrapper .page__number-item.active span{color:#fff}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover{cursor:pointer}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:hover:not(.active){background-color:#ddd}.container .items__total-wrapper .page__numbers-wrapper .page__number-item:active:not(.active){background-color:#575352}.container .items__total-wrapper .page__numbers-wrapper .page__number-item span{display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px}.pagination{display:flex}.pagination ifx-icon-button:first-of-type{margin-right:12px}.pagination ifx-icon-button:last-of-type{margin-left:12px}a{padding:8px;border-radius:100px}ol{list-style-type:none;padding:0;margin:0;display:inline-flex;align-items:center;gap:12px}li{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:100px}li:hover:not(.active) a{background-color:#EEEDED}li:active:not(.active) a{background-color:#575352;color:#fff}li.active{background-color:#0A8276}li.active a{color:#fff}li:hover{cursor:pointer}li a{text-decoration:none;display:flex;width:16px;height:16px;flex-direction:column;justify-content:center;color:#1D1D1D;text-align:center;font-size:13px;font-style:normal;font-weight:400;line-height:20px;align-items:center}.prev.disabled,.next.disabled{cursor:default}.prev.disabled:hover,.next.disabled:hover{cursor:default;text-decoration:none}.prev{margin-right:2.5px}.next{margin-left:2.5px}@media (min-width: 400px){li:first-child,li.active-sibling,li.active,li.active+li,li:last-child{display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8)~li{display:none}li:first-child:nth-last-child(n+8)~li.active-sibling:before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li.active+li:after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+5){display:inline-flex;flex-direction:row}li:first-child:nth-last-child(n+8)~li:nth-last-child(5):before{content:"\u2026";font-size:13px;display:inline-block;margin-right:6px}li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-child(-n+2):after,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):before,li:first-child:nth-last-child(n+8)~li:nth-last-child(-n+2):after,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):before,li:first-child:nth-last-child(n+8)~li.active-sibling:nth-last-child(-n+4):after{display:none !important}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5){display:none}li:first-child:nth-last-child(n+8).active~li:nth-last-child(-n+5):before,li:first-child:nth-last-child(n+8)~li.active~li:nth-last-child(-n+5):before{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+5),li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+5){display:inline-flex !important;flex-direction:row}li:first-child:nth-last-child(n+8).active~li:nth-child(-n+4):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(-n+4):after{display:none}li:first-child:nth-last-child(n+8).active~li:nth-child(5):after,li:first-child:nth-last-child(n+8)~li.active~li:nth-child(5):after{content:"\u2026";font-size:13px;display:inline-block;margin-left:6px}li:first-child:nth-last-child(n+8).active:before,li:first-child:nth-last-child(n+8).active:after,li:first-child:nth-last-child(n+8)~li.active:before,li:first-child:nth-last-child(n+8)~li.active:after{display:none}}',n})()}}]);