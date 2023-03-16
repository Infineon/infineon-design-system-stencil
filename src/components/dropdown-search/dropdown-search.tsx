import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-search',
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


  render() {
    return <input class='inf__dropdown-search' type="text" placeholder="search" />
  }
}