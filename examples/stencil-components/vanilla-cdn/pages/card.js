export function render(container) {

  container.innerHTML = `
    <h2>Card</h2>

    <ifx-card direction="horizontal" href="" target="_blank" aria-label="Card">
      <ifx-card-image position="undefined" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="Coffee" slot="img"></ifx-card-image>
      <ifx-card-overline>
        Overline
      </ifx-card-overline>
      <ifx-card-headline>
        Headline
      </ifx-card-headline>
      <ifx-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </ifx-card-text>
      <ifx-card-links slot="buttons">
        <ifx-button variant="primary">Button</ifx-button>
        <ifx-button variant="secondary">Button</ifx-button>
      </ifx-card-links>
    </ifx-card>

    <br><br>
    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-direction">Toggle Direction</ifx-button>

    <br><br>
    <span><b>Direction:</b> <span id="state-direction"></span></span><br>
  `;

  const card = container.querySelector('ifx-card');
  const directionState = container.querySelector('#state-direction');
  const directions = ["horizontal", "vertical"];

  directionState.textContent = card.direction;

  container.querySelector('#toggle-direction').onclick = () => {
    const currentIndex = directions.indexOf(card.direction);
    const nextIndex = (currentIndex + 1) % directions.length;

    card.direction = directions[nextIndex];
    directionState.textContent = card.direction;
  }
}