import { Component, Prop, Event, EventEmitter, h, Watch } from '@stencil/core';

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

  @Event() ifxChange: EventEmitter<CustomEvent>;

  @Watch('value')
  onValueChanged(newValue: number) {
    const event = new CustomEvent('ifx-change', {
      bubbles: true,
      composed: true,
      detail: newValue
    });
    // console.log("progress-bar event ", event)
    this.ifxChange.emit(event);
  }



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