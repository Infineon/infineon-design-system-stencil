import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-advanced-table',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './table-advanced.component.html',
  styleUrl: './table-advanced.component.scss'
})
export class AdvancedTableComponent {
  variant = "default";
  variants = ["default", "zebra"];
  variantIndex = 0;

  pagination = false;

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggle() {
    this.pagination = !this.pagination;
  }
}
