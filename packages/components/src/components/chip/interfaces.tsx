export interface ChipState {
    emitIfxChipItem: boolean;
    size: 'small' | 'large';
    variant: 'single' | 'multi';
    key?: number;
}
export interface ChipItemEvent {
    key: number;
    emitIfxChange: boolean,
    label: string;
    selected: boolean;
    value: string;
}
  