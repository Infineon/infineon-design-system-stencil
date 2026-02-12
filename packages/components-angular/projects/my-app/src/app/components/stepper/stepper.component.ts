import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  stepNumber = false;
  stepError = false;
  stepDisable = false;
  stepComplete = false;

  type = "single";
  types = ["single", "double"];
  typeIndex = 0;

  variant = "default";
  variants = ["default", "compact", "vertical"];
  variantIndex = 0;

  toggleStepNumber() {
    this.stepNumber = !this.stepNumber;
  }

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggleStepError() {
    this.stepError = !this.stepError;
  }

  toggleStepDisable() {
    this.stepDisable = !this.stepDisable;
  }

  toggleStepComplete() {
    this.stepComplete = !this.stepComplete;
  }
}
