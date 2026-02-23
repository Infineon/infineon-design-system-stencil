import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BooleanValueAccessor,
  IfxCheckbox,
  IfxSwitch,
} from '@infineon/infineon-design-system-angular/standalone';

@Component({
  selector: 'app-ng-model-example',
  imports: [FormsModule, BooleanValueAccessor, IfxCheckbox, IfxSwitch],
  templateUrl: './ng-model-example.html',
  styleUrl: './ng-model-example.scss',
})
export class NgModelExample {
  protected checkboxValue = false;
  protected switchValue = true;
  protected lastModelChange = 'nA';
  protected lastEventChange = 'nA';

  protected handleModelChange(source: 'checkbox' | 'switch', value: boolean) {
    this.lastModelChange = `${source}: ${value}`;
  }

  protected handleIfxChange(source: 'checkbox' | 'switch', event: CustomEvent) {
    const detail = event?.detail as
      | { checked?: boolean; value?: boolean }
      | undefined;
    const target = event?.target as HTMLInputElement | undefined;
    const value = detail?.checked ?? detail?.value ?? target?.checked ?? false;
    this.lastEventChange = `${source}: ${value}`;
  }
}
