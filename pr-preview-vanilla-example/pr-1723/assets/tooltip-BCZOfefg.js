function p(o){o.innerHTML=`
    <h2>Tooltip</h2>

    <ifx-tooltip text="Hi, I'm a tooltip" variant="compact" position="auto" icon="c-info-16" aria-label="Tooltip with important information">I'm the tooltip reference element - Please hover me</ifx-tooltip>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-position">Toggle Position</ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Position:</b> <span id="state-position"></span></span><br>
  `;const t=o.querySelector("ifx-tooltip"),i=o.querySelector("#state-variant"),a=o.querySelector("#state-position"),n=["compact","dismissible","extended"],r=["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"];i.textContent=t.variant,a.textContent=t.position,o.querySelector("#toggle-variant").onclick=()=>{const e=(n.indexOf(t.variant)+1)%n.length;t.variant=n[e],i.textContent=t.variant},o.querySelector("#toggle-position").onclick=()=>{const e=(n.indexOf(t.position)+1)%r.length;t.position=r[e],a.textContent=t.position}}export{p as render};
