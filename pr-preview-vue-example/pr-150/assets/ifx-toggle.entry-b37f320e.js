import{r as t,c as s,h as e}from"./index-e5405289.js";const c=":host{display:inline-block;user-select:none}.toggle-container{display:inline-block;position:relative;width:50px;height:25px;background-color:#ffffff;border:1px solid #7d6f72;border-radius:25px;cursor:pointer;transition:background-color 0.3s ease}.toggle-switch{position:absolute;top:2px;left:2px;width:21px;height:21px;background-color:#7d6f72;border-radius:50%;transition:transform 0.3s ease}.toggle-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.toggle-switch.checked{transform:translateX(25px);background-color:#ffffff}.toggle-container.checked{background-color:#378375;border-color:#378375}",r=class{constructor(o){t(this,o),this.valueChanged=s(this,"valueChanged",7),this.checked=!1}toggle(){this.checked=!this.checked,this.valueChanged.emit(this.checked)}render(){return e("div",{class:`toggle-container ${this.checked?"checked":""}`,onClick:()=>this.toggle()},e("div",{class:`toggle-switch ${this.checked?"checked":""}`}))}};r.style=c;export{r as ifx_toggle};
