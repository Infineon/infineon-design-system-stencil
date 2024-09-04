import { h,
         Component,
         Element,
         Event,
         EventEmitter,
         Listen,
         Prop,
         State} from '@stencil/core';
import { ChipItemEvent } from './interfaces';

@Component({
    tag: 'ifx-chip',
    styleUrl: 'chip.scss',
    shadow: true
})

export class Chip {
    @Element() chip: HTMLIfxChipElement;

    @Event() ifxChange: EventEmitter<{previousSelection: Array<ChipItemEvent>, 
                                      currentSelection: Array<ChipItemEvent>}>;
    @Prop() placeholder: string = '';
    @Prop() size: 'small' | 'large' = 'large';
    @Prop({ mutable: true }) value: Array<string> | string = undefined;
    @Prop() variant: 'single' | 'multi' = 'single';

    @State() opened: boolean = false;
    @State() selectedOptions: Array<ChipItemEvent> = [];

    @Listen('mousedown', { target: 'document' })
    closeDropdownOnOutsideClick(event: MouseEvent) {
        const path = event.composedPath();
        const chipWrapper: HTMLElement = this.chip.shadowRoot.querySelector('.chip__wrapper');
        const chipDropdown: HTMLElement = this.chip.shadowRoot.querySelector('.chip__dropdown');
        if (!path.includes(chipDropdown) && !path.includes(chipWrapper) && this.opened) {
            this.toggleDropdownMenu();
        }
    }

    @Listen('ifxChipItem') 
    updateSelectedOptions(event: CustomEvent<ChipItemEvent>) {
        const eventDetail: ChipItemEvent = event.detail;
        const previousSelection: Array<ChipItemEvent> = this.selectedOptions;

        if (this.variant !== 'multi') {
            if (eventDetail.selected) {
                /* Closing the dropdown menu when the item is selected. */
                this.opened = false;
                /* Unselecting the previously selected option by traversing each item. */
                const chipItems: NodeList = this.getChipItems();
                chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
                    if (chipItem.selected && chipItem !== event.target) {
                        chipItem.chipState = {
                            ...chipItem.chipState,
                            emitIfxChipItem: false,
                        }
                        chipItem.selected = false;
                    }
                });
                this.selectedOptions = [ eventDetail ];
            } else {
                this.selectedOptions = [];
            }
            this.value = this.selectedOptions[0] ? this.selectedOptions[0].value : undefined;
        } else {
            if (eventDetail.selected) {
                this.selectedOptions = [...this.selectedOptions, eventDetail];
            } else {
                this.selectedOptions = this.selectedOptions.filter((option) => option.key !== eventDetail.key);
            }
            this.value = this.selectedOptions.map((option) => { return option.value });
        }

        /* Emitting ifxChange with the selected options. */
        if (eventDetail.emitIfxChange){
            this.ifxChange.emit({ previousSelection: previousSelection, 
                                  currentSelection: this.selectedOptions});
        }
    }
    
    getChipItems(): NodeList {
        return this.chip.querySelectorAll('ifx-chip-item');
    }

    getSelectedOptions(): string {
        if (!this.selectedOptions.length) return '';
        if (this.variant !== 'multi') {
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

    toggleDropdownMenu() {
        this.opened = !this.opened;
    }


    handleUnselectButtonClick(event: MouseEvent) {
        event.stopPropagation();
        this.opened = false;
        
        let itemGotUnselected = false;
        const chipItems: NodeList = this.getChipItems();
        chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
            if (chipItem.selected) {
                itemGotUnselected = true;
                chipItem.chipState = {
                    ...chipItem.chipState,
                    emitIfxChipItem: false,
                }
                chipItem.selected = false;
            }
        });

        /* Emit event only if at least one item was unselected. */
        if (itemGotUnselected) {
            const previousSelection: Array<ChipItemEvent> = this.selectedOptions;
            this.selectedOptions = [];
            this.value = [];
            this.ifxChange.emit({ previousSelection: previousSelection, 
                                  currentSelection: [] });
        }
    }

    handleWrapperClick() {
        this.toggleDropdownMenu();
    }

    handleWrapperKeyDown(event: KeyboardEvent) {
        if (event.code === 'Space' || event.code === 'Enter') {
            this.toggleDropdownMenu();
        }
    }

    syncChipState() {
        const chipItems: NodeList = this.getChipItems();
        let key: number = 0;
        chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
            chipItem.chipState = { emitIfxChipItem: true,
                                   size: (this.size === 'small' ? 'small' : 'large'),
                                   variant: (this.variant === 'multi' ? 'multi' : 'single'), 
                                   key: key++ };
        });
    }


    componentWillLoad() {
        /* Propogating the required Chip State with every Chip Item. */
        this.syncChipState();
    }

    render() {
        return (
            <div aria-value={this.getSelectedOptions()} aria-label='chip with a dropdown menu' class='chip'>
            
                <div class={`chip__wrapper chip__wrapper--${this.size === 'small' ? 'small' : 'large'} 
                     chip__wrapper--${this.variant === 'multi' ? 'multi' : 'single'}
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

                        {/* Number indicator appears only when 2+ options selected in 'multi' variant. */}
                        {
                            (this.selectedOptions.length > 2) &&
                            <ifx-number-indicator>  {`+${this.selectedOptions.length - 2}`} </ifx-number-indicator>
                        }
                    </div>

                    {   
                        (this.variant !== 'multi' || (this.variant === 'multi' && this.selectedOptions.length === 0)) &&
                        <div class='wrapper__open-button'> <ifx-icon key={1} icon={`chevrondown16`}/> </div>
                    }
                    
                    {
                        ((this.selectedOptions.length >= 1) && this.variant === 'multi') &&
                        <div class='wrapper__unselect-button' onClick={(e) => {this.handleUnselectButtonClick(e)}}> 
                            <ifx-icon key={2} icon={`cross16`}/> 
                        </div>
                    }

                </div>

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