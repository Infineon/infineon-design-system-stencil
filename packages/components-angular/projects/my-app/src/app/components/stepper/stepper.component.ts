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

  sliderType = "single";
  sliderTypes = ["single", "double"];
  sliderTypeIndex = 0;

  stepperVariant = "default";
  stepperVariants = ["default", "compact", "vertical"];
  stepperVariantIndex = 0;

  toggleStepNumber() {
    this.stepNumber = !this.stepNumber;
  }

  toggleStepperVariant() {
    this.stepperVariantIndex = (this.stepperVariantIndex + 1) % this.stepperVariants.length;
    this.stepperVariant = this.stepperVariants[this.stepperVariantIndex];
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
