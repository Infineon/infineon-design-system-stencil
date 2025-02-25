"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3070],{"./dist/esm/ifx-templates-ui.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_templates_ui:()=>TemplatesUI});var _index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b4eaf00e.js");const TemplatesUI=class{constructor(hostRef){(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.tableTemplate=(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.d)("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png"),this.wizardTemplate=(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.d)("https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png")}toggleTemplate(currTemp){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach((template=>{template.toggleTemplate(currTemp)}))}handleError(e){const alertWrapper=this.el.shadowRoot.querySelector(".alert__wrapper");e.detail?alertWrapper.classList.add("show"):alertWrapper.classList.remove("show")}filterTemplates(e){const title=this.el.shadowRoot.querySelector(".templates__title"),backBtn=this.el.shadowRoot.querySelector(".back__btn-wrapper");e.detail?(title.classList.add("hide"),"details"!==e.detail&&backBtn.classList.add("show"),this.toggleTemplate(e.detail)):(title.classList.remove("hide"),backBtn.classList.remove("show"),this.toggleTemplate(null))}closeAlert(){this.el.shadowRoot.querySelector(".alert__wrapper").classList.remove("show")}render(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bf4c5ead310d88f7fe5c9bc213e40267bf429cb8",class:"templates__container"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e248745b8db68d2b1512202fa134d042edeb010e",class:"back__btn-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon-button",{key:"f10c5d5b37071427b674f11a4debd5a80df1af5e",onClick:()=>this.filterTemplates(!1),shape:"round",variant:"tertiary",icon:"arrow-left-16",target:"_blank",size:"m"}),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e5960d85b1e46f37580a3b62547164d0356cf575",class:"alert__wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-alert",{key:"ea1ce75c12f68e79f688e5bca76f40cf25fd72f9",onClick:()=>this.closeAlert(),"aria-live":"assertive",variant:"danger",icon:"c-info-24"},"All fields are mandatory"))),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{key:"8bbfa839ab5da993bc89ff3371e8bc64460f1c68",class:"templates__title"},"Choose your template"),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9f30ea639383bde71678215f0b80ee7111c4c5b1",class:"templates__wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"06d4725d8707904e4af6c4e302fbd00900cb0d9b",name:"template-01",thumbnail:this.tableTemplate}),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"755c2d29318c854be38e364d6c971b9931da19c6",name:"template-02",thumbnail:this.wizardTemplate})))}static get assetsDirs(){return["assets"]}get el(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};TemplatesUI.style="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__container .back__btn-wrapper{display:none}.templates__container .back__btn-wrapper.show{display:flex;justify-content:space-between;width:100%}.templates__container .back__btn-wrapper .alert__wrapper{display:none}.templates__container .back__btn-wrapper .alert__wrapper.show{display:block}.templates__container .templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}.templates__container .templates__title.hide{display:none}"}}]);