import{r as s,c as o,h as a,g as n}from"./index-53a6e961.js";const r='*{font-family:"Source Sans 3"}:host{display:flex}.tabs{display:flex;font-family:"Source Sans 3"}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item.active{color:#0A8276}.tab-item.disabled{padding:8px 16px;cursor:pointer;position:relative;color:#BFBBBB;pointer-events:none}.tab-item:not(:disabled,.disabled){padding:8px 16px;cursor:pointer;position:relative}.tab-item:not(:disabled,.disabled):hover{color:#0A8276}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}',l=class{constructor(t){s(this,t),this.ifxTabIndex=o(this,"ifxTabIndex",7),this.tabs=[],this.orientation="",this.internalOrientation=void 0,this.activeTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[],this.disabledTabs=[],this.tabObjects=[]}setActiveTab(t){if(!(t<0||t>=this.tabHeaderRefs.length)){const e=this.tabRefs[this.activeTabIndex];e&&this.emitEvent(e,"tabBecameInactive"),this.ifxTabIndex.emit({previousTab:this.activeTabIndex,currentTab:t}),this.activeTabIndex=t;const i=this.tabRefs[t];i&&this.emitEvent(i,"tabBecameActive")}}emitEvent(t,e){const i=new CustomEvent(e,{bubbles:!0,composed:!0});t.dispatchEvent(i)}reRenderBorder(){const t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.activeTabIndex]&&(this.orientation==="horizontal"?(t.style.left=`${this.tabHeaderRefs[this.activeTabIndex].offsetLeft}px`,t.style.width=`${this.tabHeaderRefs[this.activeTabIndex].offsetWidth}px`,t.style.top="",t.style.height=""):(t.style.top=`${this.tabHeaderRefs[this.activeTabIndex].offsetTop}px`,t.style.height=`${this.tabHeaderRefs[this.activeTabIndex].offsetHeight}px`,t.style.left="",t.style.width=""))}onOrientationChange(){this.reRenderBorder()}onSlotChange(){const t=this.el.querySelectorAll("ifx-tab");this.tabTitles=Array.from(t).map(e=>e.getAttribute("header")),this.disabledTabs=Array.from(t).map(e=>e.getAttribute("disabled")),this.tabObjects=this.tabTitles.map((e,i)=>({header:e,disabled:this.disabledTabs[i]==="true"})),this.tabRefs=Array.from(t),this.tabRefs.forEach((e,i)=>{e.setAttribute("slot",`tab-${i}`)})}setDefaultOrientation(){const t=["horizontal","vertical"],e=this.orientation.toLowerCase();t.includes(e)?this.internalOrientation=this.orientation:this.internalOrientation="horizontal"}componentWillLoad(){this.setDefaultOrientation(),this.onSlotChange()}componentDidLoad(){this.reRenderBorder()}componentDidUpdate(){this.reRenderBorder()}render(){return a("div",{class:`tabs ${this.internalOrientation}`},a("ul",{class:"tabs-list"},this.tabObjects.map((t,e)=>a("li",{class:`tab-item ${e===this.activeTabIndex?"active":""} ${t.disabled?"disabled":""}`,ref:i=>this.tabHeaderRefs[e]=i,onClick:()=>this.setActiveTab(e)},t.header)),a("div",{class:"active-border"})),a("div",{class:"tab-content"},Array.from(this.tabTitles).map((t,e)=>a("div",{style:{display:e===this.activeTabIndex?"block":"none"}},a("slot",{name:`tab-${e}`})))))}get el(){return n(this)}static get watchers(){return{orientation:["onOrientationChange"]}}};l.style=r;export{l as ifx_tabs};
