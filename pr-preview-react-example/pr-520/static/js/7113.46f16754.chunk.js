"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7113],{7113:function(n,t,e){e.r(t),e.d(t,{ifx_accordion:function(){return s},ifx_accordion_item:function(){return l}});var o=e(4165),i=e(5861),r=e(5671),c=e(3144),a=e(1091),s=function(){function n(t){(0,r.Z)(this,n),(0,a.r)(this,t),this.autoCollapse=!1}return(0,c.Z)(n,[{key:"onItemOpen",value:function(){var n=(0,i.Z)((0,o.Z)().mark((function n(t){var e,i,r,c,a;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("here",this.autoCollapse),!this.autoCollapse){n.next=17;break}e=Array.from(this.el.querySelectorAll("ifx-accordion-item")),i=0,r=e;case 4:if(!(i<r.length)){n.next=17;break}if(c=r[i],a=c,n.t0=a!==t.target,!n.t0){n.next=12;break}return n.next=11,a.isOpen();case 11:n.t0=n.sent;case 12:if(!n.t0){n.next=14;break}a.close();case 14:i++,n.next=4;break;case 17:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"render",value:function(){return(0,a.h)("div",{class:"accordion-wrapper"},(0,a.h)("slot",null))}},{key:"el",get:function(){return(0,a.g)(this)}}]),n}();s.style='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';var l=function(){function n(t){(0,r.Z)(this,n),(0,a.r)(this,t),this.ifxItemOpen=(0,a.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,a.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1}return(0,c.Z)(n,[{key:"toggleOpen",value:function(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}},{key:"componentDidUpdate",value:function(){this.open?this.contentEl.style.maxHeight="".concat(this.contentEl.scrollHeight,"px"):this.contentEl.style.maxHeight="0"}},{key:"close",value:function(){var n=(0,i.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.open=!1,this.ifxItemClose.emit();case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"isOpen",value:function(){var n=(0,i.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.open);case 1:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this;return(0,a.h)("div",{class:"accordion-item ".concat(this.open?"open":"")},(0,a.h)("div",{class:"accordion-title",onClick:function(){return n.toggleOpen()}},(0,a.h)("span",{class:"accordion-icon"},(0,a.h)("ifx-icon",{icon:"chevron-down-12"})),(0,a.h)("span",{class:"accordion-caption"},this.caption)),(0,a.h)("div",{class:"accordion-content",ref:function(t){return n.contentEl=t}},(0,a.h)("div",{class:"inner-content"},(0,a.h)("slot",null))))}}]),n}();l.style='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);
//# sourceMappingURL=7113.46f16754.chunk.js.map