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

  modalVariant = "default";
  modalVariants = ["default", "alert-brand", "alert-danger"];
  modalVariantIndex = 0;

  modalSize = "s";
  modalSizes = ["s", "m", "l"];
  modalSizeIndex = 0;

  modalCloseButton = true;

  toggleModalVariant() {
    this.modalVariantIndex = (this.modalVariantIndex + 1) % this.modalVariants.length;
    this.modalVariant = this.modalVariants[this.modalVariantIndex];
  }

  toggleModalSize() {
    this.modalSizeIndex = (this.modalSizeIndex + 1) % this.modalSizes.length;
    this.modalSize = this.modalSizes[this.modalSizeIndex];
  }

  toggleModalCloseButton() {
    this.modalCloseButton = !this.modalCloseButton;
  }
}
