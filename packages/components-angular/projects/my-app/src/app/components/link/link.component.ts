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
  linkVariant = "bold";
  linkVariants = ["bold", "underlined", "title", "menu"];
  linkVariantIndex = 0;

  linkSize = "m";
  linkSizes = ["s", "m", "l", "xl"];
  linkSizeIndex = 1;

  linkDisabled = false;

  toggleLinkVariant() {
    this.linkVariantIndex = (this.linkVariantIndex + 1) % this.linkVariants.length;
    this.linkVariant = this.linkVariants[this.linkVariantIndex];
  }

  toggleLinkSize() {
    this.linkSizeIndex = (this.linkSizeIndex + 1) % this.linkSizes.length;
    this.linkSize = this.linkSizes[this.linkSizeIndex];
  }

  toggleLinkDisabled() {
    this.linkDisabled = !this.linkDisabled;
  }
}
