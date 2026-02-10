export function render(container) {

  container.innerHTML = `
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
  `;

  const modal = container.querySelector('ifx-modal');
  const stateVariant = container.querySelector('#state-variant');
  const stateSize = container.querySelector('#state-size');
  const stateShowCloseButton = container.querySelector('#state-show-close-button');

  const variants = ["default", "alert-brand", "alert-danger"];
  const sizes = ["s", "m", "l"];

  stateVariant.textContent = modal.variant;
  stateSize.textContent = modal.size;
  stateShowCloseButton.textContent = String(modal.showCloseButton);

  customElements.whenDefined('ifx-modal').then(() => {
    container.querySelector('#open').onclick = () => {
      modal.opened = true;
    };

    modal.addEventListener('ifxOpen', () => {
      console.log('Modal opened');
    });
    
    modal.addEventListener('ifxClose', () => {
      console.log('Modal closed');
    });
  });

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(modal.variant);
    const nextIndex = (currentIndex + 1) % variants.length;
    modal.variant = variants[nextIndex];
    stateVariant.textContent = modal.variant;
  }

  container.querySelector('#toggle-size').onclick = () => {
    const currentIndex = sizes.indexOf(modal.size);
    const nextIndex = (currentIndex + 1) % sizes.length;
    modal.size = sizes[nextIndex];
    stateSize.textContent = modal.size;
  }

  container.querySelector('#toggle-show-close-button').onclick = () => {
    modal.showCloseButton = !modal.showCloseButton;
    stateShowCloseButton.textContent = String(modal.showCloseButton);
  }
}