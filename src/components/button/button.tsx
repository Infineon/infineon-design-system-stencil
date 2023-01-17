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
          ? 'outline-text'
          : `${this.color}`;

    const sizeClass =
      `${this.size}` === "s"
        ? "btn-s"
        : "";


    const iconSVG =
      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>thumb up 16</title><g stroke-width="1" stroke-linejoin="round" fill="none" stroke="#000000" stroke-linecap="round" class="nc-icon-wrapper"><rect x="0.5" y="7.5" width="3" height="8" stroke="#000000"></rect> <path d="M5.5,15.5h6.9a2,2,0,0,0,1.952-1.566l1.111-5A2,2,0,0,0,13.507,6.5H9.5v-4a2,2,0,0,0-2-2l-2,6"></path></g></svg>
    

    return (
      <button class={
        `btn
        btn-${variantClass}
        ${sizeClass}
        ${this.disabled ? 'disabled' : ''}`
      }
        type="button"
      >
      
      {this.icon ?
       this.position === 'left'
        ? iconSVG `${this.label}`
        : `${this.label} icon` 
      : this.label}
    
        
      </button>
    );
  }
}
