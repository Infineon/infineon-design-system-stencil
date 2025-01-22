"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[313],{313:(n,t,r)=>{r.r(t),r.d(t,{ifx_alert:()=>l});var e=r(4115);const l=(()=>{let o=class{constructor(i){(0,e.r)(this,i),this.ifxClose=(0,e.c)(this,"ifxClose",7),this.variant="primary",this.closable=!0,this.AriaLive="assertive",this.alertTypeDescription={primary:"Neutral alert",success:"Success Alert",danger:"Error Alert",warning:"Warning Alert",info:"Neutral alert"}}handleClose(){this.ifxClose.emit()}renderCloseButton(){return(0,e.h)("div",{class:"close-icon-wrapper"},(0,e.h)("button",{onClick:this.handleClose.bind(this),"aria-label":"Dismiss alert"},(0,e.h)("ifx-icon",{icon:"cross-16"})))}generateUniqueId(i="id"){return`${i}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("alert"))}render(){return"info"===this.variant?(0,e.h)("div",{class:"alert__info-wrapper",role:"alert","aria-live":this.AriaLive,"aria-describedby":this.alertTypeDescription[this.variant],"aria-labelledby":"alert-text alert-description"},(0,e.h)("div",{class:"info__text-wrapper"},(0,e.h)("div",{class:"info__headline-wrapper"},(0,e.h)("slot",{name:"headline"})),(0,e.h)("div",{id:`alert-description-${this.uniqueId}`,class:"info__description-wrapper"},(0,e.h)("slot",{name:"desc"}))),this.closable?this.renderCloseButton():null):(0,e.h)("div",{class:`alert ${this.variant}`,role:"alert"},this.icon&&(0,e.h)("div",{class:"icon-wrapper"},(0,e.h)("ifx-icon",{icon:this.icon})),(0,e.h)("div",{class:"alert-text",id:`alert-text-${this.uniqueId}`},(0,e.h)("slot",null)),this.closable?this.renderCloseButton():null)}};return o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.alert__info-wrapper{display:flex;padding:16px 24px;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert__info-wrapper .info__text-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper{display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper,.alert__info-wrapper .info__text-wrapper .info__description-wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper ::slotted(p),.alert__info-wrapper .info__text-wrapper .info__description-wrapper ::slotted(p){padding:0;margin:0}.alert__info-wrapper .info__text-wrapper .info__description-wrapper{font-weight:400}.alert__info-wrapper .close-icon-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.alert__info-wrapper .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert__info-wrapper .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.success{border:1px solid #4CA460}.alert.success .icon-wrapper{background-color:#4CA460;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}.close-icon-wrapper ifx-icon:hover{cursor:pointer}',o})()}}]);