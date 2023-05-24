import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-chip',
  styleUrl: '../../index.scss',
  shadow: true
})

export class Chip {
  @Element() el;
  @Prop() label: string;

  render() {
    return (
      <div class="chip__container">
        <div class="chip__wrapper">
          <div class="chip__wrapper-label">
            <slot />
          </div>
          <div class="chip__wrapper-close-button">
            <ifx-icon icon="chevrondown12"></ifx-icon>
          </div>
        </div>
        <div class="chip__dropdown-menu">
          <ifx-dropdown-menu>
            <ifx-dropdown-item checkable>Item1</ifx-dropdown-item>
            <ifx-dropdown-item checkable>Item2</ifx-dropdown-item>
            <ifx-dropdown-item checkable>Item3</ifx-dropdown-item>
            <ifx-dropdown-item checkable>Item4</ifx-dropdown-item>
          </ifx-dropdown-menu>
        </div>
      </div>
    );
  }
}