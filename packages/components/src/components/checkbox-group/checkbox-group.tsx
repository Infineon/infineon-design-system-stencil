import { Component, State, Prop, h} from '@stencil/core';
//import { Checkbox } from '../checkbox/checkbox';
//import { Console } from 'console';

@Component({
    tag: 'ifx-checkbox-group',
    styleUrl: 'checkbox-group.scss',
    shadow: true,
    formAssociated: true
  })

export class CheckboxGroup {
  @Prop() orientation: 'horizontal' | 'vertical' = 'vertical';
  @State() selectedItems: string[] = [];

  onSelectionChanged(value: string) {
    /*this.selectedItems = this.selectedItems.includes(value)
      ? this.selectedItems.filter(item => item !== value)
      : [...this.selectedItems, value];*/
      console.log(value);
      
  }

  render() {
    return (
      <div class={`checkbox-group ${this.orientation}`}>
        <slot onSlotchange={(event: Event) => {
            const slot = event.target as HTMLSlotElement;
            const children = slot.assignedElements();
            children.forEach((child: HTMLElement) => {
              // Check if the child is a custom-checkbox element
              if (child.tagName.toLowerCase() === 'ifx-checkbox') {
                child.addEventListener('ifxChange', (e: CustomEvent) => {
                  this.onSelectionChanged(e.detail);
                });
                const value = child.getAttribute('value');
                if (value && this.selectedItems.includes(value)) {
                  child.setAttribute('checked', 'true');
                } else {
                  child.removeAttribute('checked');
                }
              }
            });
          }}></slot>
      </div>
    );
  }
}

    