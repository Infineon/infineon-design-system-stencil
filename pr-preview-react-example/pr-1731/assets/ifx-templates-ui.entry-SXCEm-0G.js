import{r,a as l,h as t,g as i}from"./index-Btc8-WoR.js";const c="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__container .back__btn-wrapper{display:none}.templates__container .back__btn-wrapper.show{display:flex;justify-content:space-between;width:100%}.templates__container .back__btn-wrapper .alert__wrapper{display:none}.templates__container .back__btn-wrapper .alert__wrapper.show{display:block}.templates__container .templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}.templates__container .templates__title.hide{display:none}",p=c,n=class{constructor(e){r(this,e),this.tableTemplate=l("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png"),this.wizardTemplate=l("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png")}toggleTemplate(e){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach(s=>{s.toggleTemplate(e)})}handleError(e){const a=this.el.shadowRoot.querySelector(".alert__wrapper");e.detail?a.classList.add("show"):a.classList.remove("show")}filterTemplates(e){const a=this.el.shadowRoot.querySelector(".templates__title"),s=this.el.shadowRoot.querySelector(".back__btn-wrapper");e.detail?(a.classList.add("hide"),e.detail!=="details"&&s.classList.add("show"),this.toggleTemplate(e.detail)):(a.classList.remove("hide"),s.classList.remove("show"),this.toggleTemplate(null))}closeAlert(){this.el.shadowRoot.querySelector(".alert__wrapper").classList.remove("show")}render(){return t("div",{key:"23e25649965f489853cb1ba784a53479e53847fb",class:"templates__container"},t("div",{key:"2eac1a1cba9d1f33fde04c0ea2589758efcafbd2",class:"back__btn-wrapper"},t("ifx-icon-button",{key:"7244dba86edf6f82f77e621e412ccce4f2af38c2",onClick:()=>this.filterTemplates(!1),shape:"round",variant:"tertiary",icon:"arrow-left-16",target:"_blank",size:"m"}),t("div",{key:"58045bb50dbcc65ce2320277983f81a0f429f735",class:"alert__wrapper"},t("ifx-alert",{key:"591a2adff63451c789490bfa086156099abce152",onClick:()=>this.closeAlert(),"aria-live":"assertive",variant:"danger",icon:"c-info-24"},"All fields are mandatory"))),t("h2",{key:"f655cc87e64cfdc7a66b44e3e145a35ae594f66c",class:"templates__title"},"Choose your template"),t("div",{key:"81019e69e74c00df6425ed113d0b3f9c657b96ef",class:"templates__wrapper"},t("ifx-template",{key:"458caa648b5cfc03d821f1614659e10a17350eaa",name:"template-01",thumbnail:this.tableTemplate}),t("ifx-template",{key:"33401929cfc91de74dc2f9c2a083c7c230c3b9c4",name:"template-02",thumbnail:this.wizardTemplate})))}static get assetsDirs(){return["assets"]}get el(){return i(this)}};n.style=p;export{n as ifx_templates_ui};
