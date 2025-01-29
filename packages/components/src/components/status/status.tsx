import { Component, h, Prop } from '@stencil/core';
 

@Component({
  tag: 'ifx-status',
  styleUrl: 'status.scss',
  shadow: true
})

export class Status {
  @Prop() label: string;
  @Prop() border: boolean = false;
  @Prop() color: 'engineering-100' | 'engineering-200' | 'engineering-300' | 'engineering-400' | 'engineering-500' | 'engineering-600' | 'ocean-100' | 'ocean-200' | 'ocean-300' | 'ocean-400' | 'ocean-500' | 'ocean-600' | 'ocean-700' | 'red-500' | 'red-600' | 'red-700' | 'orange-500' | 'green-500' | 'lawn-400' | 'lawn-500' | 'lawn-700' | 'berry-400' | 'berry-500' | 'sun-400' | 'sun-500' | 'sand-400' | 'sand-500' = 'orange-500';



  render() {
    const containerClass = this.border ? `container border-${this.color}` : 'container no-border';

    return (
      <div aria-label="a status indicator" aria-value={this.label} class={containerClass}>
        <span class={`dot ${this.color}`}></span>
        <p class="text">{this.label}</p>
      </div>
    );
  }
}