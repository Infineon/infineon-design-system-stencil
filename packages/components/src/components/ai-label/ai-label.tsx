import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ifx-ai-label',
  styleUrl: 'ai-label.scss',
  shadow: true,
})
export class AiLabel {
  /** Determines whether to show a divider line */
  @Prop() readonly divider: boolean = true;
  /** Display variant - either label or icon */
  @Prop() readonly variant: 'label' | 'icon'  = 'label';


 render() {
  const showLabel = this.variant === 'label';
  const showIcon = this.variant === 'icon';

  return (
    <Host>
      {showIcon && <ifx-icon icon="ai16" />}

      {showLabel && (
        <div>
          {this.divider && <div class="divider"></div>}
            <div class="ai-label">
              <p class="title">Made with AI.</p>
              <p>Output can be misleading or wrong.</p>
            </div>
        </div>
      )}
    </Host>
   );
  }
}
