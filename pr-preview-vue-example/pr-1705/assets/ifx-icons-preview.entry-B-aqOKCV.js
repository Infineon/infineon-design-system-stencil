import{r as o,h as e,g as t}from"./index-CsSYzlNJ.js";import{i as n}from"./icons-4575d84a-Bveiqm1q.js";const c='.container{display:flex;flex-direction:column;gap:10px}.alert__wrapper{margin-bottom:40px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:sticky;top:0;left:0;z-index:99}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:50;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',r=c,s=class{constructor(i){o(this,i),this.iconsArray=[],this.isCopied=!1,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"1115df3774a76b620e5a03e11bd3ef59e5ff05fd",class:"container"},e("div",{key:"e513e6952f643ceb85c11b00ac515a169d4b10ff",class:"alert__wrapper"},e("ifx-notification",{key:"4d4a5adc91abfce7f1aeffcbb5eaf49459d8cb63",icon:"c-check-16",variant:"success","link-text":"Figma icon library","link-href":"https://www.figma.com/design/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-UI-icon-library?node-id=13284-1289&p=f&t=SD6EdmXaSufsjPCv-0","link-target":"_blank"},"You can also find the UI icons in Figma for use in mockups.")),e("div",{key:"f697a5c0fc135ce5e4c6fdb46e9048546b56819b",class:"html-wrapper"},e("span",{key:"893d72ee2dd899e21cc8901dd63417e92257ebc2",class:"html-tag"},"<"),e("span",{key:"fc80b732f5274841790a4a7d0a080e072f355720",class:"component-name"},"ifx-icon"),e("span",{key:"aee512ce9297d447d5a60cef6abec4033a1b8cff",class:"attribute-name"}," icon"),"=",e("span",{key:"6da85573beefb794f1aa4ad50a687086f06a6c3d",class:"attribute-value"},this.iconName),e("span",{key:"86582b2a2011836773285e45de5235ffb568ffd8",class:"html-tag"},">"),e("span",{key:"34684e64ccd0f7a92f52e8dbc108d7fce5494c6d",class:"html-tag"},"</"),e("span",{key:"19cecd8e0ee91008a92a987bd87c0814c2cf1f44",class:"component-name"},"ifx-icon"),e("span",{key:"1f0892b3abf012963f5ff45c774e4d9ad69efa8b",class:"html-tag"},">"),e("button",{key:"b5e268a37eff1dc9ee2f115530f64b4d96a2ad20",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"cc8a8d6e65f4523f267c0733a207d2f6e05d5d2d",class:"preview__container"},this.iconsArray.map((i,a)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===a?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return t(this)}};s.style=r;export{s as ifx_icons_preview};
