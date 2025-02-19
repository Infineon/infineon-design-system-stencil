"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4935],{4935:(c,o,n)=>{n.r(o),n.d(o,{ifx_tabs:()=>d});var i=n(787);const d=(()=>{let r=class{constructor(t){(0,i.r)(this,t),this.ifxChange=(0,i.c)(this,"ifxChange",7),this.orientation="horizontal",this.activeTabIndex=0,this.fullWidth=!1,this.internalActiveTabIndex=0,this.internalFocusedTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.disabledTabs=[],this.tabObjects=[]}updateBorderOnWindowResize(){this.updateBorderAndFocus()}setActiveAndFocusedTab(t){var e;t>=this.tabObjects.length&&(t=this.tabObjects.length-1),t<0&&(t=0),null!==(e=this.tabObjects[t])&&void 0!==e&&e.disabled||(this.internalActiveTabIndex=t,this.internalFocusedTabIndex=t)}handleTabHeaderChange(t){const e=t.target.getAttribute("slot").replace("tab-","");this.tabObjects[e].header=t.detail,this.tabObjects=[...this.tabObjects]}activeTabIndexChanged(t,e){t!==e&&this.setActiveAndFocusedTab(t)}componentWillLoad(){this.internalOrientation="vertical"===this.orientation.toLowerCase()?"vertical":"horizontal",this.internalActiveTabIndex!==this.activeTabIndex&&this.ifxChange.emit({previousTab:this.internalActiveTabIndex,currentTab:this.activeTabIndex}),this.onSlotChange(),this.setActiveAndFocusedTab(this.activeTabIndex),this.updateTabStyles()}updateTabStyles(){this.tabHeaderRefs.forEach((t,e)=>{t.classList.toggle("active",e===this.internalActiveTabIndex),t.setAttribute("aria-selected",e===this.internalActiveTabIndex?"true":"false")})}reRenderBorder(){const t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.internalActiveTabIndex]&&("horizontal"===this.orientation?(t.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,t.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,t.style.top="",t.style.height=""):(t.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,t.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,t.style.left="",t.style.width=""))}onSlotChange(){const t=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(t).map(e=>({header:e?.header,disabled:!0===e?.disabled,icon:e?.icon,iconPosition:e?.iconPosition})),this.tabRefs=Array.from(t),this.tabRefs.forEach((e,a)=>{e.setAttribute("slot",`tab-${a}`)})}setDefaultOrientation(){const e=this.orientation.toLowerCase();this.internalOrientation=["horizontal","vertical"].includes(e)?this.orientation:"horizontal"}componentDidLoad(){this.updateBorderAndFocus(),this.tabHeaderRefs.forEach((t,e)=>{t.addEventListener("focus",this.onTabFocus(e))})}onTabFocus(t){return()=>{this.internalFocusedTabIndex=t}}disconnectedCallback(){this.tabHeaderRefs.forEach((t,e)=>{t.removeEventListener("focus",this.onTabFocus(e))})}componentDidUpdate(){this.updateBorderAndFocus()}updateBorderAndFocus(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach((t,e)=>{t.tabIndex=e===this.internalActiveTabIndex?0:-1})}focusNextTab(){let t=this.internalFocusedTabIndex+1;for(;t<this.tabHeaderRefs.length&&this.tabObjects[t].disabled;)t++;t>=0&&t<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=t,this.tabHeaderRefs[t].focus())}focusPreviousTab(){let t=this.internalFocusedTabIndex-1;for(;t>=0&&this.tabObjects[t].disabled;)t--;t>=0&&t<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=t,this.tabHeaderRefs[t].focus())}getTabItemClass(t){return`tab-item ${this.fullWidth?"full-width":""} ${t!==this.internalActiveTabIndex||this.tabObjects[t].disabled?"":"active"} ${this.tabObjects[t].disabled?"disabled":""} ${"icon__"+this.tabObjects[t].iconPosition}`}handleClick(t,e){this.ifxChange.emit({previousTab:this.internalActiveTabIndex,currentTab:e}),t.disabled||(this.internalActiveTabIndex=e)}handleKeyDown(t){if("Tab"===t.key)if(t.shiftKey){if(0===this.internalFocusedTabIndex)return;t.preventDefault(),this.focusPreviousTab()}else{if(this.internalFocusedTabIndex===this.tabHeaderRefs.length-1)return;t.preventDefault(),this.focusNextTab()}else if("Enter"===t.key&&-1!==this.internalFocusedTabIndex&&!this.tabObjects[this.internalFocusedTabIndex].disabled){const e=this.internalActiveTabIndex;this.internalActiveTabIndex=this.internalFocusedTabIndex,this.ifxChange.emit({previousTab:e,currentTab:this.internalFocusedTabIndex})}}render(){var t;return(0,i.h)("div",{key:"9769492731965486ef137d7cd608fc93f5b035d0","aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},(0,i.h)("ul",{key:"32c22cdb57314fccb9e85439d1d02805bdd26cf7",role:"tablist",class:"tabs-list"},null===(t=this.tabObjects)||void 0===t?void 0:t.map((e,a)=>(0,i.h)("li",{class:this.getTabItemClass(a),ref:s=>this.tabHeaderRefs[a]=s,onMouseDown:s=>s.preventDefault(),onClick:()=>this.handleClick(e,a),"aria-selected":a===this.internalActiveTabIndex?"true":"false","aria-disabled":e.disabled?"true":"false",role:"tab"},e?.icon?(0,i.h)("ifx-icon",{icon:e.icon}):"",e?.header)),(0,i.h)("div",{key:"f0e57c02187b3dca86e3f8f80ae6c0901fe2e000",class:"active-border"})),(0,i.h)("div",{key:"ebaf0baf4c0d5d021a7908be3ec417e77652f9ec",class:"tab-content"},Array.from(this.tabObjects).map((e,a)=>(0,i.h)("div",{style:{display:a===this.internalActiveTabIndex?"block":"none"}},(0,i.h)("slot",{name:`tab-${a}`})))))}get el(){return(0,i.g)(this)}static get watchers(){return{activeTabIndex:["activeTabIndexChanged"]}}};return r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.tabs{display:flex;font-family:var(--ifx-font-family);width:100%}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tabs:not(.vertical) .tab-item.full-width{flex:1}.tab-item{display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 16px;cursor:pointer;position:relative}.tab-item.icon__right{flex-direction:row-reverse;justify-content:flex-end}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}',r})()}}]);