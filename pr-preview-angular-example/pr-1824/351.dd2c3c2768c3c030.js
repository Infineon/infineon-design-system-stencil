"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[351],{351:(u,i,r)=>{r.r(i),r.d(i,{ifx_radio_button_group:()=>l});var n=r(6330),t=r(1032);const l=(()=>{let a=class{constructor(o){(0,t.r)(this,o),this.errorStates=new Map,this.alignment="vertical",this.groupLabelText="Group Label Text",this.hasErrors=!1,this.handleSlotChange=()=>{this.initializeState()}}handleRadioButtonError(o){const e=o.target;"ifx-radio-button"===e.tagName&&(this.errorStates.set(e,o.detail),this.updateHasErrors())}setGroupError(o){var e=this;return(0,n.A)(function*(){Array.from(e.el.querySelectorAll("ifx-radio-button")).forEach(c=>{c.error=o})})()}componentWillLoad(){this.initializeState()}initializeState(){this.errorStates.clear(),Array.from(this.el.querySelectorAll("ifx-radio-button")).forEach(e=>{this.errorStates.has(e)||this.errorStates.set(e,e.error||!1)}),this.updateHasErrors()}updateHasErrors(){this.hasErrors=Array.from(this.errorStates.values()).some(o=>o)}render(){return(0,t.h)("div",{key:"86189849ec52df99ab0d994016ec346e366125bd",class:"radio-button-group-container"},this.showGroupLabel?(0,t.h)("div",{class:"group-label"},this.groupLabelText," *"):"",(0,t.h)("div",{key:"bcfebaea120d43a15f3a3384b3b66513c3fc9d81",class:`radio-button-group ${this.alignment} ${this.size}`},(0,t.h)("slot",{key:"1b8d66770b3e86f74f7db221885aa5010c3fe340",onSlotchange:this.handleSlotChange})),this.showCaption?(0,t.h)("div",{class:"caption "+(this.hasErrors?"error":"default")},this.showCaptionIcon?(0,t.h)("div",{class:"caption-icon"},(0,t.h)("ifx-icon",{icon:"c-info-16"})):"",(0,t.h)("div",{class:"caption-text"},this.captionText)):"")}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}};return a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.radio-button-group-container{display:flex;flex-direction:column}.radio-button-group{display:flex;font-family:var(--ifx-font-family);gap:8px}.radio-button-group.horizontal{flex-direction:row;column-gap:12px}.radio-button-group.vertical{flex-direction:column;row-gap:12px}.group-label{font:400 0.75rem/1rem "Source Sans 3";margin-bottom:8px;text-align:left;text-underline-position:from-font;text-decoration-skip-ink:none}.caption{margin-top:8px;align-self:flex-start;display:flex;width:100%;column-gap:8px;justify-content:space-between;align-items:center}.caption.default{color:#1D1D1D}.caption.error{color:#CD002F}.caption-text{font:400 0.75rem/1rem "Source Sans 3";flex:1;text-align:left;text-underline-position:from-font;text-decoration-skip-ink:none}.caption-icon{flex:0;display:flex}',a})()}}]);