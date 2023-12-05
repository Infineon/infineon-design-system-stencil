import{r as i,c as o,h as r}from"./index-131aa4f7.js";const a='*{font-family:"Source Sans 3"}:host{display:block}.alert__info-wrapper{display:flex;padding:16px 24px}.alert__info-wrapper .info__text-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper,.alert__info-wrapper .info__text-wrapper .info__description-wrapper{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper ::slotted(p),.alert__info-wrapper .info__text-wrapper .info__description-wrapper ::slotted(p){padding:0;margin:0}.alert__info-wrapper .info__text-wrapper .info__description-wrapper{font-weight:400}.alert__info-wrapper .close-icon-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.alert__info-wrapper .close-icon-wrapper a{line-height:0;color:#1D1D1D}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper a{line-height:0;color:#1D1D1D}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.secondary{border:1px solid #9C216E}.alert.secondary .icon-wrapper{background-color:#9C216E;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}',t=class{constructor(e){i(this,e),this.ifxClose=o(this,"ifxClose",7),this.variant="primary",this.icon=void 0}handleClose(){this.ifxClose.emit()}render(){return this.variant==="info"?r("div",{class:"alert__info-wrapper"},r("div",{class:"info__text-wrapper"},r("div",{class:"info__headline-wrapper"},r("slot",{name:"headline"})),r("div",{class:"info__description-wrapper"},r("slot",{name:"desc"}))),r("div",{class:"close-icon-wrapper"},r("a",{href:"javascript:void(0);",onClick:this.handleClose.bind(this)},r("ifx-icon",{icon:"cross-16"})))):r("div",{class:`alert ${this.variant}`},this.icon&&r("div",{class:"icon-wrapper"},r("ifx-icon",{icon:this.icon})),r("div",{class:"alert-text"},r("slot",null)),r("div",{class:"close-icon-wrapper"},r("a",{href:"javascript:void(0);",onClick:this.handleClose.bind(this)},r("ifx-icon",{icon:"cross-16"}))))}};t.style=a;export{t as ifx_alert};
