import{r as l,h as c}from"./index-D-zbKhG5.js";const i="",r=i,d=class{constructor(s){l(this,s),this.tokens="css"}render(){const s={css:"css-variables.css",scss:"scss-variables.scss"},n=`infineon-tokens.${this.tokens}`,o=`https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/${s[this.tokens]}`;return c("ifx-link",{key:"5e9bc1ea1239ccbe37d695b8252081c77915da3b",onClick:a=>{a.preventDefault(),fetch(o).then(e=>e.blob()).then(e=>{const t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=n,t.click()})},href:o,download:n,class:"download__wrapper",size:"m",variant:"bold"},c("slot",{key:"659d2b21259f9772e81835072f9059d876dee794"}))}};d.style=r;export{d as ifx_download};
