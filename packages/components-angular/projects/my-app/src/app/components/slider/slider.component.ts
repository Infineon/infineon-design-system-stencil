import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  disabled = false;
  percentage = true;

  type = "single";
  types = ["single", "double"];
  typeIndex = 0;

  toggleDisable() {
    this.disabled = !this.disabled;
  }

  togglePercentage() {
    this.percentage = !this.percentage;
  }

  toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.types.length;
    this.type = this.types[this.typeIndex];
  }
}
