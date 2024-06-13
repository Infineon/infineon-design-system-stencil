import{r as o,c as t,h as e}from"./index-e5405289.js";const n=':host{display:block;font-family:"Source Sans Pro"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #ebe9e9;background-color:#ebe9e9}.accordion-title{display:flex;align-items:center;padding:1rem;color:#378375;border:1px solid #ebe9e9;cursor:pointer}.accordion-caption{font-weight:600;font-size:1rem}.accordion-content{max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out}.accordion-content ::slotted(p){margin:0;padding:0}.inner-content{padding:24px}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s;margin-right:0.5rem}.accordion-item.open .accordion-icon{transform:rotate(90deg)}',s=class{constructor(i){o(this,i),this.itemOpened=t(this,"itemOpened",7),this.itemClosed=t(this,"itemClosed",7),this.caption=void 0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.itemOpened.emit():this.itemClosed.emit()}componentDidRender(){this.open?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}async close(){this.open=!1,this.itemClosed.emit()}async isOpen(){return this.open}render(){return e("div",{class:`accordion-item ${this.open?"open":""}`,onClick:()=>this.toggleOpen()},e("div",{class:"accordion-title"},e("span",{class:"accordion-icon"},"▶"),e("span",{class:"accordion-caption"},this.caption)),e("div",{class:"accordion-content",ref:i=>this.contentEl=i},e("div",{class:"inner-content"},e("slot",null))))}};s.style=n;export{s as ifx_accordion_item};