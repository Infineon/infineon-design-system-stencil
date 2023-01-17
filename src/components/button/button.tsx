import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-button',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() variant: 'solid' | 'outline' | 'outline-text';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean;
  @Prop() position: string = 'left';


  render() {
    const variantClass =
      `${this.variant}` === "outline"
        ? `outline-${this.color}`
        : `${this.variant}` === 'outline-text'
          ? `${this.color}-outline-text`
          : `${this.color}`;

    const sizeClass =
      `${this.size}` === "s"
        ? "btn-s"
        : "";


    const iconSVG = <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>star 16</title><g stroke-width="1" stroke-linejoin="round" fill="none" stroke="" stroke-linecap="round" class="nc-icon-wrapper"><polygon points="8,0.867 10.318,5.563 15.5,6.316 11.75,9.971 12.635,15.133 8,12.696 3.365,15.133 4.25,9.971 0.5,6.316 5.682,5.563 " data-cap="butt"></polygon> </g></svg>


     
    return (
      <button class={
        `btn
        btn-${variantClass}
        ${sizeClass}
        ${this.disabled ? 'disabled' : ''}`
      }
        type="button"
      >

        {this.icon && this.position === 'left' && iconSVG }
        {this.label}
        {this.icon && this.position === 'right' && iconSVG}
    

        {this.icon ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" /></svg> : ''}
        {this.label}
        <slot>{this.label}</slot>

      </button>
    );
  }
}
