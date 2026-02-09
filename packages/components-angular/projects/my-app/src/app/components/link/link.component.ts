import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  variant = "bold";
  variants = ["bold", "underlined", "title", "menu"];
  variantIndex = 0;

  size = "m";
  sizes = ["s", "m", "l", "xl"];
  sizeIndex = 1;

  disabled = false;

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
