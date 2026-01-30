import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-ai-label',
  styleUrl: 'ai-label.scss',
  shadow: true,
})
export class AiLabel {
  @Prop() divider: boolean = true;
  @Prop() icon: boolean = false;


 render() {
  return this.icon ? (
    <div>
      <ifx-icon class="icon" icon="ai16"></ifx-icon>
    </div>
    ) : (
    <div>
      {this.divider ? <div class="divider"></div> : null}
        <div class="ai-label">
          <p class="title">Made with AI.</p>
          <p>Output can be misleading or wrong.</p>
        </div>
    </div>
   );
  }
}
