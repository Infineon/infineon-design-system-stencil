"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[4917],{4917:(l,t,n)=>{n.r(t),n.d(t,{ifx_modal:()=>i});var a=n(5861),o=n(5544);const i=class{constructor(e){(0,o.r)(this,e),this.modalOpen=(0,o.c)(this,"modalOpen",7),this.modalClose=(0,o.c)(this,"modalClose",7),this.closeButtonClick=(0,o.c)(this,"closeButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel"}open(){var e=this;return(0,a.Z)(function*(){e.showModal=!0,e.modalOpen.emit()})()}close(){var e=this;return(0,a.Z)(function*(){e.showModal=!1,e.modalClose.emit(),e.handleCloseButtonClick()})()}handleCloseButtonClick(){this.closeButtonClick.emit()}handleOverlayClick(){this.closeOnOverlayClick&&this.close()}render(){const e="default"!==this.variant;return(0,o.h)("div",{class:"modal-container "+(this.showModal?"open":"")},(0,o.h)("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,o.h)("div",{class:"modal-content-container"},e?(0,o.h)("div",{class:"modal-icon-container "+("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,o.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,o.h)("div",{class:"modal-content"},(0,o.h)("div",{class:"modal-header"},(0,o.h)("h2",null,this.caption),(0,o.h)("ifx-icon-button",{icon:"cross-24",variant:"tertiary",onClick:()=>this.close()})),(0,o.h)("div",{class:"modal-body"},(0,o.h)("slot",{name:"content"})),(0,o.h)("div",{class:"modal-footer"},(0,o.h)("slot",{name:"buttons"},(0,o.h)("ifx-button",null,this.okButtonLabel),(0,o.h)("ifx-button",{variant:"secondary"},this.cancelButtonLabel))))))}};i.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("~@infineon/design-system-tokens/dist/fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3", sans-serif}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5}.modal-content-container{position:absolute;display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;font-family:"Source Sans 3"}@media screen and (min-width: 768px){.modal-content-container{width:540px;height:220px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;height:100%}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:16px 24px;height:56px;box-sizing:border-box;flex:1}.modal-body slot[name=content]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.modal-footer{display:flex;align-items:center;padding-top:16px;padding-bottom:32px;padding-right:24px;gap:1em;height:88px;box-sizing:border-box;margin-left:auto}.modal-footer ::slotted(*){display:flex;gap:24px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);