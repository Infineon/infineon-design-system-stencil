function g(e){e.innerHTML=`
    <h2>Radio Button Group</h2>

    <ifx-radio-button-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="false">
      <ifx-radio-button value="0" disabled="false" checked="false" error="false" size="m">Option 0</ifx-radio-button>
      <ifx-radio-button value="1" size="m">Option 1</ifx-radio-button>
      <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
      <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
    </ifx-radio-button-group>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-alignment">Toggle Alignment</ifx-button>
    <ifx-button variant="secondary" id="toggle-label">Toggle Label</ifx-button>
    <ifx-button variant="secondary" id="toggle-caption">Toggle Caption</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Alignment:</b> <span id="state-alignment"></span></span><br>
    <span><b>Show Label:</b> <span id="state-label"></span></span><br>
    <span><b>Show Caption:</b> <span id="state-caption"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Show Icon:</b> <span id="state-icon"></span></span><br>
  `;const t=e.querySelector("ifx-radio-button-group"),n=e.querySelector("#state-alignment"),i=e.querySelector("#state-label"),a=e.querySelector("#state-caption"),r=e.querySelector("#state-required"),l=e.querySelector("#state-icon"),o=["vertical","horizontal"];n.textContent=t.alignment,i.textContent=String(t.showGroupLabel),a.textContent=String(t.showCaption),r.textContent=String(t.required),l.textContent=String(t.showCaptionIcon),e.querySelector("#toggle-alignment").onclick=()=>{const s=(o.indexOf(t.alignment)+1)%o.length;t.alignment=o[s],n.textContent=t.alignment},e.querySelector("#toggle-label").onclick=()=>{t.showGroupLabel=!t.showGroupLabel,i.textContent=String(t.showGroupLabel)},e.querySelector("#toggle-caption").onclick=()=>{t.showCaption=!t.showCaption,a.textContent=String(t.showCaption)},e.querySelector("#toggle-required").onclick=()=>{t.required=!t.required,r.textContent=String(t.required)},e.querySelector("#toggle-icon").onclick=()=>{t.showCaptionIcon=!t.showCaptionIcon,l.textContent=String(t.showCaptionIcon)}}export{g as render};
