"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[880],{2880:function(e,i,n){n.r(i),n.d(i,{ifx_icons_preview:function(){return p}});var t=n(5671),o=n(9466),r=n(9813),c=n(2461),p=function(){function e(i){(0,t.Z)(this,e),(0,r.r)(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0}return(0,o.Z)(e,[{key:"handleToolTip",value:function(e){var i=this;this.isCopied=!0,this.copiedIndex=e,setTimeout((function(){i.isCopied=!1}),2e3)}},{key:"copyIconText",value:function(e,i){navigator.clipboard.writeText(e),this.handleToolTip(i)}},{key:"componentWillLoad",value:function(){for(var e in c.i)this.iconsArray.push(e)}},{key:"render",value:function(){var e=this;return(0,r.h)("div",{class:"preview__container"},this.iconsArray.map((function(i,n){return(0,r.h)("div",{class:"preview__container-item ".concat(e.isCopied&&e.copiedIndex===n?"copied":""),onClick:function(){return e.copyIconText(i,n)}},(0,r.h)("ifx-icon",{icon:i}))})))}},{key:"el",get:function(){return(0,r.g)(this)}}]),e}();p.style='.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:10000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);
//# sourceMappingURL=880.f2bfc534.chunk.js.map