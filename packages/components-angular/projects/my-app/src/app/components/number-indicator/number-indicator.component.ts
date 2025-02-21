import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-number-indicator',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
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
