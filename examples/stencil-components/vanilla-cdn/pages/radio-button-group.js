export function render(container) {

  container.innerHTML = `
    <h2>Radio Button Group</h2>

    <ifx-radio-button-group alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true" required="false">
      <ifx-radio-button value="0" disabled="false" checked="false" error="false" size="m">Option 0</ifx-radio-button>
      <ifx-radio-button value="1" size="m">Option 1</ifx-radio-button>
      <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
      <ifx-radio-button value="2" size="m">Option 2</ifx-radio-button>
    </ifx-radio-button-group>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-alignment">Toggle Alignment</ifx-button>
    <ifx-button variant="secondary" id="toggle-label">Toggle Label</ifx-button>
    <ifx-button variant="secondary" id="toggle-caption">Toggle Caption</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Alignment:</b> <span id="state-alignment"></span></span><br>
    <span><b>Show Label:</b> <span id="state-label"></span></span><br>
    <span><b>Show Caption:</b> <span id="state-caption"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Show Icon:</b> <span id="state-icon"></span></span><br>
  `;

  const radioButtonGroup = container.querySelector('ifx-radio-button-group');
  const alignmentState = container.querySelector('#state-alignment');
  const labelState = container.querySelector('#state-label');
  const captionState = container.querySelector('#state-caption');
  const requiredState = container.querySelector('#state-required');
  const iconState = container.querySelector('#state-icon');

  const alignments = ["vertical", "horizontal"];

  alignmentState.textContent = radioButtonGroup.alignment;
  labelState.textContent = String(radioButtonGroup.showGroupLabel);
  captionState.textContent = String(radioButtonGroup.showCaption);
  requiredState.textContent = String(radioButtonGroup.required);
  iconState.textContent = String(radioButtonGroup.showCaptionIcon);

  container.querySelector('#toggle-alignment').onclick = () => {
    const currentIndex = alignments.indexOf(radioButtonGroup.alignment);
    const nextIndex = (currentIndex + 1) % alignments.length;

    radioButtonGroup.alignment = alignments[nextIndex];
    alignmentState.textContent = radioButtonGroup.alignment;
  }

  container.querySelector('#toggle-label').onclick = () => {
    radioButtonGroup.showGroupLabel = !radioButtonGroup.showGroupLabel;
    labelState.textContent = String(radioButtonGroup.showGroupLabel);
  }

  container.querySelector('#toggle-caption').onclick = () => {
    radioButtonGroup.showCaption = !radioButtonGroup.showCaption;
    captionState.textContent = String(radioButtonGroup.showCaption);
  }

  container.querySelector('#toggle-required').onclick = () => {
    radioButtonGroup.required = !radioButtonGroup.required;
    requiredState.textContent = String(radioButtonGroup.required);
  }

  container.querySelector('#toggle-icon').onclick = () => {
    radioButtonGroup.showCaptionIcon = !radioButtonGroup.showCaptionIcon;
    iconState.textContent = String(radioButtonGroup.showCaptionIcon);
  }

}