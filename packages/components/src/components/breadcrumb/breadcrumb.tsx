import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true
})
export class Breadcrumb {
  @Element() el;

  componentDidLoad() {
    const element = this.el.shadowRoot.firstChild;
    this.addEventListenersToHandleCustomFocusState(element);

  }

  private addEventListenersToHandleCustomFocusState(element: HTMLElement) {
    if (!element) {
      console.error('element not found');
      return;
    }
    element.tabIndex = -1;

    const slot = element.querySelector('slot');
    const assignedNodes = slot.assignedNodes();

    for (let i = 0; i < assignedNodes.length; i++) {
      const node = assignedNodes[i];
      if (node.nodeName === 'IFX-BREADCRUMB-ITEM') {
        const breadcrumbLabel = node as HTMLIfxBreadcrumbItemElement;
        if (!breadcrumbLabel.hasAttribute('url')) {
          breadcrumbLabel.tabIndex = -1;
          breadcrumbLabel.addEventListener('focus', () => {
            if (breadcrumbLabel.hasAttribute('url')) {
              breadcrumbLabel.blur();
            }
          });
        }
      }
    }
  }

  render() {
    return (
      <nav aria-label="Page navigation breadcrumb">
        <ol class="breadcrumb">
          <slot />
        </ol>
      </nav>
    );
  }
}
