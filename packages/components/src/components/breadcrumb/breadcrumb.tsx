import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Element() el;

  componentDidLoad() { 
    const breadcrumbItems = this.el.querySelectorAll('ifx-breadcrumb-item')
    for(let i = 1; i < breadcrumbItems.length; i++) { 
      let label = breadcrumbItems[i].querySelector('ifx-breadcrumb-item-label')
      let container = label.shadowRoot.querySelector('.breadcrumb-item-label-container')
      if(container) { 
        container.classList.add('margin')
      }
    }
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <slot />
        </ol>
      </nav>
    );
  }
}
