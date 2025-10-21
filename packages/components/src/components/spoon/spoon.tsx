import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-spoon',
  styleUrl: 'spoon.scss',
  shadow: true
})

export class Spoon {
  @Element() el;
  @Prop() color: string = 'orange';
  @Event() ifxSpoonItem: EventEmitter;

  emitSpoonText() {
    this.ifxSpoonItem.emit({text: 'mySpoon'})
  }

  render() {
    return (
      <div>
        <p>Spoon</p>
        <button onClick={() => this.emitSpoonText()}>emit</button>
      </div>
    );
  }
}