import{r as l,c as t,h as o}from"./index-71430625.js";const a=":host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5}.modal-content{width:100%;flex:1}.modal-content-container{position:absolute;display:flex;align-items:stretch;top:50%;left:50%;transform:translate(-50%, -50%);width:80%;max-width:500px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:15px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;border-bottom:1px solid #eee}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:1rem}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:15px}.modal-footer{display:flex;justify-content:flex-end;padding:15px;gap:1em}.modal-border{display:flex;align-items:center;justify-content:center;width:40px;font-size:1.5em}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}",n=class{constructor(e){l(this,e),this.modalOpen=t(this,"modalOpen",7),this.modalClose=t(this,"modalClose",7),this.okButtonClick=t(this,"okButtonClick",7),this.cancelButtonClick=t(this,"cancelButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.alertColor="",this.alertIcon=""}async open(){this.showModal=!0,this.modalOpen.emit()}async close(){this.showModal=!1,this.modalClose.emit()}handleOverlayClick(){this.closeOnOverlayClick&&this.close()}handleOkButtonClick(){this.okButtonClick.emit()}handleCancelButtonClick(){this.cancelButtonClick.emit()}render(){return o("div",{class:`modal-container ${this.showModal?"open":""}`},o("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),o("div",{class:"modal-content-container"},this.alertColor&&this.alertIcon?o("div",{class:`modal-border ${this.alertColor}`},o("ifx-icon",{icon:this.alertIcon})):null,o("div",{class:"modal-content"},o("div",{class:"modal-header"},o("h2",null,this.caption),o("button",{onClick:()=>this.close()},"×")),o("div",{class:"modal-body"},o("slot",{name:"content"})),o("div",{class:"modal-footer"},o("slot",{name:"buttons"},o("ifx-button",{variant:"secondary",onClick:()=>this.handleOkButtonClick()},"OK"),o("ifx-button",{onClick:()=>this.handleCancelButtonClick()},"Cancel"))))))}};n.style=a;export{n as ifx_modal};