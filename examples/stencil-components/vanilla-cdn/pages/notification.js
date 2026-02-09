export function render(container) {

  container.innerHTML = `
    <h2>Notification</h2>

    <ifx-notification 
      icon = "c-check-16"
      variant="neutral" 
      link-text="Link" 
      link-href="https://www.example.com"
      link-target="_blank">
      Sample Notification
    </ifx-notification>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>

    <br /><br />
    <span><b>Variant:</b> <span id="state-variant"></span></span><br />
  `;

  const notification = container.querySelector('ifx-notification');
  const stateVariant = container.querySelector('#state-variant');

  const variants = ["neutral", "success", "locked", "error"];

  stateVariant.textContent = notification.variant;

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(notification.variant);
    const nextIndex = (currentIndex + 1) % variants.length;
    notification.variant = variants[nextIndex];
    stateVariant.textContent = notification.variant;
  }
}