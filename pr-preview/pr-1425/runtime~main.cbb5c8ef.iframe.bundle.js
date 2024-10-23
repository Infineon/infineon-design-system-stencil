(()=>{"use strict";var deferred,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({293:"navbar-stories",597:"tag-stories",777:"status-stories",854:"WrapperComponents-mdx",880:"Spacing-mdx",1080:"badge-stories",1161:"card-stories",1173:"Icons-mdx",1317:"radio-button-stories",1367:"switch-stories",1490:"Typography-mdx",1793:"BorderRadius-mdx",2184:"checkbox-stories",2275:"VueWrappers-mdx",2397:"Grid-mdx",2490:"notification-stories",2494:"Color-mdx",2792:"dropdown-stories",2933:"AngularWrappers-mdx",3259:"tabs-stories",3399:"button-stories",3550:"infineonIconStencil-stories",3626:"GettingStarted-mdx",3823:"alert-stories",4082:"progress-bar-stories",4288:"search-field-stories",4623:"pagination-stories",4674:"stepper-stories",4764:"number-indicator-stories",4768:"tooltip-stories",4984:"icons-preview-stories",5008:"About-mdx",5679:"search-bar-stories",5803:"FAQ-mdx",5889:"sidebar-stories",5893:"segmented-control-stories",5977:"table-stories",6239:"accordion-stories",6324:"breadcrumb-stories",6521:"chip-stories",6705:"icon-button-stories",6788:"slider-stories",6878:"content-switcher-stories",7092:"Iconography-mdx",7193:"overview-table-stories",7290:"ReactWrappers-mdx",7596:"Development-mdx",7762:"modal-stories",8021:"text-field-stories",8198:"multiselect-stories",8683:"select-stories",8719:"link-stories",9084:"Logo-mdx",9326:"footer-stories",9327:"States-mdx",9390:"Usage-mdx",9436:"Overview-mdx",9734:"TailwindCSS-mdx",9802:"spinner-stories",9850:"date-picker-stories"}[chunkId]||chunkId)+"."+{12:"9ff973e5",18:"c4a04545",155:"c4fa7a82",159:"c46a6496",293:"b1aba71b",367:"6bfc33d9",597:"4c621df8",777:"bdca58de",826:"7806fc78",838:"bc4f98c9",845:"746b1d86",854:"b8bfd812",880:"f7648bd7",1012:"a632e47c",1080:"c742b25a",1161:"9f62ce07",1173:"59efa2d2",1317:"a7f957e2",1367:"1d6f9b1a",1417:"a242e1f5",1456:"03ef09ef",1490:"e79c6387",1566:"a723dd91",1726:"d29341e6",1793:"c1eb6b35",2005:"bdf62ee8",2055:"c7cb0e4d",2184:"f9e096a8",2259:"b9dddadd",2275:"ea2f336e",2345:"23adfa62",2397:"da1fcee0",2418:"e9786443",2490:"8be093d7",2494:"cd7401ea",2652:"1cb1801b",2670:"6b1769cd",2727:"76918cd8",2792:"e8f92c32",2829:"93f41662",2847:"86ef1e11",2933:"075e0fc5",3259:"6aa83035",3370:"4e73c5c8",3387:"aad24f45",3399:"74cb1db5",3479:"56de9d06",3550:"36c1eb36",3603:"40848094",3610:"792c2e4c",3626:"576a2f1c",3823:"964647f0",3862:"3a4442d0",3984:"2222ca81",4080:"3c7287c1",4082:"a28f15e8",4124:"0e772935",4286:"ed620066",4288:"ecb6cdb6",4314:"5a645747",4382:"ae2e9a20",4497:"ae297c39",4551:"dbdb00d2",4563:"874fe1f5",4623:"436b4f10",4674:"b952c2ec",4764:"24f71996",4768:"58b69ed7",4969:"e499371f",4984:"ca4ff294",4989:"87db65a4",5008:"ce0e5ecb",5231:"43e57775",5313:"11593149",5356:"c14be576",5500:"0cc9b183",5679:"9c99722d",5803:"7fbf2032",5831:"1d5215c6",5855:"28701a4a",5889:"70c18119",5893:"cb9082ed",5959:"8ac68779",5977:"9258b693",6239:"59406d81",6324:"5ff3fa17",6368:"d75b78c9",6387:"1f38a762",6521:"3f0b121f",6541:"a6cbe35e",6593:"43af104d",6594:"0963e8b7",6614:"babd91b9",6627:"d8d7319e",6687:"77cbbc35",6705:"a7b32cb5",6788:"387f806a",6822:"b89c992b",6878:"29e36903",7092:"009ddf27",7133:"ff8edb8b",7193:"818b6534",7290:"90238e52",7373:"f8f056f2",7484:"0b5a8bcd",7596:"b70c3fa3",7676:"0e3119a3",7762:"31094beb",7954:"2f3567d4",8021:"1291da55",8026:"86615ae4",8198:"26eff866",8270:"ed925998",8424:"bbbcf6d5",8432:"b99695a0",8479:"c46df4f8",8543:"ff62b1fd",8663:"30a88ae6",8683:"7fb07f3f",8695:"fd52d7d1",8719:"8a7d30d6",8789:"e4169640",8793:"6f86ee5a",8815:"2e10a21b",8872:"1ade496b",8916:"8ebc55a0",8931:"ad85b726",8932:"8ea74caa",8977:"948395d0",9084:"6e3efbb2",9096:"7c2cc3a8",9326:"d915d86f",9327:"ba2ea4a5",9390:"f9cee267",9436:"b4b1a00f",9496:"159ec213",9533:"1c7e7c9c",9724:"159980f8",9734:"e2777354",9802:"813d06a0",9850:"a0ed2c32"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@infineon/infineon-design-system-stencil:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@infineon/infineon-design-system-stencil:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();