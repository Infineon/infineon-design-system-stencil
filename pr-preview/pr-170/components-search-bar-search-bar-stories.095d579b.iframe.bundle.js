(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/search-bar/search-bar.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Search Bar",args:{width:"100%",showCloseButton:!0},argTypes:{onIfxChange:{action:"ifxChange"},width:{options:["40%","60%","80%","100%"],control:{type:"radio"}},showCloseButton:{control:{type:"boolean"}}}};var Default=function Template(args){var wrapper=document.createElement("div");return wrapper.innerHTML='<ifx-search-bar  style="width: '+args.width+'" show-close-button="'+args.showCloseButton+'"></ifx-search-bar>',wrapper.querySelector("ifx-search-bar").addEventListener("ifxChange",(function(event){args.onIfxChange(event)})),wrapper.innerHTML}.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `<ifx-search-bar  style=\"width: ${args.width}\" show-close-button=\"${args.showCloseButton}\"></ifx-search-bar>`;\n\n  const inputElement = wrapper.querySelector('ifx-search-bar');\n  inputElement.addEventListener('ifxChange', (event) => {\n    // console.log('Storybook Search-Input:', event);\n    args.onIfxChange(event);\n\n  });\n\n  return wrapper.innerHTML;\n}"}},Default.parameters)}}]);