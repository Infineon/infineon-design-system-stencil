import{r,a as l,h as t,g as i}from"./index-7ZbyDl84.js";const p="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__container .back__btn-wrapper{display:none}.templates__container .back__btn-wrapper.show{display:flex;justify-content:space-between;width:100%}.templates__container .back__btn-wrapper .alert__wrapper{display:none}.templates__container .back__btn-wrapper .alert__wrapper.show{display:block}.templates__container .templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}.templates__container .templates__title.hide{display:none}",c=p,n=class{constructor(e){r(this,e),this.tableTemplate=l("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png"),this.wizardTemplate=l("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png")}toggleTemplate(e){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach(s=>{s.toggleTemplate(e)})}handleError(e){const a=this.el.shadowRoot.querySelector(".alert__wrapper");e.detail?a.classList.add("show"):a.classList.remove("show")}filterTemplates(e){const a=this.el.shadowRoot.querySelector(".templates__title"),s=this.el.shadowRoot.querySelector(".back__btn-wrapper");e.detail?(a.classList.add("hide"),e.detail!=="details"&&s.classList.add("show"),this.toggleTemplate(e.detail)):(a.classList.remove("hide"),s.classList.remove("show"),this.toggleTemplate(null))}closeAlert(){this.el.shadowRoot.querySelector(".alert__wrapper").classList.remove("show")}render(){return t("div",{key:"bf4c5ead310d88f7fe5c9bc213e40267bf429cb8",class:"templates__container"},t("div",{key:"e248745b8db68d2b1512202fa134d042edeb010e",class:"back__btn-wrapper"},t("ifx-icon-button",{key:"f10c5d5b37071427b674f11a4debd5a80df1af5e",onClick:()=>this.filterTemplates(!1),shape:"round",variant:"tertiary",icon:"arrow-left-16",target:"_blank",size:"m"}),t("div",{key:"e5960d85b1e46f37580a3b62547164d0356cf575",class:"alert__wrapper"},t("ifx-alert",{key:"ea1ce75c12f68e79f688e5bca76f40cf25fd72f9",onClick:()=>this.closeAlert(),"aria-live":"assertive",variant:"danger",icon:"c-info-24"},"All fields are mandatory"))),t("h2",{key:"8bbfa839ab5da993bc89ff3371e8bc64460f1c68",class:"templates__title"},"Choose your template"),t("div",{key:"9f30ea639383bde71678215f0b80ee7111c4c5b1",class:"templates__wrapper"},t("ifx-template",{key:"06d4725d8707904e4af6c4e302fbd00900cb0d9b",name:"template-01",thumbnail:this.tableTemplate}),t("ifx-template",{key:"755c2d29318c854be38e364d6c971b9931da19c6",name:"template-02",thumbnail:this.wizardTemplate})))}static get assetsDirs(){return["assets"]}get el(){return i(this)}};n.style=c;export{n as ifx_templates_ui};
