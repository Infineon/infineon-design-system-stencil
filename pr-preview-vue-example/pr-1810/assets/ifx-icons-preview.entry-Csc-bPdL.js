import{r as o,h as e,g as t}from"./index-DYZdmqwj.js";import{i as n}from"./icons-4575d84a-Bveiqm1q.js";const r='.container{display:flex;flex-direction:column;gap:10px}.alert__wrapper{margin-bottom:40px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',c=r,s=class{constructor(i){o(this,i),this.iconsArray=[],this.isCopied=!1,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"e3ed92479ffb41bd72727bf347ca1d541d9e5234",class:"container"},e("div",{key:"7d28183d5520244e79761bfd821e1bb348d43037",class:"alert__wrapper"},e("ifx-notification",{key:"e28cca066b39822a9878998251a8ea5580474987",icon:"c-check-16",variant:"neutral","link-text":"Figma icon library","link-href":"https://www.figma.com/design/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-UI-icon-library?node-id=13284-1289&p=f&t=SD6EdmXaSufsjPCv-0","link-target":"_blank"},"You can also find the UI icons in Figma for use in mockups.")),e("div",{key:"36f521e669f51b37cc5dfaa7736a1da55b4e4fd7",class:"html-wrapper"},e("span",{key:"fc52bdc808875c10b6c08ba506359091bd44d84b",class:"html-tag"},"<"),e("span",{key:"e06c3036a36613e5e4e1d744cfa793d3137d4f8f",class:"component-name"},"ifx-icon"),e("span",{key:"c2dcc4854bf7032857a43f3f9a7db57fb8587057",class:"attribute-name"}," icon"),"=",e("span",{key:"dba3bd710f2f65debf2bb9019eb1355610ec686f",class:"attribute-value"},this.iconName),e("span",{key:"aba91b4dbba34073cb33daaf03aa579e4a584bf8",class:"html-tag"},">"),e("span",{key:"4927b9e79aae407ef38fd678996e55216c924081",class:"html-tag"},"</"),e("span",{key:"0451791a6389cdac2a3e478e780b748af8750550",class:"component-name"},"ifx-icon"),e("span",{key:"84f1cae2f523b5841b9034a7726d3abb32717f1c",class:"html-tag"},">"),e("button",{key:"7b2a1a0725f4d2388526d39022eb681d82550e7f",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"0d21935b4268c2c43ea46651eb851d56a1c57141",class:"preview__container"},this.iconsArray.map((i,a)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===a?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return t(this)}};s.style=c;export{s as ifx_icons_preview};
