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
  readOnly = false;
  disabled = false;

  variant = "single";
  variants = ["single", "multi"];
  variantIndex = 0;

  size = "medium";
  sizes = ["small", "medium", "large"];
  sizeIndex = 1;

  theme = "outlined";
  themes = ["outlined", "filled-light", "filled-dark"];
  themeIndex = 0;

  icon = "";
  icons = ["", "windows16"];
  iconIndex = 0;

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggleTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.themes.length;
    this.theme = this.themes[this.themeIndex];
  }

  toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.themes.length;
    this.icon = this.icons[this.iconIndex];
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }

}
