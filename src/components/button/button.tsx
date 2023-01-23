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
        <slot />
        {this.icon && this.position === 'right' && iconSVG}
    
      </button>
    );
  }
}
