export function render(container) {

  container.innerHTML = `
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
  `;

  const checkboxGroup = container.querySelector('ifx-checkbox-group');
  const checkboxes = checkboxGroup.querySelectorAll('ifx-checkbox');
  const alignmentState = container.querySelector('#state-alignment');
  const disabledState = container.querySelector('#state-disabled');
  const errorState = container.querySelector('#state-error');
  const sizeState = container.querySelector('#state-size');
  const labelState = container.querySelector('#state-label');
  const captionState = container.querySelector('#state-caption');
  const captionIconState = container.querySelector('#state-caption-icon');
  const requiredState = container.querySelector('#state-required');

  const alignments = ["vertical", "horizontal"];
  const sizes = ["s", "m"];
  const checkbox = checkboxes[0];

  alignmentState.textContent = checkboxGroup.alignment;
  disabledState.textContent = String(checkbox.disabled);
  errorState.textContent = String(checkbox.error);
  sizeState.textContent = checkbox.size;
  labelState.textContent = String(checkboxGroup.showGroupLabel);
  captionState.textContent = String(checkboxGroup.showCaption);
  captionIconState.textContent = String(checkboxGroup.showCaptionIcon);
  requiredState.textContent = String(checkboxGroup.required);

  container.querySelector('#toggle-alignment').onclick = () => {
    const currentIndex = alignments.indexOf(checkboxGroup.alignment);
    const nextIndex = (currentIndex + 1) % alignments.length;

    checkboxGroup.alignment = alignments[nextIndex];
    alignmentState.textContent = checkboxGroup.alignment;
  }

  container.querySelector('#toggle-disabled').onclick = () => {
    checkboxes.forEach(checkbox => {
      checkbox.disabled = !checkbox.disabled;
    });
    disabledState.textContent = String(checkboxes[0].disabled);
  }

  container.querySelector('#toggle-error').onclick = () => {
    checkboxes.forEach(checkbox => {
      checkbox.error = !checkbox.error;
    });
    errorState.textContent = String(checkboxes[0].error);
  }

  container.querySelector('#toggle-size').onclick = () => {
    const currentIndex = sizes.indexOf(checkboxes[0].size);
    const nextIndex = (currentIndex + 1) % sizes.length;

    checkboxes.forEach(checkbox => {
      checkbox.size = sizes[nextIndex];
    });
    sizeState.textContent = checkboxes[0].size;
  }

  container.querySelector('#toggle-label').onclick = () => {
    checkboxGroup.showGroupLabel = !checkboxGroup.showGroupLabel;
    labelState.textContent = String(checkboxGroup.showGroupLabel);
  }

  container.querySelector('#toggle-caption').onclick = () => {
    checkboxGroup.showCaption = !checkboxGroup.showCaption;
    captionState.textContent = String(checkboxGroup.showCaption);
  }

  container.querySelector('#toggle-caption-icon').onclick = () => {
    checkboxGroup.showCaptionIcon = !checkboxGroup.showCaptionIcon;
    captionIconState.textContent = String(checkboxGroup.showCaptionIcon);
  }

  container.querySelector('#toggle-required').onclick = () => {
    checkboxGroup.required = !checkboxGroup.required;
    requiredState.textContent = String(checkboxGroup.required);
  }
}