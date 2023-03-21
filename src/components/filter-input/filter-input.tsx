import { Component, Prop, h, Element, State, Event, EventEmitter} from "@stencil/core";

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
  //@Prop({mutable: true}) selectedValue: string
  //@Prop({ mutable: true }) value: string = "";
  @Element() el;

  @Event() valueChanged: EventEmitter<string>;
  //@Event({ bubbles: false }) valueSelected: EventEmitter<string>;

  //private selectRef: HTMLSelectElement;

  handleInputChange(event) {
    const target = event.target.value;
    console.log('target', event.target.value)
    this.valueChanged.emit(target);
  }

  // @Watch('selectedValue')
  // addSelectedOption() {
  //   //console.log('here', this.el)
  //   this.el.setAttribute('selected-value',`${this.selectedValue}`);
  // }


  //@Event() valueSelected: EventEmitter<{value: string}>;

  // @Listen('valueSelected')
  // selectedOptionValueFunc(event) { 
  //   console.log('event emitted')
  //   console.log(event.detail.value)
  // }

  // handleOnChange(e) { 
  //   this.selectedValue = e.target.children[e.composedPath()[0].selectedIndex+1].innerHTML;
  // }

  // fireCustomEvent() { 
 
  //  this.valueSelected.emit({value: 'selectedOptionValue'})
  // }

  // handleChange(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectChange.emit(selectedValue);
  // }


  componentWillLoad() { 
    const optionElements = this.el.querySelectorAll('option')
    //console.log('option elements', optionElements)
    for(let i = 0; i < optionElements.length; i++) { 
      this.options.push(optionElements[i])
    }
  }

  render() {
    return  (
      <select class="inf__filter-input" onChange={(event) => this.handleInputChange(event)}>
        <slot />
        {this.options.map(item => <option>{item.label || item.value}</option>)}
      </select>
    )
  }
}