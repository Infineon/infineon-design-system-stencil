"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4920],{4920:(s,a,o)=>{o.r(a),o.d(a,{ifx_icons_preview:()=>t});var e=o(3415),n=o(1706);const t=class{constructor(i){(0,e.r)(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){navigator.clipboard.writeText(`<ifx-icon icon=${this.iconName}></ifx-icon>`),this.handleCopiedText()}componentWillLoad(){for(let i in n.i)this.iconsArray.push(i)}render(){return(0,e.h)("div",{key:"2081afa4d9a5a251b6a68754bf5b71960f403839",class:"container"},(0,e.h)("div",{key:"db27a25e59e2a3ed5953fdb4fd547ed5fae88278",class:"html-wrapper"},(0,e.h)("span",{key:"87f583f67bf73d37324b4d66381bb1c332291e70",class:"html-tag"},"<"),(0,e.h)("span",{key:"63d51cb34df6e6a4b4039125ecc5f866d4005802",class:"component-name"},"ifx-icon"),(0,e.h)("span",{key:"8605bd83b6b0b0198662f8c7450245f9a0e8050d",class:"attribute-name"}," icon"),"=",(0,e.h)("span",{key:"184678799e9835450302a24d39c7b806018d9b87",class:"attribute-value"},this.iconName),(0,e.h)("span",{key:"4cf7b0504259a53ca00198bfccf9aee20c1e2342",class:"html-tag"},">"),(0,e.h)("span",{key:"18413179b73bdbc3c2903bcaa24626ccfc9602dc",class:"html-tag"},"</"),(0,e.h)("span",{key:"5c60979b41a8e9c8602948efa6dc8afa84a55789",class:"component-name"},"ifx-icon"),(0,e.h)("span",{key:"9340c7e1a19c6ba3b86edeafebf0f652b077f7b5",class:"html-tag"},">"),(0,e.h)("button",{key:"703a0a3dc5b393ab7fd622b8ec03367f2709698d",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),(0,e.h)("div",{key:"2f5afce829168c45a6622bda99d6a69db0491ebe",class:"preview__container"},this.iconsArray.map((i,r)=>(0,e.h)("div",{class:"preview__container-item "+(this.isCopied&&this.copiedIndex===r?"copied":""),onClick:()=>this.copyIconText(i)},(0,e.h)("ifx-icon",{icon:i})))))}get el(){return(0,e.g)(this)}};t.style='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:1000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);