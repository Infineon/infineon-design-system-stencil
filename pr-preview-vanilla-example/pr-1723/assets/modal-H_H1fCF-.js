function d(e){e.innerHTML=`
    <h2>Modal</h2>

    <div>
      <ifx-modal caption="Modal Title" caption-aria-label="Additional information for caption" close-button-aria-label="Close modal" variant="default" close-on-overlay-click="false" show-close-button="true" size="s">
        <div slot="content">
          <span>Modal content</span>
        </div>
        <div slot="buttons">
          <ifx-button variant="secondary">Cancel</ifx-button><ifx-button>OK</ifx-button>
        </div>
      </ifx-modal>
      <ifx-button id="open">Open Modal</ifx-button>
    </div>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-show-close-button">Toggle Show Close Button</ifx-button>

    <br /><br />

    <span><b>Variant:</b> <span id="state-variant"></span></span><br />
    <span><b>Size:</b> <span id="state-size"></span></span><br />
    <span><b>Show Close Button:</b> <span id="state-show-close-button"></span></span><br />
  `;const t=e.querySelector("ifx-modal"),a=e.querySelector("#state-variant"),i=e.querySelector("#state-size"),l=e.querySelector("#state-show-close-button"),o=["default","alert-brand","alert-danger"],n=["s","m","l"];a.textContent=t.variant,i.textContent=t.size,l.textContent=String(t.showCloseButton),customElements.whenDefined("ifx-modal").then(()=>{e.querySelector("#open").onclick=()=>{t.opened=!0},t.addEventListener("ifxOpen",()=>{console.log("Modal opened")}),t.addEventListener("ifxClose",()=>{console.log("Modal closed")})}),e.querySelector("#toggle-variant").onclick=()=>{const s=(o.indexOf(t.variant)+1)%o.length;t.variant=o[s],a.textContent=t.variant},e.querySelector("#toggle-size").onclick=()=>{const s=(n.indexOf(t.size)+1)%n.length;t.size=n[s],i.textContent=t.size},e.querySelector("#toggle-show-close-button").onclick=()=>{t.showCloseButton=!t.showCloseButton,l.textContent=String(t.showCloseButton)}}export{d as render};
