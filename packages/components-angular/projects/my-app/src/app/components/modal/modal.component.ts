import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  handleModalButton1Click() {
    // const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    console.log("modal button 1 click ")
  }

  handleModalButton2Click() {
    // const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    // modal.close();
  }

  handleModalOpen() {
    const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    console.log("modal open btn click ")
    modal.opened = true;
  }
}
