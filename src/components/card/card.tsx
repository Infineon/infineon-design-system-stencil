import { Component, Element, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ifx-card',
  styleUrl: '_card.scss',
  shadow: true,
})

export class Card {
  @Prop() skyline: boolean;
  @Prop() headline: string;
  @Prop() subtitle: string;
  @Prop() text: string;
  @Prop() button: boolean;
  @Prop() list: boolean;

  @Element() hostElement: HTMLElement;
  private action: HTMLElement;

  componentDidLoad() {
    console.log(this.action);

    const actionSlot = this.hostElement.querySelector(
      '[slot="action"]'
    ) as HTMLElement;

    if (actionSlot && actionSlot.tagName.toUpperCase() === 'IFX-BUTTON') {
      this.action = actionSlot.shadowRoot.querySelector('button');
    } else {
      this.action = actionSlot;
    }

    // this.setTriggerAttributes();
  }

  render() {
    return (
      <Host>
        <div class="card">
          <div class="card-body">
            <div>
              <slot name="img" />
            </div>
            {`${this.skyline}` === "true"
              ? <div class="card-subtitle">{this.subtitle}</div>
              : null
            }

            <div class="card-title">{this.headline}</div>

            <p class="card-text">{this.text}</p>

            <div part="action">
              <slot name="action" />
            </div>


          </div>

          {`${this.list}` === "true"
            ? <div class="list-group list-group-flush">
              <div class="list-group-item">An item</div>
              <div class="list-group-item">A second item</div>
              <div class="list-group-item">A third item</div>
            </div>
            : null
          }
        </div>
      </Host>
    );
  }
}
