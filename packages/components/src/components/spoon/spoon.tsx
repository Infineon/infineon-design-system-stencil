import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ifx-spoon',
  styleUrl: 'spoon.scss',
  shadow: true
})

export class Spoon {
  @Element() el;
  @Prop() color: string = 'orange';

  render() {
    return (
      <div>
        <p>Spoon</p>
      </div>
    );
  }
}