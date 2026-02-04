export function render(container) {

  container.innerHTML = `
    <h2>Progress Bar</h2>

    <ifx-progress-bar value="10" size="m" show-label="true"></ifx-progress-bar>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="update-progress">Update Progress</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-label">Toggle Label</ifx-button>

    <br /><br />

    <span><b>Size:</b> <span id="state-size"></span></span><br />
    <span><b>Show Label:</b> <span id="state-label"></span></span><br />
  `;

  const progressBar = container.querySelector('ifx-progress-bar');
  const stateSize = container.querySelector('#state-size');
  const stateShowLabel = container.querySelector('#state-label');

  const sizes = ["s", "m"];
  const progressValue = 10;
  let stateProgressValue = '';

  stateSize.textContent = progressBar.size;
  stateShowLabel.textContent = String(progressBar.showLabel);
  stateProgressValue = progressBar.value;

  container.querySelector('#toggle-size').onclick = () => {
    const currentIndex = sizes.indexOf(progressBar.size);
    const nextIndex = (currentIndex + 1) % sizes.length;
    progressBar.size = sizes[nextIndex];
    stateSize.textContent = progressBar.size;
  }

  container.querySelector('#toggle-label').onclick = () => {
    progressBar.showLabel = !progressBar.showLabel;
    stateShowLabel.textContent = String(progressBar.showLabel);
  }

  container.querySelector('#update-progress').onclick = () => {
    stateProgressValue = (stateProgressValue + progressValue) % 110;
    progressBar.value = stateProgressValue;
  }
}