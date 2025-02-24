import{r as i,h as o,g as a}from"./index-D2z5bvvL.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.radio-button-group-container{display:flex;flex-direction:column}.radio-button-group{display:flex;font-family:var(--ifx-font-family);gap:8px}.radio-button-group.horizontal{flex-direction:row;column-gap:12px}.radio-button-group.vertical{flex-direction:column;row-gap:12px}.group-label{font:400 0.75rem/1rem "Source Sans 3";margin-bottom:8px;text-align:left;text-underline-position:from-font;text-decoration-skip-ink:none}.caption{margin-top:8px;align-self:flex-start;display:flex;width:100%;column-gap:8px;justify-content:space-between;align-items:center}.caption.default{color:#1D1D1D}.caption.error{color:#CD002F}.caption-text{font:400 0.75rem/1rem "Source Sans 3";flex:1;text-align:left;text-underline-position:from-font;text-decoration-skip-ink:none}.caption-icon{flex:0;display:flex}',n=s,l=class{constructor(t){i(this,t),this.errorStates=new Map,this.alignment="vertical",this.groupLabelText="Group Label Text",this.hasErrors=!1,this.handleSlotChange=()=>{this.initializeState()}}handleRadioButtonError(t){const r=t.target;r.tagName==="ifx-radio-button"&&(this.errorStates.set(r,t.detail),this.updateHasErrors())}async setGroupError(t){Array.from(this.el.querySelectorAll("ifx-radio-button")).forEach(e=>{e.error=t})}componentWillLoad(){this.initializeState()}initializeState(){this.errorStates.clear(),Array.from(this.el.querySelectorAll("ifx-radio-button")).forEach(r=>{this.errorStates.has(r)||this.errorStates.set(r,r.error||!1)}),this.updateHasErrors()}updateHasErrors(){this.hasErrors=Array.from(this.errorStates.values()).some(t=>t)}render(){return o("div",{key:"0c359fed41079b31dae0c28ace5192cdd43cc076",class:"radio-button-group-container"},this.showGroupLabel?o("div",{class:"group-label"},this.groupLabelText," *"):"",o("div",{key:"735ec208d1aee30020ccd60621f90690c765c8bb",class:`radio-button-group ${this.alignment} ${this.size}`},o("slot",{key:"1d42c5173fc75d43c3497a2ed602fc781e98271b",onSlotchange:this.handleSlotChange})),this.showCaption?o("div",{class:`caption ${this.hasErrors?"error":"default"}`},this.showCaptionIcon?o("div",{class:"caption-icon"},o("ifx-icon",{icon:"c-info-16"})):"",o("div",{class:"caption-text"},this.captionText)):"")}static get formAssociated(){return!0}get el(){return a(this)}};l.style=n;export{l as ifx_radio_button_group};
