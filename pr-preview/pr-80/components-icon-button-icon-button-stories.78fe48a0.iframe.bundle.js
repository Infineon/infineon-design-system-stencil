(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/components/icon-button/icon-button.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Icon-Button",args:{variant:"solid",size:"m",color:"primary",disabled:!1,icon:"c-info-24",href:"",target:"_blank",shape:"round"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}},shape:{options:["round","square"],control:{type:"radio"}}}};var Default=function DefaultTemplate(args){return'<ifx-icon-button shape="'+args.shape+'" variant="'+args.variant+'" icon="'+args.icon+'" href="'+args.href+'" target="'+args.target+'" color="'+args.color+'" size="'+args.size+'" disabled="'+args.disabled+'">\n  </ifx-icon-button>'}.bind({});Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-icon-button shape="${args.shape}" variant="${args.variant}" icon="${args.icon}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  </ifx-icon-button>`'}},Default.parameters)}}]);