import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  handleModalButton1Click() {
    console.log("modal button 1 click ")
  }

  handleModalButton2Click() {
    console.log("modal button 2 click ")
  }

  handleModalOpen() {
    const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    console.log("modal open btn click ")
    modal.opened = true;
  }

  variant = "default";
  variants = ["default", "alert-brand", "alert-danger"];
  variantIndex = 0;

  size = "s";
  sizes = ["s", "m", "l"];
  sizeIndex = 0;

  closeButton = true;

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }

  toggleCloseButton() {
    this.closeButton = !this.closeButton;
  }
}
