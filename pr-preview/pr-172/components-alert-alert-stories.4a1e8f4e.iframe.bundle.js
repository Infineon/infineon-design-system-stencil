(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/alert/alert.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Alert",args:{label:"Attention! This is an alert message — check it out!",color:"primary",icon:!0,iconType:"c-info-24"},argTypes:{color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},iconType:{options:["c-info-24","calendar-24","download-24","upload-24"],control:{type:"select"}}}};var Default=function DefaultTemplate(args){return'<ifx-alert color="'+args.color+'" icon="'+(args.icon?args.iconType:"")+'">'+args.label+"</ifx-alert>"}.bind({});Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-alert color="${args.color}" icon="${args.icon ? args.iconType : ""}">${args.label}</ifx-alert>`'}},Default.parameters)}}]);