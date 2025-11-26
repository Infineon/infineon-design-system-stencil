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
  chipDisabled = false;

  chipVariant = "single";
  chipVariants = ["single", "multi"];
  chipVariantIndex = 0;

  chipSize = "medium";
  chipSizes = ["small", "medium", "large"];
  chipSizeIndex = 1;

  chipTheme = "outlined";
  chipThemes = ["outlined", "filled-light", "filled-dark"];
  chipThemeIndex = 0;

  chipIcon = "";
  chipIcons = ["", "windows16"];
  chipIconIndex = 0;

  toggleChipVariant() {
    this.chipVariantIndex = (this.chipVariantIndex + 1) % this.chipVariants.length;
    this.chipVariant = this.chipVariants[this.chipVariantIndex];
  }

  toggleChipTheme() {
    this.chipThemeIndex = (this.chipThemeIndex + 1) % this.chipThemes.length;
    this.chipTheme = this.chipThemes[this.chipThemeIndex];
  }

  toggleChipIcon() {
    this.chipIconIndex = (this.chipIconIndex + 1) % this.chipThemes.length;
    this.chipIcon = this.chipIcons[this.chipIconIndex];
  }

  toggleChipDisabled() {
    this.chipDisabled = !this.chipDisabled;
  }

  toggleChipReadOnly() {
    this.chipReadOnly = !this.chipReadOnly;
  }

  toggleChipSize() {
    this.chipSizeIndex = (this.chipSizeIndex + 1) % this.chipSizes.length;
    this.chipSize = this.chipSizes[this.chipSizeIndex];
  }

}
