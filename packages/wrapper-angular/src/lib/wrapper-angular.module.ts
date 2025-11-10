import '@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css';
import { CommonModule, DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, type ModuleWithProviders, NgModule, NgZone } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  imports: [ CommonModule ]
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