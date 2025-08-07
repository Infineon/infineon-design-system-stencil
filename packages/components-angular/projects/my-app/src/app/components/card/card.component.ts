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
  cardDirection = "vertical";
  cardDirections = ["vertical", "horizontal"];
  cardDirectionIndex = 0;

  toggleCardDirection() {
    this.cardDirectionIndex = (this.cardDirectionIndex + 1) % this.cardDirections.length;
    this.cardDirection = this.cardDirections[this.cardDirectionIndex];
  }

}
