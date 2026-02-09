import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';


@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  position = "auto";
  positions = ["auto", "bottom-start", "top-start", "left", "bottom-end", "top-end", "right", "bottom", "top"];
  positionIndex = 0;

  variant = "compact";
  variants = ["compact", "dismissible", "extended"];
  variantIndex = 0;

  togglePosition() {
    this.positionIndex = (this.positionIndex + 1) % this.positions.length;
    this.position = this.positions[this.positionIndex];
  }

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }
}
