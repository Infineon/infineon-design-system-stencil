import{r as n,c as h,h as s,H as c,g as d}from"./index-BazXQE7D.js";const o=".ifx-content-switcher{background-color:#FFFFFF;border:1px solid #BFBBBB;border-radius:9999px;height:36px;width:fit-content;box-sizing:border-box;display:flex;flex-direction:row;align-items:center}.ifx-content-switcher ::slotted(ifx-content-switcher-item){position:relative}.ifx-content-switcher ::slotted(ifx-content-switcher-item:first-child){left:-1px;margin-right:-1px}.ifx-content-switcher ::slotted(ifx-content-switcher-item:last-child){right:-1px;margin-left:-1px}.ifx-content-switcher ::slotted(.ifx-content-switcher-divider){width:1px;height:20px;background-color:#8D8786;margin:0px 1px;visibility:visible}.ifx-content-switcher ::slotted(.ifx-content-switcher-divider.hidden){visibility:hidden}",a=o,l=class{constructor(e){n(this,e),this.ifxChange=h(this,"ifxChange",7),this.eventHandlers=new Map,this.items=void 0,this.activeIndex=-1,this.hoverIndex=-1,this.focusIndex=-1,this.dividers=Array()}componentWillLoad(){this.items=Array.from(this.el.children),this.initializeDividers(),this.addEventListeners(),this.ensureSingleSelectedItem()}disconnectedCallback(){this.removeEventListeners()}initializeDividers(){this.items.forEach((e,t)=>{if(t<this.items.length-1){const i=document.createElement("div");i.classList.add("ifx-content-switcher-divider"),e.after(i),this.dividers.push(i)}})}addEventListeners(){this.items.forEach((e,t)=>{const i={click:()=>this.selectItem(t),mouseenter:()=>this.handleHover(t,!0),mouseleave:()=>this.handleHover(t,!1),focus:()=>this.handleFocus(t,!0),blur:()=>this.handleFocus(t,!1)};Object.keys(i).forEach(r=>{e.addEventListener(r,i[r])}),this.eventHandlers.set(e,i)})}removeEventListeners(){this.eventHandlers.forEach((e,t)=>{Object.keys(e).forEach(i=>{t.removeEventListener(i,e[i])})}),this.eventHandlers.clear()}ensureSingleSelectedItem(){this.items.forEach((e,t)=>{e.hasAttribute("selected")&&(this.activeIndex<0?this.selectItem(t):e.removeAttribute("selected"))})}handleHover(e,t){this.hoverIndex=t?e:-1,this.updateDividersOfItem(e)}handleFocus(e,t){this.focusIndex=t?e:-1,this.updateDividersOfItem(e)}updateDividersOfItem(e){e<this.items.length-1&&this.updateDividerVisibility(e),e>0&&this.updateDividerVisibility(e-1)}updateDividerVisibility(e){const t=new Set([this.activeIndex,this.activeIndex-1,this.hoverIndex,this.hoverIndex-1,this.focusIndex,this.focusIndex-1]);this.setDividerVisibility(e,t.has(e))}setDividerVisibility(e,t){this.dividers[e]&&this.dividers[e].classList.toggle("hidden",t)}selectItem(e){if(e===this.activeIndex)return;const t=this.activeIndex;t>=0&&this.items[t].removeAttribute("selected"),this.activeIndex=e,this.items[e].setAttribute("selected","true"),this.ifxChange.emit({oldValue:this.getValueOfItem(t),newValue:this.getValueOfItem(e)}),this.updateDividersOfItem(t),this.updateDividersOfItem(e)}getValueOfItem(e){return this.items[e]==null?e.toLocaleString():this.items[e].getAttribute("value")||e.toLocaleString()}render(){return s(c,{key:"0c50e18a9ac86fb7be75a049c82bb73bbad834ec"},s("div",{key:"6b17a332e6be8a261d7e70143dd60bc51bf637df",class:"ifx-content-switcher",role:"group"},s("slot",{key:"23a9d14ad25b16d4b3f6411199765b74ef1b9d62"})))}get el(){return d(this)}};l.style=a;export{l as ifx_content_switcher};
