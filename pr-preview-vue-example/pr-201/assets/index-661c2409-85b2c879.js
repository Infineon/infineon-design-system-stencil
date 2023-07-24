function p(r,o,n){return n={path:o,exports:{},require:function(e,s){return a()}},r(n,n.exports),n.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var f=p(function(r){/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){var o={}.hasOwnProperty;function n(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var i=typeof t;if(i==="string"||i==="number")e.push(t);else if(Array.isArray(t)){if(t.length){var c=n.apply(null,t);c&&e.push(c)}}else if(i==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var u in t)o.call(t,u)&&t[u]&&e.push(u)}}}return e.join(" ")}r.exports?(n.default=n,r.exports=n):window.classNames=n})()});export{f as c};
