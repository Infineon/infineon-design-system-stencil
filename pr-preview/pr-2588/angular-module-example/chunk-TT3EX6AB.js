var e="https://example.com/",o=new Set(["javascript:","vbscript:"]);function c(t){if(t!==void 0)try{let n=new URL(t,e).protocol;return o.has(n)?void 0:t}catch{return t}}export{c as a};
