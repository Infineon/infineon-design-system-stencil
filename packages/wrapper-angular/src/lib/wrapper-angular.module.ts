import "@infineon/infineon-design-system-stencil/styles.css";
import { CommonModule, DOCUMENT } from "@angular/common";
import {
	APP_INITIALIZER,
	type ModuleWithProviders,
	NgModule,
	NgZone,
} from "@angular/core";
import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";
import { DIRECTIVES } from "./stencil-generated";
import { BooleanValueAccessor } from "./stencil-generated/boolean-value-accessor";
import { TextValueAccessor } from "./stencil-generated/text-value-accessor";
import { IfxModalNgModuleValueAccessor } from "./ifx-modal-value-accessor";

@NgModule({
	declarations: [...DIRECTIVES, BooleanValueAccessor, TextValueAccessor, IfxModalNgModuleValueAccessor],
	exports: [...DIRECTIVES, BooleanValueAccessor, TextValueAccessor, IfxModalNgModuleValueAccessor],
	imports: [CommonModule],
})
export class InfineonDesignSystemModule {
	static forRoot(): ModuleWithProviders<InfineonDesignSystemModule> {
		return {
			ngModule: InfineonDesignSystemModule,
			providers: [
				{
					provide: APP_INITIALIZER,
					useFactory: () => defineCustomElements,
					multi: true,
					deps: [DOCUMENT, NgZone],
				},
			],
		};
	}
}
