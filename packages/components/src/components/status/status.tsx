import { Component, h, Prop, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking'; 
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';

@Component({
  tag: 'ifx-status',
  styleUrl: 'status.scss',
  shadow: true
})

export class Status {
  @Element() el;
  @Prop() label: string;
  @Prop() border: boolean = false;
  @Prop() color: string = 'orange-500';

  componentWillLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      trackComponent('ifx-status')
    }
  }

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