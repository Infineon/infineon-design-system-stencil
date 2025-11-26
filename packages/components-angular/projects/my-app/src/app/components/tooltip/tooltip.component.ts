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
  tooltipPosition = "auto";
  tooltipPositions = ["auto", "bottom-start", "top-start", "left", "bottom-end", "top-end", "right", "bottom", "top"];
  tooltipPositionIndex = 0;

  tooltipVariant = "compact";
  tooltipVariants = ["compact", "dismissible", "extended"];
  tooltipVariantIndex = 0;

  toggleTooltipPosition() {
    this.tooltipPositionIndex = (this.tooltipPositionIndex + 1) % this.tooltipPositions.length;
    this.tooltipPosition = this.tooltipPositions[this.tooltipPositionIndex];
  }

  toggleTooltipVariant() {
    this.tooltipVariantIndex = (this.tooltipVariantIndex + 1) % this.tooltipVariants.length;
    this.tooltipVariant = this.tooltipVariants[this.tooltipVariantIndex];
  }
}
