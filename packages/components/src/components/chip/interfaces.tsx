/**
 * ChipState represents the state of a Chip component.
 */
export interface ChipState {
    size: 'small' | 'large';
    variant: 'single' | 'multi';
    key?: number;
}

/**
 * ChipItemEvent represents the event emitted by a ChipItem component.
 */
export interface ChipItemEvent {
    key: number;
    label: string;
    selected: boolean;
    value: string;
}
  