import{r,a as l,h as t,g as i}from"./index-O6Nawr3i.js";const p="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__container .back__btn-wrapper{display:none}.templates__container .back__btn-wrapper.show{display:flex;justify-content:space-between;width:100%}.templates__container .back__btn-wrapper .alert__wrapper{display:none}.templates__container .back__btn-wrapper .alert__wrapper.show{display:block}.templates__container .templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}.templates__container .templates__title.hide{display:none}",c=p,n=class{constructor(e){r(this,e),this.tableTemplate=l("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png"),this.wizardTemplate=l("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png")}toggleTemplate(e){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach(s=>{s.toggleTemplate(e)})}handleError(e){const a=this.el.shadowRoot.querySelector(".alert__wrapper");e.detail?a.classList.add("show"):a.classList.remove("show")}filterTemplates(e){const a=this.el.shadowRoot.querySelector(".templates__title"),s=this.el.shadowRoot.querySelector(".back__btn-wrapper");e.detail?(a.classList.add("hide"),e.detail!=="details"&&s.classList.add("show"),this.toggleTemplate(e.detail)):(a.classList.remove("hide"),s.classList.remove("show"),this.toggleTemplate(null))}closeAlert(){this.el.shadowRoot.querySelector(".alert__wrapper").classList.remove("show")}render(){return t("div",{key:"2839932de12b3ac02cf1bb01c535b544c79ffaba",class:"templates__container"},t("div",{key:"e69da2fb658fa6d1026908bc183be10fb9ab3e06",class:"back__btn-wrapper"},t("ifx-icon-button",{key:"26b0ee7071c26f39b7567839249e88ed2a78d78b",onClick:()=>this.filterTemplates(!1),shape:"round",variant:"tertiary",icon:"arrow-left-16",target:"_blank",size:"m"}),t("div",{key:"b91f587d291208f5f67a2fc5ea19c9253e393860",class:"alert__wrapper"},t("ifx-alert",{key:"d0ee2491c8e52d39b05bd4ce5b9a21ba3300f5c2",onClick:()=>this.closeAlert(),"aria-live":"assertive",variant:"danger",icon:"c-info-24"},"All fields are mandatory"))),t("h2",{key:"aaf1a750b6277f6644d05a9aefa27c3c36f7cf88",class:"templates__title"},"Choose your template"),t("div",{key:"f484bc4ba4f2f91ede04eb39f422b0a971b71113",class:"templates__wrapper"},t("ifx-template",{key:"056c35bdd617a568c2dc012cb88762be7c8455c9",name:"template-01",thumbnail:this.tableTemplate}),t("ifx-template",{key:"d65ec2d5fe3f12e7a718d493abd3dbf5e22de531",name:"template-02",thumbnail:this.wizardTemplate})))}static get assetsDirs(){return["assets"]}get el(){return i(this)}};n.style=c;export{n as ifx_templates_ui};
