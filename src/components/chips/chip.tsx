import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox',
  styleUrl: '../../index.scss',
  shadow: true
})

export class Chip {
  @Element() el;


  render() {
    return (
      <div class="chip__container">
        <div class="chip__wrapper">
          <div class="chip__wrapper-label"></div>
          <div class="chip__wrapper-close-button"></div>
        </div>
        <div class="chip__dropdown-menu"></div>
      </div>
    );
  }
}