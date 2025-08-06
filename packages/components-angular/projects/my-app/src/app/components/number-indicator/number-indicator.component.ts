import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-number-indicator',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './number-indicator.component.html',
  styleUrl: './number-indicator.component.scss'
})
export class NumberIndicatorComponent {
  numberIndicator = 1;

  increaseNumber() {
    this.numberIndicator = this.numberIndicator + 1;

  }

  decreaseNumber() {
    this.numberIndicator = this.numberIndicator - 1;
  }
}
