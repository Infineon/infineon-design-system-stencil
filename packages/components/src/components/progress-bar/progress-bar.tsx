import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true
})
export class ProgressBar {
  @Prop() value: number = 0;
  @Prop() label: string = '';
  @Prop() size: string;
  @Prop() showLabel: boolean = false;

  render() {
    return (
      <div class={`progress-bar ${this.size}`}>
        <div class="progress" style={{ width: `${this.value}%` }}>
          {this.showLabel && this.size !== "s" && <span class="label">{`${this.value}%`}</span>}
        </div>
      </div>
    );
  }


}