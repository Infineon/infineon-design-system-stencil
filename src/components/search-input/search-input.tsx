import { Component, Prop, h, Element, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'ifx-search-input',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownSearch {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
  @Element() el;
  @Event({ bubbles: false }) searchedValue: EventEmitter<string>;

  handleInputChange(event) {
    const target = event.target.value;
    console.log(target)
    this.searchedValue.emit(target);
  }

  render() {
    return <input class='inf__search-input' type="text" placeholder="search" onInput={this.handleInputChange.bind(this)} />
  }
}