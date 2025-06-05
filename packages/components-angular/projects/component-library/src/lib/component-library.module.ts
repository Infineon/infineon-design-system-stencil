import { APP_INITIALIZER, NgModule } from '@angular/core';
//import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';


@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class ComponentLibraryModule { }
