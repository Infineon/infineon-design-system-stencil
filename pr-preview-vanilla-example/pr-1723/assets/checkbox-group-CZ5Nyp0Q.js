function h(t){t.innerHTML=`
    <h2>Checkbox Group</h2>

    <ifx-checkbox-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="false" required="false">
      <ifx-checkbox value="0" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 0</ifx-checkbox>
      <ifx-checkbox value="1" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 1</ifx-checkbox>
      <ifx-checkbox value="2" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 2</ifx-checkbox>
    </ifx-checkbox-group>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-alignment"> Toggle Alignment </ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled"> Toggle Disabled </ifx-button>
    <ifx-button variant="secondary" id="toggle-error"> Toggle Error </ifx-button>
    <ifx-button variant="secondary" id="toggle-size"> Toggle Size </ifx-button>
    <ifx-button variant="secondary" id="toggle-label"> Toggle Label </ifx-button>
    <ifx-button variant="secondary" id="toggle-caption"> Toggle Caption </ifx-button>
    <ifx-button variant="secondary" id="toggle-caption-icon"> Toggle Caption Icon </ifx-button>
    <ifx-button variant="secondary" id="toggle-required"> Toggle Required </ifx-button>

    <br><br>

    <span><b>Alignment:</b> <span id="state-alignment"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Label:</b> <span id="state-label"></span></span><br>
    <span><b>Caption:</b> <span id="state-caption"></span></span><br>
    <span><b>Caption Icon:</b> <span id="state-caption-icon"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
  `;const e=t.querySelector("ifx-checkbox-group"),n=e.querySelectorAll("ifx-checkbox"),l=t.querySelector("#state-alignment"),c=t.querySelector("#state-disabled"),b=t.querySelector("#state-error"),d=t.querySelector("#state-size"),g=t.querySelector("#state-label"),p=t.querySelector("#state-caption"),u=t.querySelector("#state-caption-icon"),x=t.querySelector("#state-required"),r=["vertical","horizontal"],i=["s","m"],a=n[0];l.textContent=e.alignment,c.textContent=String(a.disabled),b.textContent=String(a.error),d.textContent=a.size,g.textContent=String(e.showGroupLabel),p.textContent=String(e.showCaption),u.textContent=String(e.showCaptionIcon),x.textContent=String(e.required),t.querySelector("#toggle-alignment").onclick=()=>{const s=(r.indexOf(e.alignment)+1)%r.length;e.alignment=r[s],l.textContent=e.alignment},t.querySelector("#toggle-disabled").onclick=()=>{n.forEach(o=>{o.disabled=!o.disabled}),c.textContent=String(n[0].disabled)},t.querySelector("#toggle-error").onclick=()=>{n.forEach(o=>{o.error=!o.error}),b.textContent=String(n[0].error)},t.querySelector("#toggle-size").onclick=()=>{const s=(i.indexOf(n[0].size)+1)%i.length;n.forEach(f=>{f.size=i[s]}),d.textContent=n[0].size},t.querySelector("#toggle-label").onclick=()=>{e.showGroupLabel=!e.showGroupLabel,g.textContent=String(e.showGroupLabel)},t.querySelector("#toggle-caption").onclick=()=>{e.showCaption=!e.showCaption,p.textContent=String(e.showCaption)},t.querySelector("#toggle-caption-icon").onclick=()=>{e.showCaptionIcon=!e.showCaptionIcon,u.textContent=String(e.showCaptionIcon)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,x.textContent=String(e.required)}}export{h as render};
