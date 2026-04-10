import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BooleanValueAccessor,
  IfxCheckbox,
  IfxSearchBar,
  IfxSearchField,
  IfxSwitch,
  IfxTextField,
  IfxTextarea,
  TextValueAccessor,
} from '@infineon/infineon-design-system-angular/standalone';

@Component({
  selector: 'app-ng-model-example',
  imports: [
    FormsModule,
    BooleanValueAccessor,
    TextValueAccessor,
    IfxCheckbox,
    IfxSwitch,
    IfxSearchField,
    IfxSearchBar,
    IfxTextField,
    IfxTextarea,
  ],
  templateUrl: './ng-model-example.html',
  styleUrl: './ng-model-example.scss',
})
export class NgModelExample {
  protected booleanValue = false;
  protected textValue = '';
}
