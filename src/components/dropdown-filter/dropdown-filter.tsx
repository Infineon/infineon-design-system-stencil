import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-filter',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownFilter {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
  @Element() el;

  componentDidRender() { 
    const item = this.el.shadowRoot.querySelector('option');
    console.log('items', item)
  }

  render() {


    return  (
      <select class="inf__dropdown-select">
        <slot />
      </select>
    )
  }
}