import{r as n,c as t,h as e,g as c}from"./index-kNsX_tfx.js";const i=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}',o=i,b=class{constructor(r){n(this,r),this.breadcrumbMenuIconWrapper=t(this,"breadcrumbMenuIconWrapper",7),this.target="_self"}componentDidLoad(){const a=this.el.shadowRoot.querySelector(".breadcrumb-item-label-container").querySelector(".menu-icon-wrapper");this.breadcrumbMenuIconWrapper.emit(a)}render(){return e("a",{key:"856f06f931087b841e5f0350f1eb03e83b70e598",href:this.href,target:this.target,class:"breadcrumb-item-label-container",role:"link"},e("ifx-icon",{key:"b67ee6634bea1f1626e073c1cf4238d12e0e8902",icon:this.icon,"aria-hidden":"true"}),e("span",{key:"270394a637cc6dd822d74d47dcc0bce51e9455c5",class:"label-wrapper"},e("slot",{key:"a2c15ce4581d3323d52fe931706ed86f3a777e08"})),e("span",{key:"f013021b230b0a83a9fc1133d395f91c74cec4c4",class:"menu-icon-wrapper","aria-hiden":"true"},e("ifx-icon",{key:"b22c149f7cb47f43054ba7e7a2ca669a94f2d8bc",icon:"chevron-down-12"})))}get el(){return c(this)}};b.style=o;export{b as ifx_breadcrumb_item_label};
