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
    @Element() chipItem: HTMLIfxChipItemElement;

    @Event({ composed: false }) ifxChipItem: EventEmitter<ChipItemEvent>;

    @Prop() value: string = undefined;
    @Prop() chipState: ChipState = { emitIfxChipItem: true, variant: 'multi', size: 'large' }; 
    @Prop({ mutable: true, reflect: true }) selected: boolean = false;

    @Listen('ifxChipItem', { target: 'body' })
    updateItemSelection(event: CustomEvent<ChipItemEvent>) {
        if (this.chipState.variant === 'single') {
            const target = event.target as HTMLIfxChipItemElement;
            /* Also making sure chip items are from the same group (parent) while unselecting. */
            if (this.chipItem !== target && this.chipItem.parentElement === target.parentElement) {
                this.selected = false;
            }
        }
    } 

    @Watch('selected')
    validateSelected(newValue: boolean, oldValue: boolean) {
        if (newValue !== oldValue) {
            /* Do not emit if ChipState does not allow. */
            if (this.chipState.emitIfxChipItem){
                this.emitIfxChipItemEvent();
            } else {
                this.chipState.emitIfxChipItem = true;
            }
        }
    } 
    
    getItemLabel(): string {
        return this.chipItem.innerText as string;
    }

    toggleItemSelection() {
        this.selected = !this.selected;
    }
        

    emitIfxChipItemEvent(emitIfxChange: boolean = true) {
        this.ifxChipItem.emit({ emitIfxChange: emitIfxChange,
                                key: this.chipState.key,
                                label: this.getItemLabel(), 
                                selected: this.selected, 
                                value: this.value });
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
            this.emitIfxChipItemEvent(false);
        }
    }


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
          