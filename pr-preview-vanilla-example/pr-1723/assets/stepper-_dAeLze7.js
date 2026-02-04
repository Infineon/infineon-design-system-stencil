function S(e){e.innerHTML=`
    <h2>Stepper</h2>

    <ifx-stepper active-step="3" aria-label="" aria-current="" showStepNumber="true" variant="default">
      <ifx-step disabled="false">Step Label 1</ifx-step>
      <ifx-step error="false">Step Label 2</ifx-step>
      <ifx-step>Step Label 3</ifx-step>
      <ifx-step complete="false">Step Label 4</ifx-step>
      <ifx-step>Step Label 5</ifx-step>
    </ifx-stepper>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-stepNumber">Toggle Step Number</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error for Step 2</ifx-button>
    <ifx-button variant="secondary" id="toggle-disable">Toggle Disable for Step 1</ifx-button>
    <ifx-button variant="secondary" id="toggle-complet">Toggle Complete for Step 4</ifx-button>

    <br><br>

    <span><b>Step Number:</b> <span id="state-stepNumber"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Step Error:</b> <span id="state-stepError"></span></span><br>
    <span><b>Step Disable:</b> <span id="state-stepDisabled"></span></span><br>
    <span><b>Step Complete:</b> <span id="state-stepComplete"></span></span><br>
`;const r=e.querySelector("ifx-stepper"),t=r.querySelectorAll("ifx-step"),a=e.querySelector("#state-stepNumber"),o=e.querySelector("#state-variant"),n=e.querySelector("#state-stepError"),p=e.querySelector("#state-stepDisabled"),i=e.querySelector("#state-stepComplete"),s=["default","compact","vertical"];a.textContent=String(r.showStepNumber),o.textContent=r.variant,n.textContent=String(t[1].error),p.textContent=String(t[0].disabled),i.textContent=String(t[3].complete),e.querySelector("#toggle-stepNumber").onclick=()=>{r.showStepNumber=!r.showStepNumber,a.textContent=String(r.showStepNumber)},e.querySelector("#toggle-variant").onclick=()=>{const l=(s.indexOf(r.variant)+1)%s.length;r.variant=s[l],o.textContent=r.variant},e.querySelector("#toggle-error").onclick=()=>{t[1].error=!t[1].error,n.textContent=String(t[1].error)},e.querySelector("#toggle-disable").onclick=()=>{t[0].disabled=!t[0].disabled,p.textContent=String(t[0].disabled)},e.querySelector("#toggle-complet").onclick=()=>{t[3].complete=!t[3].complete,i.textContent=String(t[3].complete)}}export{S as render};
