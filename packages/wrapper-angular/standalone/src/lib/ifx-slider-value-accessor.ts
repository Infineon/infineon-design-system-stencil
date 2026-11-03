import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './stencil-generated/value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ifx-slider[ngModel],ifx-slider[formControl],ifx-slider[formControlName]',
  host: {
    '(ifxChange)': 'handleChangeEvent($event.detail)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IfxSliderValueAccessor),
      multi: true
    }
  ],
  standalone: true
})
export class IfxSliderValueAccessor extends ValueAccessor {
  private suppressInitialChangeEvent = true;

  constructor(el: ElementRef) {
    void ElementRef;
    super(el);

    // Some environments can emit an early change event during element upgrade.
    queueMicrotask(() => {
      this.suppressInitialChangeEvent = false;
    });
  }

  override handleChangeEvent(value: string | number | null | undefined) {
    if (this.suppressInitialChangeEvent && this.lastValue === undefined) {
      return;
    }

    super.handleChangeEvent(value);
  }

  override writeValue(value: string | number | null | undefined) {
    if (value === null || value === undefined || value === '') {
      return;
    }

    const nativeElement = this.el.nativeElement as {
      value: number | string;
      min?: number | string;
    };
    const numericValue = Number(value);
    const minValue = Number(nativeElement.min);
    const fallbackValue = Number.isFinite(minValue) ? minValue : 0;
    const safeValue = Number.isFinite(numericValue) ? numericValue : fallbackValue;

    // Set the property only. Assigning the host property (rather than also
    // writing the attribute) lets Stencil run its `value` watcher for the
    // 0 -> value transition, even when Angular writes the model after upgrade.
    nativeElement.value = this.lastValue = safeValue;
  }
}