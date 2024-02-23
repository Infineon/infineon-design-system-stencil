"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[1541],{1541:(e,t,i)=>{i.r(t),i.d(t,{ifx_multiselect:()=>o});var n=i(1597);const o=class{constructor(e){(0,n.r)(this,e),this.ifxSelect=(0,n.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,n.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleSearch=function(e,t){let i;return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];clearTimeout(i),i=setTimeout((()=>{clearTimeout(i),e(...o)}),t)}}((e=>{const t=e.target.value.toLowerCase();this.filteredOptions=""===t?this.loadedOptions:this.loadedOptions.filter((e=>e.label.toLowerCase().includes(t)))}),300),this.handleDocumentClick=e=>{e.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.batchSize=50,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.internalError=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.placeholder="",this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1,this.isLoading=!1,this.loadedOptions=[],this.filteredOptions=[]}async loadInitialOptions(){this.isLoading=!0,this.internalError=this.error,this.loadedOptions=await this.fetchOptions(0,this.batchSize),this.isLoading=!1}async fetchMoreOptions(){this.isLoading=!0;const e=await this.fetchOptions(this.loadedOptions.length,this.batchSize);this.loadedOptions=[...this.loadedOptions,...e],this.isLoading=!1}handleScroll(e){const t=e.target,i=Math.floor((t.scrollHeight-t.clientHeight)/2);t.scrollTop>=i&&this.fetchMoreOptions()}async fetchOptions(e,t){let i=[];if("string"===typeof this.options)try{i=JSON.parse(this.options)}catch(o){console.error("Failed to parse options:",o)}else Array.isArray(this.options)?i=this.options:console.error("Unexpected value for options:",this.options);const n=i.slice(e,e+t);if(0===e){const e=n.filter((e=>e.selected));this.persistentSelectedOptions=[...this.persistentSelectedOptions,...e]}return n}componentDidLoad(){setTimeout((()=>{this.positionDropdown()}),500)}componentWillLoad(){this.loadInitialOptions(),this.filteredOptions=[...this.loadedOptions]}updateInternalError(){this.internalError=this.error}loadedOptionsChanged(){this.filteredOptions=[...this.loadedOptions]}handleOptionClick(e){if(this.internalError=!1,this.isSelectionLimitReached(e))return console.error("Max item count reached"),this.internalError=!0,void(this.errorMessage="Please consider the maximum number of items to choose from");this.updateSelection(e),this.ifxSelect.emit(this.persistentSelectedOptions)}isSelectionLimitReached(e){let t=e.children?e.children.length:1;return this.maxItemCount&&this.persistentSelectedOptions.length+t>this.maxItemCount&&!this.persistentSelectedOptions.some((t=>t.value===e.value))}updateSelection(e){const t=this.persistentSelectedOptions.some((t=>t.value===e.value));e.children&&e.children.length>0?this.handleParentOptionClick(e):this.handleChildOptionClick(e,t)}handleParentOptionClick(e){if(e.children.every((e=>this.persistentSelectedOptions.some((t=>t.value===e.value)))))this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter((t=>!e.children.some((e=>e.value===t.value))))];else{const t=[...e.children.filter((e=>!this.persistentSelectedOptions.some((t=>t.value===e.value))))];this.persistentSelectedOptions=[...this.persistentSelectedOptions,...t]}}handleChildOptionClick(e,t){this.persistentSelectedOptions=t?[...this.persistentSelectedOptions.filter((t=>t.value!==e.value))]:[...this.persistentSelectedOptions,e]}getSizeClass(){return"s"==="".concat(this.size)?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout((()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)}),0),this.zIndex=o.globalZIndex++}waitForElement(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,n=0;!function o(){requestAnimationFrame((()=>{const s=e();s.length>0||n>i?t(s):(n++,o())}))}()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(t):(this.toggleDropdown(),this.waitForElement((()=>this.dropdownElement.querySelectorAll(".option")),(e=>{this.updateHighlightedOption(e)})));break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t)}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=null===(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))||void 0===e?void 0:e.getBoundingClientRect(),i=window.innerHeight-t.bottom;t.top>i&&t.height>i||t.bottom>window.innerHeight?this.dropdownFlipped=!0:this.dropdownFlipped=!1}updateHighlightedOption(e){e.forEach((e=>e.classList.remove("is-highlighted"))),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const t=this.dropdownElement.querySelector(".option.selected");t&&t.classList.remove("selected");const i=e[this.currentIndex];i.classList.add("selected");const n=i.getAttribute("data-value"),o="string"===typeof this.options?JSON.parse(this.options).map((e=>({value:e.value,label:e.label,children:e.children,selected:e.selected}))):this.options.map((e=>Object.assign({},e))),s=this.findInOptions(o,n);this.handleOptionClick(s)}renderOption(e,t){var i;const o=this.isOptionIndeterminate(e),s=e.children?o||this.isOptionSelected(e):this.persistentSelectedOptions.some((t=>t.value===e.value)),l=!s&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,r="checkbox-".concat(e.value,"-").concat(t);return(0,n.h)("div",null,(0,n.h)("div",{class:"option ".concat(s?"selected":""," \n        ").concat(this.getSizeClass()),"data-value":e.value,onClick:()=>!l&&this.handleOptionClick(e),tabindex:"0",role:"".concat((null===(i=e.children)||void 0===i?void 0:i.length)>0?"treeitem":"option")},(0,n.h)("ifx-checkbox",{id:r,size:"s",value:!o&&s,indeterminate:o,disabled:l}),(0,n.h)("label",{htmlFor:r},e.label)),e.children&&e.children.map(((e,i)=>this.renderSubOption(e,"".concat(t,"-").concat(i)))))}isOptionSelected(e){return!!e.children&&e.children.every((e=>this.persistentSelectedOptions.some((t=>t.value===e.value))))}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter((e=>this.persistentSelectedOptions.some((t=>t.value===e.value)))).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const i of e){if(i.value===t)return i;if(i.children){const e=this.findInOptions(i.children,t);if(e)return e}}return null}renderSubOption(e,t){var i;const o=this.persistentSelectedOptions.some((t=>t.value===e.value)),s=!o&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,l="checkbox-".concat(e.value,"-").concat(t);return(0,n.h)("div",{class:"option sub-option ".concat(o?"selected":""," ").concat(this.getSizeClass()),"data-value":e.value,role:"".concat((null===(i=e.children)||void 0===i?void 0:i.length)>0?"option":"treeitem"),onClick:()=>!s&&this.handleOptionClick(e),tabindex:"0"},(0,n.h)("ifx-checkbox",{id:l,size:"s",value:o,disabled:s}),(0,n.h)("label",{htmlFor:l},e.label))}render(){const e=this.persistentSelectedOptions.filter((e=>!this.persistentSelectedOptions.some((t=>t.children&&t.children.some((t=>t.value===e.value))&&t.selected)))).map((e=>e.label)).join(", ");return(0,n.h)("div",{class:"ifx-multiselect-container",ref:e=>this.dropdownElement=e},this.label?(0,n.h)("div",{class:"ifx-label-wrapper"},(0,n.h)("span",null,this.label)):null,(0,n.h)("div",{class:"ifx-multiselect-wrapper \n        ".concat(this.getSizeClass()," \n        ").concat(this.dropdownOpen?"active":""," \n        ").concat(this.dropdownFlipped?"is-flipped":"","\n        ").concat(this.internalError?"error":"","\n        ").concat(this.disabled?"disabled":""),tabindex:"0",onClick:e=>this.handleWrapperClick(e),onKeyDown:e=>this.handleKeyDown(e)},(0,n.h)("div",{class:"ifx-multiselect-input \n          ".concat(0===this.persistentSelectedOptions.length?"placeholder":"","\n          "),onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:this.placeholder),this.dropdownOpen&&(0,n.h)("div",{class:"ifx-multiselect-dropdown-menu",onScroll:e=>this.handleScroll(e),style:{"--dynamic-z-index":this.zIndex.toString()}},(0,n.h)("input",{type:"text",role:"textbox",class:"search-input",onInput:e=>this.handleSearch(e),placeholder:"Search..."}),this.filteredOptions.map(((e,t)=>this.renderOption(e,t))),this.isLoading&&(0,n.h)("div",null,"Loading more options...")),(0,n.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,n.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,n.h)("ifx-icon",{icon:"cremove24"})),(0,n.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,n.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,n.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,n.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.internalError?(0,n.h)("div",{class:"ifx-error-message-wrapper"},(0,n.h)("span",null,this.errorMessage)):null)}get el(){return(0,n.g)(this)}static get watchers(){return{error:["updateInternalError"],loadedOptions:["loadedOptionsChanged"]}}};o.globalZIndex=1,o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-multiselect-container{background-color:#FFFFFF;position:relative;box-sizing:border-box;font-family:var(--ifx-font-family)}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:1rem;line-height:1.5rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:0.75rem;line-height:1rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;width:100%;font-weight:400;font-style:normal}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{height:36px;padding:8px 12px;font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{height:40px;padding:8px 16px;font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active){outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:2px}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#575352}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border-color:#0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:8px;display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;margin-top:2px;background-color:#fff;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input{width:100%;padding:8px 16px;font-size:1rem;line-height:1.5rem;font-style:normal;font-weight:400;box-sizing:border-box;background-color:#FFFFFF;border:none;border-bottom:1px solid #8D8786}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input:focus{outline:none;border:1px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input::placeholder{color:#999}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .option.medium-select{font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}'}}]);
//# sourceMappingURL=1541.2b68f1ca.chunk.js.map