import{c}from"./_commonjsHelpers-e9b9b14e-DHaC07_r.js";var a=c(function(o){/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){var i={}.hasOwnProperty;function e(){for(var t="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(t=s(t,f(n)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return e.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var n in t)i.call(t,n)&&t[n]&&(r=s(r,n));return r}function s(t,r){return r?t?t+" "+r:t+r:t}o.exports?(e.default=e,o.exports=e):window.classNames=e})()});export{a as c};
