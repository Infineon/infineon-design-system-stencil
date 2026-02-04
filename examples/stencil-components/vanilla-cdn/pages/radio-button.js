export function render(container) {

    container.innerHTML = `
        <h2>Radio Button</h2>

        <ifx-radio-button size="s" name="radio-button" value="radio" error="false" disabled="false">Text</ifx-radio-button>

        <br><br>

        <h3 style="text-decoration: underline;">Controls</h3>
        <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
        <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

        <br><br>

        <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
        <span><b>Error:</b> <span id="state-error"></span></span><br>
        <span><b>Size:</b> <span id="state-size"></span></span><br>
    `;

    const radioButton = container.querySelector('ifx-radio-button');
    const disabledState = container.querySelector('#state-disabled');
    const errorState = container.querySelector('#state-error');
    const sizeState = container.querySelector('#state-size');

    const sizes = ["s", "m"];

    disabledState.textContent = String(radioButton.disabled);
    errorState.textContent = String(radioButton.error);
    sizeState.textContent = radioButton.size;

    container.querySelector('#toggle-disabled').onclick = () => {
        radioButton.disabled = !radioButton.disabled;
        disabledState.textContent = String(radioButton.disabled);
    }

    container.querySelector('#toggle-error').onclick = () => {
        radioButton.error = !radioButton.error;
        errorState.textContent = String(radioButton.error);
    }

    container.querySelector('#toggle-size').onclick = () => {
        const currentIndex = sizes.indexOf(radioButton.size);
        const nextIndex = (currentIndex + 1) % sizes.length;

        radioButton.size = sizes[nextIndex];
        sizeState.textContent = radioButton.size;
    }
}