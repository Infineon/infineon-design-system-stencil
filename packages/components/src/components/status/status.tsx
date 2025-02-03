import { Component, h, Prop } from '@stencil/core';
 

@Component({
  tag: 'ifx-status',
  styleUrl: 'status.scss',
  shadow: true
})

export class Status {
  @Prop() label: string;
  @Prop() border: boolean = false;
  @Prop() color: string = 'orange-500';


  render() {
    const effectiveColor = this.color?.trim() ? this.color : 'orange-500';
    const containerClass = this.border ? `container border-${effectiveColor}` : 'container no-border';

    return (
      <div aria-label="a status indicator" aria-value={this.label} class={containerClass}>
        <span class={`dot ${effectiveColor}`}></span>
        <p class="text">{this.label}</p>
      </div>
    );
  }
}