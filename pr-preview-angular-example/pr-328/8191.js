"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[8191],{8191:(u,p,d)=>{d.r(p),d.d(p,{ifx_multiselect:()=>a});var r=d(2669);const a=class{constructor(e){(0,r.r)(this,e),this.ifxSelect=(0,r.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,r.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleDocumentClick=i=>{i.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=!1,this.maxItemCount=10,this.zIndex=1}handleOptionsChange(){if("string"==typeof this.options)try{this.listOfOptions=JSON.parse(this.options)}catch(i){console.error("Failed to parse options:",i)}else Array.isArray(this.options)||"object"==typeof this.options?this.listOfOptions=this.options:console.error("Unexpected value for options:",this.options);const e=this.listOfOptions.filter(i=>i.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...e]}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.handleOptionsChange()}handleOptionClick(e){if(this.persistentSelectedOptions.length>=this.maxItemCount&&!this.persistentSelectedOptions.some(t=>t.value===e.value))return void console.error("Max item count reached");const i=this.persistentSelectedOptions.some(t=>t.value===e.value);if(e.children&&e.children.length>0)this.persistentSelectedOptions=i?this.persistentSelectedOptions.filter(t=>t.value!==e.value&&!e.children.some(n=>n.value===t.value)):[...this.persistentSelectedOptions,e,...e.children];else{i?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(n=>n.value!==e.value):this.persistentSelectedOptions.push(e);const t=this.listOfOptions.find(n=>n.children&&n.children.some(s=>s.value===e.value));if(t){const n=t.children.every(o=>this.persistentSelectedOptions.some(c=>c.value===o.value));t.children.some(o=>this.persistentSelectedOptions.some(c=>c.value===o.value)),n?this.persistentSelectedOptions.some(o=>o.value===t.value)||this.persistentSelectedOptions.push(t):this.persistentSelectedOptions=this.persistentSelectedOptions.filter(o=>o.value!==t.value)}}this.listOfOptions=this.listOfOptions.map(t=>{if(t.value===e.value)return Object.assign(Object.assign({},t),{selected:!i});if(t.children){const n=this.persistentSelectedOptions.includes(t);return t.children=t.children.map(s=>s.value===e.value||n?Object.assign(Object.assign({},s),{selected:!0}):s),Object.assign(Object.assign({},t),{children:t.children})}return t}),this.persistentSelectedOptions=this.persistentSelectedOptions.map(t=>{const n=this.listOfOptions.find(s=>s.value===t.value)||this.listOfOptions.flatMap(s=>s.children||[]).find(s=>s.value===t.value);return n?Object.assign(Object.assign({},t),{selected:n.selected}):t});const l=this.persistentSelectedOptions.map(t=>{const n=this.listOfOptions.find(s=>s.children&&s.children.some(o=>o.value===t.value));return n&&this.persistentSelectedOptions.some(s=>s.value===n.value)?Object.assign(Object.assign({},t),{selected:!0}):t}).filter(t=>{const n=this.listOfOptions.find(s=>s.children&&s.children.some(o=>o.value===t.value));return!(n&&this.persistentSelectedOptions.some(s=>s.value===n.value))});this.ifxSelect.emit(l)}getSizeClass(){return"small (36px)"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=a.globalZIndex++}waitForElement(e,i,l=50){let t=0;!function n(){requestAnimationFrame(()=>{const s=e();s.length>0||t>l?i(s):(t++,n())})}()}handleKeyDown(e){if(this.disabled)return;const i=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(i):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),l=>{this.updateHighlightedOption(l)}));break;case"ArrowDown":this.handleArrowDown(i),this.dropdownOpen&&this.updateHighlightedOption(i);break;case"ArrowUp":this.handleArrowUp(i),this.dropdownOpen&&this.updateHighlightedOption(i)}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map(e=>Object.assign(Object.assign({},e),{selected:!1})),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){const e=this.el.shadowRoot.querySelector(".dropdown-menu"),i=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper");if(!e||!i)return;const l=e.getBoundingClientRect(),t=i.getBoundingClientRect(),n=t.top,s=window.innerHeight-t.bottom;i.classList.remove("is-flipped"),n>s&&l.height>s&&i.classList.add("is-flipped")}updateHighlightedOption(e){e.forEach(i=>i.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const i=this.dropdownElement.querySelector(".option.selected");i&&i.classList.remove("selected");const l=e[this.currentIndex];l.classList.add("selected");const t=l.getAttribute("data-value"),n="string"==typeof this.options?JSON.parse(this.options).map(o=>({value:o.value,label:o.label,children:o.children,selected:o.selected})):this.options.map(o=>Object.assign({},o)),s=this.findInOptions(n,t);this.handleOptionClick(s)}renderOption(e,i){const l=this.persistentSelectedOptions.some(o=>o.value===e.value),t=!l&&this.persistentSelectedOptions.length>=this.maxItemCount,n=`checkbox-${e.value}-${i}`,s=this.isOptionIndeterminate(e);return(0,r.h)("div",null,(0,r.h)("div",{class:`option ${l?"selected":""} \n        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!t&&this.handleOptionClick(e),tabindex:"0",role:`${e.children}?.length > 0 ? "option" : "treeitem"`},(0,r.h)("ifx-checkbox",{id:n,value:l,indeterminate:s,disabled:t}),(0,r.h)("label",{htmlFor:n},e.label)),e.children&&e.children.map((o,c)=>this.renderSubOption(o,`${i}-${c}`)))}isOptionIndeterminate(e){if(!e.children)return!1;const i=e.children.filter(l=>this.persistentSelectedOptions.some(t=>t.value===l.value)).length;return i>0&&i<e.children.length}findInOptions(e,i){for(const l of e){if(l.value===i)return l;if(l.children){const t=this.findInOptions(l.children,i);if(t)return t}}return null}renderSubOption(e,i){const l=this.persistentSelectedOptions.some(n=>n.value===e.value),t=`checkbox-${e.value}-${i}`;return(0,r.h)("div",{class:`option sub-option ${l?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:`${e.children}?.length > 0 ? "option" : "treeitem"`,onClick:()=>this.handleOptionClick(e),tabindex:"0"},(0,r.h)("ifx-checkbox",{id:t,value:l}),(0,r.h)("label",{htmlFor:t},e.label))}render(){const e=this.persistentSelectedOptions.map(i=>i.label).join(", ");return(0,r.h)("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,ref:i=>this.dropdownElement=i},this.label?(0,r.h)("div",{class:"ifx-label-wrapper"},(0,r.h)("span",null,this.label)):null,(0,r.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.error?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:i=>this.handleWrapperClick(i),onKeyDown:i=>this.handleKeyDown(i)},(0,r.h)("div",{class:"ifx-multiselect-input",onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:"Placeholder"),this.dropdownOpen&&(0,r.h)("div",{class:"ifx-multiselect-dropdown-menu",style:{"--dynamic-z-index":this.zIndex.toString()}},this.listOfOptions.map((i,l)=>this.renderOption(i,l))),(0,r.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,r.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,r.h)("ifx-icon",{key:"icon-clear",icon:"deletex16"})),(0,r.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,r.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,r.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,r.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?(0,r.h)("div",{class:"ifx-error-message-wrapper"},(0,r.h)("span",null,this.errorMessage)):null)}get el(){return(0,r.g)(this)}static get watchers(){return{options:["handleOptionsChange"]}}};a.globalZIndex=1,a.style='.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:block}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:block}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:10px}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}'}}]);