import { h,
         Component,
         Element,
         Event,
         EventEmitter, 
         Listen,
         Prop, 
         Watch } from '@stencil/core';
import { ChipItemEvent, ChipState } from '../interfaces';

@Component({
    tag: 'ifx-chip-item',
    styleUrl: 'chip-item.scss',
    shadow: true
})

export class ChipItem {
    /**
     * Reference to this component.
     */
    @Element() chipItem: HTMLIfxChipItemElement;

    /**
     * An event emitted whenever the Chip Item is selected/unselected.
     */
    @Event({ composed: false }) ifxChipItem: EventEmitter<ChipItemEvent>;

    /**
     * Value is used to uniquely identify the Chip Item.
     * 
     * @Default `undefined`
     */
    @Prop() value: string = undefined;

    /**
     * An internal prop to store the state of the parent (Chip Component).
     */
    @Prop() chipState: ChipState = { variant: 'multi', size: 'large' }; 

    /**
     * The prop allows to set the initial *selected* status of the Chip Item.
     * 
     * @Default `false`
     */
    @Prop({ mutable: true, reflect: true }) selected: boolean = false;

    /**
     * Listenting for ifxChipItem event to unselect the previously selected Item.
     * Only used for the *single* variant of Chip.
     */
    @Listen('ifxChipItem', { target: 'body' })
    updateItemSelection(event: CustomEvent<ChipItemEvent>) {
        if (this.chipState.variant === 'single') {
            const target = event.target as HTMLIfxChipItemElement;
            /* Also making sure chip items are from the same group (parent) */
            if (this.chipItem !== target && this.chipItem.parentElement === target.parentElement) {
                this.selected = false;
            }
        }
    } 

    /**
     * Keeping internal *selected* state in sync with the selected prop if changed.
     */
    @Watch('selected')
    validateSelected(newValue: boolean, oldValue: boolean) {
        if (newValue !== oldValue) {
            this.emitIfxChipItemEvent();
        }
    } 
    
    /**
     * A function extracts and returns the Item label.
     * 
     * @returns string
     */
    getItemLabel(): string {
        return this.chipItem.innerText as string;
    }

    /**
     * Toggles the selection of the Chip Item and emits the ifxChipItem event.
     */
    toggleItemSelection() {
        this.selected = !this.selected;
    }
        
    /**
     * Helper functions
     */

    emitIfxChipItemEvent() {
        this.ifxChipItem.emit({ key: this.chipState.key,
                                label: this.getItemLabel(), 
                                selected: this.selected, 
                                value: this.value } );
    }

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
            this.emitIfxChipItemEvent();
        }
    }

    /**
     * Lifecycle Methods
     */

    componentWillLoad() {
        /* Propogating the selected state to the Chip (Parent) component if it is set. */
        this.handleSelectedState();
    }

    render() {
        return (
            <div class={`chip-item chip-item--${this.chipState.size} 
                         chip-item--${(this.selected && this.chipState.variant) === 'single' ? 'selected' : ''}`} 
                tabIndex={0}
                onClick={() => {this.handleItemClick()}}
                onKeyDown={(e) => {this.handleItemKeyDown(e)}}>

                {/* Checkbox; renders only in 'multi' variant. */}
                { 
                    this.chipState.variant === 'multi' &&
                    <ifx-checkbox value={this.selected}
                        tabIndex={-1} 
                        size='s'>
                    </ifx-checkbox>
                }

                <div class='chip-item__label'> <slot /> </div>

                {/* Selected indicator only visible in 'single' variant. */}
                <div class='chip-item__selected-indicator'> 
                    <ifx-icon icon={`check${this.chipState.size === 'small' ? '12' : '16'}`}> </ifx-icon> 
                </div>

            </div>
        );
    }
}
          