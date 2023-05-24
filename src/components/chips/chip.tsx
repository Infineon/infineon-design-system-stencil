import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-chip',
  styleUrl: '../../index.scss',
  shadow: true
})

export class Chip {
  @Element() el;


  render() {
    return (
      <div class="chip__container">
        <div class="chip__wrapper">
          <div class="chip__wrapper-label">
            label
          </div>
          <div class="chip__wrapper-close-button">
            <ifx-icon icon="chevrondown12"></ifx-icon>
          </div>
        </div>
        <div class="chip__dropdown-menu">
          <ifx-dropdown-menu>
            <ifx-dropdown-item>Item1</ifx-dropdown-item>
            <ifx-dropdown-item>Item2</ifx-dropdown-item>
            <ifx-dropdown-item>Item3</ifx-dropdown-item>
            <ifx-dropdown-item>Item4</ifx-dropdown-item>
          </ifx-dropdown-menu>
        </div>
      </div>
    );
  }
}