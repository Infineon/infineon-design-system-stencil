import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './stencil-generated/value-accessor';

/**
 * Custom Value Accessor for ifx-modal component.
 * 
 * This is a workaround for https://github.com/stenciljs/output-targets/issues/87
 * 
 * Problem: When multiple components use type: "boolean" but different targetAttr,
 * the generated BooleanValueAccessor.writeValue() only sets one property (e.g., 'checked'),
 * ignoring other targetAttr values like 'opened'.
 * 
 * TODO: Remove this once https://github.com/stenciljs/output-targets/issues/87 is resolved
 * and Stencil generates separate accessors or dynamic property detection.
 */
@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ifx-modal[ngModel],ifx-modal[formControl],ifx-modal[formControlName]',
  host: {
    '(ifxOpenedChange)': 'handleChangeEvent($event.target?.["opened"])'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IfxModalNgModuleValueAccessor),
      multi: true
    }
  ],
  standalone: false
})
export class IfxModalNgModuleValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
  
  override writeValue(value: any) {
    this.el.nativeElement.opened = this.lastValue = value == null ? false : value;
  }
}

// Export with original name for backwards compatibility
export { IfxModalNgModuleValueAccessor as IfxModalValueAccessor };
