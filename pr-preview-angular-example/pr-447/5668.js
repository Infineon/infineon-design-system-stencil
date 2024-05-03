"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[5668],{5668:(w,p,h)=>{h.r(p),h.d(p,{ifx_checkbox:()=>u,ifx_icon:()=>f,ifx_multiselect:()=>d});var s=h(2669),x=h(1938);const u=class{constructor(e){(0,s.r)(this,e),this.ifxChange=(0,s.c)(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.name="",this.internalValue=void 0,this.indeterminate=!1}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalValue=!0,this.indeterminate=!1):this.internalValue=!this.internalValue,this.ifxChange.emit(this.el))}valueChanged(e,t){e!==t&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}handleKeydown(e){(32===e.keyCode||13===e.keyCode)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalValue=this.value}componentDidRender(){this.inputElement.indeterminate=this.indeterminate}render(){let t=!1;return this.el.innerHTML&&(t=!0),(0,s.h)("div",{class:"checkbox__container"},(0,s.h)("input",{type:"checkbox",hidden:!0,ref:n=>this.inputElement=n,name:this.name,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.internalValue}`}),(0,s.h)("div",{tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper \n        ${this.internalValue?"checked":""} \n        ${this.indeterminate?"indeterminate":""}\n        ${this.disabled?"disabled":""}\n        ${this.error?"error":""}`},this.internalValue&&(0,s.h)("ifx-icon",{icon:"check-12"})),t&&(0,s.h)("div",{id:"label",class:`label ${this.error?"error":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},(0,s.h)("slot",null)))}get el(){return(0,s.g)(this)}static get watchers(){return{value:["valueChanged"]}}};u.style=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.checkbox__container .checkbox__wrapper{display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{width:25px;height:20px;font-style:normal;font-weight:400;font-size:0.813rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .label.error{color:#CD002F}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}';const f=class{constructor(e){(0,s.r)(this,e),this.consoleError=(0,s.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(e){const t=document.createElement("div");return t.innerHTML=e,t.firstChild}convertHtmlToObject(e){return Array.from(e.attributes,({name:n,value:o})=>({name:n,value:o})).reduce((n,o)=>(n[o.name]=o.value,n),{})}convertPathsToVnode(e){let t=[];const n=this.convertHtmlToObject(e),o=(0,s.h)("path",n);if(t.push(o),e.firstChild){const i=e.querySelectorAll("path"),r=e.querySelectorAll("path").length;for(let l=0;l<r;l++){let c=this.convertHtmlToObject(i[l]),a=(0,s.h)("path",c);t.push(a)}}return t}getSVG(e){return(0,s.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...e)}constructIcon(){if(this.ifxIcon){const e=this.convertStringToHtml(this.ifxIcon.svgContent),t=this.convertPathsToVnode(e),n=this.getSVG(t);return this.consoleError.emit(!1),n}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,x.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(n,o)=>o))}render(){return(0,s.h)(s.a,null,this.constructIcon())}};f.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}";const d=class{constructor(e){(0,s.r)(this,e),this.ifxSelect=(0,s.c)(this,"ifxSelect",7),this.ifxMultiselectIsOpen=(0,s.c)(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleDocumentClick=t=>{t.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1}handleOptionsChange(){if("string"==typeof this.options)try{this.listOfOptions=JSON.parse(this.options)}catch(t){console.error("Failed to parse options:",t)}else Array.isArray(this.options)||"object"==typeof this.options?this.listOfOptions=this.options:console.error("Unexpected value for options:",this.options);const e=this.listOfOptions.filter(t=>t.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...e]}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.handleOptionsChange()}handleOptionClick(e){if(this.error=!1,this.maxItemCount&&this.persistentSelectedOptions.length+(e.children?e.children.length:1)>this.maxItemCount&&!this.persistentSelectedOptions.some(i=>i.value===e.value))return console.error("Max item count reached"),this.error=!0,void(this.errorMessage="Please consider the maximum number of items to choose from");const n=this.persistentSelectedOptions.some(i=>i.value===e.value);if(e.children&&e.children.length>0)this.persistentSelectedOptions=n?this.persistentSelectedOptions.filter(i=>i.value!==e.value&&!e.children.some(r=>r.value===i.value)):[...this.persistentSelectedOptions,e,...e.children];else{n?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(r=>r.value!==e.value):this.persistentSelectedOptions.push(e);const i=this.listOfOptions.find(r=>r.children&&r.children.some(l=>l.value===e.value));if(i){const r=i.children.every(c=>this.persistentSelectedOptions.some(a=>a.value===c.value));i.children.some(c=>this.persistentSelectedOptions.some(a=>a.value===c.value)),r?this.persistentSelectedOptions.some(c=>c.value===i.value)||this.persistentSelectedOptions.push(i):this.persistentSelectedOptions=this.persistentSelectedOptions.filter(c=>c.value!==i.value)}}this.listOfOptions=this.listOfOptions.map(i=>{if(i.value===e.value)return Object.assign(Object.assign({},i),{selected:!n});if(i.children){const r=this.persistentSelectedOptions.includes(i);return i.children=i.children.map(l=>l.value===e.value||r?Object.assign(Object.assign({},l),{selected:!0}):l),Object.assign(Object.assign({},i),{children:i.children})}return i}),this.persistentSelectedOptions=this.persistentSelectedOptions.map(i=>{const r=this.listOfOptions.find(l=>l.value===i.value)||this.listOfOptions.flatMap(l=>l.children||[]).find(l=>l.value===i.value);return r?Object.assign(Object.assign({},i),{selected:r.selected}):i});const o=this.persistentSelectedOptions.map(i=>{const r=this.listOfOptions.find(l=>l.children&&l.children.some(c=>c.value===i.value));return r&&this.persistentSelectedOptions.some(l=>l.value===r.value)?Object.assign(Object.assign({},i),{selected:!0}):i}).filter(i=>{const r=this.listOfOptions.find(l=>l.children&&l.children.some(c=>c.value===i.value));return!(r&&this.persistentSelectedOptions.some(l=>l.value===r.value))});this.ifxSelect.emit(o)}getSizeClass(){return"s"==`${this.size}`?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=d.globalZIndex++}waitForElement(e,t,n=50){let o=0;!function i(){requestAnimationFrame(()=>{const r=e();r.length>0||o>n?t(r):(o++,i())})}()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(t):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),n=>{this.updateHighlightedOption(n)}));break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t)}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map(e=>Object.assign(Object.assign({},e),{selected:!1})),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=null===(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))||void 0===e?void 0:e.getBoundingClientRect(),n=window.innerHeight-t.bottom;this.dropdownFlipped=t.top>n&&t.height>n||t.bottom>window.innerHeight}updateHighlightedOption(e){e.forEach(t=>t.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const t=this.dropdownElement.querySelector(".option.selected");t&&t.classList.remove("selected");const n=e[this.currentIndex];n.classList.add("selected");const o=n.getAttribute("data-value"),i="string"==typeof this.options?JSON.parse(this.options).map(l=>({value:l.value,label:l.label,children:l.children,selected:l.selected})):this.options.map(l=>Object.assign({},l)),r=this.findInOptions(i,o);this.handleOptionClick(r)}renderOption(e,t){var n;const o=this.persistentSelectedOptions.some(c=>c.value===e.value),i=!o&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,r=`checkbox-${e.value}-${t}`,l=this.isOptionIndeterminate(e);return(0,s.h)("div",null,(0,s.h)("div",{class:`option ${o?"selected":""} \n        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!i&&this.handleOptionClick(e),tabindex:"0",role:(null===(n=e.children)||void 0===n?void 0:n.length)>0?"treeitem":"option"},(0,s.h)("ifx-checkbox",{id:r,value:o,indeterminate:l,disabled:i}),(0,s.h)("label",{htmlFor:r},e.label)),e.children&&e.children.map((c,a)=>this.renderSubOption(c,`${t}-${a}`)))}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter(n=>this.persistentSelectedOptions.some(o=>o.value===n.value)).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const n of e){if(n.value===t)return n;if(n.children){const o=this.findInOptions(n.children,t);if(o)return o}}return null}renderSubOption(e,t){var n;const o=this.persistentSelectedOptions.some(l=>l.value===e.value),i=!o&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,r=`checkbox-${e.value}-${t}`;return(0,s.h)("div",{class:`option sub-option ${o?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:(null===(n=e.children)||void 0===n?void 0:n.length)>0?"option":"treeitem",onClick:()=>!i&&this.handleOptionClick(e),tabindex:"0"},(0,s.h)("ifx-checkbox",{id:r,value:o,disabled:i}),(0,s.h)("label",{htmlFor:r},e.label))}render(){const e=this.persistentSelectedOptions.map(t=>t.label).join(", ");return(0,s.h)("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,ref:t=>this.dropdownElement=t},this.label?(0,s.h)("div",{class:"ifx-label-wrapper"},(0,s.h)("span",null,this.label)):null,(0,s.h)("div",{class:`ifx-multiselect-wrapper \n        ${this.getSizeClass()} \n        ${this.dropdownOpen?"active":""} \n        ${this.dropdownFlipped?"is-flipped":""}\n        ${this.error?"error":""}\n        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:t=>this.handleWrapperClick(t),onKeyDown:t=>this.handleKeyDown(t)},(0,s.h)("div",{class:`ifx-multiselect-input \n          ${0===this.persistentSelectedOptions.length?"placeholder":""}\n          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:"Placeholder"),this.dropdownOpen&&(0,s.h)("div",{class:"ifx-multiselect-dropdown-menu",style:{"--dynamic-z-index":this.zIndex.toString()}},this.listOfOptions.map((t,n)=>this.renderOption(t,n))),(0,s.h)("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&(0,s.h)("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},(0,s.h)("ifx-icon",{key:"icon-clear",icon:"delete-16"})),(0,s.h)("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,s.h)("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),(0,s.h)("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},(0,s.h)("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?(0,s.h)("div",{class:"ifx-error-message-wrapper"},(0,s.h)("span",null,this.errorMessage)):null)}get el(){return(0,s.g)(this)}static get watchers(){return{options:["handleOptionsChange"]}}};d.globalZIndex=1,d.style='*{font-family:"Source Sans 3"}.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:10px}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}'}}]);