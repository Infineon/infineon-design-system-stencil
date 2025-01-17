(()=>{"use strict";var deferred,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({293:"navbar-stories",597:"tag-stories",777:"status-stories",854:"WrapperComponents-mdx",880:"Spacing-mdx",1080:"badge-stories",1161:"card-stories",1173:"Icons-mdx",1317:"radio-button-stories",1367:"switch-stories",1490:"Typography-mdx",1793:"BorderRadius-mdx",2184:"checkbox-stories",2275:"VueWrappers-mdx",2397:"Grid-mdx",2490:"notification-stories",2494:"Color-mdx",2792:"dropdown-stories",2933:"AngularWrappers-mdx",3259:"tabs-stories",3399:"button-stories",3550:"infineonIconStencil-stories",3626:"GettingStarted-mdx",3823:"alert-stories",4082:"progress-bar-stories",4288:"search-field-stories",4623:"pagination-stories",4674:"stepper-stories",4764:"number-indicator-stories",4768:"tooltip-stories",4984:"icons-preview-stories",5008:"About-mdx",5679:"search-bar-stories",5803:"FAQ-mdx",5889:"sidebar-stories",5893:"segmented-control-stories",5977:"table-stories",6239:"accordion-stories",6324:"breadcrumb-stories",6521:"chip-stories",6705:"icon-button-stories",6788:"slider-stories",6878:"content-switcher-stories",7092:"Iconography-mdx",7193:"overview-table-stories",7290:"ReactWrappers-mdx",7596:"Development-mdx",7762:"modal-stories",8021:"text-field-stories",8198:"multiselect-stories",8683:"select-stories",8719:"link-stories",9084:"Logo-mdx",9229:"textarea-stories",9326:"footer-stories",9327:"States-mdx",9390:"Usage-mdx",9436:"Overview-mdx",9734:"TailwindCSS-mdx",9802:"spinner-stories",9850:"date-picker-stories"}[chunkId]||chunkId)+"."+{12:"03193938",18:"fef383f1",155:"55ecf9b4",159:"db622929",293:"b1aba71b",367:"52a3fbbc",597:"4c621df8",777:"bdca58de",826:"51c71c1b",838:"caf87960",845:"f7e6e73e",854:"1512d4e4",880:"b897aba2",1012:"e2f165b8",1080:"c742b25a",1161:"9f62ce07",1173:"c36ecbbd",1317:"870ea1d8",1367:"517b87e6",1417:"c62d528c",1456:"9906cd24",1490:"cce3d1c7",1566:"01909fe6",1726:"3ab10aaa",1793:"ee8f419d",2005:"cb84bb28",2055:"8ded1adf",2184:"ba77f7e5",2194:"4ee47b3b",2259:"f62fdb1f",2275:"dc5f44b2",2345:"aad40ac9",2397:"38616001",2418:"6a8a88ba",2490:"8be093d7",2494:"ee71b7b5",2652:"b853fd26",2670:"558d5744",2727:"e50847a2",2792:"e8f92c32",2829:"d6d6b0b2",2847:"6d6a7f01",2933:"1e65e6f6",3259:"1241e079",3370:"389f38fd",3387:"87568058",3399:"74cb1db5",3479:"ffbb4d0f",3550:"36c1eb36",3603:"85004c7d",3610:"1e015376",3626:"4e2352ca",3681:"d85fa8b9",3823:"964647f0",3862:"cae270be",3984:"546b057a",4080:"3b2cfcd2",4082:"a28f15e8",4124:"61bef8b0",4286:"bb8c52fb",4288:"ecb6cdb6",4314:"b4117972",4382:"265d2e04",4497:"65b53b32",4551:"50893bdc",4563:"874fe1f5",4623:"436b4f10",4674:"25f4726d",4764:"24f71996",4768:"58b69ed7",4969:"b0a66205",4984:"ca4ff294",5008:"5c235f7b",5231:"43e57775",5313:"fb5119a3",5356:"ca2052db",5500:"59d23661",5679:"9c99722d",5803:"c797ce91",5889:"70c18119",5893:"cb9082ed",5959:"8ac68779",5977:"416b4584",6239:"59406d81",6324:"5ff3fa17",6368:"c6c54500",6387:"871ace74",6521:"3f0b121f",6541:"abd581f1",6593:"162e6b2e",6594:"53737aac",6614:"cb29c580",6627:"4387909b",6687:"9f3e5cbb",6705:"a7b32cb5",6788:"387f806a",6822:"d005957a",6878:"29e36903",7092:"35db9d1f",7193:"818b6534",7290:"da9f0c14",7373:"8bf6c01b",7484:"99052456",7596:"1019d23f",7676:"0e3119a3",7762:"31094beb",7954:"a864b14e",8021:"1c1798b2",8026:"4174c659",8198:"f0e9c412",8270:"393b093d",8424:"bbbcf6d5",8432:"6ee36033",8479:"ca7f5719",8525:"d78381c7",8543:"a3fd28e4",8683:"7fb07f3f",8695:"02a09ad1",8719:"8a7d30d6",8789:"ac496063",8793:"39f9e007",8815:"5840cff3",8916:"8cb0da02",8931:"0aa346d2",8932:"0a48d856",8977:"948395d0",9084:"7eea892b",9096:"ab1755e4",9229:"d2e758a1",9326:"4eda1126",9327:"6f1c703e",9349:"aa55cb20",9390:"4fe88d46",9436:"6c00af00",9496:"c7db530a",9533:"012e8320",9724:"285c3bd2",9734:"3743f5d7",9802:"813d06a0",9850:"6212021d"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@infineon/infineon-design-system-stencil:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@infineon/infineon-design-system-stencil:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();