import{r as n,c as o,h as a,g as r}from"./index-B44lNoLt.js";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.tabs{display:flex;font-family:var(--ifx-font-family)}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item{display:flex;align-items:center;gap:8px;padding:8px 16px;cursor:pointer;position:relative}.tab-item.icon__right{flex-direction:row-reverse;justify-content:flex-end}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}',d=l,c=class{constructor(e){n(this,e),this.ifxTabChange=o(this,"ifxTabChange",7),this.orientation="horizontal",this.activeTabIndex=0,this.internalOrientation=void 0,this.internalActiveTabIndex=0,this.internalFocusedTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.disabledTabs=[],this.tabObjects=[]}setActiveAndFocusedTab(e){e>=this.tabObjects.length&&(e=this.tabObjects.length-1),this.tabObjects[e].disabled||(this.internalActiveTabIndex=e,this.internalFocusedTabIndex=e)}activeTabIndexChanged(e,t){e!==t&&this.setActiveAndFocusedTab(e)}componentWillLoad(){this.internalOrientation=this.orientation.toLowerCase()==="vertical"?"vertical":"horizontal",this.internalActiveTabIndex!==this.activeTabIndex&&this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:this.activeTabIndex}),this.onSlotChange(),this.setActiveAndFocusedTab(this.activeTabIndex),this.updateTabStyles()}updateTabStyles(){this.tabHeaderRefs.forEach((e,t)=>{e.classList.toggle("active",t===this.internalActiveTabIndex),e.setAttribute("aria-selected",t===this.internalActiveTabIndex?"true":"false")})}reRenderBorder(){const e=this.el.shadowRoot.querySelector(".active-border");e&&this.tabHeaderRefs[this.internalActiveTabIndex]&&(this.orientation==="horizontal"?(e.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,e.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,e.style.top="",e.style.height=""):(e.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,e.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,e.style.left="",e.style.width=""))}onSlotChange(){const e=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(e).map(t=>({header:t==null?void 0:t.header,disabled:(t==null?void 0:t.disabled)===!0,icon:t==null?void 0:t.icon,iconPosition:t==null?void 0:t.iconPosition})),this.tabRefs=Array.from(e),this.tabRefs.forEach((t,i)=>{t.setAttribute("slot",`tab-${i}`)})}setDefaultOrientation(){const e=["horizontal","vertical"],t=this.orientation.toLowerCase();e.includes(t)?this.internalOrientation=this.orientation:this.internalOrientation="horizontal"}componentDidLoad(){this.updateBorderAndFocus(),this.tabHeaderRefs.forEach((e,t)=>{e.addEventListener("focus",this.onTabFocus(t))})}onTabFocus(e){return()=>{this.internalFocusedTabIndex=e}}disconnectedCallback(){this.tabHeaderRefs.forEach((e,t)=>{e.removeEventListener("focus",this.onTabFocus(t))})}componentDidUpdate(){this.updateBorderAndFocus()}updateBorderAndFocus(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach((e,t)=>{e.tabIndex=t===this.internalActiveTabIndex?0:-1})}focusNextTab(){let e=this.internalFocusedTabIndex+1;for(;e<this.tabHeaderRefs.length&&this.tabObjects[e].disabled;)e++;e>=0&&e<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=e,this.tabHeaderRefs[e].focus())}focusPreviousTab(){let e=this.internalFocusedTabIndex-1;for(;e>=0&&this.tabObjects[e].disabled;)e--;e>=0&&e<this.tabHeaderRefs.length&&(this.internalFocusedTabIndex=e,this.tabHeaderRefs[e].focus())}getTabItemClass(e){const t=e===this.internalActiveTabIndex&&!this.tabObjects[e].disabled,i=this.tabObjects[e].disabled,s=this.tabObjects[e].iconPosition;return`tab-item ${t?"active":""} ${i?"disabled":""} ${"icon__"+s}`}handleClick(e,t){this.ifxTabChange.emit({previousTab:this.internalActiveTabIndex,currentTab:t}),e.disabled||(this.internalActiveTabIndex=t)}handleKeyDown(e){if(e.key==="Tab")if(e.shiftKey){if(this.internalFocusedTabIndex===0)return;e.preventDefault(),this.focusPreviousTab()}else{if(this.internalFocusedTabIndex===this.tabHeaderRefs.length-1)return;e.preventDefault(),this.focusNextTab()}else if(e.key==="Enter"&&this.internalFocusedTabIndex!==-1&&!this.tabObjects[this.internalFocusedTabIndex].disabled){const t=this.internalActiveTabIndex;this.internalActiveTabIndex=this.internalFocusedTabIndex,this.ifxTabChange.emit({previousTab:t,currentTab:this.internalFocusedTabIndex})}}render(){var e;return a("div",{key:"9b3a79c54094ae78f7e8611a6920bb2b2c278b1e","aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},a("ul",{key:"3d1455aefa03ad7db7d0daeccaaf3f96cf25e2cc",role:"tablist",class:"tabs-list"},(e=this.tabObjects)===null||e===void 0?void 0:e.map((t,i)=>a("li",{class:this.getTabItemClass(i),ref:s=>this.tabHeaderRefs[i]=s,tabindex:"0",onClick:()=>this.handleClick(t,i),"aria-selected":i===this.internalActiveTabIndex?"true":"false","aria-disabled":t.disabled?"true":"false",role:"tab"},t!=null&&t.icon?a("ifx-icon",{icon:t.icon}):"",t==null?void 0:t.header)),a("div",{key:"701ab1099ac5950e27cf7dbc38d61dabf6421f91",class:"active-border"})),a("div",{key:"2ea61a45f0bc7bc33474eea89c8299bc5d78f2c9",class:"tab-content"},Array.from(this.tabObjects).map((t,i)=>a("div",{style:{display:i===this.internalActiveTabIndex?"block":"none"}},a("slot",{name:`tab-${i}`})))))}get el(){return r(this)}static get watchers(){return{activeTabIndex:["activeTabIndexChanged"]}}};c.style=d;export{c as ifx_tabs};
