import{r as a,c as o,h as t,g as i}from"./index-DecKdaiC.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',d=n,l=class{constructor(e){a(this,e),this.ifxChange=o(this,"ifxChange",7),this.disabled=!1,this.error=!1,this.size="s",this.internalChecked=!1,this.hasSlot=!1}componentWillLoad(){if(this.fallbackInput=document.createElement("input"),this.fallbackInput.type="radio",this.fallbackInput.hidden=!0,this.el.appendChild(this.fallbackInput),"attachInternals"in HTMLElement.prototype)try{this.internals=this.el.attachInternals()}catch{console.warn("ElementInternals not supported")}this.internalChecked=this.checked||!1,this.hasSlot=!!this.el.querySelector("[slot]")||this.el.innerHTML.trim()!==""}handleCheckedChange(e){this.internalChecked=e}updateFormValue(){var e;!((e=this.internals)===null||e===void 0)&&e.setFormValue&&this.internals.setFormValue(this.internalChecked?this.value:null),this.fallbackInput.checked=this.internalChecked,this.fallbackInput.name=this.name,this.fallbackInput.value=this.value,this.fallbackInput.disabled=this.disabled}handleRadioButtonClick(e){if(this.disabled){e.stopPropagation();return}this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.checked=this.internalChecked,this.ifxChange.emit(this.internalChecked);const r=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{checked:this.internalChecked}});this.el.dispatchEvent(r)}handleKeyDown(e){[" ","Enter"].includes(e.key)&&(e.preventDefault(),this.handleRadioButtonClick(new PointerEvent("click")))}handleExternalChange(e){const r=e.target;r===this.el||r.tagName.toLowerCase()!=="ifx-radio-button"||r.getAttribute("name")===this.name&&(this.internalChecked=!1)}render(){return t("div",{key:"b58007e9a157af883666b4fb20ed08943ce28ab2",role:"radio","aria-checked":String(this.internalChecked),"aria-disabled":String(this.disabled),class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:e=>this.handleRadioButtonClick(e),tabindex:this.disabled?-1:0},t("div",{key:"c2f97120f8d1520df4b8906fb1f936a1353d2982",class:`radioButton__wrapper 
            ${this.internalChecked?"checked":""} 
            ${this.disabled?"disabled":""} 
            ${this.error?"error":""}`},this.internalChecked&&t("div",{key:"e8401a1044f66d8942d5a6306aa538a70ba688ec",class:"radioButton__wrapper-mark"})),this.hasSlot&&t("div",{key:"5f67e5d788259b9867b38c31e5db670754a8967b",class:`label ${this.size==="m"?"label-m":""} ${this.disabled?"disabled":""}`},t("slot",{key:"54548cb0f1561f2820b5f60c31a5b3882b3a3d16"})),t("input",{key:"d1dd42ed4f106aab1029e71ec79d49b29f8a1ad8",type:"radio",hidden:!0,ref:e=>this.inputElement=e,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:e=>e.stopPropagation()}))}static get formAssociated(){return!0}get el(){return i(this)}static get watchers(){return{checked:["handleCheckedChange"],internalChecked:["updateFormValue"]}}};l.style=d;export{l as ifx_radio_button};
