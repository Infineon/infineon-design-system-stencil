import{r as t,h as e,g as a}from"./index-CcPIQBvs.js";import{i as n}from"./icons-4575d84a-Bveiqm1q.js";const c='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',r=c,s=class{constructor(i){t(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"ec1ab6fa3f814e6152e645469e55d35b9eb62aa4",class:"container"},e("div",{key:"7b9668389ce7490fd87dcff8651afc7f209458ce",class:"html-wrapper"},e("span",{key:"9242e97548055a411dded936ad64609a25eda9ea",class:"html-tag"},"<"),e("span",{key:"ed719c5926ce3cc689df65c81c39c2204f9ca14c",class:"component-name"},"ifx-icon"),e("span",{key:"398a93e73e6da85631e1a70f8b8fee4814007566",class:"attribute-name"}," icon"),"=",e("span",{key:"e6ce17f98dc1f6842fe9b7f6b40b2ceaadcd100a",class:"attribute-value"},this.iconName),e("span",{key:"7fd3afa6672b0cc297644c10b20c37a4ae2ba184",class:"html-tag"},">"),e("span",{key:"98660969ef011656248a7743d93028b671f9a9d5",class:"html-tag"},"</"),e("span",{key:"6132e7e42bdf7120750636f0eb8b04b7b8f17e19",class:"component-name"},"ifx-icon"),e("span",{key:"ed209cfe2ef1c6a6a86556cc5753b6a674325a88",class:"html-tag"},">"),e("button",{key:"d73ee72947e57e7628d84ea80ed1fd523b905238",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"b2e0675ccf68faa6b89f79f09625357bcd33c816",class:"preview__container"},this.iconsArray.map((i,o)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===o?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return a(this)}};s.style=r;export{s as ifx_icons_preview};
