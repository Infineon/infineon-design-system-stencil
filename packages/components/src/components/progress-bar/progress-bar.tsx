import { Component, Prop, Event, EventEmitter, h, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true
})
export class ProgressBar {
  @Prop() percentage: number = 0;
  @Prop() label: string = '';
  @Prop() size: string;
  @Prop() showLabel: boolean = false;

  @Event() percentageChange: EventEmitter<CustomEvent>;

  @Watch('percentage')
  onPercentageChanged(newValue: number) {
    const event = new CustomEvent('percentage-change', {
      bubbles: true,
      composed: true,
      detail: newValue
    });

    this.percentageChange.emit(event);
  }



  render() {
    return (
      <div class={`progress-bar ${this.size}`}>
        <div class="progress" style={{ width: `${this.percentage}%` }}>
          {this.showLabel && this.size !== "s" && <span class="label">{`${this.percentage}%`}</span>}
        </div>
      </div>
    );
  }


}