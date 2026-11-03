import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './stencil-generated/value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ifx-counter[ngModel],ifx-counter[formControl],ifx-counter[formControlName]',
  host: {
    '(ifxChange)': 'handleChangeEvent($event.detail)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IfxCounterValueAccessor),
      multi: true
    }
  ],
  standalone: true
})
export class IfxCounterValueAccessor extends ValueAccessor {
  override writeValue(value: string | number | null | undefined) {
    const numericValue = Number(value);
    this.el.nativeElement.value = this.lastValue = Number.isFinite(numericValue)
      ? Math.max(0, numericValue)
      : 0;
  }
}