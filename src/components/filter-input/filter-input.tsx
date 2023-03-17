import { Component, Prop, h, Element, State, Watch } from "@stencil/core";

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
  @State() options: Array<any> =[]
  @Prop() selectedValue: string
  @Element() el;

  @Watch('selectedValue')
  changeSelectedOption() {
    console.log('here', this.el)
    this.el.setAttribute('selected-option', '');
  }







  componentWillRender() { 
    const optionElements = this.el.querySelectorAll('option')
    for(let i = 0; i < optionElements.length; i++) { 
      this.options.push(optionElements[i])
    }
  }

  componentWillLoad() { 
    this.el.setAttribute('selected-city', 'sapporo')
    console.log(this.el)
  }

  render() {
    return  (
      <select class="inf__filter-input" selected-value={this.selectedValue}>
        <slot />
        {this.options.map(item => <option>{item.label || item.value}</option>)}
      </select>
    )
  }
}