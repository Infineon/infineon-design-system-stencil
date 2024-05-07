import { Component, h, Prop, Event, EventEmitter, Listen, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ifx-list-entry',
  styleUrl: 'list-entry.scss',
  shadow: true,
})
export class ListEntry {
  @Element() host: HTMLElement;
  @Prop({ mutable: true }) value: boolean;
  @Prop() label: string;

  @Prop() type: string;
  @Event() ifxListEntryChange: EventEmitter;

  @Watch('value')
  valueChanged(newValue: boolean) {
    if (newValue) {
      this.host.setAttribute('value', 'true');
    } else {
      this.host.removeAttribute('value');
    }
  }

  @Listen('ifxChange')
  handleFilterEntryChange(event: CustomEvent) {
    this.value = event.detail;
    this.ifxListEntryChange.emit({ label: this.label, value: this.value, type: this.type });
  }


  render() {
    return (
      <div class="wrapper">
        {this.type === 'checkbox' ? (
          <div class="list-entry">
            <ifx-checkbox size="s" value={this.value}>{this.label}</ifx-checkbox>
          </div>
        ) : (
          <div class="list-entry">
            <ifx-radio-button size="s" value={this.value}>{this.label}</ifx-radio-button>
          </div>
        )}
      </div>
    );
  }
}
