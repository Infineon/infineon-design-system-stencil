import { Component, h, Prop, Element, State } from '@stencil/core';
 

@Component({
  tag: 'ifx-indicator',
  styleUrl: 'indicator.scss',
  shadow: true
})
export class Indicator {
  @Element() el;
  @State() filteredNumber: string | number;
  @Prop() inverted: boolean = false;
  @Prop() ariaLabel: string | null;
  @Prop() variant: string = 'number'
  @Prop() number: number = 0;

  handleNumber() {
    this.filteredNumber = !isNaN(this.number) && this.number > 99 ? '99+' : this.number;
  }

  componentWillLoad() { 
    this.handleNumber()
  }

  componentWillUpdate() {
    this.handleNumber()
  }

  render() {
    return (
      <div aria-label={this.ariaLabel} class='indicator__container'>
       {this.variant === 'number' && 
       <div class={`number__container ${this.inverted ? 'inverted' : ""}`}>
          <div class="number__wrapper">
            {this.filteredNumber}
          </div> 
       </div>}
       {this.variant === 'dot' && <div class="dot__wrapper"></div>}
      </div>
    );
  }
}