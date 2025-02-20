"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7539],{"./dist/esm/ifx-alert_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_alert:()=>Alert,ifx_template:()=>Template});var _index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b4eaf00e.js");const Alert=class{constructor(hostRef){(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxClose=(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxClose",7),this.variant="primary",this.closable=!0,this.AriaLive="assertive",this.alertTypeDescription={primary:"Neutral alert",success:"Success Alert",danger:"Error Alert",warning:"Warning Alert",info:"Neutral alert"}}handleClose(){this.ifxClose.emit()}renderCloseButton(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"close-icon-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{onClick:this.handleClose.bind(this),"aria-label":"Dismiss alert"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"cross-16"})))}generateUniqueId(prefix="id"){return`${prefix}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("alert"))}render(){return"info"===this.variant?(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert__info-wrapper",role:"alert","aria-live":this.AriaLive,"aria-describedby":this.alertTypeDescription[this.variant],"aria-labelledby":"alert-text alert-description"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"info__text-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"info__headline-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"headline"})),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:`alert-description-${this.uniqueId}`,class:"info__description-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"desc"}))),this.closable?this.renderCloseButton():null):(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`alert ${this.variant}`,role:"alert"},this.icon&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-text",id:`alert-text-${this.uniqueId}`},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),this.closable?this.renderCloseButton():null)}};Alert.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.alert__info-wrapper{display:flex;padding:16px 24px;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert__info-wrapper .info__text-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper{display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper,.alert__info-wrapper .info__text-wrapper .info__description-wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper ::slotted(p),.alert__info-wrapper .info__text-wrapper .info__description-wrapper ::slotted(p){padding:0;margin:0}.alert__info-wrapper .info__text-wrapper .info__description-wrapper{font-weight:400}.alert__info-wrapper .close-icon-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.alert__info-wrapper .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert__info-wrapper .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.success{border:1px solid #4CA460}.alert.success .icon-wrapper{background-color:#4CA460;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}.close-icon-wrapper ifx-icon:hover{cursor:pointer}';const Template=class{constructor(hostRef){(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.toggleTemplates=(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"toggleTemplates",7),this.fieldError=(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"fieldError",7),this.repoDetails={name:"",desc:"",framework:""},this.showDetails=!1,this.isTemplatePage=!1,this.isLoading=!0,this.clientId="Ov23lixmXiNTTNb6V5W6",this.redirectUri="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/dds-templates--development",this.scope="repo workflow",this.state="template123"}authUser(){const authorizationUrl=`https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scope}&state=${this.state}`;window.open(authorizationUrl,"_blank")}componentDidLoad(){const code=new URL(window.location.href).searchParams.get("code"),{templateName}=this.getLocalStorageValues();code&&this.name===templateName&&(this.isTemplatePage=!0,this.toggleTemplates.emit("details"),this.getUserToken(code))}getLocalStorageValues(){return{repoName:localStorage.getItem("repo_name"),repoDesc:localStorage.getItem("repo_desc"),repoFramework:localStorage.getItem("repo_framework"),templateName:localStorage.getItem("selectedTemplate")}}async getUserToken(authCode){const{repoName,repoDesc,repoFramework,templateName}=this.getLocalStorageValues();fetch(`https://dds-templates.eu-central-1.elasticbeanstalk.com/token/${authCode}/${repoName}/${repoDesc}/${repoFramework}/${templateName}`).then((response=>response.ok?response.text():response.text().then((errorMessage=>{throw new Error(errorMessage)})))).then((data=>{data&&(this.isLoading=!1,this.repoUrl=data,localStorage.clear())})).catch((error=>{this.repoError=error.message,console.error("Error:",error.message)}))}handleUserInput(e,type){"name"===type?this.repoDetails=Object.assign(Object.assign({},this.repoDetails),{name:e.target.value}):"desc"===type?this.repoDetails=Object.assign(Object.assign({},this.repoDetails),{desc:e.target.value}):"framework"===type&&(this.repoDetails=Object.assign(Object.assign({},this.repoDetails),{framework:e.target.value}))}submitUserData(){this.repoDetails.name&&this.repoDetails.desc&&this.repoDetails.framework?(localStorage.setItem("repo_name",this.repoDetails.name),localStorage.setItem("repo_desc",this.repoDetails.desc),localStorage.setItem("repo_framework",this.repoDetails.framework),localStorage.setItem("selectedTemplate",this.name),this.fieldError.emit(!1),this.authUser()):this.fieldError.emit("All fields are mandatory")}togglePadding(action){let parent=this.el.parentElement;if(parent){const rootNode=parent.getRootNode();parent=rootNode instanceof ShadowRoot?rootNode.host.parentElement:parent.parentElement,"remove"===action?parent.parentElement.style.padding="0px":"add"===action&&(parent.parentElement.style.padding="4rem 20px")}}handleCurrentTemplate(e){if(e&&!this.showDetails){this.togglePadding("remove");const targetTemplate=e.currentTarget;this.toggleTemplates.emit(targetTemplate),this.showDetails=!0}}async toggleTemplate(currTemp){const templateWrapper=this.el.shadowRoot.querySelector(".react__template-wrapper");templateWrapper&&(!templateWrapper.classList.contains("hide")&&currTemp?templateWrapper!==currTemp&&templateWrapper.classList.add("hide"):(this.showDetails&&(this.showDetails=!1),this.togglePadding("add"),templateWrapper.classList.remove("hide")))}render(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"05c372ff47a69e413efc175cbb98aa1f5ee9ec05"},this.isTemplatePage?(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"template__page-wrapper"},!this.repoUrl&&!this.repoError&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",null,"Your repository is getting ready.."),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,"This will only take a minute.")),this.isLoading&&!this.repoError&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-spinner",{variant:"default",size:"s"})),this.repoUrl&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-link",{href:this.repoUrl,target:"_parent",size:"m",variant:"underlined"},"Your repository"),this.repoError&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,this.repoError)):(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"react__template-container"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"react__template-wrapper",onClick:e=>this.handleCurrentTemplate(e)},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"image__wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{src:this.thumbnail}))),this.showDetails&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"details__wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"selection__buttons-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"selection__input"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"radio",id:"react",name:"chosen_framework",value:"react",onInput:e=>this.handleUserInput(e,"framework")}),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"react"},"React")),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"selection__input vue"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:"vue__input",disabled:!0,type:"radio",id:"vue",name:"chosen_framework",value:"vue",onInput:e=>this.handleUserInput(e,"framework")}),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"vue__label",htmlFor:"vue"},"Vue")," (Soon)")),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"input__fields-wrapper"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-text-field",{required:!0,onInput:e=>this.handleUserInput(e,"name"),size:"m",icon:"c-info-16",placeholder:"Your repository name"},"Repository Name"),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-text-field",{required:!0,size:"m",icon:"c-info-16",onInput:e=>this.handleUserInput(e,"desc"),placeholder:"Your repository description"},"Repository Description"),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-button",{fullWidth:!0,onClick:()=>this.submitUserData(),variant:"primary"},"Generate template")))))}get el(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Template.style=".react__template-wrapper{display:flex;width:300px;height:200px;border-radius:3px;border:1px solid #ccc}.react__template-wrapper.hide{display:none}.react__template-wrapper:hover{cursor:pointer}.template__page-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.template__page-wrapper .repository__url{text-decoration:none}.input__fields-wrapper{display:flex;flex-direction:column;gap:10px}.details__wrapper{display:flex;flex-direction:column;gap:10px}.selection__buttons-wrapper{display:flex;gap:10px;padding-top:10px;align-items:center}.selection__buttons-wrapper .vue__label{color:#ccc}.selection__buttons-wrapper label:not(.vue__label):hover{cursor:pointer}.selection__buttons-wrapper .selection__input{display:flex;align-items:center;gap:5px}.selection__buttons-wrapper .selection__input input{margin:0;height:20px;width:20px}.selection__buttons-wrapper .selection__input input:hover:not(.vue__input){cursor:pointer}.image__wrapper img{position:relative;width:300px;height:100%;border-radius:3px;object-fit:contain;transition:transform 0.2s}.image__wrapper img:hover{transform:scale(2);top:50px;z-index:100}"}}]);