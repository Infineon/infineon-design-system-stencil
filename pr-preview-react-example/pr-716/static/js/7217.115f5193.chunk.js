/*! For license information please see 7217.115f5193.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7217],{6385:function(e,t,i){function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}i.d(t,{c:function(){return n},g:function(){return r}})},7217:function(e,t,i){i.r(t),i.d(t,{ifx_search_field:function(){return a}});var r=i(5671),n=i(3144),s=i(9953),o=i(4464),a=function(){function e(t){var i=this;(0,r.Z)(this,e),(0,s.r)(this,t),this.ifxInput=(0,s.c)(this,"ifxInput",7),this.handleInput=function(){var e=i.inputElement.value;i.value=e,i.ifxInput.emit(i.value)},this.handleDelete=function(){i.inputElement.value="",i.value="",i.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.showDeleteIconInternalState=!1,this.disabled=!1,this.size="l",this.isFocused=!1}return(0,n.Z)(e,[{key:"handleOutsideClick",value:function(e){e.composedPath().includes(this.inputElement)||(this.isFocused=!1)}},{key:"valueWatcher",value:function(e){e!==this.inputElement.value&&(this.inputElement.value=e)}},{key:"focusInput",value:function(){this.inputElement.focus(),this.isFocused=!0}},{key:"componentWillUpdate",value:function(){""!==this.value?this.showDeleteIconInternalState=!0:this.showDeleteIconInternalState=!1}},{key:"render",value:function(){var e=this;return(0,s.h)("div",{"aria-label":"a search field for user input","aria-disabled":this.disabled,"aria-value":this.value,class:"search-field"},(0,s.h)("div",{class:this.getWrapperClassNames(),tabindex:1,onFocus:function(){return e.focusInput()},onClick:function(){return e.focusInput()}},(0,s.h)("ifx-icon",{icon:"search-16",class:"search-icon"}),(0,s.h)("input",{ref:function(t){return e.inputElement=t},type:"text",onInput:function(){return e.handleInput()},placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon&&this.showDeleteIconInternalState?(0,s.h)("ifx-icon",{icon:"cremove16",class:"delete-icon",onClick:this.handleDelete}):null))}},{key:"getSizeClass",value:function(){return"s"==="".concat(this.size)?"search-field__wrapper-s":""}},{key:"getWrapperClassNames",value:function(){return(0,o.c)("search-field__wrapper","search-field__wrapper ".concat(this.getSizeClass()),"".concat(this.isFocused?"focused":""))}}],[{key:"watchers",get:function(){return{value:["valueWatcher"]}}}]),e}();a.style=':host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-family:"Source Sans 3";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}'},4464:function(e,t,i){i.d(t,{c:function(){return r}});var r=(0,i(6385).c)((function(e){!function(){var t={}.hasOwnProperty;function i(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)t.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i}()}))}}]);
//# sourceMappingURL=7217.115f5193.chunk.js.map