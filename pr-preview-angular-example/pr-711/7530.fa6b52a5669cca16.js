"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7530],{7530:(c,r,o)=>{o.r(r),o.d(r,{ifx_tabs:()=>l});var d=o(4795),a=o(4004);const l=class{constructor(t){(0,a.r)(this,t),this.ifxTabChange=(0,a.c)(this,"ifxTabChange",7),this.tabs=[],this.orientation="",this.internalOrientation=void 0,this.activeTabIndex=0,this.internalPrevActiveTabIndex=0,this.internalActiveTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[],this.disabledTabs=[],this.tabObjects=[]}onActiveTabIndexChange(t,e){this.internalPrevActiveTabIndex=e,this.internalActiveTabIndex=t}setActiveTab(t){var e=this;return(0,d.Z)(function*(){var i,s;const n=e.internalActiveTabIndex;if(e.internalActiveTabIndex=t,null!==(i=e.tabObjects[e.internalActiveTabIndex])&&void 0!==i&&i.disabled&&(null===(s=e.tabObjects[n])||void 0===s||!s.disabled))return e.internalActiveTabIndex=n,void(e.activeTabIndex=n);e.internalActiveTabIndex<0||e.internalActiveTabIndex>=e.tabHeaderRefs.length||(e.ifxTabChange.emit({previousTab:n,currentTab:e.internalActiveTabIndex}),e.internalActiveTabIndex=e.internalActiveTabIndex)})()}emitEvent(t,e){const i=new CustomEvent(e,{bubbles:!0,composed:!0});t.dispatchEvent(i)}reRenderBorder(){const t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.internalActiveTabIndex]&&("horizontal"===this.orientation?(t.style.left=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`,t.style.width=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`,t.style.top="",t.style.height=""):(t.style.top=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`,t.style.height=`${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`,t.style.left="",t.style.width=""))}onSlotChange(){const t=this.el.querySelectorAll("ifx-tab");this.tabObjects=Array.from(t).map(e=>({header:null===e?.header?null!==e?.getAttribute("header"):e.header,disabled:!0===e?.disabled})),this.tabRefs=Array.from(t),this.tabRefs.forEach((e,i)=>{e.setAttribute("slot",`tab-${i}`)})}setDefaultOrientation(){const e=this.orientation.toLowerCase();this.internalOrientation=["horizontal","vertical"].includes(e)?this.orientation:"horizontal"}componentWillLoad(){this.setDefaultOrientation(),this.onSlotChange()}componentDidLoad(){this.reRenderBorder(),this.addEventListenersToHandleCustomFocusAndActiveState(),this.updateTabFocusability()}componentDidUpdate(){this.reRenderBorder(),this.updateTabFocusability()}updateTabFocusability(){this.tabHeaderRefs.forEach((t,e)=>{t.tabIndex=e===this.internalActiveTabIndex?0:-1})}addEventListenersToHandleCustomFocusAndActiveState(){var t;const e=null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelector(".tabs-list");e?e.addEventListener("keydown",i=>{switch(console.log("Keydown event fired:",i.key),i.key){case"ArrowLeft":this.focusPreviousTab();break;case"ArrowRight":this.focusNextTab();break;case"Tab":console.log("Tab key pressed"),this.handleTabKeyPress(i);break;case"Home":i.preventDefault(),this.setActiveTab(0),this.tabHeaderRefs[0].focus(),console.log("Home key pressed");break;case"End":i.preventDefault(),this.setActiveTab(this.tabHeaderRefs.length-1),this.tabHeaderRefs[this.tabHeaderRefs.length-1].focus(),console.log("End key pressed")}}):console.error("Tabs list not found")}focusNextTab(){let t=this.internalActiveTabIndex+1;for(;t<this.tabHeaderRefs.length&&this.tabObjects[t].disabled;)t++;t<this.tabHeaderRefs.length&&(this.setActiveTab(t),this.tabHeaderRefs[t].focus())}focusPreviousTab(){let t=this.internalActiveTabIndex-1;for(;t>=0&&this.tabObjects[t].disabled;)t--;t>=0&&(this.setActiveTab(t),this.tabHeaderRefs[t].focus())}handleTabKeyPress(t){var e;if(!t.shiftKey){t.preventDefault();const i=null===(e=this.el.shadowRoot)||void 0===e?void 0:e.querySelector(`.tab-content > div:nth-child(${this.internalActiveTabIndex+1})`);i&&(i.setAttribute("tabIndex","0"),i.focus())}}render(){var t;return(0,a.h)("div",{"aria-label":"navigation tabs",class:`tabs ${this.internalOrientation}`},(0,a.h)("ul",{class:"tabs-list"},null===(t=this.tabObjects)||void 0===t?void 0:t.map((e,i)=>(0,a.h)("li",{class:`tab-item ${i!==this.internalActiveTabIndex||e.disabled?"":"active"} ${e.disabled?"disabled":""}`,ref:s=>this.tabHeaderRefs[i]=s,onClick:()=>this.setActiveTab(i),onKeyUp:s=>{"Enter"===s.key&&this.setActiveTab(i)},tabindex:"0","aria-selected":i===this.internalActiveTabIndex?"true":"false","aria-disabled":e.disabled?"true":"false",onFocus:s=>console.log("focussing, ",s.target),role:"tab"},e?.header)),(0,a.h)("div",{class:"active-border"})),(0,a.h)("div",{class:"tab-content"},Array.from(this.tabObjects).map((e,i)=>(0,a.h)("div",{style:{display:i===this.internalActiveTabIndex?"block":"none"}},(0,a.h)("slot",{name:`tab-${i}`})))))}get el(){return(0,a.g)(this)}static get watchers(){return{activeTabIndex:["onActiveTabIndexChange"]}}};l.style='*{font-family:"Source Sans 3"}:host{display:flex}.tabs{display:flex;font-family:"Source Sans 3"}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item{padding:8px 16px;cursor:pointer;position:relative}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}'}}]);