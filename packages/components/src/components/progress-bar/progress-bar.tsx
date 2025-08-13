import { Component, Prop, h, State, Watch, Element } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

@Component({
  tag: 'ifx-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true
})
export class ProgressBar {
  @Element() el: HTMLElement;
  @Prop() value: number = 0;
  @Prop() size: string;
  @Prop() showLabel: boolean = false;

  @State() internalValue: number;

  @Watch('value')
  valueChanged(newValue: number, oldValue: number) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }

  componentWillLoad() {
    this.internalValue = this.value;
  }

  async componentDidLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-progress-bar', await framework)
    }
  }

  render() {
    return (
      <div aria-label='a progress bar' aria-value={this.value}  class={`progress-bar ${this.size}`}>
        <div class="progress" style={{ width: `${this.internalValue}%` }}>
          {this.showLabel && this.size !== "s" && this.internalValue !== 0 && <span class="label">{`${this.internalValue}%`}</span>}
        </div>
      </div>
    );
  }
}
