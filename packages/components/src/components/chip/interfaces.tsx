/**
 * ChipState represents the state of a Chip component.
 */
export interface ChipState {
    /**
     * The flag indidactes that chip is not ready to listen to ifxChipIteEvent.
     * Usage: When unselecting all the options(multi) or selecting different options 
     * (single).
     */
    emitIfxChipItem: boolean;
    size: 'small' | 'large';
    variant: 'single' | 'multi';
    key?: number;
}

/**
 * ChipItemEvent represents the event emitted by a ChipItem component.
 */
export interface ChipItemEvent {
    /** Key is unique integer assigned by chip in its group. */
    key: number;
    /** 
     * Whether ifxChange should be emitted. Useful when the selected is set on Item
     * by default to avoid event emission. 
     */
    emitIfxChange: boolean,
    label: string;
    selected: boolean;
    value: string;
}
  