//dropdown.tsx
import { Component, Prop, h, Element, Listen, Method, Watch, State, EventEmitter, Event } from "@stencil/core";
import { createPopper } from '@popperjs/core';

import { IOpenable } from './IOpenable';

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

@Component({
  tag: 'ifx-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true
})

export class Dropdown {
  @Element() el;
  @Prop() placement: Placement = 'bottom-start';
  @Prop() defaultOpen: boolean = false;
  @Prop() noAppendToBody: boolean = false;
  @Event() ifxOpen: EventEmitter;
  @Event() ifxClose: EventEmitter;
  @Event() ifxDropdown: EventEmitter;
  @Prop() disabled: boolean;
  @Prop() noCloseOnOutsideClick: boolean = false;
  @Prop() noCloseOnMenuClick: boolean = false;
  @State() internalIsOpen: boolean = false;
  @State() trigger: HTMLElement;
  @State() menu: HTMLElement
  // Popper instance for positioning
  popperInstance: any;


  @Listen('ifxDropdownItem')
  handleDropdownMenuEventsReemission(event: CustomEvent) { 
    this.ifxDropdown.emit(event.detail)
  }

  componentWillLoad() {
    this.updateSlotContent();
    this.watchHandlerIsOpen(this.defaultOpen, this.internalIsOpen);
  }

  @Watch('defaultOpen')
  watchHandlerIsOpen(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue && newValue !== this.internalIsOpen) {
      if (newValue) {
        this.openDropdown();
      } else {
        this.closeDropdown();
      }
    }
  }

  @Watch('disabled')
  watchHandlerDisabled(newValue: boolean) {
    if (this.trigger) {
      (this.trigger as undefined as HTMLIfxDropdownTriggerButtonElement).disabled = newValue;
    }
  }

  @Listen('slotchange')
  watchHandlerSlot() {
    this.updateSlotContent();
  }

  // handling assignment of trigger and menu
  updateSlotContent() {
    // Get dropdown trigger. name has to start with ifx-dropdown-trigger
    this.trigger = this.el.querySelector('ifx-dropdown-trigger-button, ifx-dropdown-trigger');
    if (this.trigger) {
      (this.trigger as undefined as HTMLIfxDropdownTriggerButtonElement).disabled = this.disabled;
      this.trigger.removeEventListener('click', this.triggerClickHandler.bind(this));
      this.trigger.addEventListener('click', this.triggerClickHandler.bind(this));
    }
    // Remove menu if exists from body
    if (!this.noAppendToBody) {
      if (this.menu) {
        this.menu.remove();
      }
      // Get new menu and add to body
      this.menu = this.el.querySelector('ifx-dropdown-menu');
     
      // event handler for closing dropdown on menu click
      //document.body.append(this.menu);
    } else {
      this.menu = this.el.querySelector('ifx-dropdown-menu');

    }
    this.menu.removeEventListener('click', this.menuClickHandler.bind(this));
    this.menu.addEventListener('click', this.menuClickHandler.bind(this));

  }

  menuClickHandler() {
    if (!this.noCloseOnMenuClick) {
      this.closeDropdown();
    }
  }

  triggerClickHandler() {
    if (!this.internalIsOpen) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  disconnectedCallback() {
    // Destroy popper instance if exists
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
    // Remove menu if exists
    if (this.menu) {
      this.menu.remove();
    }
  }

  @Method()
  async isOpen() {
    return this.internalIsOpen;
  }

  @Method()
  async closeDropdown() {
    if (this.internalIsOpen) {
      this.internalIsOpen = false;
      // sets isOpen prop on trigger and menu
      (this.trigger as unknown as IOpenable).isOpen = false;
      (this.menu as unknown as IOpenable).isOpen = false;
      // Emit close event
      this.ifxClose.emit();
    }
    // Destroy popper instance if exists
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  @Method()
  async openDropdown() {
    if (!this.internalIsOpen && !this.disabled) {
      this.internalIsOpen = true;
      // sets isOpen prop on trigger and menu
      (this.trigger as unknown as IOpenable).isOpen = true;
      (this.menu as unknown as IOpenable).isOpen = true;
      // Create popper instance for positioning
      this.popperInstance = createPopper(
        this.el,
        this.menu,
        { placement: this.placement });

      this.ifxOpen.emit();
    }
  }

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close dropdown if outside click
    if (!this.noCloseOnOutsideClick && !this.el.contains(target) && !this.menu.contains(target)) {
      this.closeDropdown();
    }
  }

  render() {
    return (
      <div class='dropdown'>
        <slot />
      </div>
    )
  }
}