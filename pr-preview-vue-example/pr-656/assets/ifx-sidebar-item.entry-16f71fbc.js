import{r as t,h as e,g as n}from"./index-f2d8f0f9.js";const r='*{font-family:"Source Sans 3"}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:0px 4px 0px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:1;flex-grow:1}.sidebar__nav-item .sidebar__nav-item-number{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}',a=class{constructor(i){t(this,i),this.icon="",this.hasIcon=!1,this.hasIconWrapper=!1,this.href="",this.target="_self"}handleConsoleError(i){i.detail?this.hasIcon=!1:this.hasIcon=!0}render(){return e("a",{href:this.href,target:this.target,class:"sidebar__nav-item"},this.icon&&e("div",{class:`sidebar__nav-item-icon-wrapper ${this.hasIcon?"":"noIcon"}`},e("ifx-icon",{icon:this.icon})),e("div",{class:"sidebar__nav-item-label"},e("slot",null)))}get el(){return n(this)}};a.style=r;export{a as ifx_sidebar_item};
