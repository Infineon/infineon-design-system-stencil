"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6687],{"./dist/esm/ifx-multiselect_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_multiselect:()=>Multiselect,ifx_text_field:()=>TextField});var _index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b5aac952.js");const Multiselect=class{constructor(hostRef){(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxSelect=(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleSearch=function debounce(func,wait){let timeout;return function executedFunction(...args){clearTimeout(timeout),timeout=setTimeout((()=>{clearTimeout(timeout),func(...args)}),wait)}}((targetElement=>{const searchTerm=targetElement.value.toLowerCase();this.filteredOptions=""===searchTerm?this.loadedOptions:this.loadedOptions.filter((option=>option.label.toLowerCase().includes(searchTerm)))}),300),this.handleDocumentClick=event=>{event.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.batchSize=50,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.internalError=!1,this.errorMessage="Error",this.internalErrorMessage=void 0,this.label="",this.persistentSelectedOptions=[],this.placeholder="",this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1,this.isLoading=!1,this.loadedOptions=[],this.filteredOptions=[],this.showSearch=!0,this.showSelectAll=!0,this.optionCount=0,this.optionsProcessed=!1}async loadInitialOptions(){this.isLoading=!0,this.internalError=this.error,this.internalErrorMessage=this.errorMessage,this.loadedOptions=await this.fetchOptions(0,this.batchSize),this.isLoading=!1}async fetchMoreOptions(){this.isLoading=!0;const moreOptions=await this.fetchOptions(this.loadedOptions.length,this.batchSize);this.loadedOptions=[...this.loadedOptions,...moreOptions],this.isLoading=!1}handleScroll(event){const element=event.target,halfwayPoint=Math.floor((element.scrollHeight-element.clientHeight)/2);element.scrollTop>=halfwayPoint&&this.fetchMoreOptions()}async fetchOptions(startIndex,count){let allOptions=[];if("string"==typeof this.options)try{allOptions=JSON.parse(this.options)}catch(err){console.error("Failed to parse options:",err)}else Array.isArray(this.options)?allOptions=this.options:console.error("Unexpected value for options:",this.options);if(!this.optionsProcessed){this.optionCount=this.countOptions(allOptions);const initallySelectedNotInState=this.collectSelectedOptions(allOptions).filter((init=>!this.persistentSelectedOptions.some((opt=>opt.value==init.value))));this.persistentSelectedOptions=[...this.persistentSelectedOptions,...initallySelectedNotInState],this.optionsProcessed=!0}return allOptions.slice(startIndex,startIndex+count)}collectSelectedOptions(options){let selectedOptions=[];for(const option of options)option.selected?option.children&&option.children.length>0?selectedOptions=selectedOptions.concat(this.collectLeafOptions(option.children)):selectedOptions.push(option):option.children&&option.children.length>0&&(selectedOptions=selectedOptions.concat(this.collectSelectedOptions(option.children)));return selectedOptions}collectLeafOptions(children){let leafOptions=[];for(const child of children)child.children&&child.children.length>0?leafOptions=leafOptions.concat(this.collectLeafOptions(child.children)):leafOptions.push(child);return leafOptions}countOptions(options){let count=0;for(const option of options)option.children&&option.children.length>=0?count+=this.countOptions(option.children):count++;return count}componentDidLoad(){setTimeout((()=>{this.positionDropdown()}),500)}componentWillLoad(){this.loadInitialOptions(),this.filteredOptions=[...this.loadedOptions]}updateInternalError(){this.internalError=this.error}updateInternalErrorMessage(){this.internalErrorMessage=this.errorMessage}loadedOptionsChanged(){this.filteredOptions=[...this.loadedOptions]}handleOptionClick(option){if(this.internalError=!1,!option.selected&&this.isSelectionLimitReached(option))return option.checkboxRef.toggleCheckedState(!1),this.internalError=!0,void(this.internalErrorMessage="Please consider the maximum number of items to choose from");this.updateSelection(option),this.ifxSelect.emit(this.persistentSelectedOptions)}isSelectionLimitReached(option){let newOptionsLength=option.children?option.children.length:1;return this.maxItemCount&&this.persistentSelectedOptions.length+newOptionsLength>this.maxItemCount&&!this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value))}updateSelection(option){const wasSelected=this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value));option.children&&option.children.length>0?this.handleParentOptionClick(option):this.handleChildOptionClick(option,wasSelected)}async selectAll(){const allOptions=await this.fetchOptions(0,this.optionCount);this.selectAllRecursive(allOptions),this.ifxSelect.emit(this.persistentSelectedOptions)}selectAllRecursive(options){for(const opt of options)opt.children&&opt.children.length>0?this.selectAllRecursive(opt.children):this.persistentSelectedOptions.some((some=>some.value===opt.value))||(opt.selected=!0,this.persistentSelectedOptions=[...this.persistentSelectedOptions,opt])}handleParentOptionClick(option){if(option.children.every((child=>this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===child.value)))))this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter((selectedOption=>!option.children.some((child=>child.value===selectedOption.value))))],option.selected=!1,option.children.forEach((child=>{child.selected=!1}));else{const newChildren=[...option.children.filter((childOption=>!this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===childOption.value))))];option.selected=!0,option.children.forEach((child=>{child.selected=!0})),this.persistentSelectedOptions=[...this.persistentSelectedOptions,...newChildren]}}handleChildOptionClick(option,wasSelected){wasSelected?(this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter((selectedOption=>selectedOption.value!==option.value))],option.selected=!1):(this.persistentSelectedOptions=[...this.persistentSelectedOptions,option],option.selected=!0),this.updateParentSelectedState()}updateParentSelectedState(){this.loadedOptions.forEach((option=>{var _a;(null===(_a=option.children)||void 0===_a?void 0:_a.length)>0&&(option.children.every((child=>!0===child.selected))?option.selected=!0:(option.selected=!1,this.isOptionIndeterminate(option)?option.indeterminate=!0:option.indeterminate=!1))}))}getSizeClass(){return"s"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout((()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)}),0),this.zIndex=Multiselect.globalZIndex++}waitForElement(querySelectorFunc,callback,maxTries=50){let tries=0;!function request(){requestAnimationFrame((()=>{const elements=querySelectorFunc();elements.length>0||tries>maxTries?callback(elements):(tries++,request())}))}()}handleKeyDown(event){if(this.disabled)return;const options=this.dropdownElement.querySelectorAll(".option");switch(event.code){case"Enter":case"Space":this.toggleDropdown(),this.waitForElement((()=>this.dropdownElement.querySelectorAll(".option")),(options=>{this.updateHighlightedOption(options)}));break;case"ArrowDown":this.handleArrowDown(options),this.dropdownOpen&&this.updateHighlightedOption(options);break;case"ArrowUp":this.handleArrowUp(options),this.dropdownOpen&&this.updateHighlightedOption(options)}}handleWrapperClick(event){this.positionDropdown(),event.currentTarget===event.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var _a;const wrapperRect=null===(_a=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))||void 0===_a?void 0:_a.getBoundingClientRect(),spaceBelow=window.innerHeight-wrapperRect.bottom;wrapperRect.top>spaceBelow&&wrapperRect.height>spaceBelow||wrapperRect.bottom>window.innerHeight?this.dropdownFlipped=!0:this.dropdownFlipped=!1}updateHighlightedOption(options){options.forEach((option=>option.classList.remove("is-highlighted"))),this.currentIndex>=0&&this.currentIndex<options.length&&(options[this.currentIndex].classList.add("is-highlighted"),options[this.currentIndex].focus())}handleArrowDown(options){this.currentIndex<options.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(options){this.currentIndex>0?this.currentIndex--:this.currentIndex=options.length-1}handleOptionKeyDown(e,option){"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&e.stopPropagation(),"Enter"!==e.key&&" "!==e.key||this.handleOptionClick(option)}renderOption(option,index){var _a;const isIndeterminate=this.isOptionIndeterminate(option),isSelected=option.children?isIndeterminate||this.isOptionSelected(option):this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value)),disableCheckbox=!isSelected&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,uniqueId=`checkbox-${option.value}-${index}`;return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"option-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`option ${isSelected?"selected":""} ${disableCheckbox?"disabled":""} \n        ${this.getSizeClass()}`,"data-value":option.value,onKeyDown:e=>!disableCheckbox&&this.handleOptionKeyDown(e,option),onClick:()=>!disableCheckbox&&this.handleOptionClick(option),tabindex:"0",role:""+((null===(_a=option.children)||void 0===_a?void 0:_a.length)>0?"treeitem":"option")},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{tabIndex:-1,ref:el=>option.checkboxRef=el,id:uniqueId,size:"s",value:!isIndeterminate&&isSelected,indeterminate:isIndeterminate,disabled:disableCheckbox}),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:uniqueId,onClick:e=>e.stopPropagation()},option.label)),option.children&&option.children.map(((child,childIndex)=>this.renderSubOption(child,`${index}-${childIndex}`))))}isOptionSelected(option){return!!option.children&&option.children.every((child=>this.persistentSelectedOptions.some((persistentOption=>persistentOption.value===child.value))))}isOptionIndeterminate(option){if(!option.children)return!1;const selectedChildren=option.children.filter((child=>this.persistentSelectedOptions.some((persistentOption=>persistentOption.value===child.value)))).length;return selectedChildren>0&&selectedChildren<option.children.length}findInOptions(options,searchTerm){for(const option of options){if(option.value===searchTerm)return option;if(option.children){const foundInChildren=this.findInOptions(option.children,searchTerm);if(foundInChildren)return foundInChildren}}return null}renderSubOption(option,index){var _a;const isSelected=this.persistentSelectedOptions.some((selectedOption=>selectedOption.value===option.value)),disableCheckbox=!isSelected&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,uniqueId=`checkbox-${option.value}-${index}`;return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`option sub-option ${isSelected?"selected":""} ${this.getSizeClass()} ${disableCheckbox?"disabled":""}`,"data-value":option.value,role:""+((null===(_a=option.children)||void 0===_a?void 0:_a.length)>0?"option":"treeitem"),onKeyDown:e=>!disableCheckbox&&this.handleOptionKeyDown(e,option),onClick:()=>!disableCheckbox&&this.handleOptionClick(option),tabindex:"0"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{tabIndex:-1,ref:el=>option.checkboxRef=el,id:uniqueId,size:"s",value:isSelected,disabled:disableCheckbox}),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:uniqueId,onClick:e=>e.stopPropagation()},option.label))}renderSelectAll(){const allSelected=this.persistentSelectedOptions.length===this.optionCount,noneSelected=0===this.persistentSelectedOptions.length,indeterminate=this.optionCount>0&&!noneSelected&&!allSelected,that=this;function toggleSelectAll(){allSelected?that.clearSelection():that.selectAll()}return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"select-all-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`option ${this.getSizeClass()}`,tabindex:"0",onKeyDown:e=>function handleSelectAllKeydown(e){"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&e.stopPropagation(),"Enter"!==e.key&&" "!==e.key||toggleSelectAll()}(e),onClick:toggleSelectAll},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{tabIndex:-1,id:"selectAll",value:allSelected,indeterminate,size:"s"}),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"selectAll"},"Select all")),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-dropdown-separator",null))}render(){const selectedOptionsLabels=this.persistentSelectedOptions.filter((option=>!this.persistentSelectedOptions.some((parentOption=>parentOption.children&&parentOption.children.some((child=>child.value===option.value))&&parentOption.selected)))).map((option=>option.label)).join(", ");return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-multiselect-container",ref:el=>this.dropdownElement=el},this.label?(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-label-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.label)):null,(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.internalError?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:this.disabled?void 0:event=>this.handleWrapperClick(event),onKeyDown:this.disabled?void 0:event=>this.handleKeyDown(event)},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`ifx-multiselect-input \n          ${0===this.persistentSelectedOptions.length?"placeholder":""}\n          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?selectedOptionsLabels:"Placeholder"),this.dropdownOpen&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-multiselect-dropdown-menu",onScroll:event=>this.handleScroll(event),style:{"--dynamic-z-index":this.zIndex.toString()}},this.showSearch&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"text",role:"textbox",class:"search-input",onKeyDown:e=>{e.stopPropagation()},onInput:event=>this.handleSearch(event.target),placeholder:"Search..."}),this.showSelectAll&&this.renderSelectAll(),this.filteredOptions.map(((option,index)=>this.renderOption(option,index))),this.isLoading&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"Loading more options...")),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-clear-button",onClick:this.disabled?void 0:()=>this.clearSelection()},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"cremove24"})),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.internalError?(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ifx-error-message-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.internalErrorMessage)):null)}get el(){return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{error:["updateInternalError"],errorMessage:["updateInternalErrorMessage"],loadedOptions:["loadedOptionsChanged"]}}};Multiselect.globalZIndex=1,Multiselect.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-multiselect-container{position:relative;box-sizing:border-box;font-family:var(--ifx-font-family)}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:1rem;line-height:1.5rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:0.75rem;line-height:1rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{background-color:#FFFFFF;box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;width:100%;font-weight:400;font-style:normal}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{height:36px;padding:8px 12px;font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{height:40px;padding:8px 16px;font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active){outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:2px}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:default;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#575352}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border-color:#0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:8px;display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;margin-top:2px;background-color:#fff;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input{width:100%;padding:8px 16px;font-size:1rem;line-height:1.5rem;font-style:normal;font-weight:400;box-sizing:border-box;background-color:#FFFFFF;border:none;border-bottom:1px solid #8D8786}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input:focus{outline:none;border:1px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input::placeholder{color:#999}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .option.medium-select{font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus:not(.disabled){background-color:#BFBBBB;outline:none}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}.ifx-multiselect-container .option.disabled:hover{cursor:default}.ifx-multiselect-container .option label{cursor:inherit}.select-all-wrapper{padding-top:8px}';const TextField=class{constructor(hostRef){(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),hostRef.$hostElement$["s-ei"]?this.internals=hostRef.$hostElement$["s-ei"]:(this.internals=hostRef.$hostElement$.attachInternals(),hostRef.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.maxlength=void 0}valueWatcher(newValue){newValue!==this.inputElement.value&&(this.inputElement.value=newValue)}async reset(){this.value="",this.inputElement.value=""}handleInput(){const query=this.inputElement.value;this.value=query,this.internals.setFormValue(query),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b9aa704dd27f4e39c8d8250b5c2427332b61bba5","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container "+(this.disabled?"disabled":"")},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5741bdd08a720b84528f11ebba8c15c28ffa7cfb",class:"textInput__top-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"6fe3299449c81f331ad8b848ef5bedf6eaedb6b5",htmlFor:"text-field"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"dbd5222085f414331ffd1a52edb5258d1239bf29"}),this.optional&&this.required?(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"optional"},"(optional)"):this.required?(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"required "+(this.error?"error":"")},"*"):null)),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"917807972cca4d8f3ef3a0a7c34adb74bd8bb551",class:"textInput__bottom-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9d0929602a0ff55bc0a9bf9f35ddde121b38db7c",class:"input-container"},this.icon&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"a729133c4a704d8830bab45f1989d43953b20f6a",icon:this.icon}),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"4982f05965f6e8d7969feb421481e8e31eb1ed9d",ref:el=>this.inputElement=el,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`})),this.caption&&!this.error&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bdc1f66282ab8676457868fb87be4412d7d7ca9d",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"47f5199f0686cb4bc17de099e7589edae85e7816",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};TextField.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .textInput__top-wrapper label .required.error{color:#CD002F}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}'}}]);