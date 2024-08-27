import { h,
         Element,
         Component,
         Prop,
         State } from '@stencil/core';
 

@Component({
    tag: 'ifx-chip',
    styleUrl: 'chip.scss',
    shadow: true
})


export class Chip {
    @Element() chip: HTMLIfxChipElement;

    @Prop() placeholder: string = '';
    @Prop() size: 'small' | 'large' = 'large';

    @State() opened: boolean = false;
  // @State() selectedValue: string = "";
  // @State() active: boolean = false;
  // @Event() ifxDropdownMenu: EventEmitter<CustomEvent>;

  // @Listen('mousedown', { target: 'document' })
  // handleOutsideClick(event: MouseEvent) {
  //   const path = event.composedPath();
  //   const chipWrapper = this.el.shadowRoot.querySelector('.wrapper');
  //   const dropdownMenu = this.getDropdownMenu();
  //   if (!path.includes(dropdownMenu) && !path.includes(chipWrapper)) {
  //     this.closedMenu();
  //   }
  // }

  // @Listen('ifxDropdownItem')
  // handleDropdownItemValueEmission(event: CustomEvent) {
  //   this.selectedValue = event.detail;
  //   this.ifxDropdownMenu.emit(event.detail);
  //   this.toggleMenu()
  // }

  // getDropdownMenu() { 
  //   let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
  //   return dropdownMenuComponent
  // }

  // closedMenu() {
  //   let dropdownMenuComponent = this.getDropdownMenu()
  //   if(dropdownMenuComponent.isOpen) {
  //     this.toggleCloseIcon();
  //   }
  //   dropdownMenuComponent.isOpen = false;
  //   this.active = false;
  // }

  // toggleMenu() { 
  //   let dropdownMenuComponent = this.getDropdownMenu()
  //   dropdownMenuComponent.isOpen = !dropdownMenuComponent.isOpen;
  //   this.active = dropdownMenuComponent.isOpen;
  //   this.toggleCloseIcon()
  // }

  // toggleCloseIcon() { 
  //   const closeIconWrapper = this.el.shadowRoot.querySelector('.wrapper-close-button')
  //   closeIconWrapper.classList.toggle('show')
  // }

  // render() {
  //   return (
  //     <div aria-value={this.selectedValue} aria-label='chip with a dropdown menu' class="dropdown container">
  //       <div class={`wrapper ${this.active ? 'active' : ''} ${this.selectedValue !== '' ? 'selected' : ''}`} onClick={() => this.toggleMenu()} tabIndex={0}>
  //         <div class="wrapper-label">
  //           {this.selectedValue ? this.selectedValue : this.placeholder}
  //         </div>
  //         <div class="wrapper-close-button">
  //           <ifx-icon icon="chevrondown12"></ifx-icon>
  //         </div>
  //       </div>
  //       <slot name="menu" />
  //     </div>
  //   );
  // }

    toggleDropdownMenu() {
        this.opened = !this.opened;
    }

    handleWrapperClick() {
        this.toggleDropdownMenu();
    }

    handleWrapperKeyDown(event: KeyboardEvent) {
        if (event.code === 'Space' || event.code === 'Enter') {
            this.toggleDropdownMenu();
        }
    }

    getChipItems(): NodeList {
        return this.chip.querySelectorAll('ifx-chip-item');
    }

    syncChipState() {
        const chipItems: NodeList = this.getChipItems();
    }

    componentWillLoad() {
        this.syncChipState();
    }

    render() {
        return (
            <div aria-value={'TBD'} aria-label='chip with a dropdown menu' class='chip'>
            
                {/* Wrapper and Label */}
                <div class={`chip__wrapper chip__wrapper--${this.size}`}
                    tabIndex={0}
                    onClick={() => {this.handleWrapperClick()}}
                    onKeyDown={(e) => {this.handleWrapperKeyDown(e)}}>

                    <div class='wrapper__label'>
                        {this.placeholder}
                    </div>

                    <div class={`wrapper__open-button ${this.opened ? 'wrapper__open-button--opened': ''}`}>
                        <ifx-icon icon='chevrondown12'></ifx-icon>
                    </div>
                    
                </div>

                {/* Dropdown */}
                <div class='chip__dropdown'>
                    <slot />
                </div>

            </div>
        ); 
    }
}