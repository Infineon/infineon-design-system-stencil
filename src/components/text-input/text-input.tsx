import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-text-input',
  styleUrl: '../../index.scss', 
  shadow: true
})

export class TextInput {
  @Element() el;
  @Prop() placeholder: string = "Placeholder"
  @Prop() error: boolean = false;
  @Prop() success: boolean = false;

  render() {
    return (
      <div class='textInput__container'>
        <label htmlFor="text-field">Label Text</label>
        <input 
        type="text" 
        id='text-field' 
        placeholder={this.placeholder} 
        class={`${this.error ? 'error' : ""} ${this.success ? "success" : ""}`}/>
      </div>
    );
  }
}