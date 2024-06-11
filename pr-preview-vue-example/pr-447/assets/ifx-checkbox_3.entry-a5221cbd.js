import{r as h,c as d,h as r,g as u,H as f}from"./index-2a30b1e7.js";import{g as x}from"./icons-cf35332f-d315bfe3.js";const m=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.checkbox__container .checkbox__wrapper{display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{width:25px;height:20px;font-style:normal;font-weight:400;font-size:0.813rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .label.error{color:#CD002F}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}',b=class{constructor(e){h(this,e),this.ifxChange=d(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.name="",this.internalValue=void 0,this.indeterminate=!1}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalValue=!0,this.indeterminate=!1):this.internalValue=!this.internalValue,this.ifxChange.emit(this.el))}valueChanged(e,t){e!==t&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalValue=this.value}componentDidRender(){this.inputElement.indeterminate=this.indeterminate}render(){const e=this.el.innerHTML;let t=!1;return e&&(t=!0),r("div",{class:"checkbox__container"},r("input",{type:"checkbox",hidden:!0,ref:n=>this.inputElement=n,name:this.name,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.internalValue}`}),r("div",{tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper 
        ${this.internalValue?"checked":""} 
        ${this.indeterminate?"indeterminate":""}
        ${this.disabled?"disabled":""}
        ${this.error?"error":""}`},this.internalValue&&r("ifx-icon",{icon:"check-12"})),t&&r("div",{id:"label",class:`label ${this.error?"error":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},r("slot",null)))}get el(){return u(this)}static get watchers(){return{value:["valueChanged"]}}};b.style=m;const g="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",w=class{constructor(e){h(this,e),this.consoleError=d(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(e){const t=document.createElement("div");return t.innerHTML=e,t.firstChild}convertHtmlToObject(e){return Array.from(e.attributes,({name:n,value:o})=>({name:n,value:o})).reduce((n,o)=>(n[o.name]=o.value,n),{})}convertPathsToVnode(e){let t=[];const n=this.convertHtmlToObject(e),o=r("path",n);if(t.push(o),e.firstChild){const i=e.querySelectorAll("path"),l=e.querySelectorAll("path").length;for(let s=0;s<l;s++){let c=this.convertHtmlToObject(i[s]),a=r("path",c);t.push(a)}}return t}getSVG(e){return r("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...e)}constructIcon(){if(this.ifxIcon){const e=this.convertStringToHtml(this.ifxIcon.svgContent),t=this.convertPathsToVnode(e),n=this.getSVG(t);return this.consoleError.emit(!1),n}else return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){const e=t=>t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(n,o)=>o);this.ifxIcon=x(e(this.icon))}render(){return r(f,null,this.constructIcon())}};w.style=g;const v='*{font-family:"Source Sans 3"}.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-input.placeholder{opacity:0.5}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:10px}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}',p=class{constructor(e){h(this,e),this.ifxSelect=d(this,"ifxSelect",7),this.ifxMultiselectIsOpen=d(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleDocumentClick=t=>{t.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=void 0,this.zIndex=1}handleOptionsChange(){if(typeof this.options=="string")try{this.listOfOptions=JSON.parse(this.options)}catch(t){console.error("Failed to parse options:",t)}else Array.isArray(this.options)||typeof this.options=="object"?this.listOfOptions=this.options:console.error("Unexpected value for options:",this.options);const e=this.listOfOptions.filter(t=>t.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...e]}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.handleOptionsChange()}handleOptionClick(e){this.error=!1;let t=e.children?e.children.length:1;if(this.maxItemCount&&this.persistentSelectedOptions.length+t>this.maxItemCount&&!this.persistentSelectedOptions.some(i=>i.value===e.value)){console.error("Max item count reached"),this.error=!0,this.errorMessage="Please consider the maximum number of items to choose from";return}const n=this.persistentSelectedOptions.some(i=>i.value===e.value);if(e.children&&e.children.length>0)n?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(i=>i.value!==e.value&&!e.children.some(l=>l.value===i.value)):this.persistentSelectedOptions=[...this.persistentSelectedOptions,e,...e.children];else{n?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(l=>l.value!==e.value):this.persistentSelectedOptions.push(e);const i=this.listOfOptions.find(l=>l.children&&l.children.some(s=>s.value===e.value));if(i){const l=i.children.every(c=>this.persistentSelectedOptions.some(a=>a.value===c.value)),s=i.children.some(c=>this.persistentSelectedOptions.some(a=>a.value===c.value));l?this.persistentSelectedOptions.some(c=>c.value===i.value)||this.persistentSelectedOptions.push(i):s?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(c=>c.value!==i.value):this.persistentSelectedOptions=this.persistentSelectedOptions.filter(c=>c.value!==i.value)}}this.listOfOptions=this.listOfOptions.map(i=>{if(i.value===e.value)return Object.assign(Object.assign({},i),{selected:!n});if(i.children){const l=this.persistentSelectedOptions.includes(i);return i.children=i.children.map(s=>s.value===e.value||l?Object.assign(Object.assign({},s),{selected:!0}):s),Object.assign(Object.assign({},i),{children:i.children})}return i}),this.persistentSelectedOptions=this.persistentSelectedOptions.map(i=>{const l=this.listOfOptions.find(s=>s.value===i.value)||this.listOfOptions.flatMap(s=>s.children||[]).find(s=>s.value===i.value);return l?Object.assign(Object.assign({},i),{selected:l.selected}):i});const o=this.persistentSelectedOptions.map(i=>{const l=this.listOfOptions.find(s=>s.children&&s.children.some(c=>c.value===i.value));return l&&this.persistentSelectedOptions.some(s=>s.value===l.value)?Object.assign(Object.assign({},i),{selected:!0}):i}).filter(i=>{const l=this.listOfOptions.find(s=>s.children&&s.children.some(c=>c.value===i.value));return!(l&&this.persistentSelectedOptions.some(s=>s.value===l.value))});this.ifxSelect.emit(o)}getSizeClass(){return`${this.size}`=="s"?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=p.globalZIndex++}waitForElement(e,t,n=50){let o=0;function i(){requestAnimationFrame(()=>{const l=e();l.length>0||o>n?t(l):(o++,i())})}i()}handleKeyDown(e){if(this.disabled)return;const t=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(t):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),n=>{this.updateHighlightedOption(n)}));break;case"ArrowDown":this.handleArrowDown(t),this.dropdownOpen&&this.updateHighlightedOption(t);break;case"ArrowUp":this.handleArrowUp(t),this.dropdownOpen&&this.updateHighlightedOption(t);break}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map(e=>Object.assign(Object.assign({},e),{selected:!1})),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const t=(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))===null||e===void 0?void 0:e.getBoundingClientRect(),n=window.innerHeight-t.bottom;t.top>n&&t.height>n||t.bottom>window.innerHeight?this.dropdownFlipped=!0:this.dropdownFlipped=!1}updateHighlightedOption(e){e.forEach(t=>t.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const t=this.dropdownElement.querySelector(".option.selected");t&&t.classList.remove("selected");const n=e[this.currentIndex];n.classList.add("selected");const o=n.getAttribute("data-value"),i=typeof this.options=="string"?JSON.parse(this.options).map(s=>({value:s.value,label:s.label,children:s.children,selected:s.selected})):this.options.map(s=>Object.assign({},s)),l=this.findInOptions(i,o);this.handleOptionClick(l)}renderOption(e,t){var n;const o=this.persistentSelectedOptions.some(c=>c.value===e.value),i=!o&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,l=`checkbox-${e.value}-${t}`,s=this.isOptionIndeterminate(e);return r("div",null,r("div",{class:`option ${o?"selected":""} 
        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!i&&this.handleOptionClick(e),tabindex:"0",role:`${((n=e.children)===null||n===void 0?void 0:n.length)>0?"treeitem":"option"}`},r("ifx-checkbox",{id:l,value:o,indeterminate:s,disabled:i}),r("label",{htmlFor:l},e.label)),e.children&&e.children.map((c,a)=>this.renderSubOption(c,`${t}-${a}`)))}isOptionIndeterminate(e){if(!e.children)return!1;const t=e.children.filter(n=>this.persistentSelectedOptions.some(o=>o.value===n.value)).length;return t>0&&t<e.children.length}findInOptions(e,t){for(const n of e){if(n.value===t)return n;if(n.children){const o=this.findInOptions(n.children,t);if(o)return o}}return null}renderSubOption(e,t){var n;const o=this.persistentSelectedOptions.some(s=>s.value===e.value),i=!o&&this.maxItemCount&&this.persistentSelectedOptions.length>=this.maxItemCount,l=`checkbox-${e.value}-${t}`;return r("div",{class:`option sub-option ${o?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:`${((n=e.children)===null||n===void 0?void 0:n.length)>0?"option":"treeitem"}`,onClick:()=>!i&&this.handleOptionClick(e),tabindex:"0"},r("ifx-checkbox",{id:l,value:o,disabled:i}),r("label",{htmlFor:l},e.label))}render(){const e=this.persistentSelectedOptions.map(t=>t.label).join(", ");return r("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,ref:t=>this.dropdownElement=t},this.label?r("div",{class:"ifx-label-wrapper"},r("span",null,this.label)):null,r("div",{class:`ifx-multiselect-wrapper 
        ${this.getSizeClass()} 
        ${this.dropdownOpen?"active":""} 
        ${this.dropdownFlipped?"is-flipped":""}
        ${this.error?"error":""}
        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:t=>this.handleWrapperClick(t),onKeyDown:t=>this.handleKeyDown(t)},r("div",{class:`ifx-multiselect-input 
          ${this.persistentSelectedOptions.length===0?"placeholder":""}
          `,onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:"Placeholder"),this.dropdownOpen&&r("div",{class:"ifx-multiselect-dropdown-menu",style:{"--dynamic-z-index":this.zIndex.toString()}},this.listOfOptions.map((t,n)=>this.renderOption(t,n))),r("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&r("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},r("ifx-icon",{key:"icon-clear",icon:"delete-16"})),r("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},r("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),r("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},r("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?r("div",{class:"ifx-error-message-wrapper"},r("span",null,this.errorMessage)):null)}get el(){return u(this)}static get watchers(){return{options:["handleOptionsChange"]}}};p.globalZIndex=1;p.style=v;export{b as ifx_checkbox,w as ifx_icon,p as ifx_multiselect};