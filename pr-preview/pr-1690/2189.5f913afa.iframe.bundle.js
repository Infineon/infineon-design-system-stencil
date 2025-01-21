"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2189],{"./dist/esm/ifx-content-switcher.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_content_switcher:()=>ContentSwitcher});var _index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-12dad3f6.js");const ContentSwitcher=class{constructor(hostRef){(0,_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.activeIndex=-1,this.hoverIndex=-1,this.focusIndex=-1,this.dividers=Array(),this.eventHandlers=new Map}componentWillLoad(){this.items=Array.from(this.el.children),this.initializeDividers(),this.addEventListeners(),this.ensureSingleSelectedItem()}disconnectedCallback(){this.removeEventListeners()}initializeDividers(){this.items.forEach(((item,index)=>{if(index<this.items.length-1){const divider=document.createElement("div");divider.classList.add("ifx-content-switcher-divider"),item.after(divider),this.dividers.push(divider)}}))}addEventListeners(){this.items.forEach(((item,index)=>{const handlers={click:()=>this.selectItem(index),mouseenter:()=>this.handleHover(index,!0),mouseleave:()=>this.handleHover(index,!1),focus:()=>this.handleFocus(index,!0),blur:()=>this.handleFocus(index,!1)};Object.keys(handlers).forEach((event=>{item.addEventListener(event,handlers[event])})),this.eventHandlers.set(item,handlers)}))}removeEventListeners(){this.eventHandlers.forEach(((handlers,item)=>{Object.keys(handlers).forEach((event=>{item.removeEventListener(event,handlers[event])}))})),this.eventHandlers.clear()}ensureSingleSelectedItem(){this.items.forEach(((item,index)=>{item.hasAttribute("selected")&&(this.activeIndex<0?this.selectItem(index):item.removeAttribute("selected"))}))}handleHover(index,isActive){this.hoverIndex=isActive?index:-1,this.updateDividersOfItem(index)}handleFocus(index,isActive){this.focusIndex=isActive?index:-1,this.updateDividersOfItem(index)}updateDividersOfItem(itemIndex){itemIndex<this.items.length-1&&this.updateDividerVisibility(itemIndex),itemIndex>0&&this.updateDividerVisibility(itemIndex-1)}updateDividerVisibility(dividerIndex){const hiddenDividers=new Set([this.activeIndex,this.activeIndex-1,this.hoverIndex,this.hoverIndex-1,this.focusIndex,this.focusIndex-1]);this.setDividerVisibility(dividerIndex,hiddenDividers.has(dividerIndex))}setDividerVisibility(dividerIndex,hidden){this.dividers[dividerIndex]&&this.dividers[dividerIndex].classList.toggle("hidden",hidden)}selectItem(itemIndex){if(itemIndex===this.activeIndex)return;const oldIndex=this.activeIndex;oldIndex>=0&&this.items[oldIndex].removeAttribute("selected"),this.activeIndex=itemIndex,this.items[itemIndex].setAttribute("selected","true"),this.ifxChange.emit({oldValue:this.getValueOfItem(oldIndex),newValue:this.getValueOfItem(itemIndex)}),this.updateDividersOfItem(oldIndex),this.updateDividersOfItem(itemIndex)}getValueOfItem(index){return null==this.items[index]?index.toLocaleString():this.items[index].getAttribute("value")||index.toLocaleString()}render(){return(0,_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"0c50e18a9ac86fb7be75a049c82bb73bbad834ec"},(0,_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6b17a332e6be8a261d7e70143dd60bc51bf637df",class:"ifx-content-switcher",role:"group"},(0,_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"23a9d14ad25b16d4b3f6411199765b74ef1b9d62"})))}get el(){return(0,_index_12dad3f6_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};ContentSwitcher.style=".ifx-content-switcher{background-color:#FFFFFF;border:1px solid #BFBBBB;border-radius:9999px;height:36px;width:fit-content;box-sizing:border-box;display:flex;flex-direction:row;align-items:center}.ifx-content-switcher ::slotted(ifx-content-switcher-item){position:relative}.ifx-content-switcher ::slotted(ifx-content-switcher-item:first-child){left:-1px;margin-right:-1px}.ifx-content-switcher ::slotted(ifx-content-switcher-item:last-child){right:-1px;margin-left:-1px}.ifx-content-switcher ::slotted(.ifx-content-switcher-divider){width:1px;height:20px;background-color:#8D8786;margin:0px 1px;visibility:visible}.ifx-content-switcher ::slotted(.ifx-content-switcher-divider.hidden){visibility:hidden}"}}]);