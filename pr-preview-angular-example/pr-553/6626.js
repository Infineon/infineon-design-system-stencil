"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[6626],{6626:(m,i,n)=>{n.r(i),n.d(i,{ifx_accordion:()=>a,ifx_accordion_item:()=>c});var e=n(5861),o=n(5544);const a=class{constructor(t){(0,o.r)(this,t),this.autoCollapse=!1}onItemOpen(t){var s=this;return(0,e.Z)(function*(){if(console.log("here",s.autoCollapse),s.autoCollapse){const u=Array.from(s.el.querySelectorAll("ifx-accordion-item"));for(const d of u){const r=d;r!==t.target&&(yield r.isOpen())&&r.close()}}})()}render(){return(0,o.h)("div",{class:"accordion-wrapper"},(0,o.h)("slot",null))}get el(){return(0,o.g)(this)}};a.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';const c=class{constructor(t){(0,o.r)(this,t),this.ifxItemOpen=(0,o.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,o.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}componentDidUpdate(){this.contentEl.style.maxHeight=this.open?`${this.contentEl.scrollHeight}px`:"0"}close(){var t=this;return(0,e.Z)(function*(){t.open=!1,t.ifxItemClose.emit()})()}isOpen(){var t=this;return(0,e.Z)(function*(){return t.open})()}render(){return(0,o.h)("div",{class:"accordion-item "+(this.open?"open":"")},(0,o.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,o.h)("span",{class:"accordion-icon"},(0,o.h)("ifx-icon",{icon:"chevron-down-12"})),(0,o.h)("span",{class:"accordion-caption"},this.caption)),(0,o.h)("div",{class:"accordion-content",ref:t=>this.contentEl=t},(0,o.h)("div",{class:"inner-content"},(0,o.h)("slot",null))))}};c.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);