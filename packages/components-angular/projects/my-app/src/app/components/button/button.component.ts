import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonVariant = "primary";
  buttonVariants = ["primary", "secondary", "tertiary"];
  buttonVariantIndex = 0;

  buttonTheme = "default";
  buttonThemes = ["default", "danger", "inverse"];
  buttonThemeIndex = 0;

  buttonSize = "m";
  buttonSizes = ["xs", "s", "m", "l"];
  buttonSizeIndex = 0;

  buttonFullWidth = false;
  buttonDisabled = false;

  toggleButtonVariant() {
    this.buttonVariantIndex = (this.buttonVariantIndex + 1) % this.buttonVariants.length;
    this.buttonVariant = this.buttonVariants[this.buttonVariantIndex];
  }

  toggleButtonTheme() {
    this.buttonThemeIndex = (this.buttonThemeIndex + 1) % this.buttonThemes.length;
    this.buttonTheme = this.buttonThemes[this.buttonThemeIndex];
  }

  toggleButtonSize() {
    this.buttonSizeIndex = (this.buttonSizeIndex + 1) % this.buttonSizes.length;
    this.buttonSize = this.buttonSizes[this.buttonSizeIndex];
  }

  toggleButtonFullWidth() {
    this.buttonFullWidth = !this.buttonFullWidth;
  }

  toggleButtonDisabled() {
    this.buttonDisabled = !this.buttonDisabled;
  }

}
