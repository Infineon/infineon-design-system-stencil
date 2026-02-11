import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  direction = "horizontal";
  directions = ["horizontal", "vertical"];
  directionIndex = 0;

  toggleDirection() {
    this.directionIndex = (this.directionIndex + 1) % this.directions.length;
    this.direction = this.directions[this.directionIndex];
  }

}
