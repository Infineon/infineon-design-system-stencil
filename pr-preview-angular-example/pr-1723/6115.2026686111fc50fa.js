"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6115],{6115:(n,r,l)=>{l.r(r),l.d(r,{ifx_templates_ui:()=>c});var e=l(787);const c=(()=>{let i=class{constructor(t){(0,e.r)(this,t),this.tableTemplate=(0,e.d)("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png"),this.wizardTemplate=(0,e.d)("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png")}toggleTemplate(t){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach(s=>{s.toggleTemplate(t)})}handleError(t){const a=this.el.shadowRoot.querySelector(".alert__wrapper");t.detail?a.classList.add("show"):a.classList.remove("show")}filterTemplates(t){const a=this.el.shadowRoot.querySelector(".templates__title"),s=this.el.shadowRoot.querySelector(".back__btn-wrapper");t.detail?(a.classList.add("hide"),"details"!==t.detail&&s.classList.add("show"),this.toggleTemplate(t.detail)):(a.classList.remove("hide"),s.classList.remove("show"),this.toggleTemplate(null))}closeAlert(){this.el.shadowRoot.querySelector(".alert__wrapper").classList.remove("show")}render(){return(0,e.h)("div",{key:"0836cefbd6e9760badefacd6fcdc5dec7e3bc5fb",class:"templates__container"},(0,e.h)("div",{key:"3cddf53fe880bafa5d41e296530810ea26a9bc88",class:"back__btn-wrapper"},(0,e.h)("ifx-icon-button",{key:"756b35df3419e8d92363307866047818c271f868",onClick:()=>this.filterTemplates(!1),shape:"round",variant:"tertiary",icon:"arrow-left-16",target:"_blank",size:"m"}),(0,e.h)("div",{key:"f990f29dac2c7ca78f2f652894fc2fe994ae759c",class:"alert__wrapper"},(0,e.h)("ifx-alert",{key:"2553f88d9af2fbcdd29bf796a76acee7da3cf74c",onClick:()=>this.closeAlert(),"aria-live":"assertive",variant:"danger",icon:"c-info-24"},"All fields are mandatory"))),(0,e.h)("h2",{key:"7dc3b09d76864c415446b6fed4ca46dcb0f216cb",class:"templates__title"},"Choose your template"),(0,e.h)("div",{key:"6bbd867fbc390f0cfbd8fb823046adff02d25239",class:"templates__wrapper"},(0,e.h)("ifx-template",{key:"b7afc320afed39824056ca067c4366264c2095eb",name:"template-01",thumbnail:this.tableTemplate}),(0,e.h)("ifx-template",{key:"eabb40da6e08a54d40f50d81350d8dad0041b40f",name:"template-02",thumbnail:this.wizardTemplate})))}static get assetsDirs(){return["assets"]}get el(){return(0,e.g)(this)}};return i.style="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__container .back__btn-wrapper{display:none}.templates__container .back__btn-wrapper.show{display:flex;justify-content:space-between;width:100%}.templates__container .back__btn-wrapper .alert__wrapper{display:none}.templates__container .back__btn-wrapper .alert__wrapper.show{display:block}.templates__container .templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}.templates__container .templates__title.hide{display:none}",i})()}}]);