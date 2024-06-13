"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2859],{2859:(b,h,a)=>{a.r(h),a.d(h,{ifx_multiselect:()=>p,ifx_text_field:()=>u});var c=a(6330),n=a(3415);const p=class{constructor(e){(0,n.r)(this,e),this.ifxSelect=(0,n.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,n.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleSearch=function x(e,t){let i;return function(...l){clearTimeout(i),i=setTimeout(()=>{clearTimeout(i),e(...l)},t)}}(t=>{const i=t.value.toLowerCase();this.filteredOptions=""===i?this.loadedOptions:this.loadedOptions.filter(s=>s.label.toLowerCase().includes(i))},300),this.handleDocumentClick=t=>{t.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.batchSize=50,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.internalError=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.placeholder="",this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1,this.isLoading=!1,this.loadedOptions=[],this.filteredOptions=[],this.searchEnabled=!0}loadInitialOptions(){var e=this;return(0,c.A)(function*(){e.isLoading=!0,e.internalError=e.error,e.loadedOptions=yield e.fetchOptions(0,e.batchSize),e.isLoading=!1})()}fetchMoreOptions(){var e=this;return(0,c.A)(function*(){e.isLoading=!0;const t=yield e.fetchOptions(e.loadedOptions.length,e.batchSize);e.loadedOptions=[...e.loadedOptions,...t],e.isLoading=!1})()}handleScroll(e){const t=e.target,i=Math.floor((t.scrollHeight-t.clientHeight)/2);t.scrollTop>=i&&this.fetchMoreOptions()}fetchOptions(e,t){var i=this;return(0,c.A)(function*(){let s=[];if("string"==typeof i.options)try{s=JSON.parse(i.options)}catch(o){console.error("Failed to parse options:",o)}else Array.isArray(i.options)?s=i.options:console.error("Unexpected value for options:",i.options);const l=s.slice(e,e+t);if(0===e){const o=l.filter(r=>r.selected);i.persistentSelectedOptions=[...i.persistentSelectedOptions,...o]}return l})()}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.loadInitialOptions(),this.filteredOptions=[...this.loadedOptions]}updateInternalError(){this.internalError=this.error}loadedOptionsChanged(){this.filteredOptions=[...this.loadedOptions]}handleOptionClick(e){if(this.internalError=!1,this.isSelectionLimitReached(e))return console.error("Max item count reached"),this.internalError=!0,void(this.errorMessage="Please consider the maximum number of items to choose from");this.updateSelection(e),this.ifxSelect.emit(this.persistentSelectedOptions)}isSelectionLimitReached(e){return this.maxItemCount&&this.persistentSelectedOptions.length+(e.children?e.children.length:1)>this.maxItemCount&&!this.persistentSelectedOptions.some(i=>i.value===e.value)}updateSelection(e){const t=this.persistentSelectedOptions.some(i=>i.value===e.value);e.children&&e.children.length>0?this.handleParentOptionClick(e):this.handleChildOptionClick(e,t)}handleParentOptionClick(e){if(e.children.every(i=>this.persistentSelectedOptions.some(s=>s.value===i.value)))this.persistentSelectedOptions=[...this.persistentSelectedOptions.filter(i=>!e.children.some(s=>s.value===i.value))];else{const i=[...e.children.filter(s=>!this.persistentSelectedOptions.some(l=>l.value===s.value))];this.persistentSelectedOptions=[...this.persistentSelectedOptions,...i]}}handleChildOptionClick(e,t){this.persistentSelectedOptions=t?[...this.persistentSelectedOptions.filter(i=>i.value!==e.value)]:[...this.persistentSelectedOptions,e]}getSizeClass(){return"s"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=p.globalZIndex++}waitForElement(e,t,i=50){let s=0;!function l(){requestAnimationFrame(()=>{const o=e();o.length>0||s>i?t(o):(s++,l())})}()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(t):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),i=>{this.updateHighlightedOption(i)}));break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t)}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=null===(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))||void 0===e?void 0:e.getBoundingClientRect(),i=window.innerHeight-t.bottom;this.dropdownFlipped=t.top>i&&t.height>i||t.bottom>window.innerHeight}updateHighlightedOption(e){e.forEach(t=>t.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const t=this.dropdownElement.querySelector(".option.selected");t&&t.classList.remove("selected");const i=e[this.currentIndex];i.classList.add("selected");const s=i.getAttribute("data-value"),l="string"==typeof this.options?JSON.parse(this.options).map(r=>({value:r.value,label:r.label,children:r.children,selected:r.selected})):this.options.map(r=>Object.assign({},r)),o=this.findInOptions(l,s);this.handleOptionClick(o)}renderOption(e,t){var i;const s=this.isOptionIndeterminate(e),l=e.children?s||this.isOptionSelected(e):this.persistentSelectedOptions.some(d=>d.value===e.value),o=!l&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,r=`checkbox-${e.value}-${t}`;return(0,n.h)("div",null,(0,n.h)("div",{class:`option ${l?"selected":""} \n        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!o&&this.handleOptionClick(e),tabindex:"0",role:(null===(i=e.children)||void 0===i?void 0:i.length)>0?"treeitem":"option"},(0,n.h)("ifx-checkbox",{id:r,size:"s",value:!s&&l,indeterminate:s,disabled:o}),(0,n.h)("label",{htmlFor:r},e.label)),e.children&&e.children.map((d,w)=>this.renderSubOption(d,`${t}-${w}`)))}isOptionSelected(e){return!!e.children&&e.children.every(t=>this.persistentSelectedOptions.some(i=>i.value===t.value))}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter(i=>this.persistentSelectedOptions.some(s=>s.value===i.value)).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const i of e){if(i.value===t)return i;if(i.children){const s=this.findInOptions(i.children,t);if(s)return s}}return null}renderSubOption(e,t){var i;const s=this.persistentSelectedOptions.some(r=>r.value===e.value),l=!s&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,o=`checkbox-${e.value}-${t}`;return(0,n.h)("div",{class:`option sub-option ${s?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:(null===(i=e.children)||void 0===i?void 0:i.length)>0?"option":"treeitem",onClick:()=>!l&&this.handleOptionClick(e),tabindex:"0"},(0,n.h)("ifx-checkbox",{id:o,size:"s",value:s,disabled:l}),(0,n.h)("label",{htmlFor:o},e.label))}render(){const e=this.persistentSelectedOptions.filter(t=>!this.persistentSelectedOptions.some(s=>s.children&&s.children.some(l=>l.value===t.value)&&s.selected)).map(t=>t.label).join(", ");return(0,n.h)("div",{class:"ifx-multiselect-container",ref:t=>this.dropdownElement=t},this.label?(0,n.h)("div",{class:"ifx-label-wrapper"},(0,n.h)("span",null,this.label)):null,(0,n.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.internalError?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:t=>this.handleWrapperClick(t),onKeyDown:t=>this.handleKeyDown(t)},(0,n.h)("div",{class:`ifx-multiselect-input \n          ${0===this.persistentSelectedOptions.length?"placeholder":""}\n          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:this.placeholder),this.dropdownOpen&&(0,n.h)("div",{class:"ifx-multiselect-dropdown-menu",onScroll:t=>this.handleScroll(t),style:{"--dynamic-z-index":this.zIndex.toString()}},this.searchEnabled&&(0,n.h)("input",{type:"text",role:"textbox",class:"search-input",onInput:t=>this.handleSearch(t.target),placeholder:"Search..."}),this.filteredOptions.map((t,i)=>this.renderOption(t,i)),this.isLoading&&(0,n.h)("div",null,"Loading more options...")),(0,n.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,n.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,n.h)("ifx-icon",{icon:"cremove24"})),(0,n.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,n.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,n.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,n.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.internalError?(0,n.h)("div",{class:"ifx-error-message-wrapper"},(0,n.h)("span",null,this.errorMessage)):null)}get el(){return(0,n.g)(this)}static get watchers(){return{error:["updateInternalError"],loadedOptions:["loadedOptionsChanged"]}}};p.globalZIndex=1,p.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.ifx-multiselect-container{position:relative;box-sizing:border-box;font-family:var(--ifx-font-family)}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:1rem;line-height:1.5rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:0.75rem;line-height:1rem;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{background-color:#FFFFFF;box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;width:100%;font-weight:400;font-style:normal}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{height:36px;padding:8px 12px;font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{height:40px;padding:8px 16px;font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active){outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:2px}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#575352}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border-color:#0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center;padding-left:8px}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:8px;display:flex}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;margin-top:2px;background-color:#fff;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input{width:100%;padding:8px 16px;font-size:1rem;line-height:1.5rem;font-style:normal;font-weight:400;box-sizing:border-box;background-color:#FFFFFF;border:none;border-bottom:1px solid #8D8786}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input:focus{outline:none;border:1px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-dropdown-menu .search-input::placeholder{color:#999}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{font-size:0.875rem;line-height:1.25rem}.ifx-multiselect-container .option.medium-select{font-size:1rem;line-height:1.5rem}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}';const u=class{constructor(e){(0,n.r)(this,e),this.ifxInput=(0,n.c)(this,"ifxInput",7),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}reset(){var e=this;return(0,c.A)(function*(){e.value="",e.inputElement.value=""})()}handleInput(){this.value=this.inputElement.value,this.ifxInput.emit(this.value)}render(){return(0,n.h)("div",{key:"cb006415d14d0029421dc88c7501c5bc4bd4c6ab","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container "+(this.disabled?"disabled":"")},(0,n.h)("div",{key:"348a4abf93bc7d3b2fbc1df89896ef767ec902ca",class:"textInput__top-wrapper"},(0,n.h)("label",{key:"653a842a3ff59b38706f18f19a4a6cae7b92cb91",htmlFor:"text-field"},(0,n.h)("slot",{key:"e366023e836862bf223d0d15ac3afde3db6e9dbb"}),this.optional&&this.required?(0,n.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,n.h)("span",{class:"optional"},"(optional)"):this.required?(0,n.h)("span",{class:"required"},"*"):null)),(0,n.h)("div",{key:"21381e62f8fc0583657d9dffb0136b394e5d6943",class:"textInput__bottom-wrapper"},(0,n.h)("div",{key:"5070956652f2d089acfa9c81da9f96caa0c9f356",class:"input-container"},this.icon&&(0,n.h)("ifx-icon",{icon:this.icon}),(0,n.h)("input",{key:"93aa4efc098da9ed4e64bdc18446d7a212c773ac",ref:e=>this.inputElement=e,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`})),this.caption&&!this.error&&(0,n.h)("div",{class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,n.h)("div",{class:"textInput__bottom-wrapper-caption error"},this.caption)))}get el(){return(0,n.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};u.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}'}}]);