import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-ai-label',
  styleUrl: 'ai-label.scss',
  shadow: true,
})
export class Alert {
  @Prop() divider: boolean = true;
  @Prop() icon: boolean = true;


  render() {
    return (
      <div>
        {this.icon && <ifx-icon class="icon" icon="ai16"></ifx-icon>}
        {this.divider && <div class="divider"></div>}
        <div class="ai-label">
            <div class="title">Made with AI.</div>
            <div class="subtitle">Output can be misleading or wrong.</div>
        </div>
      </div>
    );
  }
}
