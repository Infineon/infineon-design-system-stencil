import{r as t,h as e,g as a}from"./index-Cw8oUnok.js";import{i as n}from"./icons-4575d84a-Bveiqm1q.js";const c='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',r=c,s=class{constructor(i){t(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"20449732d655432c7d44fd9fce8541b0d87f5e19",class:"container"},e("div",{key:"6fd53e62710f7ab63890ce6e0245695902abb7a8",class:"html-wrapper"},e("span",{key:"8e9cff151a6914ea2d8a6319ab21979f0507c0eb",class:"html-tag"},"<"),e("span",{key:"389011b9f0a2ce6019db57de937156192cf1c0c1",class:"component-name"},"ifx-icon"),e("span",{key:"6a3fb9f817129637958fd186ca5ff03bafcfceb2",class:"attribute-name"}," icon"),"=",e("span",{key:"4338281250f650d0f2dab7058afc2f32aa36c5af",class:"attribute-value"},this.iconName),e("span",{key:"ad84f46bc03ea691a9ae95d13b37c4018f9efd33",class:"html-tag"},">"),e("span",{key:"eca7b8e903e3136f077144a0db570af8c64b1760",class:"html-tag"},"</"),e("span",{key:"015cc6039fa1adb3c2c26b54adf24dedd34f9753",class:"component-name"},"ifx-icon"),e("span",{key:"b55e01ef4bf33be04d1a8ba16ebaee0697ca5128",class:"html-tag"},">"),e("button",{key:"1e111fa9ff68475edf23e8c7e47204ad79b7ebd1",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"ea82d997aa0444e2523177c4a1d27e07e095380c",class:"preview__container"},this.iconsArray.map((i,o)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===o?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return a(this)}};s.style=r;export{s as ifx_icons_preview};
