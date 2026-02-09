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
  variant = "primary";
  variants = ["primary", "secondary", "tertiary"];
  variantIndex = 0;

  theme = "default";
  themes = ["default", "danger", "inverse"];
  themeIndex = 0;

  size = "m";
  sizes = ["xs", "s", "m", "l"];
  sizeIndex = 0;

  icon = "";
  icons = ["", "fileMpg16"];
  iconIndex = 0;

  fullWidth = false;
  disabled = false;

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggleTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.themes.length;
    this.theme = this.themes[this.themeIndex];
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }

  toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.icons.length;
    this.icon = this.icons[this.iconIndex];
  }

  toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

}
