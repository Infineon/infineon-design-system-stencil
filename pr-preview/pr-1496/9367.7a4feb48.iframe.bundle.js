"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9367],{"./dist/esm/ifx-templates-ui.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_templates_ui:()=>TemplatesUI});var _index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3a99c8dc.js");const TemplatesUI=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}toggleTemplate(currTemp){this.el.shadowRoot.querySelector(".templates__wrapper").querySelectorAll("ifx-template").forEach((template=>{const templateWrapper=template.shadowRoot.querySelector(".react__template-wrapper");!templateWrapper.classList.contains("hide")&&currTemp?templateWrapper!==currTemp&&template.toggleTemplate("add"):template.toggleTemplate("remove")}))}filterTemplates(e){e.detail?this.toggleTemplate(e.detail):this.toggleTemplate(null)}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8dd7237ad39a4fc6d75626c243b0ee6b0e0e51c7",class:"templates__container"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{key:"8c0bc6122f0426e519be088302558b8f6647a125"},"Templates"),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3705565d31a0804f982cd4049dc71fd89a8bf2b4",class:"templates__wrapper"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"0b046ebdd83bd1a09e45780b58f1c97751b51d40",name:"template-01"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"399f4c2fd3475fa59d0f15be7b568d68227f020e",name:"template-02"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"d61c43ef679a5fce918c61e02a37094a600a911c",name:"template-03"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"a82228fdcd0cc9467bdd5184af7ed59aed6cc7ca",name:"template-04"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"e21921f249f22bdf0c0f0da98ed89f27a050ed60",name:"template-05"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-template",{key:"5bb17c6e5752ed6e2877ce92ebccd126c4279be3",name:"template-06"})))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};TemplatesUI.style="*{padding:0;margin:0}.templates__container{display:flex;flex-direction:column;align-items:center}.templates__wrapper{display:flex;padding:20px 0px;gap:20px;flex-wrap:wrap}"}}]);