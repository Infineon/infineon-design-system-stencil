import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-card-image',
  styleUrl: 'card-image.scss',
  shadow: true,
})

export class CardImage {
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() position: string;
  @Event() imgPosition: EventEmitter;

  handlePosition(position) {
    this.imgPosition.emit(position)
  }

  componentWillLoad() {
    this.handlePosition(this.position)
  }

  componentDidUpdate() {
    this.handlePosition(this.position)
  }

  render() {
    return (
      <img src={this.src} alt={this.alt} class="card-image" />
    );
  }
}
