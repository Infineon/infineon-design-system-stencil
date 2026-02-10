function h(t){t.innerHTML=`
    <h2>Checkbox Group</h2>

    <ifx-checkbox-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="false" required="false">
      <ifx-checkbox value="0" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 0</ifx-checkbox>
      <ifx-checkbox value="1" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 1</ifx-checkbox>
      <ifx-checkbox value="2" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 2</ifx-checkbox>
    </ifx-checkbox-group>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-alignment"> Toggle Alignment </ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled"> Toggle Disabled </ifx-button>
      <ifx-button variant="secondary" id="toggle-error"> Toggle Error </ifx-button>
      <ifx-button variant="secondary" id="toggle-size"> Toggle Size </ifx-button>
      <ifx-button variant="secondary" id="toggle-label"> Toggle Label </ifx-button>
      <ifx-button variant="secondary" id="toggle-caption"> Toggle Caption </ifx-button>
      <ifx-button variant="secondary" id="toggle-caption-icon"> Toggle Caption Icon </ifx-button>
      <ifx-button variant="secondary" id="toggle-required"> Toggle Required </ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Alignment:</b> <span id="state-alignment"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Label:</b> <span id="state-label"></div>
      <div><b>Caption:</b> <span id="state-caption"></div>
      <div><b>Caption Icon:</b> <span id="state-caption-icon"></div>
      <div><b>Required:</b> <span id="state-required"></div>
    </div>
  `;const e=t.querySelector("ifx-checkbox-group"),o=e.querySelectorAll("ifx-checkbox"),s=t.querySelector("#state-alignment"),c=t.querySelector("#state-disabled"),d=t.querySelector("#state-error"),g=t.querySelector("#state-size"),b=t.querySelector("#state-label"),u=t.querySelector("#state-caption"),x=t.querySelector("#state-caption-icon"),p=t.querySelector("#state-required"),n=["vertical","horizontal"],r=["s","m"],a=o[0];s.textContent=e.alignment,c.textContent=String(a.disabled),d.textContent=String(a.error),g.textContent=a.size,b.textContent=String(e.showGroupLabel),u.textContent=String(e.showCaption),x.textContent=String(e.showCaptionIcon),p.textContent=String(e.required),t.querySelector("#toggle-alignment").onclick=()=>{const l=(n.indexOf(e.alignment)+1)%n.length;e.alignment=n[l],s.textContent=e.alignment},t.querySelector("#toggle-disabled").onclick=()=>{o.forEach(i=>{i.disabled=!i.disabled}),c.textContent=String(o[0].disabled)},t.querySelector("#toggle-error").onclick=()=>{o.forEach(i=>{i.error=!i.error}),d.textContent=String(o[0].error)},t.querySelector("#toggle-size").onclick=()=>{const l=(r.indexOf(o[0].size)+1)%r.length;o.forEach(f=>{f.size=r[l]}),g.textContent=o[0].size},t.querySelector("#toggle-label").onclick=()=>{e.showGroupLabel=!e.showGroupLabel,b.textContent=String(e.showGroupLabel)},t.querySelector("#toggle-caption").onclick=()=>{e.showCaption=!e.showCaption,u.textContent=String(e.showCaption)},t.querySelector("#toggle-caption-icon").onclick=()=>{e.showCaptionIcon=!e.showCaptionIcon,x.textContent=String(e.showCaptionIcon)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,p.textContent=String(e.required)}}export{h as render};
