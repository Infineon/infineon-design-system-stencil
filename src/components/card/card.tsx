import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ifx-card',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Card {
  @Prop() skyline: boolean;
  @Prop() headline: string;
  @Prop() subtitle: string;
  @Prop() text: string;
  @Prop() button: boolean;
  @Prop() list: boolean;


  render() {
    return (
      <Host>
        <div class="card">
          <div class="card-body">
            <div part="img">
              <slot name="img" />
            </div>
            {`${this.skyline}` === "true"
              ? <div class="card-subtitle">{this.subtitle}</div>
              : null
            }

            <div class="card-title">{this.headline}</div>

            <p class="card-text">{this.text}</p>
            <div part="action">
              {this.button
                ? <slot name="action" />
                : ""}

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
