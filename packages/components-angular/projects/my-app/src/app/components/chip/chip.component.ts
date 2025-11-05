import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  chipReadOnly = false;

  chipVariant = "single";
  chipVariants = ["single", "multi"];
  chipVariantIndex = 0;

  chipSize = "large";
  chipSizes = ["large", "small"];
  chipSizeIndex = 0;

  toggleChipVariant() {
    this.chipVariantIndex = (this.chipVariantIndex + 1) % this.chipVariants.length;
    this.chipVariant = this.chipVariants[this.chipVariantIndex];
  }

  toggleChipReadOnly() {
    this.chipReadOnly = !this.chipReadOnly;
  }
  toggleChipSize() {
    this.chipSizeIndex = (this.chipSizeIndex + 1) % this.chipSizes.length;
    this.chipSize = this.chipSizes[this.chipSizeIndex];
  }

}
