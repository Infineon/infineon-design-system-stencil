import{r as t,h as e,g as a}from"./index-Byzes2V_.js";import{i as n}from"./icons-4575d84a-Bveiqm1q.js";const c='.container{display:flex;flex-direction:column;gap:10px}.alert__wrapper{margin-bottom:40px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',r=c,s=class{constructor(i){t(this,i),this.iconsArray=[],this.isCopied=!1,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"20449732d655432c7d44fd9fce8541b0d87f5e19",class:"container"},e("div",{key:"f25e220b7bd10e9c5b787f4c9728df347e4cb5af",class:"alert__wrapper"},e("ifx-notification",{key:"3ba77c447f819fb3ceda09d6405ea459e9b87b68",icon:"c-check-16",variant:"neutral","link-text":"Figma icon library","link-href":"https://www.figma.com/design/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-UI-icon-library?node-id=13284-1289&p=f&t=SD6EdmXaSufsjPCv-0","link-target":"_blank"},"You can also find the UI icons in Figma for use in mockups.")),e("div",{key:"602204068d805cc24f7ac5e307c511e07b8460db",class:"html-wrapper"},e("span",{key:"6f559c23c0de26a6c2ce35e6008b358a9e64defd",class:"html-tag"},"<"),e("span",{key:"9eb11c50e0cd06eaf7240d2ea428ac264abbe0f7",class:"component-name"},"ifx-icon"),e("span",{key:"82ff4d046c8d4c3887290e6495923d808f57047c",class:"attribute-name"}," icon"),"=",e("span",{key:"0a18248ca427f5d98cf1c8f909fcec0327ee7644",class:"attribute-value"},this.iconName),e("span",{key:"4cb0b6472e78a121ddfe03fbd540aace14bbe0f5",class:"html-tag"},">"),e("span",{key:"a01c724b868d795cd05506a92eed9673584aad8b",class:"html-tag"},"</"),e("span",{key:"5340548a881c78b994404d4ee2b858a2fdbe94c7",class:"component-name"},"ifx-icon"),e("span",{key:"63f3cdb7b3db815a2b83b6e43f81d9983aee1f4b",class:"html-tag"},">"),e("button",{key:"95583db076df7b302cf27ff6346bc4957f0ed9d7",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"5e6c467f4338b73e8dfe5ae96dc02005e6d3267c",class:"preview__container"},this.iconsArray.map((i,o)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===o?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return a(this)}};s.style=r;export{s as ifx_icons_preview};
