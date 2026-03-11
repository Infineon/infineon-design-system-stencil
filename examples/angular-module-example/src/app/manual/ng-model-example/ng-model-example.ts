import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-model-example',
  standalone: false,
  templateUrl: './ng-model-example.html',
  styleUrl: './ng-model-example.scss',
})
export class NgModelExample {
  protected booleanValue = false;
  protected textValue = '';
}
