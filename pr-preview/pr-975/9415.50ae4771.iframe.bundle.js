"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9415],{"./dist/esm/ifx-tabs.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_tabs:()=>IfxTabs});var _index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-38bfff87.js");const IfxTabs=class{constructor(hostRef){(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxTabChange=(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxTabChange",7),this.tabs=[],this.orientation="horizontal",this.activeTabIndex=0,this.internalOrientation=void 0,this.internalActiveTabIndex=0,this.internalFocusedTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.disabledTabs=[],this.tabObjects=[]}setActiveAndFocusedTab(index){this.internalActiveTabIndex=index,this.internalFocusedTabIndex=index}activeTabIndexChanged(newValue,oldValue){newValue!==oldValue&&this.setActiveAndFocusedTab(newValue)}componentWillLoad(){console.log("component will load"),this.internalOrientation="vertical"===this.orientation.toLowerCase()?"vertical":"horizontal",this.internalActiveTabIndex!==this.activeTabIndex&&this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:this.activeTabIndex}),this.internalFocusedTabIndex=this.internalActiveTabIndex,this.updateTabStyles(),this.onSlotChange()}updateTabStyles(){this.tabHeaderRefs.forEach(((tab,index)=>{tab.classList.toggle("active",index===this.internalActiveTabIndex),tab.setAttribute("aria-selected",index===this.internalActiveTabIndex?"true":"false")}))}reRenderBorder(){const borderElement=this.el.shadowRoot.querySelector(".active-border");borderElement&&this.tabHeaderRefs[this.internalActiveTabIndex]&&("horizontal"===this.orientation?(borderElement.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,borderElement.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,borderElement.style.top="",borderElement.style.height=""):(borderElement.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,borderElement.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,borderElement.style.left="",borderElement.style.width=""))}onSlotChange(){const tabs=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(tabs).map((tab=>({header:null==tab?void 0:tab.header,disabled:!0===(null==tab?void 0:tab.disabled)}))),this.tabRefs=Array.from(tabs),this.tabRefs.forEach(((tab,index)=>{tab.setAttribute("slot",`tab-${index}`)}))}setDefaultOrientation(){const lowercaseOrientation=this.orientation.toLowerCase();["horizontal","vertical"].includes(lowercaseOrientation)?this.internalOrientation=this.orientation:this.internalOrientation="horizontal"}componentDidLoad(){this.updateBorderAndFocus(),this.tabHeaderRefs.forEach(((tab,index)=>{tab.addEventListener("focus",this.onTabFocus(index))}))}onTabFocus(index){return()=>{this.internalFocusedTabIndex=index}}disconnectedCallback(){this.tabHeaderRefs.forEach(((tab,index)=>{tab.removeEventListener("focus",this.onTabFocus(index))}))}componentDidUpdate(){this.updateBorderAndFocus()}updateBorderAndFocus(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach(((tab,index)=>{tab.tabIndex=index===this.internalActiveTabIndex?0:-1}))}focusNextTab(){let nextIndex=this.internalFocusedTabIndex+1;for(;nextIndex<this.tabHeaderRefs.length&&this.tabObjects[nextIndex].disabled;)nextIndex++;nextIndex>=0&&nextIndex<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=nextIndex,this.tabHeaderRefs[nextIndex].focus())}focusPreviousTab(){let prevIndex=this.internalFocusedTabIndex-1;for(;prevIndex>=0&&this.tabObjects[prevIndex].disabled;)prevIndex--;prevIndex>=0&&prevIndex<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=prevIndex,this.tabHeaderRefs[prevIndex].focus())}getTabItemClass(index){return`tab-item ${index===this.internalActiveTabIndex&&!this.tabObjects[index].disabled?"active":""} ${this.tabObjects[index].disabled?"disabled":""}`}handleClick(tab,index){this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:index}),tab.disabled||(this.internalActiveTabIndex=index)}handleKeyDown(ev){if("Tab"===ev.key)if(console.log("tab ev"),ev.shiftKey){if(0===this.internalFocusedTabIndex)return;ev.preventDefault(),this.focusPreviousTab()}else{if(this.internalFocusedTabIndex===this.tabHeaderRefs.length-1)return;ev.preventDefault(),this.focusNextTab()}else if("Enter"===ev.key&&-1!==this.internalFocusedTabIndex&&!this.tabObjects[this.internalFocusedTabIndex].disabled){const previouslyActiveTabIndex=this.internalActiveTabIndex;this.internalActiveTabIndex=this.internalFocusedTabIndex,this.ifxTabChange.emit({previousTab:previouslyActiveTabIndex,currentTab:this.internalFocusedTabIndex})}}render(){var _a;return(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{role:"tablist",class:"tabs-list"},null===(_a=this.tabObjects)||void 0===_a?void 0:_a.map(((tab,index)=>(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:this.getTabItemClass(index),ref:el=>this.tabHeaderRefs[index]=el,tabindex:"0",onClick:()=>this.handleClick(tab,index),"aria-selected":index===this.internalActiveTabIndex?"true":"false","aria-disabled":tab.disabled?"true":"false",role:"tab"},null==tab?void 0:tab.header))),(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"active-border"})),(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tab-content"},Array.from(this.tabObjects).map(((_,index)=>(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:index===this.internalActiveTabIndex?"block":"none"}},(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:`tab-${index}`}))))))}get el(){return(0,_index_38bfff87_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{activeTabIndex:["activeTabIndexChanged"]}}};IfxTabs.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.tabs{display:flex;font-family:var(--ifx-font-family)}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item{padding:8px 16px;cursor:pointer;position:relative}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}'}}]);