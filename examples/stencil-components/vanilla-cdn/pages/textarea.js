export function render(container) {

  container.innerHTML = `
    <h2>Textarea</h2>

    <ifx-textarea caption="Caption text, description, error notification" cols="43" disabled="false" error="false" label="Label Text" maxlength="undefined" name="textarea" placeholder="Placeholder" required="true" read-only="false" resize="both" rows="5" value="" wrap="soft"></ifx-textarea>
    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" id="toggle-resize">Toggle Resize</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Read Only:</b> <span id="state-readOnly"></div>
      <div><b>Resize:</b> <span id="state-resize"></div>
      <div><b>Required:</b> <span id="state-required"></div>
    </div>
  `;

    const textarea = container.querySelector('ifx-textarea');
    const disabledState = container.querySelector('#state-disabled');
    const errorState = container.querySelector('#state-error');
    const readOnlyState = container.querySelector('#state-readOnly');
    const resizeState = container.querySelector('#state-resize');
    const requiredState = container.querySelector('#state-required');

    const resizeOptions = ['both', 'vertical', 'horizontal', 'none'];

    disabledState.textContent = String(textarea.disabled);
    errorState.textContent = String(textarea.error);
    readOnlyState.textContent = String(textarea.readOnly);
    resizeState.textContent = textarea.resize;
    requiredState.textContent = String(textarea.required);

    container.querySelector('#toggle-disabled').onclick = () => {
      textarea.disabled = !textarea.disabled;
      disabledState.textContent = String(textarea.disabled);
    }

    container.querySelector('#toggle-error').onclick = () => {
      textarea.error = !textarea.error;
      errorState.textContent = String(textarea.error);
    }

    container.querySelector('#toggle-readOnly').onclick = () => {
      textarea.readOnly = !textarea.readOnly;
      readOnlyState.textContent = String(textarea.readOnly);
    }

    container.querySelector('#toggle-resize').onclick = () => {
      const currentIndex = resizeOptions.indexOf(textarea.resize);
      const nextIndex = (currentIndex + 1) % resizeOptions.length;
      textarea.resize = resizeOptions[nextIndex];
      resizeState.textContent = textarea.resize;
    }

    container.querySelector('#toggle-required').onclick = () => {
      textarea.required = !textarea.required;
      requiredState.textContent = String(textarea.required);
    }
}