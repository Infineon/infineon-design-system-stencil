function d(t){t.innerHTML=`
    <h2>Stepper</h2>

    <ifx-stepper active-step="3" aria-label="" aria-current="" showStepNumber="true" variant="default">
      <ifx-step disabled="false">Step Label 1</ifx-step>
      <ifx-step error="false">Step Label 2</ifx-step>
      <ifx-step>Step Label 3</ifx-step>
      <ifx-step complete="false">Step Label 4</ifx-step>
      <ifx-step>Step Label 5</ifx-step>
    </ifx-stepper>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-stepNumber">Toggle Step Number</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error for Step 2</ifx-button>
      <ifx-button variant="secondary" id="toggle-disable">Toggle Disable for Step 1</ifx-button>
      <ifx-button variant="secondary" id="toggle-complet">Toggle Complete for Step 4</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Step Number:</b> <span id="state-stepNumber"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Step Error:</b> <span id="state-stepError"></div>
      <div><b>Step Disable:</b> <span id="state-stepDisabled"></div>
      <div><b>Step Complete:</b> <span id="state-stepComplete"></div>
    </div>
`;const r=t.querySelector("ifx-stepper"),e=r.querySelectorAll("ifx-step"),s=t.querySelector("#state-stepNumber"),i=t.querySelector("#state-variant"),a=t.querySelector("#state-stepError"),l=t.querySelector("#state-stepDisabled"),n=t.querySelector("#state-stepComplete"),o=["default","compact","vertical"];s.textContent=String(r.showStepNumber),i.textContent=r.variant,a.textContent=String(e[1].error),l.textContent=String(e[0].disabled),n.textContent=String(e[3].complete),t.querySelector("#toggle-stepNumber").onclick=()=>{r.showStepNumber=!r.showStepNumber,s.textContent=String(r.showStepNumber)},t.querySelector("#toggle-variant").onclick=()=>{const p=(o.indexOf(r.variant)+1)%o.length;r.variant=o[p],i.textContent=r.variant},t.querySelector("#toggle-error").onclick=()=>{e[1].error=!e[1].error,a.textContent=String(e[1].error)},t.querySelector("#toggle-disable").onclick=()=>{e[0].disabled=!e[0].disabled,l.textContent=String(e[0].disabled)},t.querySelector("#toggle-complet").onclick=()=>{e[3].complete=!e[3].complete,n.textContent=String(e[3].complete)}}export{d as render};
