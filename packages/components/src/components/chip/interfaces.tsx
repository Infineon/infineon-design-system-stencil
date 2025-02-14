export interface ChipState {
    emitIfxChipItemSelect: boolean;
    size: 'small' | 'large';
    variant: 'single' | 'multi';
    key?: number;
}
export interface ChipItemSelectEvent {
    key: number;
    emitIfxChange: boolean,
    label: string;
    selected: boolean;
    value: string;
}
  