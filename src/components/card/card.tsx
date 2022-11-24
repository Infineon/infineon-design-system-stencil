import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-card',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Card {
  @Prop() skyline: boolean;
  @Prop() headline: string;
  @Prop() text: string;
  @Prop() button: boolean;
  @Prop() list: boolean;

  render() {
    return (
      <div class="card">
        <div class="card-body">
          {`${this.skyline}` === "true"
            ? <div class="card-subtitle">More Information</div>
            : null
          }

          <div class="card-title">{this.headline}</div>

          <p class="card-text">{this.text}</p>

          {`${this.button}` === "true"
            ? <ifx-button label="Go somewhere" variant="solid" color="primary" size="s" disabled={false} icon={false}/>
            : null
          }
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
    );
  }
}
