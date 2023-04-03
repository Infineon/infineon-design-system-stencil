import { Component, Prop, h, Element, State } from "@stencil/core";

@Component({
  tag: 'ifx-filter-input',
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
  @State() options: Array<any> = []
  @Element() el;

  componentWillRender() {
    const optionElements = this.el.querySelectorAll('option')
    for (let i = 0; i < optionElements.length; i++) {
      this.options.push(optionElements[i])
    }
  }


  render() {
    return (
      <select class="inf__filter-input">
        <slot />
        {this.options.map(item => <option>{item.label || item.value}</option>)}
      </select>
    )
  }
}
