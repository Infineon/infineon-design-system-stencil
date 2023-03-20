import { Component, Prop, h, Element, State, Watch, Event, EventEmitter, Listen } from "@stencil/core";

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
  @Prop({mutable: true}) selectedValue: string
  @Element() el;

  @Watch('selectedValue')
  addSelectedOption() {
    //console.log('here', this.el)
    this.el.setAttribute('selected-value',`${this.selectedValue}`);
  }

  @Event() valueSelected: EventEmitter<string>;

  @Listen('selectedOptionValue')
  selectedOptionValueFunc() { 
    console.log('event emitted')
  }

  handleOnChange(e) { 
    this.selectedValue = e.target.children[e.composedPath()[0].selectedIndex+1].innerHTML;
  }

  fireCustomEvent() { 
    console.log('here')
    console.log(this.valueSelected)
    this.valueSelected.emit('selectedOptionValue')
  }


  componentWillLoad() { 
    const optionElements = this.el.querySelectorAll('option')
    //console.log('option elements', optionElements)
    for(let i = 0; i < optionElements.length; i++) { 
      this.options.push(optionElements[i])
    }
  }

  render() {
    return  (
      <select class="inf__filter-input" onChange={this.fireCustomEvent} >
        <slot />
        {this.options.map(item => <option>{item.label || item.value}</option>)}
      </select>
    )
  }
}