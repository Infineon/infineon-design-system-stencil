import { h,
         Component,
         Prop } from '@stencil/core';

@Component({
    tag: 'ifx-chip-item',
    styleUrl: 'chip-item.scss',
    shadow: true
})

export class ChipItem {

    @Prop() value: string = undefined;

    @Prop() chipState: any = { variant: 'multi'}; 

    render() {
        return (
            <div class='chip-item' tabIndex={0}>
                { 
                    this.chipState.variant === 'multi' &&
                    <ifx-checkbox tabIndex={-1} size='s'></ifx-checkbox>
                }
                <div class='chip-item__label'> <slot /> </div>
            </div>
        );
    }
}
          