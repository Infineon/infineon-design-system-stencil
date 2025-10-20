import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

export interface SpoonItem {
  text: string;
}

@Component({
  tag: 'ifx-spoon',
  styleUrl: 'spoon.scss',
  shadow: true
})

export class Spoon {
  @Element() el;
  @Prop() color: string = 'orange';
  @Event() ifxSpoonItem: EventEmitter<SpoonItem>;

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