function d(e){e.innerHTML=`
    <h2>Radio Button Group</h2>

    <ifx-radio-button-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="false">
      <ifx-radio-button value="0" disabled="false" checked="false" error="false" size="m">Option 0</ifx-radio-button>
      <ifx-radio-button value="1" size="m">Option 1</ifx-radio-button>
      <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
      <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
    </ifx-radio-button-group>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-alignment">Toggle Alignment</ifx-button>
      <ifx-button variant="secondary" id="toggle-label">Toggle Label</ifx-button>
      <ifx-button variant="secondary" id="toggle-caption">Toggle Caption</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Alignment:</b> <span id="state-alignment"></div>
      <div><b>Show Label:</b> <span id="state-label"></div>
      <div><b>Show Caption:</b> <span id="state-caption"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Show Icon:</b> <span id="state-icon"></div>
    </div>
  `;const t=e.querySelector("ifx-radio-button-group"),n=e.querySelector("#state-alignment"),i=e.querySelector("#state-label"),r=e.querySelector("#state-caption"),a=e.querySelector("#state-required"),l=e.querySelector("#state-icon"),o=["vertical","horizontal"];n.textContent=t.alignment,i.textContent=String(t.showGroupLabel),r.textContent=String(t.showCaption),a.textContent=String(t.required),l.textContent=String(t.showCaptionIcon),e.querySelector("#toggle-alignment").onclick=()=>{const u=(o.indexOf(t.alignment)+1)%o.length;t.alignment=o[u],n.textContent=t.alignment},e.querySelector("#toggle-label").onclick=()=>{t.showGroupLabel=!t.showGroupLabel,i.textContent=String(t.showGroupLabel)},e.querySelector("#toggle-caption").onclick=()=>{t.showCaption=!t.showCaption,r.textContent=String(t.showCaption)},e.querySelector("#toggle-required").onclick=()=>{t.required=!t.required,a.textContent=String(t.required)},e.querySelector("#toggle-icon").onclick=()=>{t.showCaptionIcon=!t.showCaptionIcon,l.textContent=String(t.showCaptionIcon)}}export{d as render};
