export function render(container) {

  container.innerHTML = `
    <h2>Slider</h2>

    <h3>Default</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true"></ifx-slider>

    <h3>With Icons</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true" left-icon="cogwheel-16" right-icon="cogwheel-16"></ifx-slider>

    <h3>With Texts</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true" left-text="LeftText" right-text="RightText"></ifx-slider>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-percentage">Toggle Percentage</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-type">Toggle Type</ifx-button>

    <br><br>

    <span><b>Percentage:</b> <span id="state-percentage"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Type:</b> <span id="state-type"></span></span><br>
  `;

  const slider = container.querySelectorAll('ifx-slider');
  const percentageState = container.querySelector('#state-percentage');
  const disabledState = container.querySelector('#state-disabled');
  const typeState = container.querySelector('#state-type');

  const types = ["single", "double"];
  const sliders = slider[0];

  percentageState.textContent = String(sliders.showPercentage);
  disabledState.textContent = String(sliders.disabled);
  typeState.textContent = sliders.type;

  container.querySelector('#toggle-percentage').onclick = () => {
    slider.forEach(sliders => {
      sliders.showPercentage = !sliders.showPercentage;
    });
    percentageState.textContent = String(slider[0].showPercentage);
  }

  container.querySelector('#toggle-disabled').onclick = () => {
    slider.forEach(sliders => {
      sliders.disabled = !sliders.disabled;
    });
    disabledState.textContent = String(slider[0].disabled);
  }

  container.querySelector('#toggle-type').onclick = () => {
    slider.forEach(sliders => {
      const currentIndex = types.indexOf(sliders.type);
      const nextIndex = (currentIndex + 1) % types.length;
      sliders.type = types[nextIndex];
    });
    typeState.textContent = slider[0].type;
  }
}