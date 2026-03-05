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

@NgModule({
	declarations: [...DIRECTIVES, BooleanValueAccessor, TextValueAccessor],
	exports: [...DIRECTIVES, BooleanValueAccessor, TextValueAccessor],
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
