"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6115],{6115:(c,r,l)=>{l.r(r),l.d(r,{ifx_templates_ui:()=>n});var e=l(4612);const n=(()=>{let i=class{constructor(t){(0,e.r)(this,t),this.tableTemplate=(0,e.d)("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png"),this.wizardTemplate=(0,e.d)("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png")}toggleTemplate(t){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach(s=>{s.toggleTemplate(t)})}handleError(t){const a=this.el.shadowRoot.querySelector(".alert__wrapper");t.detail?a.classList.add("show"):a.classList.remove("show")}filterTemplates(t){const a=this.el.shadowRoot.querySelector(".templates__title"),s=this.el.shadowRoot.querySelector(".back__btn-wrapper");t.detail?(a.classList.add("hide"),"details"!==t.detail&&s.classList.add("show"),this.toggleTemplate(t.detail)):(a.classList.remove("hide"),s.classList.remove("show"),this.toggleTemplate(null))}closeAlert(){this.el.shadowRoot.querySelector(".alert__wrapper").classList.remove("show")}render(){return(0,e.h)("div",{key:"9ed91d3255c673f45f628bede698d577420660bd",class:"templates__container"},(0,e.h)("div",{key:"22ea4e706f87d291addbb4bdcf0d7bf706795740",class:"back__btn-wrapper"},(0,e.h)("ifx-icon-button",{key:"c856a66643e7f1604b9e829fa2b494d64b624257",onClick:()=>this.filterTemplates(!1),shape:"round",variant:"tertiary",icon:"arrow-left-16",target:"_blank",size:"m"}),(0,e.h)("div",{key:"2c0d372b75ac6ce75b380d282824260bd8ae24b0",class:"alert__wrapper"},(0,e.h)("ifx-alert",{key:"b9c2a64fae7877cadabf2460438701c0de0fb754",onClick:()=>this.closeAlert(),"aria-live":"assertive",variant:"danger",icon:"c-info-24"},"All fields are mandatory"))),(0,e.h)("h2",{key:"800c23272989005c948e8dde689f2015b6882b11",class:"templates__title"},"Choose your template"),(0,e.h)("div",{key:"8f3717df8507292ccd7507faf718c15c791ff13d",class:"templates__wrapper"},(0,e.h)("ifx-template",{key:"db2b25656f3daf81cae949472565c4c0c9d2767f",name:"template-01",thumbnail:this.tableTemplate}),(0,e.h)("ifx-template",{key:"60d449d1691f375e680d93a4cdf090e6f9f982dc",name:"template-02",thumbnail:this.wizardTemplate})))}static get assetsDirs(){return["assets"]}get el(){return(0,e.g)(this)}};return i.style="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__container .back__btn-wrapper{display:none}.templates__container .back__btn-wrapper.show{display:flex;justify-content:space-between;width:100%}.templates__container .back__btn-wrapper .alert__wrapper{display:none}.templates__container .back__btn-wrapper .alert__wrapper.show{display:block}.templates__container .templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}.templates__container .templates__title.hide{display:none}",i})()}}]);