import{r as a,c as l,h as s,g as r}from"./index-BotIAL1K.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}',c=o,h=class{constructor(e){a(this,e),this.ifxChipChange=l(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleReadOnlyChange(e){e&&(this.opened=!1)}closeDropdownOnOutsideClick(e){const t=e.composedPath(),n=this.chip.shadowRoot.querySelector(".chip__wrapper"),i=this.chip.shadowRoot.querySelector(".chip__dropdown");!t.includes(i)&&!t.includes(n)&&this.opened&&this.toggleDropdownMenu()}updateSelectedOptions(e){const t=e.detail,n=this.selectedOptions;this.variant!=="multi"?(t.selected?(this.opened=!1,this.getChipItems().forEach(p=>{p.selected&&p!==e.target&&(p.chipState=Object.assign(Object.assign({},p.chipState),{emitIfxChipItemSelect:!1}),p.selected=!1)}),this.selectedOptions=[t]):this.selectedOptions=[],this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0):(t.selected?this.selectedOptions=[...this.selectedOptions,t]:this.selectedOptions=this.selectedOptions.filter(i=>i.key!==t.key),this.value=this.selectedOptions.map(i=>i.value)),t.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection:n,currentSelection:this.selectedOptions})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return this.selectedOptions.slice(0,2).map(e=>e.label).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}handleUnselectButtonClick(e){e.stopPropagation(),this.opened=!1;let t=!1;if(this.getChipItems().forEach(i=>{i.selected&&(t=!0,i.chipState=Object.assign(Object.assign({},i.chipState),{emitIfxChipItemSelect:!1}),i.selected=!1)}),t){const i=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection:i,currentSelection:[]})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(e){this.readOnly&&(e.code==="Space"||e.code==="Enter")&&this.toggleDropdownMenu()}syncChipState(){const e=this.getChipItems();let t=0;e.forEach(n=>{n.chipState={emitIfxChipItemSelect:!0,size:this.size==="small"?"small":"large",variant:this.variant==="multi"?"multi":"single",key:t++}})}componentWillLoad(){this.syncChipState()}render(){return s("div",{key:"7e6b2afd1a1eb7968a203e01a458207b04fb3713","aria-value":this.getSelectedOptions(),"aria-label":"chip with a dropdown menu",class:"chip"},s("div",{key:"69346e62d029e851439135352cc71565083ecac8",class:`chip__wrapper chip__wrapper--${this.size==="small"?"small":"large"}
                  chip__wrapper--${this.variant==="multi"?"multi":"single"}
                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}
                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},onKeyDown:this.readOnly?void 0:e=>{this.handleWrapperKeyDown(e)}},s("div",{key:"fef37c95b41ec04bb5accd7883b52a22cfe3037e",class:"wrapper__label"},this.selectedOptions.length===0&&`${this.placeholder}`,this.selectedOptions.length!==0&&this.variant==="multi"&&this.placeholder!==""&&`${this.placeholder}:`,this.selectedOptions.length!==0&&s("div",{key:"c88ecc2459c480ef094b8b79ae872e089aed8a6a",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&s("ifx-number-indicator",{key:"5af2b443478616b4bf243e35326c490b1dd62ffd"},"  ",`+${this.selectedOptions.length-2}`," ")),!this.readOnly&&(this.variant!=="multi"||this.variant==="multi"&&this.selectedOptions.length===0)&&s("div",{key:"de5359322ff2e74d8c878efbb46d63a877fdea7a",class:"wrapper__open-button"},s("ifx-icon",{key:1,icon:"chevrondown16"})),this.selectedOptions.length>=1&&this.variant==="multi"&&s("div",{key:"780fa3017b74c63411eb824ce087b66176aab5fd",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},s("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&s("div",{key:"0f6a30b0bccd30143e5548eacb7376df42f9cfbc",class:"chip__dropdown"},s("slot",{key:"4a05a7df2908c200959ee2dd54b24893060a7186"})))}get chip(){return r(this)}static get watchers(){return{readOnly:["handleReadOnlyChange"]}}};h.style=c;export{h as ifx_chip};
