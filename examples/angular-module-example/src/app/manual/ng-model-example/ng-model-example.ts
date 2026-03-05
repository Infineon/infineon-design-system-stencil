import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-model-example',
  standalone: false,
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
