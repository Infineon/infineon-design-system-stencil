import { Component, Prop, Element, h, Host, State, Listen, Fragment } from '@stencil/core';

@Component({
  tag: 'ifx-multiselect-option',
  styleUrl: 'multiselect-option.scss',
  shadow: true,
})
export class MultiselectOption {
  @Element() el: HTMLElement;

  @Prop() value: string;
  @Prop({ reflect: true, mutable: true }) selected: boolean = false;
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  @State() private isExpanded: boolean = false;
  @State() private hasChildren: boolean = false;
  @State() private depth: number = 0;
  @State() private level: number = 0;

  componentWillLoad() {
    this.hasChildren = this.el.children.length > 0;
    this.depth = this.calculateDepth();
    this.level = this.calculateDepth();

    this.el.setAttribute('data-level', this.depth.toString());
  }

  componentDidLoad() {
    if (this.hasChildren) {
      const hasSelectedChildren = this.el.querySelectorAll('ifx-multiselect-option[selected]').length > 0;
      if (hasSelectedChildren) {
        this.isExpanded = true;
      }
    }

    (this.el as any)['__stencil_instance'] = this;

    this.notifyMultiselect();
  }

  private calculateDepth(): number {
    let depth = 0;
    let parent = this.el.parentElement;
    while (parent && parent.tagName !== 'IFX-MULTISELECT') {
      if (parent.tagName === 'IFX-MULTISELECT-OPTION') {
        depth++;
      }
      parent = parent.parentElement;
    }
    return depth;
  }

  @Listen('click')
  handleClick(event: Event) {
    if (this.disabled) return;

    event.stopPropagation();

    if ((event.target as HTMLElement).closest('.chevron-wrapper')) {
      this.toggleExpansion();
      return;
    }

    let newSelectedState: boolean;

    if (this.indeterminate) {
      newSelectedState = true;
    } else {
      newSelectedState = !this.selected;
    }

    this.selected = newSelectedState;
    this.indeterminate = false;

    if (this.hasChildren) {
      this.isExpanded = newSelectedState;

      requestAnimationFrame(() => {
        this.selectAllChildren(newSelectedState);
        this.expandAllChildren(newSelectedState);
      });
    }

    this.updateParentStates();
    this.notifyMultiselect();
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
      event.stopPropagation();
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }

    if (event.key === 'ArrowRight' && this.hasChildren) {
      this.isExpanded = true;
    }

    if (event.key === 'ArrowLeft' && this.hasChildren) {
      this.isExpanded = false;
    }
  }

  private notifyMultiselect() {
    const updateEvent = new CustomEvent('ifx-option-changed', {
      bubbles: true,
      detail: {
        value: this.value,
        selected: this.selected,
        indeterminate: this.indeterminate
      }
    });
    this.el.dispatchEvent(updateEvent);
  }

  private selectAllChildren(selected: boolean) {
    const directChildren = Array.from(this.el.children)
      .filter(child => child.tagName === 'IFX-MULTISELECT-OPTION') as any[];

    directChildren.forEach((child: any) => {
      const childInstance = child['__stencil_instance'];
      if (childInstance) {
        childInstance.selected = selected;
        childInstance.indeterminate = false;

        if (childInstance.hasChildren) {
          childInstance.isExpanded = selected;
          childInstance.selectAllChildren(selected);
        }
        childInstance.notifyMultiselect?.();
      }
    });
  }

  private expandAllChildren(expanded: boolean) {
    const directChildren = Array.from(this.el.children)
      .filter(child => child.tagName === 'IFX-MULTISELECT-OPTION') as any[];

    directChildren.forEach((child: any) => {
      const childInstance = child['__stencil_instance'];
      if (childInstance && childInstance.hasChildren) {
        childInstance.isExpanded = expanded;
        childInstance.expandAllChildren(expanded);
      }
    });
  }

  private updateParentStates() {
    let parent = this.el.parentElement;
    while (parent && parent.tagName === 'IFX-MULTISELECT-OPTION') {
      const parentInstance = (parent as any)['__stencil_instance'];
      if (!parentInstance) {
        parent = parent.parentElement;
        continue;
      }

      const siblings = Array.from(parent.children)
        .filter(child => child.tagName === 'IFX-MULTISELECT-OPTION')
        .map(child => (child as any)['__stencil_instance'])
        .filter(instance => instance !== null);

      const selectedCount = siblings.filter(sibling => sibling.selected).length;
      const indeterminateCount = siblings.filter(sibling => sibling.indeterminate).length;
      const totalCount = siblings.length;

      if (selectedCount === totalCount && indeterminateCount === 0) {
        parentInstance.selected = true;
        parentInstance.indeterminate = false;
      } else if (selectedCount === 0 && indeterminateCount === 0) {
        parentInstance.selected = false;
        parentInstance.indeterminate = false;
      } else {
        parentInstance.selected = false;
        parentInstance.indeterminate = true;
      }

      parentInstance.notifyMultiselect?.();
      parent = parent.parentElement;
    }
  }

  private toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  private handleCheckboxChange = (event: CustomEvent) => {
    event.stopPropagation();

    const newSelectedState = event.detail;
    this.selected = newSelectedState;
    this.indeterminate = false;

    if (this.hasChildren) {
      this.isExpanded = newSelectedState;

      requestAnimationFrame(() => {
        this.selectAllChildren(newSelectedState);
        this.expandAllChildren(newSelectedState);
      });
    }

    this.updateParentStates();
    this.notifyMultiselect();
  }

  private handleHeaderClick = (event: Event) => {
    event.stopPropagation();
    if (!this.disabled) {
      this.handleClick(event);
    }
  }

  render() {
    const basePadding = this.level * 24 + 10;
    const additionalPadding = this.hasChildren ? 0 : 24;
    const totalPadding = basePadding + additionalPadding;

    return (
      <Host>
        <div
          class={{
            'option': true,
            'option--has-children': this.hasChildren,
            'option--expanded': this.isExpanded,
            'option--disabled': this.disabled,
            'option--selected': this.selected,
          }}
          role="treeitem"
          aria-expanded={this.hasChildren ? (this.isExpanded ? 'true' : 'false') : undefined}
          data-level={this.depth}
          aria-disabled={this.disabled ? 'true' : undefined}
          data-value={this.value}
        >
          <div
            class="option-item"
            style={{ paddingLeft: `${totalPadding}px` }}
          >
            <div class="chevron-wrapper" onClick={(e) => { e.stopPropagation(); this.toggleExpansion(); }}>
              {this.hasChildren && (
                <ifx-icon
                  class={`chevron ${this.isExpanded ? 'chevron--expanded' : 'chevron--collapsed'}`}
                  icon="chevron-right-16"
                />
              )}
            </div>

            <div class="checkbox-wrapper" onClick={(e) => e.stopPropagation()}>
              <ifx-checkbox
                size='s'
                checked={this.indeterminate ? false : this.selected}
                indeterminate={this.indeterminate}
                onIfxChange={this.handleCheckboxChange}
                disabled={this.disabled}
              />
            </div>

            <div
              class="option-label"
              onClick={this.handleHeaderClick}
              tabIndex={this.disabled ? -1 : 0}
              onKeyDown={this.handleKeyDown}
            >
              <slot/>
            </div>
          </div>

          {this.isExpanded && <div class="option-children"><slot name="children"/></div>}
        </div>
      </Host>
    );
  }
}
