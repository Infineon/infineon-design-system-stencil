import { Directive, ElementRef, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessor } from "./stencil-generated/value-accessor";

@Directive({
	/* tslint:disable-next-line:directive-selector */
	selector: "ifx-select[ngModel],ifx-select[formControl],ifx-select[formControlName]",
	host: {
		"(ifxSelect)": "handleChangeEvent($event.detail?.value ?? null)",
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => IfxSelectValueAccessor),
			multi: true,
		},
	],
	standalone: true,
})
export class IfxSelectValueAccessor extends ValueAccessor {
	override writeValue(value: string | null | undefined) {
		this.el.nativeElement.value = this.lastValue = value ?? "";
	}
}