import{r as e,c as i,h as r}from"./index-ee68e9be.js";const a='*{font-family:"Source Sans 3"}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper a{line-height:0;color:#1D1D1D}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.secondary{border:1px solid #9C216E}.alert.secondary .icon-wrapper{background-color:#9C216E;color:#FFFFFF}.alert.success{border:1px solid #4CA460}.alert.success .icon-wrapper{background-color:#4CA460;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}',l=class{constructor(o){e(this,o),this.ifxClose=i(this,"ifxClose",7),this.color=void 0,this.icon=void 0}handleClose(){this.ifxClose.emit()}render(){return r("div",{class:`alert ${this.color}`},this.icon&&r("div",{class:"icon-wrapper"},r("ifx-icon",{icon:this.icon})),r("div",{class:"alert-text"},r("slot",null)),r("div",{class:"close-icon-wrapper"},r("a",{href:"javascript:void(0);",onClick:this.handleClose.bind(this)},r("ifx-icon",{icon:"cross-16"}))))}};l.style=a;export{l as ifx_alert};
