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
    /**
     * Reference to this component.
     */
    @Element() chip: HTMLIfxChipElement;

    /**
     * A global event which is emitted when the selected options are changed.
     */
    @Event() ifxChange: EventEmitter<Array<ChipItemEvent>>;

    /**
     * A label/placeholder string.
     */
    @Prop() placeholder: string = '';
    
    /**
     * Allows to change the size of Chip and Chip Item component.
     * 
     * @Default `'large'`
     */
    @Prop() size: 'small' | 'large' = 'large';

    /**
     * Stores the values of each selected options to allow quick access from outside.
     * 
     * @Default `undefined`
     */
    @Prop({ mutable: true }) value: Array<string> | string = undefined;

    /**
     * Allows to specify the variant of the Chip.
     * 
     * @Default `'single'`
     */
    @Prop() variant: 'single' | 'multi' = 'single';

    /**
     * Internal boolean *opened* state to determine whether the dropdown menu is
     * opened.
     */
    @State() opened: boolean = false;

    /**
     * State to store the selected options of the chip component.
     */
    @State() selectedOptions: Array<ChipItemEvent> = [];

    /**
     * Closing the dropdown menu when clicked outside of it.
     */
    @Listen('mousedown', { target: 'document' })
    closeDropdownOnOutsideClick(event: MouseEvent) {
        const path = event.composedPath();
        const chipWrapper: HTMLElement = this.chip.shadowRoot.querySelector('.chip__wrapper');
        const chipDropdown: HTMLElement = this.chip.shadowRoot.querySelector('.chip__dropdown');
        if (!path.includes(chipDropdown) && !path.includes(chipWrapper) && this.opened) {
            this.toggleDropdownMenu();
        }
    }

    /**
     * Listening to ifxChipItem event to update the selected option(s).
     */
    @Listen('ifxChipItem') 
    updateSelectedOptions(event: CustomEvent<ChipItemEvent>) {
        const eventDetail: ChipItemEvent = event.detail;

        /* Handling 'single' variant */
        if (this.variant !== 'multi') {
            if (eventDetail.selected) {
                this.selectedOptions = [ eventDetail ];
                /* Closing the dropdown menu item is selected. */
                this.opened = false;
            } else {
                this.selectedOptions = [];
            }
            this.value = this.selectedOptions[0] ? this.selectedOptions[0].value : undefined;
        } else /* Handling 'multi' variant */ {
            if (eventDetail.selected) {
                this.selectedOptions = [...this.selectedOptions, eventDetail];
            } else {
                this.selectedOptions = this.selectedOptions.filter((option) => option.key !== eventDetail.key);
            }
            this.value = this.selectedOptions.map((option) => { return option.value });
        }

        /* Emitting ifxChange with the selected options. */
        this.ifxChange.emit(this.selectedOptions);
    }
    
    /**
     * Returns the list of reference to the Chip Items.
     * 
     * @returns `NodeList<HTMLIfxChipItemElement>`
     */
    getChipItems(): NodeList {
        return this.chip.querySelectorAll('ifx-chip-item');
    }

    /**
     * Returns the selected option label in *single* variant.
     * Appends and returns the label of first 2 selected option in *multi* variant.
     * 
     * @returns `string`
     */
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

    /**
     * Opens or Closes the dropdown menu.
     */
    toggleDropdownMenu() {
        this.opened = !this.opened;
    }

    /**
     * Helper functions
     */

    handleUnselectButtonClick(event: MouseEvent) {
        event.stopPropagation();
        const chipItems: NodeList = this.getChipItems();
        chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
            if (chipItem.selected) chipItem.selected = false;
        });
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
            chipItem.chipState = { size: (this.size === 'small' ? 'small' : 'large'),
                                   variant: (this.variant === 'multi' ? 'multi' : 'single'), 
                                   key: key++ };
        });
    }

    /**
     * Lifecycle Methods
     */

    componentWillLoad() {
        /* Propogating the required Chip State with every Chip Item. */
        this.syncChipState();
    }

    render() {
        return (
            <div aria-value={this.getSelectedOptions()} aria-label='chip with a dropdown menu' class='chip'>
            
                {/* Wrapper */}
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

                    {/* Arrow button */}
                    {   
                        (this.variant !== 'multi' || (this.variant === 'multi' && this.selectedOptions.length === 0)) &&
                        <div class='wrapper__open-button'> <ifx-icon key={1} icon={`chevrondown16`}/> </div>
                    }
                    
                    {/* Close button */}
                    {
                        ((this.selectedOptions.length >= 1) && this.variant === 'multi') &&
                        <div class='wrapper__unselect-button' onClick={(e) => {this.handleUnselectButtonClick(e)}}> 
                            <ifx-icon key={2} icon={`cross16`}/> 
                        </div>
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