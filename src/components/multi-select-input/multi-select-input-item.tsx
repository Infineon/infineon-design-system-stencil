import { Component, h, Element, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'ifx-multi-select-input-item',
  styleUrl: './multi-select-input-item.scss',
  shadow: true
})

export class MultiSelectInputItem {

  @Element() el;
  @Prop() content: string = ""
  @Event({bubbles: false}) closed: EventEmitter<boolean>;

  handleCloseButton() { 
    this.closed.emit(this.el)
  }

  handleSelectItem(event) { 
    event.stopPropagation()
  }

  render() {
    return (
      <div class='multiSelectInput__item-container' onClick={this.handleSelectItem.bind(this)}>
        <div class="multiSelectInput__item-content">
          {this.content}
        </div>
        <div class="multiSelectInput__item-icon">
          <ifx-icon onClick={this.handleCloseButton.bind(this)} icon='cross-12'></ifx-icon>
        </div>
        
      </div>
    )
  }
}