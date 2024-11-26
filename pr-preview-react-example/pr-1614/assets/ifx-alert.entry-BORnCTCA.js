import{r as i,c as t,h as e}from"./index-CLnybBl_.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.alert__info-wrapper{display:flex;padding:16px 24px;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert__info-wrapper .info__text-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper{display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper,.alert__info-wrapper .info__text-wrapper .info__description-wrapper{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper ::slotted(p),.alert__info-wrapper .info__text-wrapper .info__description-wrapper ::slotted(p){padding:0;margin:0}.alert__info-wrapper .info__text-wrapper .info__description-wrapper{font-weight:400}.alert__info-wrapper .close-icon-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.alert__info-wrapper .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert__info-wrapper .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF;font-family:var(--ifx-font-family);box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843)}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper button{all:unset;display:flex;align-items:center;justify-content:center;line-height:0;color:#1D1D1D;height:24px;width:24px}.alert .close-icon-wrapper button:focus{outline:2px solid #0A8276;outline-offset:2px}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.success{border:1px solid #4CA460}.alert.success .icon-wrapper{background-color:#4CA460;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}.close-icon-wrapper ifx-icon:hover{cursor:pointer}',a=o,n=class{constructor(r){i(this,r),this.ifxClose=t(this,"ifxClose",7),this.alertTypeDescription={primary:"Neutral alert",success:"Success Alert",danger:"Error Alert",warning:"Warning Alert",info:"Neutral alert"},this.variant="primary",this.icon=void 0,this.closable=!0,this.AriaLive="assertive",this.uniqueId=void 0}handleClose(){this.ifxClose.emit()}renderCloseButton(){return e("div",{class:"close-icon-wrapper"},e("button",{onClick:this.handleClose.bind(this),"aria-label":"Dismiss alert"},e("ifx-icon",{icon:"cross-16"})))}generateUniqueId(r="id"){return`${r}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("alert"))}render(){return this.variant==="info"?e("div",{class:"alert__info-wrapper",role:"alert","aria-live":this.AriaLive,"aria-describedby":this.alertTypeDescription[this.variant],"aria-labelledby":"alert-text alert-description"},e("div",{class:"info__text-wrapper"},e("div",{class:"info__headline-wrapper"},e("slot",{name:"headline"})),e("div",{id:`alert-description-${this.uniqueId}`,class:"info__description-wrapper"},e("slot",{name:"desc"}))),this.closable?this.renderCloseButton():null):e("div",{class:`alert ${this.variant}`,role:"alert"},this.icon&&e("div",{class:"icon-wrapper"},e("ifx-icon",{icon:this.icon})),e("div",{class:"alert-text",id:`alert-text-${this.uniqueId}`},e("slot",null)),this.closable?this.renderCloseButton():null)}};n.style=a;export{n as ifx_alert};
