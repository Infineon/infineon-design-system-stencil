import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-number-indicator',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './indicator.component.html',
  styleUrl: './indicator.component.scss'
})
export class IndicatorComponent {
  indicatorVariant = "number";
  indicatorVariants = ["number", "dot"];
  indicatorVariantIndex = 0;

  indicatorInverted = false;

  toggleIndicatorVariant() {
    this.indicatorVariantIndex = (this.indicatorVariantIndex + 1) % this.indicatorVariants.length;
    this.indicatorVariant = this.indicatorVariants[this.indicatorVariantIndex];
  }

  toggleIndicatorInverted() {
    this.indicatorInverted = !this.indicatorInverted;
  }
}
