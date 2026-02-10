function r(e){e.innerHTML=`
    <h2>Modal</h2>

    <div>
      <ifx-modal caption="Modal Title" caption-aria-label="Additional information for caption" close-button-aria-label="Close modal" variant="default" close-on-overlay-click="false" show-close-button="true" size="s">
        <div slot="content">
          <div>Modal content</div>
        </div>
        <div slot="buttons">
          <ifx-button variant="secondary">Cancel</ifx-button><ifx-button>OK</ifx-button>
        </div>
      </ifx-modal>
      <ifx-button id="open">Open Modal</ifx-button>
    </div>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-show-close-button">Toggle Show Close Button</ifx-button>
    </div>

    <br /><br />

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Show Close Button:</b> <span id="state-show-close-button"></div>
    </div>
  `;const t=e.querySelector("ifx-modal"),s=e.querySelector("#state-variant"),l=e.querySelector("#state-size"),a=e.querySelector("#state-show-close-button"),o=["default","alert-brand","alert-danger"],n=["s","m","l"];s.textContent=t.variant,l.textContent=t.size,a.textContent=String(t.showCloseButton),customElements.whenDefined("ifx-modal").then(()=>{e.querySelector("#open").onclick=()=>{t.opened=!0},t.addEventListener("ifxOpen",()=>{console.log("Modal opened")}),t.addEventListener("ifxClose",()=>{console.log("Modal closed")})}),e.querySelector("#toggle-variant").onclick=()=>{const i=(o.indexOf(t.variant)+1)%o.length;t.variant=o[i],s.textContent=t.variant},e.querySelector("#toggle-size").onclick=()=>{const i=(n.indexOf(t.size)+1)%n.length;t.size=n[i],l.textContent=t.size},e.querySelector("#toggle-show-close-button").onclick=()=>{t.showCloseButton=!t.showCloseButton,a.textContent=String(t.showCloseButton)}}export{r as render};
