import { h,
         Component,
         Element,
         Event,
         EventEmitter, 
         Listen,
         Prop, 
         State,
         Watch } from '@stencil/core';

import { ChipItemEvent, ChipState } from '../interfaces';

@Component({
    tag: 'ifx-chip-item',
    styleUrl: 'chip-item.scss',
    shadow: true
})

export class ChipItem {
    /**
     * Reference to the component.
     */
    @Element() chipItem: HTMLIfxChipItemElement;

    /**
     * An event emitted whenever the Chip Item is selected/unselected.
     */
    @Event({ composed: false }) ifxChipItem: EventEmitter<ChipItemEvent>;

    /**
     * Value is used to identify the Chip Item.
     * 
     * @Default `undefined`
     */
    @Prop() value: string = undefined;

    /**
     * An internal prop to store the state of the parent (Chip Component).
     */
    @Prop({ reflect: false }) chipState: ChipState = { variant: 'multi', size: 'large' }; 

    /**
     * The prop allows to set the initial *selected* status of the Chip Item.
     * 
     * @Default `false`
     */
    @Prop() selected?: boolean = false;
    
    /**
     * Internal 'selected' state to update Chip Item design whenever the Chip Item
     * is selected/unselected.
     */
    @State() internalSelected: boolean;


    @Listen('ifxChipItem', { target: 'body' })
    updateItemSelection(event: CustomEvent<ChipItemEvent>) {
        if (this.chipState.variant === 'single') {
            const target = event.target as HTMLIfxChipItemElement;
            if (this.chipItem !== target && this.chipItem.parentElement === target.parentElement) {
                this.internalSelected = false;
            }
        }
    } 

    @Watch('selected')
    validateSelected(newValue: boolean, oldValue: boolean) {
        if (newValue !== oldValue) {
            this.internalSelected = newValue;
        }
    } 

    
    /**
     * Helpers
     */

    handleItemClick() {
        this.toggleItemSelection();
    }

    handleItemKeyDown(event: KeyboardEvent) {
        if (event.code === 'Enter' || event.code === 'Space') {
            this.toggleItemSelection();
        }
    }

    handleSelectedState() {
        if (this.selected) {
            this.internalSelected = this.selected;
            this.ifxChipItem.emit({ key: this.chipState.key,
                                    label: this.getItemLabel(), 
                                    selected: true, 
                                    value: this.value } );
        }
    }
    
    /**
     * Utilities
     */
    
    getItemLabel(): string {
        return this.chipItem.innerText as string;
    }

    toggleItemSelection() {
        this.internalSelected = !this.internalSelected;
        this.ifxChipItem.emit({ key: this.chipState.key,
                                label: this.getItemLabel(), 
                                selected: this.internalSelected, 
                                value: this.value } );
    }

    /**
     * Lifecycle Methods
     */

    componentWillLoad() {
        this.handleSelectedState();
    }

    render() {
        return (
            <div class={`chip-item chip-item--${this.chipState.size} 
                         chip-item--${(this.internalSelected && this.chipState.variant) === 'single' ? 'selected' : ''}`} 
                tabIndex={0}
                onClick={() => {this.handleItemClick()}}
                onKeyDown={(e) => {this.handleItemKeyDown(e)}}>
                { 
                    this.chipState.variant === 'multi' &&
                    <ifx-checkbox value={this.internalSelected}
                        tabIndex={-1} 
                        size='s'>
                    </ifx-checkbox>
                }
                <div class='chip-item__label'> <slot /> </div>
                <div class='chip-item__selected-indicator'> 
                    <ifx-icon icon={`check${this.chipState.size === 'small' ? '12' : '16'}`}> </ifx-icon> 
                </div>
            </div>
        );
    }
}
          