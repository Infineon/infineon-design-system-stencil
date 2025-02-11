import{r as l,c as s,h as e,g as c}from"./index-VhSW81qW.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.alert__info-wrapper{display:flex;padding:16px 24px;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert__info-wrapper .info__text-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper{display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper,.alert__info-wrapper .info__text-wrapper .info__description-wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper ::slotted(p),.alert__info-wrapper .info__text-wrapper .info__description-wrapper ::slotted(p){padding:0;margin:0}.alert__info-wrapper .info__text-wrapper .info__description-wrapper{font-weight:400}.alert__info-wrapper .close-icon-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.alert__info-wrapper .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert__info-wrapper .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.success{border:1px solid #4CA460}.alert.success .icon-wrapper{background-color:#4CA460;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}.close-icon-wrapper ifx-icon:hover{cursor:pointer}',h=d,f=class{constructor(t){l(this,t),this.ifxClose=s(this,"ifxClose",7),this.variant="primary",this.closable=!0,this.AriaLive="assertive",this.alertTypeDescription={primary:"Neutral alert",success:"Success Alert",danger:"Error Alert",warning:"Warning Alert",info:"Neutral alert"}}handleClose(){this.ifxClose.emit()}renderCloseButton(){return e("div",{class:"close-icon-wrapper"},e("button",{onClick:this.handleClose.bind(this),"aria-label":"Dismiss alert"},e("ifx-icon",{icon:"cross-16"})))}generateUniqueId(t="id"){return`${t}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("alert"))}render(){return this.variant==="info"?e("div",{class:"alert__info-wrapper",role:"alert","aria-live":this.AriaLive,"aria-describedby":this.alertTypeDescription[this.variant],"aria-labelledby":"alert-text alert-description"},e("div",{class:"info__text-wrapper"},e("div",{class:"info__headline-wrapper"},e("slot",{name:"headline"})),e("div",{id:`alert-description-${this.uniqueId}`,class:"info__description-wrapper"},e("slot",{name:"desc"}))),this.closable?this.renderCloseButton():null):e("div",{class:`alert ${this.variant}`,role:"alert"},this.icon&&e("div",{class:"icon-wrapper"},e("ifx-icon",{icon:this.icon})),e("div",{class:"alert-text",id:`alert-text-${this.uniqueId}`},e("slot",null)),this.closable?this.renderCloseButton():null)}};f.style=h;const u=".react__template-wrapper{display:flex;width:300px;height:200px;border-radius:3px;border:1px solid #ccc}.react__template-wrapper.hide{display:none}.react__template-wrapper:hover{cursor:pointer}.template__page-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.template__page-wrapper .repository__url{text-decoration:none}.input__fields-wrapper{display:flex;flex-direction:column;gap:10px}.details__wrapper{display:flex;flex-direction:column;gap:10px}.selection__buttons-wrapper{display:flex;gap:10px;padding-top:10px;align-items:center}.selection__buttons-wrapper .vue__label{color:#ccc}.selection__buttons-wrapper label:not(.vue__label):hover{cursor:pointer}.selection__buttons-wrapper .selection__input{display:flex;align-items:center;gap:5px}.selection__buttons-wrapper .selection__input input{margin:0;height:20px;width:20px}.selection__buttons-wrapper .selection__input input:hover:not(.vue__input){cursor:pointer}.image__wrapper img{position:relative;width:300px;height:100%;border-radius:3px;object-fit:contain;transition:transform 0.2s}.image__wrapper img:hover{transform:scale(2);top:50px;z-index:100}",m=u,_=class{constructor(t){l(this,t),this.toggleTemplates=s(this,"toggleTemplates",7),this.fieldError=s(this,"fieldError",7),this.repoDetails={name:"",desc:"",framework:""},this.showDetails=!1,this.isTemplatePage=!1,this.isLoading=!0,this.clientId="Ov23lixmXiNTTNb6V5W6",this.redirectUri="https://infineon.github.io/infineon-design-system-stencil/?path=/docs/dds-templates--development",this.scope="repo workflow",this.state="template123"}authUser(){const t=`https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scope}&state=${this.state}`;window.open(t,"_blank")}componentDidLoad(){const r=new URL(window.location.href).searchParams.get("code"),{templateName:a}=this.getLocalStorageValues();r&&this.name===a&&(this.isTemplatePage=!0,this.toggleTemplates.emit("details"),this.getUserToken(r))}getLocalStorageValues(){const t=localStorage.getItem("repo_name"),r=localStorage.getItem("repo_desc"),a=localStorage.getItem("repo_framework"),o=localStorage.getItem("selectedTemplate");return{repoName:t,repoDesc:r,repoFramework:a,templateName:o}}async getUserToken(t){const{repoName:r,repoDesc:a,repoFramework:o,templateName:n}=this.getLocalStorageValues();fetch(`https://dds-templates.eu-central-1.elasticbeanstalk.com/token/${t}/${r}/${a}/${o}/${n}`).then(i=>i.ok?i.text():i.text().then(p=>{throw new Error(p)})).then(i=>{i&&(this.isLoading=!1,this.repoUrl=i,localStorage.clear())}).catch(i=>{this.repoError=i.message,console.error("Error:",i.message)})}handleUserInput(t,r){r==="name"?this.repoDetails=Object.assign(Object.assign({},this.repoDetails),{name:t.target.value}):r==="desc"?this.repoDetails=Object.assign(Object.assign({},this.repoDetails),{desc:t.target.value}):r==="framework"&&(this.repoDetails=Object.assign(Object.assign({},this.repoDetails),{framework:t.target.value}))}submitUserData(){this.repoDetails.name&&this.repoDetails.desc&&this.repoDetails.framework?(localStorage.setItem("repo_name",this.repoDetails.name),localStorage.setItem("repo_desc",this.repoDetails.desc),localStorage.setItem("repo_framework",this.repoDetails.framework),localStorage.setItem("selectedTemplate",this.name),this.fieldError.emit(!1),this.authUser()):this.fieldError.emit("All fields are mandatory")}togglePadding(t){let r=this.el.parentElement;if(r){const a=r.getRootNode();a instanceof ShadowRoot?r=a.host.parentElement:r=r.parentElement,t==="remove"?r.parentElement.style.padding="0px":t==="add"&&(r.parentElement.style.padding="4rem 20px")}}handleCurrentTemplate(t){if(t&&!this.showDetails){this.togglePadding("remove");const r=t.currentTarget;this.toggleTemplates.emit(r),this.showDetails=!0}}async toggleTemplate(t){const r=this.el.shadowRoot.querySelector(".react__template-wrapper");r&&(!r.classList.contains("hide")&&t?r!==t&&r.classList.add("hide"):(this.showDetails&&(this.showDetails=!1),this.togglePadding("add"),r.classList.remove("hide")))}render(){return e("div",{key:"b0774ebe1c3e3144ef40770c6ca8169c1f518c00"},this.isTemplatePage?e("div",{class:"template__page-wrapper"},!this.repoUrl&&!this.repoError&&e("div",null,e("h3",null,"Your repository is getting ready.."),e("p",null,"This will only take a minute.")),this.isLoading&&!this.repoError&&e("div",null,e("ifx-spinner",{variant:"default",size:"s"})),this.repoUrl&&e("ifx-link",{href:this.repoUrl,target:"_parent",size:"m",variant:"underlined"},"Your repository"),this.repoError&&e("div",null,this.repoError)):e("div",{class:"react__template-container"},e("div",{class:"react__template-wrapper",onClick:t=>this.handleCurrentTemplate(t)},e("div",{class:"image__wrapper"},e("img",{src:this.thumbnail}))),this.showDetails&&e("div",{class:"details__wrapper"},e("div",{class:"selection__buttons-wrapper"},e("div",{class:"selection__input"},e("input",{type:"radio",id:"react",name:"chosen_framework",value:"react",onInput:t=>this.handleUserInput(t,"framework")}),e("label",{htmlFor:"react"},"React")),e("div",{class:"selection__input vue"},e("input",{class:"vue__input",disabled:!0,type:"radio",id:"vue",name:"chosen_framework",value:"vue",onInput:t=>this.handleUserInput(t,"framework")}),e("label",{class:"vue__label",htmlFor:"vue"},"Vue")," (Soon)")),e("div",{class:"input__fields-wrapper"},e("ifx-text-field",{required:!0,onInput:t=>this.handleUserInput(t,"name"),size:"m",icon:"c-info-16",placeholder:"Your repository name"},"Repository Name"),e("ifx-text-field",{required:!0,size:"m",icon:"c-info-16",onInput:t=>this.handleUserInput(t,"desc"),placeholder:"Your repository description"},"Repository Description"),e("ifx-button",{fullWidth:!0,onClick:()=>this.submitUserData(),variant:"primary"},"Generate template")))))}get el(){return c(this)}};_.style=m;export{f as ifx_alert,_ as ifx_template};
