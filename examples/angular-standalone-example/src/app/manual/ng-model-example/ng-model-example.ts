import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
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

  protected handleBooleanChange(event: CustomEvent) {
    const detail = event.detail as
      | { checked?: boolean; value?: boolean }
      | boolean
      | undefined;

    if (typeof detail === 'boolean') {
      this.booleanValue = detail;
      return;
    }

    if (detail && typeof detail === 'object') {
      if (typeof detail.checked === 'boolean') {
        this.booleanValue = detail.checked;
        return;
      }
      if (typeof detail.value === 'boolean') {
        this.booleanValue = detail.value;
      }
    }
  }

  protected handleTextInput(event: CustomEvent) {
    const detail = event.detail as { value?: string } | string | undefined;

    if (typeof detail === 'string') {
      this.textValue = detail;
      return;
    }

    if (detail && typeof detail === 'object' && typeof detail.value === 'string') {
      this.textValue = detail.value;
    }
  }
}
