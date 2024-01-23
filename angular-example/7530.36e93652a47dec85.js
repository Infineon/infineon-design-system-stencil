"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7530],{7530:(d,n,s)=>{s.r(n),s.d(n,{ifx_tabs:()=>r});var a=s(9279);const r=class{constructor(t){(0,a.r)(this,t),this.ifxTabChange=(0,a.c)(this,"ifxTabChange",7),this.tabs=[],this.orientation="horizontal",this.activeTabIndex=0,this.internalOrientation=void 0,this.internalActiveTabIndex=0,this.internalFocusedTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.disabledTabs=[],this.tabObjects=[]}componentWillLoad(){this.internalOrientation="vertical"===this.orientation.toLowerCase()?"vertical":"horizontal",this.internalActiveTabIndex!==this.activeTabIndex&&this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:this.activeTabIndex}),this.internalActiveTabIndex=this.activeTabIndex,this.internalFocusedTabIndex=this.internalActiveTabIndex,this.updateTabStyles(),this.onSlotChange()}updateTabStyles(){this.tabHeaderRefs.forEach((t,e)=>{t.classList.toggle("active",e===this.internalActiveTabIndex),t.setAttribute("aria-selected",e===this.internalActiveTabIndex?"true":"false")})}reRenderBorder(){const t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.internalActiveTabIndex]&&("horizontal"===this.orientation?(t.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,t.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,t.style.top="",t.style.height=""):(t.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,t.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,t.style.left="",t.style.width=""))}onSlotChange(){const t=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(t).map(e=>({header:e?.header,disabled:!0===e?.disabled})),this.tabRefs=Array.from(t),this.tabRefs.forEach((e,i)=>{e.setAttribute("slot",`tab-${i}`)})}setDefaultOrientation(){const e=this.orientation.toLowerCase();this.internalOrientation=["horizontal","vertical"].includes(e)?this.orientation:"horizontal"}componentDidLoad(){this.updateBorderAndFocus()}componentDidUpdate(){this.updateBorderAndFocus()}updateBorderAndFocus(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach((t,e)=>{t.tabIndex=e===this.internalActiveTabIndex?0:-1})}focusNextTab(){let t=this.internalFocusedTabIndex+1;for(;t<this.tabHeaderRefs.length&&this.tabObjects[t].disabled;)t++;this.internalFocusedTabIndex=t,t>=0&&t<this.tabHeaderRefs.length&&this.tabHeaderRefs[t].focus()}focusPreviousTab(){let t=this.internalFocusedTabIndex-1;for(;t>=0&&this.tabObjects[t].disabled;)t--;this.internalFocusedTabIndex=t,t>=0&&t<this.tabHeaderRefs.length&&this.tabHeaderRefs[t].focus()}getTabItemClass(t){return`tab-item ${t!==this.internalActiveTabIndex||this.tabObjects[t].disabled?"":"active"} ${this.tabObjects[t].disabled?"disabled":""}`}handleClick(t,e){this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:e}),t.disabled||(this.internalActiveTabIndex=e)}handleKeyDown(t){if("Tab"===t.key)if(t.shiftKey){if(0===this.internalFocusedTabIndex)return;t.preventDefault(),this.focusPreviousTab()}else{if(this.internalFocusedTabIndex===this.tabHeaderRefs.length-1)return;t.preventDefault(),this.focusNextTab()}else if("Enter"===t.key&&-1!==this.internalFocusedTabIndex&&!this.tabObjects[this.internalFocusedTabIndex].disabled){const e=this.internalActiveTabIndex;this.internalActiveTabIndex=this.internalFocusedTabIndex,this.ifxTabChange.emit({previousTab:e,currentTab:this.internalFocusedTabIndex})}}render(){var t;return(0,a.h)("div",{"aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},(0,a.h)("ul",{role:"tablist",class:"tabs-list"},null===(t=this.tabObjects)||void 0===t?void 0:t.map((e,i)=>(0,a.h)("li",{class:this.getTabItemClass(i),ref:l=>this.tabHeaderRefs[i]=l,tabindex:"0",onClick:()=>this.handleClick(e,i),"aria-selected":i===this.internalActiveTabIndex?"true":"false","aria-disabled":e.disabled?"true":"false",role:"tab"},e?.header)),(0,a.h)("div",{class:"active-border"})),(0,a.h)("div",{class:"tab-content"},Array.from(this.tabObjects).map((e,i)=>(0,a.h)("div",{style:{display:i===this.internalActiveTabIndex?"block":"none"}},(0,a.h)("slot",{name:`tab-${i}`})))))}get el(){return(0,a.g)(this)}};r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.tabs{display:flex;font-family:var(--ifx-font-family)}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item{padding:8px 16px;cursor:pointer;position:relative}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}'}}]);