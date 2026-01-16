import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

  iconButtonVariant = "primary";
  iconButtonVariants = ["primary", "secondary", "tertiary"];
  iconButtonVariantIndex = 0;

  iconButtonSize = "m";
  iconButtonSizes = ["s", "m", "l"];
  iconButtonSizeIndex = 1;

  iconButtonDisabled = false;

  iconButtonShape = "round";
  iconButtonShapes = ["round", "square"];
  iconButtonShapeIndex = 0;

  toggleIconButtonVariant() {
    this.iconButtonVariantIndex = (this.iconButtonVariantIndex + 1) % this.iconButtonVariants.length;
    this.iconButtonVariant = this.iconButtonVariants[this.iconButtonVariantIndex];
  }
  toggleIconButtonSize() {
    this.iconButtonSizeIndex = (this.iconButtonSizeIndex + 1) % this.iconButtonSizes.length;
    this.iconButtonSize = this.iconButtonSizes[this.iconButtonSizeIndex];
  }
  toggleIconButtonDisabled() {
    this.iconButtonDisabled = !this.iconButtonDisabled;
  }
  toggleIconButtonShape() {
    this.iconButtonShapeIndex = (this.iconButtonShapeIndex + 1) % this.iconButtonShapes.length;
    this.iconButtonShape = this.iconButtonShapes[this.iconButtonShapeIndex];
  }

}
