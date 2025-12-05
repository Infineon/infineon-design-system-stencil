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
  sliderDisable = false;
  sliderPercentage = true;

  sliderType = "single";
  sliderTypes = ["single", "double"];
  sliderTypeIndex = 0;

  toggleSliderDisable() {
    this.sliderDisable = !this.sliderDisable;
  }

  toggleSliderPercentage() {
    this.sliderPercentage = !this.sliderPercentage;
  }

  toggleSliderType() {
    this.sliderTypeIndex = (this.sliderTypeIndex + 1) % this.sliderTypes.length;
    this.sliderType = this.sliderTypes[this.sliderTypeIndex];
  }
}
