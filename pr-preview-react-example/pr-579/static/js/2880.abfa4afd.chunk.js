"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2880],{2880:function(i,e,n){n.r(e),n.d(e,{ifx_icons_preview:function(){return c}});var t=n(5671),o=n(3144),r=n(2243),a=n(8046),c=function(){function i(e){(0,t.Z)(this,i),(0,r.r)(this,e),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}return(0,o.Z)(i,[{key:"handleCopiedText",value:function(){var i=this;this.isCopied=!0,setTimeout((function(){i.isCopied=!1}),2e3)}},{key:"copyIconText",value:function(i){this.htmlTag='<ifx-icon icon="'.concat(i,'"></ifx-icon>'),this.iconName='"'.concat(i,'"')}},{key:"copyHtmlString",value:function(){var i="<ifx-icon icon=".concat(this.iconName,"></ifx-icon>");navigator.clipboard.writeText(i),this.handleCopiedText()}},{key:"componentWillLoad",value:function(){for(var i in a.i)this.iconsArray.push(i)}},{key:"render",value:function(){var i=this;return(0,r.h)("div",{class:"container"},(0,r.h)("div",{class:"html-wrapper"},(0,r.h)("span",{class:"html-tag"},"<"),(0,r.h)("span",{class:"component-name"},"ifx-icon"),(0,r.h)("span",{class:"attribute-name"}," icon"),"=",(0,r.h)("span",{class:"attribute-value"},this.iconName),(0,r.h)("span",{class:"html-tag"},">"),(0,r.h)("span",{class:"html-tag"},"</"),(0,r.h)("span",{class:"component-name"},"ifx-icon"),(0,r.h)("span",{class:"html-tag"},">"),(0,r.h)("button",{onClick:function(){return i.copyHtmlString()}},this.isCopied?"Copied":"Copy")),(0,r.h)("div",{class:"preview__container"},this.iconsArray.map((function(e,n){return(0,r.h)("div",{class:"preview__container-item ".concat(i.isCopied&&i.copiedIndex===n?"copied":""),onClick:function(){return i.copyIconText(e)}},(0,r.h)("ifx-icon",{icon:e}))}))))}},{key:"el",get:function(){return(0,r.g)(this)}}]),i}();c.style='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:10000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);
//# sourceMappingURL=2880.abfa4afd.chunk.js.map