import{r as n,c as t,h as e,g as i}from"./index-Cbnf7idr.js";const c=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}',o=c,l=class{constructor(r){n(this,r),this.breadcrumbMenuIconWrapper=t(this,"breadcrumbMenuIconWrapper",7),this.target="_self"}componentDidLoad(){const a=this.el.shadowRoot.querySelector(".breadcrumb-item-label-container").querySelector(".menu-icon-wrapper");this.breadcrumbMenuIconWrapper.emit(a)}render(){return e("a",{key:"16ddbc6dfce781d06c5e852423d1646426c6fb04",href:this.url,target:this.target,class:"breadcrumb-item-label-container",role:"link"},e("ifx-icon",{key:"6d62e4f854b7ea735c46a3849a92c09a8d222e54",icon:this.icon,"aria-hidden":"true"}),e("span",{key:"452dc64f08a93f4872f0f033b0b7016073818aab",class:"label-wrapper"},e("slot",{key:"0a522ff8d13c3133367e62b50480af2dc970961d"})),e("span",{key:"7f5d3a5305ad187e312ae20a59610c9cfe4b13cf",class:"menu-icon-wrapper","aria-hiden":"true"},e("ifx-icon",{key:"07dc7f9912e3d87f286273e5758490f39df31d0d",icon:"chevron-down-12"})))}get el(){return i(this)}};l.style=o;export{l as ifx_breadcrumb_item_label};
