import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  orientation = "horizontal";
  orientations = ["horizontal", "vertical"];
  orientationIndex = 0;

  fullWidth = false;
  disabledTabTwo = true;

  toggleOrientation() {
    this.orientationIndex = (this.orientationIndex + 1) % this.orientations.length;
    this.orientation = this.orientations[this.orientationIndex];
  }

  toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  toggleDisabled() {
    this.disabledTabTwo = !this.disabledTabTwo;
  }
}
