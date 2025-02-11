import{r as n,c as o,h as a,g as r}from"./index-BXwmuY46.js";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.tabs{display:flex;font-family:var(--ifx-font-family);width:100%}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tabs:not(.vertical) .tab-item.full-width{flex:1}.tab-item{display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 16px;cursor:pointer;position:relative}.tab-item.icon__right{flex-direction:row-reverse;justify-content:flex-end}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}',d=l,c=class{constructor(t){n(this,t),this.ifxChange=o(this,"ifxChange",7),this.orientation="horizontal",this.activeTabIndex=0,this.fullWidth=!1,this.internalActiveTabIndex=0,this.internalFocusedTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.disabledTabs=[],this.tabObjects=[]}updateBorderOnWindowResize(){this.updateBorderAndFocus()}setActiveAndFocusedTab(t){var e;t>=this.tabObjects.length&&(t=this.tabObjects.length-1),t<0&&(t=0),!((e=this.tabObjects[t])===null||e===void 0)&&e.disabled||(this.internalActiveTabIndex=t,this.internalFocusedTabIndex=t)}handleTabHeaderChange(t){const e=t.target.getAttribute("slot").replace("tab-","");this.tabObjects[e].header=t.detail,this.tabObjects=[...this.tabObjects]}activeTabIndexChanged(t,e){t!==e&&this.setActiveAndFocusedTab(t)}componentWillLoad(){this.internalOrientation=this.orientation.toLowerCase()==="vertical"?"vertical":"horizontal",this.internalActiveTabIndex!==this.activeTabIndex&&this.ifxChange.emit({previousTab:this.internalActiveTabIndex,currentTab:this.activeTabIndex}),this.onSlotChange(),this.setActiveAndFocusedTab(this.activeTabIndex),this.updateTabStyles()}updateTabStyles(){this.tabHeaderRefs.forEach((t,e)=>{t.classList.toggle("active",e===this.internalActiveTabIndex),t.setAttribute("aria-selected",e===this.internalActiveTabIndex?"true":"false")})}reRenderBorder(){const t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.internalActiveTabIndex]&&(this.orientation==="horizontal"?(t.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,t.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,t.style.top="",t.style.height=""):(t.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,t.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,t.style.left="",t.style.width=""))}onSlotChange(){const t=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(t).map(e=>({header:e==null?void 0:e.header,disabled:(e==null?void 0:e.disabled)===!0,icon:e==null?void 0:e.icon,iconPosition:e==null?void 0:e.iconPosition})),this.tabRefs=Array.from(t),this.tabRefs.forEach((e,i)=>{e.setAttribute("slot",`tab-${i}`)})}setDefaultOrientation(){const t=["horizontal","vertical"],e=this.orientation.toLowerCase();t.includes(e)?this.internalOrientation=this.orientation:this.internalOrientation="horizontal"}componentDidLoad(){this.updateBorderAndFocus(),this.tabHeaderRefs.forEach((t,e)=>{t.addEventListener("focus",this.onTabFocus(e))})}onTabFocus(t){return()=>{this.internalFocusedTabIndex=t}}disconnectedCallback(){this.tabHeaderRefs.forEach((t,e)=>{t.removeEventListener("focus",this.onTabFocus(e))})}componentDidUpdate(){this.updateBorderAndFocus()}updateBorderAndFocus(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach((t,e)=>{t.tabIndex=e===this.internalActiveTabIndex?0:-1})}focusNextTab(){let t=this.internalFocusedTabIndex+1;for(;t<this.tabHeaderRefs.length&&this.tabObjects[t].disabled;)t++;t>=0&&t<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=t,this.tabHeaderRefs[t].focus())}focusPreviousTab(){let t=this.internalFocusedTabIndex-1;for(;t>=0&&this.tabObjects[t].disabled;)t--;t>=0&&t<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=t,this.tabHeaderRefs[t].focus())}getTabItemClass(t){const e=t===this.internalActiveTabIndex&&!this.tabObjects[t].disabled,i=this.tabObjects[t].disabled,s=this.tabObjects[t].iconPosition;return`tab-item ${this.fullWidth?"full-width":""} ${e?"active":""} ${i?"disabled":""} ${"icon__"+s}`}handleClick(t,e){this.ifxChange.emit({previousTab:this.internalActiveTabIndex,currentTab:e}),t.disabled||(this.internalActiveTabIndex=e)}handleKeyDown(t){if(t.key==="Tab")if(t.shiftKey){if(this.internalFocusedTabIndex===0)return;t.preventDefault(),this.focusPreviousTab()}else{if(this.internalFocusedTabIndex===this.tabHeaderRefs.length-1)return;t.preventDefault(),this.focusNextTab()}else if(t.key==="Enter"&&this.internalFocusedTabIndex!==-1&&!this.tabObjects[this.internalFocusedTabIndex].disabled){const e=this.internalActiveTabIndex;this.internalActiveTabIndex=this.internalFocusedTabIndex,this.ifxChange.emit({previousTab:e,currentTab:this.internalFocusedTabIndex})}}render(){var t;return a("div",{key:"5aad10898d04249d8f6d8ebbec663409e937ad8e","aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},a("ul",{key:"f4651912a63389fe4263867a2e43fbd76c35d1e3",role:"tablist",class:"tabs-list"},(t=this.tabObjects)===null||t===void 0?void 0:t.map((e,i)=>a("li",{class:this.getTabItemClass(i),ref:s=>this.tabHeaderRefs[i]=s,onMouseDown:s=>s.preventDefault(),onClick:()=>this.handleClick(e,i),"aria-selected":i===this.internalActiveTabIndex?"true":"false","aria-disabled":e.disabled?"true":"false",role:"tab"},e!=null&&e.icon?a("ifx-icon",{icon:e.icon}):"",e==null?void 0:e.header)),a("div",{key:"2fa5337ec103789d238efc7e34340435d1589cc9",class:"active-border"})),a("div",{key:"15936a72562679e7e3b21adb031ddbefcd309a07",class:"tab-content"},Array.from(this.tabObjects).map((e,i)=>a("div",{style:{display:i===this.internalActiveTabIndex?"block":"none"}},a("slot",{name:`tab-${i}`})))))}get el(){return r(this)}static get watchers(){return{activeTabIndex:["activeTabIndexChanged"]}}};c.style=d;export{c as ifx_tabs};
