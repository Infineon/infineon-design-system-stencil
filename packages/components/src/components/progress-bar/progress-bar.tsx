import { Component, Prop, h, State, Watch } from '@stencil/core';
 

@Component({
  tag: 'ifx-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true
})
export class ProgressBar {
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



  render() {
    return (
      <div role="progressbar"
        aria-valuenow={this.internalValue}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`Progress: ${this.internalValue}%`} class={`progress-bar ${this.size}`}>
        <div class="progress" style={{ width: `${this.internalValue}%` }}>
          {this.showLabel && this.size !== "s" && this.internalValue !== 0 && <span class="label">{`${this.internalValue}%`}</span>}
        </div>
      </div>
    );
  }
}
