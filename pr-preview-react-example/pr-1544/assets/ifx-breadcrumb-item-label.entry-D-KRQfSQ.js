import{r as n,c as t,h as e,g as i}from"./index-DjC80i5L.js";const c=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}',o=c,b=class{constructor(a){n(this,a),this.breadcrumbMenuIconWrapper=t(this,"breadcrumbMenuIconWrapper",7),this.icon=void 0,this.url=void 0,this.target="_self"}componentDidLoad(){const r=this.el.shadowRoot.querySelector(".breadcrumb-item-label-container").querySelector(".menu-icon-wrapper");this.breadcrumbMenuIconWrapper.emit(r)}render(){return e("a",{key:"23014bd1046884a5bba5c45b6094cdd65da0cb48",href:this.url,target:this.target,class:"breadcrumb-item-label-container"},e("ifx-icon",{key:"24e194ed23024bb098158758bf24ec987579734d",icon:this.icon}),e("span",{key:"c937ded23f9aca1d006d7b46e76261bbfbc12287",class:"label-wrapper"},e("slot",{key:"1a4a615e8aad5c6a5d69a7fade3bb0258d998288"})),e("span",{key:"8e7969432b40933f5f759881f4df3a3f1871f104",class:"menu-icon-wrapper"},e("ifx-icon",{key:"e6eb474d100b436c614b7a8ec19746aca07d6adc",icon:"chevron-down-12"})))}get el(){return i(this)}};b.style=o;export{b as ifx_breadcrumb_item_label};
