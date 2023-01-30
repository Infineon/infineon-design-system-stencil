(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/dropdown/dropdown.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Search",(function(){return Search})),__webpack_require__.d(__webpack_exports__,"Filter",(function(){return Filter}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Dropdown",args:{label:"dropdown",size:"m",disabled:!1,variant:"solid",color:"primary"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}}}};var Default=function DefaultTemplate(args){return'<ifx-dropdown >\n    <ifx-button color="'+args.color+'" size="'+args.size+'" variant="'+args.variant+'" disabled="'+args.disabled+'">'+args.label+"</ifx-button>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item>item 1</ifx-dropdown-item>\n      <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>\n      <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>\n      <ifx-dropdown-item>item 4</ifx-dropdown-item>\n  </ifx-dropdown-menu>\n  </ifx-dropdown>"}.bind({}),Search=function SearchTemplate(args){return'<ifx-dropdown>\n<ifx-button color="'+args.color+'" size="'+args.size+'" variant="'+args.variant+'" disabled="'+args.disabled+'">'+args.label+"</ifx-button>\n<ifx-dropdown-menu>\n  <ifx-dropdown-search></ifx-dropdown-search>\n  <ifx-dropdown-item>item 1</ifx-dropdown-item>\n  <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>\n  <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>\n  <ifx-dropdown-item>item 4</ifx-dropdown-item>\n</ifx-dropdown-menu>\n</ifx-dropdown>"}.bind({}),Filter=function FilterTemplate(args){return'<ifx-dropdown>\n  <ifx-button color="'+args.color+'" size="'+args.size+'" variant="'+args.variant+'" disabled="'+args.disabled+'">'+args.label+'</ifx-button>\n  <ifx-dropdown-menu>\n    <ifx-dropdown-filter>\n      <option value="">One</option>\n      <option value="">Two</option>\n      <option value="">Three</option>\n      <option value="">Four</option>\n    </ifx-dropdown-filter>\n    <ifx-dropdown-item>item 1</ifx-dropdown-item>\n    <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>\n    <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>\n    <ifx-dropdown-item>item 4</ifx-dropdown-item>\n  </ifx-dropdown-menu>\n</ifx-dropdown>'}.bind({});Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-dropdown >\n    <ifx-button color="${args.color}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}">${args.label}</ifx-button>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item>item 1</ifx-dropdown-item>\n      <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>\n      <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>\n      <ifx-dropdown-item>item 4</ifx-dropdown-item>\n  </ifx-dropdown-menu>\n  </ifx-dropdown>`'}},Default.parameters),Search.parameters=Object.assign({storySource:{source:'(args) => \n`<ifx-dropdown>\n<ifx-button color="${args.color}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}">${args.label}</ifx-button>\n<ifx-dropdown-menu>\n  <ifx-dropdown-search></ifx-dropdown-search>\n  <ifx-dropdown-item>item 1</ifx-dropdown-item>\n  <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>\n  <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>\n  <ifx-dropdown-item>item 4</ifx-dropdown-item>\n</ifx-dropdown-menu>\n</ifx-dropdown>`'}},Search.parameters),Filter.parameters=Object.assign({storySource:{source:'(args) => \n`<ifx-dropdown>\n  <ifx-button color="${args.color}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}">${args.label}</ifx-button>\n  <ifx-dropdown-menu>\n    <ifx-dropdown-filter>\n      <option value="">One</option>\n      <option value="">Two</option>\n      <option value="">Three</option>\n      <option value="">Four</option>\n    </ifx-dropdown-filter>\n    <ifx-dropdown-item>item 1</ifx-dropdown-item>\n    <ifx-dropdown-item checkable>item 2</ifx-dropdown-item>\n    <ifx-dropdown-item checkable>item 3</ifx-dropdown-item>\n    <ifx-dropdown-item>item 4</ifx-dropdown-item>\n  </ifx-dropdown-menu>\n</ifx-dropdown>`'}},Filter.parameters)}}]);