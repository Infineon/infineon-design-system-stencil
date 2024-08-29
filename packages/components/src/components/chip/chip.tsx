import { h,
         Element,
         Component,
         Listen,
         Prop,
         State } from '@stencil/core';

import { ChipItemEvent } from './interfaces';

@Component({
    tag: 'ifx-chip',
    styleUrl: 'chip.scss',
    shadow: true
})


export class Chip {
    @Element() chip: HTMLIfxChipElement;

    @Prop() placeholder: string = '';
    @Prop() size: 'small' | 'large' = 'large';
    @Prop() variant: 'single' | 'multi' = 'single';

    @State() opened: boolean = false;
    @State() selectedOptions: Array<ChipItemEvent> = [];

    @Listen('mousedown', { target: 'document' })
    handleOutsideClick(event: MouseEvent) {
        const path = event.composedPath();
        const chipWrapper = this.chip.shadowRoot.querySelector('.chip__wrapper');
        const chipDropdown = this.chip.shadowRoot.querySelector('.chip__dropdown');
        if (!path.includes(chipDropdown) && !path.includes(chipWrapper) && this.opened) {
            this.toggleDropdownMenu();
        }
    }

    @Listen('ifxChipItem') 
    updateSelectedOptions(event: CustomEvent<ChipItemEvent>) {
        const eventDetail: ChipItemEvent = event.detail;
        if (this.variant === 'single') {
            if (eventDetail.selected) {
                this.selectedOptions = [ eventDetail ];
                this.opened = false;
            } else {
                this.selectedOptions = [];
            }
        } else {
            if (eventDetail.selected) {
                this.selectedOptions = [...this.selectedOptions, eventDetail];
            } else {
                this.selectedOptions = this.selectedOptions.filter((option) => option.key !== eventDetail.key);
            }
        }
    }

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
        let key: number = 0;
        chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
            chipItem.chipState = { size: this.size,
                                   variant: this.variant, 
                                   key: key++ };
        });
    }

    getSelectedOptions(): string {
        console.log(this.selectedOptions)
        if (this.variant === 'single') {
            return this.selectedOptions[0].label;
        } else {
            let optionsLabel = '';
            let index = 0;
            while(index < 2) {
                if (index < this.selectedOptions.length) {
                    optionsLabel += this.selectedOptions[index].label;
                    index++;
                }

                if (index < 2 && index < this.selectedOptions.length) {
                    optionsLabel += ', ';
                    continue;
                }

                break;
            }
            return optionsLabel;
        }   
    }

    componentWillLoad() {
        this.syncChipState();
    }

    render() {
        return (
            <div aria-value={'TBD'} aria-label='chip with a dropdown menu' class='chip'>
            
                {/* Wrapper */}
                <div class={`chip__wrapper chip__wrapper--${this.size} 
                     chip__wrapper--${this.variant}
                     ${this.opened ? 'chip__wrapper--opened': ''}
                     ${this.selectedOptions.length ? 'chip__wrapper--selected': ''}`}
                tabIndex={0}
                onClick={() => {this.handleWrapperClick()}}
                onKeyDown={(e) => {this.handleWrapperKeyDown(e)}}>

                    <div class='wrapper__label'>
                        {
                            (this.selectedOptions.length === 0) && `${this.placeholder}`
                        }
                        {
                            (this.selectedOptions.length !== 0 && this.variant === 'multi') &&
                            `${this.placeholder}:`
                        }
                        {
                            (this.selectedOptions.length !== 0) && 
                            <div class='label__selected-options'>
                                {this.getSelectedOptions()}
                            </div>
                        }
                        {
                            (this.selectedOptions.length > 2) &&
                            <ifx-number-indicator>  {`+${this.selectedOptions.length - 2}`} </ifx-number-indicator>
                        }
                    </div>

                    {
                        (this.variant === 'single' || (this.variant === 'multi' && this.selectedOptions.length === 0)) &&
                        <div class='wrapper__open-button'> Pr </div>
                    }
                    
                    {
                        ((this.selectedOptions.length >= 1) && this.variant === 'multi') &&
                        <div class='wrapper__open-button'> Cr </div>
                    } 
                </div>

                {/* Dropdown */}
                {   
                    this.opened &&
                    <div class='chip__dropdown'>
                        <slot />
                    </div>
                }

            </div>
        ); 
    }
}