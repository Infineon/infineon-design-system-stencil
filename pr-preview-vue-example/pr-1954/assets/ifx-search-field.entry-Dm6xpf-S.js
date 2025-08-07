import{r as c,c as h,h as n,g as u}from"./index-B_T6NcWZ.js";import{d as p,t as f}from"./framework-detection-1487baf5-BMsXG9Ok.js";import{i as x}from"./dom-utils-1988cdf1-CZY0_Num.js";import{c as g}from"./index-72ac5051-B1g_EHyb.js";const y=`:root {
  --ifx-font-family: "Source Sans 3", "Arial, sans-serif";
}

:host {
  display: flex;
}

.search-field {
  box-sizing: border-box;
  background-color: #FFFFFF;
  width: 100%;
  font-family: var(--ifx-font-family);
  position: relative;
}
.search-field .search-field__wrapper {
  box-sizing: border-box;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #8D8786;
  border-radius: 1px;
  padding: 8px 16px;
  gap: 12px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  position: relative;
  width: 100%;
  outline: none;
  color: #8D8786;
}
.search-field .search-field__wrapper.focused {
  border: 1px solid #0A8276;
}
.search-field .search-field__wrapper.focused ifx-icon {
  color: #575352;
}
.search-field .search-field__wrapper.search-field__wrapper-s {
  height: 36px;
}
.search-field .search-field__wrapper:hover:not(.focused, :focus) {
  border: 1px solid #3C3A39;
}
.search-field .search-field__wrapper:focus {
  outline: none;
  border: 1px solid #0A8276;
}
.search-field .search-field__wrapper .delete-icon {
  right: 12px;
  cursor: pointer;
}
.search-field .search-field__wrapper input[type=text] {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #8D8786;
  border: none;
  width: 100%;
  outline: none;
  height: 16px;
}
.search-field .search-field__wrapper input[type=text]:focus {
  outline: none;
  color: #1d1d1d;
}
.search-field .search-field__wrapper input[type=text]:disabled {
  background-color: #EEEDED;
}
.search-field .search-field__wrapper:has(input[disabled]) {
  background-color: #EEEDED;
}
.search-field .suggestions-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #FFFFFF;
  margin-top: 4px;
  border: 1px solid #EEEDED;
  box-shadow: 0px 6px 9px 0px rgba(29, 29, 29, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  container-type: inline-size;
}
.search-field .suggestions-dropdown .suggestions-header {
  font-family: Source Sans 3;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #575352;
  border-bottom: 1px solid #EEEDED;
  padding: 12px 16px;
}
.search-field .suggestions-dropdown .suggestion-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.search-field .suggestions-dropdown .suggestion-item:last-child {
  border-bottom: none;
}
.search-field .suggestions-dropdown .suggestion-item:hover, .search-field .suggestions-dropdown .suggestion-item--selected {
  background-color: #EEEDED;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-icon {
  color: #575352;
  flex-shrink: 0;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-icon--history {
  color: #575352;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-text {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-text .suggestion-main-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-text .suggestion-scope {
  color: #8D8786;
  flex-shrink: 0;
  white-space: nowrap;
  margin-left: 2px;
  font-weight: 600;
  font-size: 0.75rem;
}
@container (max-width: 320px) {
  .search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-text {
    flex-direction: column;
    align-items: flex-start;
  }
  .search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-text .suggestion-main-text {
    width: 100%;
    max-width: 100%;
  }
  .search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-text .suggestion-scope {
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  }
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-count {
  color: #8D8786;
  margin-left: auto;
  flex-shrink: 0;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-delete-icon {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
  color: #575352;
}
.search-field .suggestions-dropdown .suggestion-item .suggestion-content .suggestion-delete-icon:hover {
  color: #3C3A39;
}
.search-field .suggestions-dropdown .suggestion-item:hover .suggestion-delete-icon {
  opacity: 1;
  visibility: visible;
}
.search-field .search-field__wrapper.dropdown-open {
  border-radius: 1px 1px 0 0;
  border-color: #0A8276;
}`,w=y,m=class{constructor(e){c(this,e),this.ifxInput=h(this,"ifxInput",7),this.ifxSuggestionRequested=h(this,"ifxSuggestionRequested",7),this.ifxSuggestionSelected=h(this,"ifxSuggestionSelected",7),this.ifxFocus=h(this,"ifxFocus",7),this.ifxBlur=h(this,"ifxBlur",7),this.value="",this.suggestions=[],this.showSuggestions=!1,this.maxSuggestions=10,this.maxHistoryItems=5,this.enableHistory=!0,this.historyKey="ifx-search-history",this.historyHeaderText="Recent Searches",this.ariaLabel="Search Field",this.deleteIconAriaLabel="Clear search",this.historyDeleteAriaLabel="Remove from history",this.dropdownAriaLabel="Search suggestions and history",this.suggestionAriaLabel="Search suggestion",this.historyItemAriaLabel="Search history item",this.showDropdown=!1,this.filteredSuggestions=[],this.selectedSuggestionIndex=-1,this.searchHistory=[],this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1,this.placeholder="Search...",this.autocomplete="off",this.maxlength=null,this.focusEmitted=!1,this.handleInput=()=>{const t=this.inputElement.value;this.value=t,this.ifxInput.emit(this.value),this.showSuggestions&&(this.showDropdown=!0,this.selectedSuggestionIndex=-1,this.requestSuggestions(t))},this.handleDelete=()=>{this.inputElement.value="",this.value="",this.ifxInput.emit(this.value),this.hideDropdown()},this.handleSearch=()=>{this.value.trim()&&this.enableHistory&&this.filteredSuggestions.length>0&&this.addToHistory(this.value),this.hideDropdown()},this.handleHistoryDelete=(t,i)=>{t.stopPropagation(),this.removeFromHistory(i)}}handleOutsideClick(e){const t=e.composedPath();!t.includes(this.inputElement)&&!t.includes(this.dropdownElement)&&this.hideDropdown()}handleKeyDown(e){if(this.showDropdown)switch(e.key){case"ArrowDown":e.preventDefault(),this.navigateSuggestions(1);break;case"ArrowUp":e.preventDefault(),this.navigateSuggestions(-1);break;case"Enter":e.preventDefault(),this.selectedSuggestionIndex>=0?this.selectSuggestion(this.filteredSuggestions[this.selectedSuggestionIndex]):this.handleSearch();break;case"Escape":this.hideDropdown();break}}valueWatcher(e){this.inputElement&&e!==this.inputElement.value&&(this.inputElement.value=e),this.updateSuggestions()}suggestionsWatcher(){this.updateSuggestions()}focusInput(){document.activeElement!==this.inputElement&&this.inputElement.focus(),this.focusEmitted||(this.focusEmitted=!0,this.isFocused=!0,this.ifxFocus.emit()),this.showSuggestions&&(this.value.length===0?(this.showHistoryDropdown(),this.showDropdown=this.enableHistory&&this.searchHistory.length>0):(this.updateSuggestions(),this.showDropdown=this.filteredSuggestions.length>0))}blurInput(){setTimeout(()=>{this.isFocused=!1,this.focusEmitted=!1,this.ifxBlur.emit()},150)}loadSearchHistory(){if(this.enableHistory&&typeof localStorage<"u"){const e=localStorage.getItem(this.historyKey);this.searchHistory=e?JSON.parse(e):[],this.updateSuggestions(),this.value.length===0&&this.searchHistory.length===0&&(this.showDropdown=!1)}}clearSearchHistory(){this.enableHistory&&typeof localStorage<"u"&&(localStorage.removeItem(this.historyKey),this.searchHistory=[],this.filteredSuggestions=[],this.selectedSuggestionIndex=-1,this.showDropdown=!1,this.updateSuggestions())}addToHistory(e){if(!this.enableHistory||!e.trim())return;const t=[...this.searchHistory],i=t.indexOf(e);i>-1&&t.splice(i,1),t.unshift(e),this.searchHistory=t.slice(0,this.maxHistoryItems),typeof localStorage<"u"&&localStorage.setItem(this.historyKey,JSON.stringify(this.searchHistory))}removeFromHistory(e){if(!this.enableHistory)return;const t=[...this.searchHistory],i=t.indexOf(e);i>-1&&(t.splice(i,1),this.searchHistory=t,typeof localStorage<"u"&&localStorage.setItem(this.historyKey,JSON.stringify(this.searchHistory)),this.updateSuggestions(),this.searchHistory.length===0&&this.value.length===0&&(this.showDropdown=!1))}requestSuggestions(e){this.ifxSuggestionRequested.emit(e),this.updateSuggestions()}updateSuggestions(){const e=this.value.toLowerCase();let t=[];if(e.length>0){if(this.suggestions&&this.suggestions.length>0){const o=this.suggestions.filter(s=>s.text.toLowerCase().includes(e));t=[...t,...o]}if(this.enableHistory&&this.searchHistory.length>0){const o=this.searchHistory.filter(s=>s.toLowerCase().includes(e)).map((s,r)=>({id:`history-${r}`,text:s,type:"history"}));t=[...t,...o]}t.sort((o,s)=>{const r=o.text.toLowerCase(),a=s.text.toLowerCase();if(r===e&&a!==e)return-1;if(a===e&&r!==e)return 1;const l=r.startsWith(e),d=a.startsWith(e);return l&&!d?-1:d&&!l?1:o.type==="suggestion"&&s.type==="history"?-1:o.type==="history"&&s.type==="suggestion"?1:r.localeCompare(a)})}else this.enableHistory&&this.searchHistory.length>0&&(t=this.searchHistory.map((s,r)=>({id:`history-${r}`,text:s,type:"history"})));const i=t.reduce((o,s)=>{const r=o.findIndex(a=>a.text.toLowerCase()===s.text.toLowerCase()&&a.scope===s.scope);return r===-1?o.push(s):s.type==="history"&&o[r].type!=="history"&&(o[r]=s),o},[]);this.filteredSuggestions=i.slice(0,this.maxSuggestions),this.selectedSuggestionIndex=-1}navigateSuggestions(e){const t=this.filteredSuggestions.length-1;e>0?this.selectedSuggestionIndex=this.selectedSuggestionIndex<t?this.selectedSuggestionIndex+1:0:this.selectedSuggestionIndex=this.selectedSuggestionIndex>0?this.selectedSuggestionIndex-1:t}selectSuggestion(e){this.value=e.text,this.inputElement.value=e.text,this.ifxSuggestionSelected.emit(e),this.ifxInput.emit(this.value),this.enableHistory&&this.addToHistory(e.text),this.hideDropdown()}hideDropdown(){this.showDropdown=!1,this.selectedSuggestionIndex=-1,this.isFocused=!1}showHistoryDropdown(){if(this.enableHistory&&this.searchHistory.length>0){const e=this.searchHistory.map((t,i)=>({id:`history-${i}`,text:t,type:"history"}));this.filteredSuggestions=e.slice(0,this.maxSuggestions),this.selectedSuggestionIndex=-1}else this.filteredSuggestions=[]}isShowingOnlyHistory(){return this.value.length===0&&this.filteredSuggestions.length>0&&this.filteredSuggestions.every(e=>e.type==="history")}renderHighlightedText(e,t){if(!t||t.length===0)return e;const i=e.toLowerCase(),o=t.toLowerCase(),s=i.indexOf(o);if(s===-1)return e;const r=e.substring(0,s),a=e.substring(s,s+t.length),l=e.substring(s+t.length);return[r,n("strong",null,a),l]}componentWillLoad(){if(this.loadSearchHistory(),!x(this.el)){const e=p();f("ifx-search-field",e)}}componentWillUpdate(){this.value!==""?this.showDeleteIconInternalState=!0:this.showDeleteIconInternalState=!1}render(){return n("div",{key:"2a1b51b6eb3b7d4ffe0ec60cbfc34038fcc5023b","aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-describedby":this.ariaDescribedBy,"aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},n("div",{key:"b1aed4877badbfdbfd5bc01258961d2572bcd9ce",class:this.getWrapperClassNames(),tabindex:1,onClick:()=>this.focusInput()},n("ifx-icon",{key:"f8d4f8d3c142e6361e5a55e447b49d334bc021ba",icon:"search-16",class:"search-icon"}),n("input",{key:"2d59ad0f7e4f391d8840cb4a078b416057b2e201",ref:e=>this.inputElement=e,type:"text",autocomplete:this.autocomplete,onInput:()=>this.handleInput(),onFocus:()=>this.focusInput(),onBlur:()=>this.blurInput(),placeholder:this.placeholder,disabled:this.disabled,maxlength:this.maxlength,value:this.value,role:"combobox","aria-expanded":this.showDropdown,"aria-autocomplete":"list","aria-haspopup":"listbox","aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-describedby":this.ariaDescribedBy,"aria-owns":this.showDropdown?"suggestions-dropdown":void 0,"aria-activedescendant":this.selectedSuggestionIndex>=0?`suggestion-${this.selectedSuggestionIndex}`:void 0}),this.showDeleteIcon&&this.showDeleteIconInternalState?n("ifx-icon",{icon:"cRemove16",class:"delete-icon",onClick:this.handleDelete,role:"button",tabindex:"0","aria-label":this.deleteIconAriaLabel,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.handleDelete())}}):null),this.showDropdown&&this.filteredSuggestions.length>0&&n("div",{key:"48e5cd8ba78377be546bc2a257cae37d6f77373a",ref:e=>this.dropdownElement=e,id:"suggestions-dropdown",class:"suggestions-dropdown",role:"listbox","aria-label":this.dropdownAriaLabel},this.isShowingOnlyHistory()&&n("div",{key:"5c6a79f03adde2a07249982d8949a53e77633313",class:"suggestions-header"},this.historyHeaderText),this.filteredSuggestions.map((e,t)=>n("div",{key:e.id,id:`suggestion-${t}`,class:this.getSuggestionClassNames(t),role:"option","aria-selected":t===this.selectedSuggestionIndex,"aria-label":`${e.type==="history"?this.historyItemAriaLabel:this.suggestionAriaLabel}: ${e.text}${e.scope?`, ${e.scope}`:""}${e.resultCount?`, ${e.resultCount} results`:""}`,onClick:()=>this.selectSuggestion(e),onMouseEnter:()=>this.selectedSuggestionIndex=t},n("div",{class:"suggestion-content"},e.type==="history"&&n("ifx-icon",{icon:"history-16",class:"suggestion-icon suggestion-icon--history"}),e.type==="suggestion"&&n("ifx-icon",{icon:"search-16",class:"suggestion-icon suggestion-icon--suggestion"}),n("span",{class:"suggestion-text"},n("span",{class:"suggestion-main-text"},this.renderHighlightedText(e.text,this.value)),e.scope&&n("span",{class:"suggestion-scope"},"– ",e.scope)),e.resultCount!==void 0&&e.scope&&n("span",{class:"suggestion-count"},e.resultCount),e.type==="history"&&n("ifx-icon",{icon:"cross16",class:"suggestion-delete-icon",role:"button",tabindex:"0","aria-label":`${this.historyDeleteAriaLabel}: ${e.text}`,onClick:i=>this.handleHistoryDelete(i,e.text),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleHistoryDelete(i,e.text))}}))))))}getSizeClass(){return`${this.size}`=="s"?"search-field__wrapper-s":""}getWrapperClassNames(){return g("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,`${this.isFocused?"focused":""}`,`${this.showDropdown?"dropdown-open":""}`)}getSuggestionClassNames(e){var t;return g("suggestion-item",{"suggestion-item--selected":e===this.selectedSuggestionIndex,"suggestion-item--history":((t=this.filteredSuggestions[e])===null||t===void 0?void 0:t.type)==="history"})}get el(){return u(this)}static get watchers(){return{value:["valueWatcher"],suggestions:["suggestionsWatcher"]}}};m.style=w;export{m as ifx_search_field};
