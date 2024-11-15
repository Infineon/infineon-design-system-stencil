"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2859],{2859:(w,u,p)=>{p.r(u),p.d(u,{ifx_multiselect:()=>m,ifx_text_field:()=>b});var d=p(6330),n=p(581);const m=(()=>{let c=class{constructor(e){(0,n.r)(this,e),this.ifxSelect=(0,n.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,n.c)(this,"ifxMultiselectIsOpen",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.currentIndex=0,this.handleSearch=function x(c,e){let t;return function(...s){clearTimeout(t),t=setTimeout(()=>{clearTimeout(t),c(...s)},e)}}(t=>{const i=t.value.toLowerCase();this.filteredOptions=""===i?this.loadedOptions:this.loadedOptions.filter(s=>s.label.toLowerCase().includes(i))},300),this.handleDocumentClick=t=>{t.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.name=void 0,this.options=void 0,this.batchSize=50,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.internalError=!1,this.errorMessage="Error",this.internalErrorMessage=void 0,this.label="",this.persistentSelectedOptions=[],this.placeholder="",this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1,this.isLoading=!1,this.loadedOptions=[],this.filteredOptions=[],this.showSearch=!0,this.showSelectAll=!0,this.optionCount=0,this.optionsProcessed=!1}updateOptions(){this.loadedOptions=[],this.filteredOptions=[],this.optionCount=0,this.optionsProcessed=!1,this.persistentSelectedOptions=[],this.loadInitialOptions()}loadInitialOptions(){var e=this;return(0,d.A)(function*(){e.isLoading=!0,e.internalError=e.error,e.internalErrorMessage=e.errorMessage,e.loadedOptions=yield e.fetchOptions(0,e.batchSize),e.isLoading=!1})()}fetchMoreOptions(){var e=this;return(0,d.A)(function*(){e.isLoading=!0;const t=yield e.fetchOptions(e.loadedOptions.length,e.batchSize);e.loadedOptions=[...e.loadedOptions,...t],e.isLoading=!1})()}handleScroll(e){const t=e.target,i=Math.floor((t.scrollHeight-t.clientHeight)/2);t.scrollTop>=i&&this.fetchMoreOptions()}fetchOptions(e,t){var i=this;return(0,d.A)(function*(){let s=[];if("string"==typeof i.options)try{s=JSON.parse(i.options)}catch(o){console.error("Failed to parse options:",o)}else Array.isArray(i.options)?s=i.options:console.error("Unexpected value for options:",i.options);if(!i.optionsProcessed){i.optionCount=i.countOptions(s);const r=i.collectSelectedOptions(s).filter(a=>!i.persistentSelectedOptions.some(h=>h.value==a.value));i.persistentSelectedOptions=[...i.persistentSelectedOptions,...r],i.optionsProcessed=!0}return s.slice(e,e+t)})()}collectSelectedOptions(e){let t=[];for(const i of e)i.selected?i.children&&i.children.length>0?t=t.concat(this.collectLeafOptions(i.children)):t.push(i):i.children&&i.children.length>0&&(t=t.concat(this.collectSelectedOptions(i.children)));return t}collectLeafOptions(e){let t=[];for(const i of e)i.children&&i.children.length>0?t=t.concat(this.collectLeafOptions(i.children)):t.push(i);return t}countOptions(e){let t=0;for(const i of e)i.children&&i.children.length>=0?t+=this.countOptions(i.children):t++;return t}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.loadInitialOptions(),this.filteredOptions=[...this.loadedOptions]}updateInternalError(){this.internalError=this.error}updateInternalErrorMessage(){this.internalErrorMessage=this.errorMessage}loadedOptionsChanged(){this.filteredOptions=[...this.loadedOptions]}onSelectionChange(e,t){const i=new FormData;e.forEach(s=>i.append(this.name,s.value)),this.internals.setFormValue(i)}handleOptionClick(e){if(this.internalError=!1,!e.selected&&this.isSelectionLimitReached(e))return e.checkboxRef.toggleCheckedState(!1),this.internalError=!0,void(this.internalErrorMessage="Please consider the maximum number of items to choose from");this.updateSelection(e),this.ifxSelect.emit(this.persistentSelectedOptions)}isSelectionLimitReached(e){return this.maxItemCount&&this.persistentSelectedOptions.length+(e.children?e.children.length:1)>this.maxItemCount&&!this.persistentSelectedOptions.some(i=>i.value===e.value)}updateSelection(e){const t=this.persistentSelectedOptions.some(i=>i.value===e.value);e.children&&e.children.length>0?this.handleParentOptionClick(e):this.handleChildOptionClick(e,t)}selectAll(){var e=this;return(0,d.A)(function*(){const t=yield e.fetchOptions(0,e.optionCount);e.selectAllRecursive(t),e.ifxSelect.emit(e.persistentSelectedOptions)})()}selectAllRecursive(e){for(const t of e)t.children&&t.children.length>0?this.selectAllRecursive(t.children):this.persistentSelectedOptions.some(i=>i.value===t.value)||(t.selected=!0,this.persistentSelectedOptions=[...this.persistentSelectedOptions,t])}handleParentOptionClick(e){if(e.children.every(i=>this.persistentSelectedOptions.some(s=>s.value===i.value)))this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter(i=>!e.children.some(s=>s.value===i.value))],e.selected=!1,e.children.forEach(i=>{i.selected=!1});else{const i=[...e.children.filter(s=>!this.persistentSelectedOptions.some(l=>l.value===s.value))];e.selected=!0,e.children.forEach(s=>{s.selected=!0}),this.persistentSelectedOptions=[...this.persistentSelectedOptions,...i]}}handleChildOptionClick(e,t){t?(this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter(i=>i.value!==e.value)],e.selected=!1):(this.persistentSelectedOptions=[...this.persistentSelectedOptions,e],e.selected=!0),this.updateParentSelectedState()}updateParentSelectedState(){this.loadedOptions.forEach(e=>{var t;(null===(t=e.children)||void 0===t?void 0:t.length)>0&&(e.children.every(i=>!0===i.selected)?e.selected=!0:(e.selected=!1,e.indeterminate=!!this.isOptionIndeterminate(e)))})}getSizeClass(){return"s"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=c.globalZIndex++}waitForElement(e,t,i=50){let s=0;!function l(){requestAnimationFrame(()=>{const o=e();o.length>0||s>i?t(o):(s++,l())})}()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":case"Space":this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),i=>{this.updateHighlightedOption(i)});break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t)}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=null===(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))||void 0===e?void 0:e.getBoundingClientRect(),i=window.innerHeight-t.bottom;this.dropdownFlipped=t.top>i&&t.height>i||t.bottom>window.innerHeight}updateHighlightedOption(e){e.forEach(t=>t.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&(e[this.currentIndex].classList.add("is-highlighted"),e[this.currentIndex].focus())}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}handleOptionKeyDown(e,t){"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&e.stopPropagation(),("Enter"===e.key||" "===e.key)&&this.handleOptionClick(t)}renderOption(e,t){var i;const s=this.isOptionIndeterminate(e),l=e.children?s||this.isOptionSelected(e):this.persistentSelectedOptions.some(a=>a.value===e.value),o=!l&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,r=`checkbox-${e.value}-${t}`;return(0,n.h)("div",{class:"option-wrapper"},(0,n.h)("div",{class:`option ${l?"selected":""} ${o?"disabled":""} \n        ${this.getSizeClass()}`,"data-value":e.value,onKeyDown:a=>!o&&this.handleOptionKeyDown(a,e),onClick:()=>!o&&this.handleOptionClick(e),tabindex:"0",role:(null===(i=e.children)||void 0===i?void 0:i.length)>0?"treeitem":"option"},(0,n.h)("ifx-checkbox",{tabIndex:-1,ref:a=>e.checkboxRef=a,id:r,size:"s",checked:!s&&l,indeterminate:s,disabled:o}),(0,n.h)("label",{htmlFor:r,onClick:a=>a.stopPropagation()},e.label)),e.children&&e.children.map((a,h)=>this.renderSubOption(a,`${t}-${h}`)))}isOptionSelected(e){return!!e.children&&e.children.every(t=>this.persistentSelectedOptions.some(i=>i.value===t.value))}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter(i=>this.persistentSelectedOptions.some(s=>s.value===i.value)).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const i of e){if(i.value===t)return i;if(i.children){const s=this.findInOptions(i.children,t);if(s)return s}}return null}renderSubOption(e,t){var i;const s=this.persistentSelectedOptions.some(r=>r.value===e.value),l=!s&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,o=`checkbox-${e.value}-${t}`;return(0,n.h)("div",{class:`option sub-option ${s?"selected":""} ${this.getSizeClass()} ${l?"disabled":""}`,"data-value":e.value,role:(null===(i=e.children)||void 0===i?void 0:i.length)>0?"option":"treeitem",onKeyDown:r=>!l&&this.handleOptionKeyDown(r,e),onClick:()=>!l&&this.handleOptionClick(e),tabindex:"0"},(0,n.h)("ifx-checkbox",{tabIndex:-1,ref:r=>e.checkboxRef=r,id:o,size:"s",checked:s,disabled:l}),(0,n.h)("label",{htmlFor:o,onClick:r=>r.stopPropagation()},e.label))}renderSelectAll(){const e=this.persistentSelectedOptions.length===this.optionCount,i=this.optionCount>0&&!(0===this.persistentSelectedOptions.length)&&!e,s=this;function l(){e?s.clearSelection():s.selectAll()}return(0,n.h)("div",{class:"select-all-wrapper"},(0,n.h)("div",{class:`option ${this.getSizeClass()}`,tabindex:"0",onKeyDown:r=>function o(r){"ArrowUp"!==r.key&&"ArrowDown"!==r.key&&r.stopPropagation(),("Enter"===r.key||" "===r.key)&&l()}(r),onClick:l},(0,n.h)("ifx-checkbox",{tabIndex:-1,id:"selectAll",checked:e,indeterminate:i,size:"s"}),(0,n.h)("label",{htmlFor:"selectAll"},"Select all")),(0,n.h)("ifx-dropdown-separator",null))}render(){const e=this.persistentSelectedOptions.filter(t=>!this.persistentSelectedOptions.some(s=>s.children&&s.children.some(l=>l.value===t.value)&&s.selected)).map(t=>t.label).join(", ");return(0,n.h)("div",{class:"ifx-multiselect-container",ref:t=>this.dropdownElement=t},this.label?(0,n.h)("div",{class:"ifx-label-wrapper"},(0,n.h)("span",null,this.label)):null,(0,n.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.internalError?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:this.disabled?void 0:t=>this.handleWrapperClick(t),onKeyDown:this.disabled?void 0:t=>this.handleKeyDown(t)},(0,n.h)("div",{class:`ifx-multiselect-input \n          ${0===this.persistentSelectedOptions.length?"placeholder":""}\n          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:this.placeholder),this.dropdownOpen&&(0,n.h)("div",{class:"ifx-multiselect-dropdown-menu",onScroll:t=>this.handleScroll(t),style:{"--dynamic-z-index":this.zIndex.toString()}},this.showSearch&&(0,n.h)("input",{type:"text",role:"textbox",class:"search-input",onKeyDown:t=>{t.stopPropagation()},onInput:t=>this.handleSearch(t.target),placeholder:"Search..."}),this.showSelectAll&&this.renderSelectAll(),this.filteredOptions.map((t,i)=>this.renderOption(t,i)),this.isLoading&&(0,n.h)("div",null,"Loading more options...")),(0,n.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,n.h)("div",{class:"ifx-clear-button",onClick:this.disabled?void 0:()=>this.clearSelection()},(0,n.h)("ifx-icon",{icon:"cremove16"})),(0,n.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,n.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,n.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,n.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.internalError?(0,n.h)("div",{class:"ifx-error-message-wrapper"},(0,n.h)("span",null,this.internalErrorMessage)):null)}static get formAssociated(){return!0}get el(){return(0,n.g)(this)}static get watchers(){return{options:["updateOptions"],error:["updateInternalError"],errorMessage:["updateInternalErrorMessage"],loadedOptions:["loadedOptionsChanged"],persistentSelectedOptions:["onSelectionChange"]}}};return c.globalZIndex=1,c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-multiselect-container{position:relative;box-sizing:border-box;font-family:var(--ifx-font-family)}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:1rem;line-height:1.5rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:0.75rem;line-height:1rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{background-color:#FFFFFF;box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;width:100%;font-weight:400;font-style:normal}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{height:36px;padding:8px 12px;font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{height:40px;padding:8px 16px;font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active){outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:2px}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:default;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#575352}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border-color:#0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;margin-top:2px;background-color:#fff;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input{width:100%;padding:8px 16px;font-size:1rem;line-height:1.5rem;font-style:normal;font-weight:400;box-sizing:border-box;background-color:#FFFFFF;border:none;border-bottom:1px solid #8D8786}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input:focus{outline:none;border:1px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input::placeholder{color:#999}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .option.medium-select{font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus:not(.disabled){background-color:#BFBBBB;outline:none}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}.ifx-multiselect-container .option.disabled:hover{cursor:default}.ifx-multiselect-container .option label{cursor:inherit}.select-all-wrapper{padding-top:8px}',c})(),b=(()=>{let c=class{constructor(e){(0,n.r)(this,e),this.ifxInput=(0,n.c)(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.maxlength=void 0}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}reset(){var e=this;return(0,d.A)(function*(){e.value="",e.inputElement.value=""})()}handleInput(){const e=this.inputElement.value;this.value=e,this.internals.setFormValue(e),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return(0,n.h)("div",{key:"4002abfa060e9a72010b6d9bb0de5d43cf3aa53a","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container "+(this.disabled?"disabled":"")},(0,n.h)("div",{key:"a4c0046f878da38c6bea0b8d85cded2ad6d96c74",class:"textInput__top-wrapper"},(0,n.h)("label",{key:"abc4584f3a1ae02b320a13755c6184cb4f0bfd8e",htmlFor:"text-field"},(0,n.h)("slot",{key:"2786901bc2ae750acb5377dbeadf4f39ff009307"}),this.optional&&this.required?(0,n.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,n.h)("span",{class:"optional"},"(optional)"):this.required?(0,n.h)("span",{class:"required "+(this.error?"error":"")},"*"):null)),(0,n.h)("div",{key:"b376bba22465d7639635172814db85b08abf06b4",class:"textInput__bottom-wrapper"},(0,n.h)("div",{key:"7378f28dcd39957602a3085032bd13b9626869fa",class:"input-container"},this.icon&&(0,n.h)("ifx-icon",{key:"bc6f654ca8ce9d52185712dd73a512268522b7f0",icon:this.icon}),(0,n.h)("input",{key:"384a4f4d7efac1a3f4a14b367af0d6daa1dfc5a7",ref:e=>this.inputElement=e,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`})),this.caption&&!this.error&&(0,n.h)("div",{key:"6151bde7534242808deae9bab398cbd53ec176fe",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,n.h)("div",{key:"c89bc2ed1a2107d12c2f1f3f03aa3e6f9d8329f4",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return(0,n.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};return c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .textInput__top-wrapper label .required.error{color:#CD002F}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}',c})()}}]);