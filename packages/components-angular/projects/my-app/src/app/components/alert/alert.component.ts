import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  alertVariant = "primary";
  alertVariants = ["primary", "success", "danger", "warning"];
  alertVariantIndex = 0;

  alertClosable = true;

  toggleAlertVariant() {
    this.alertVariantIndex = (this.alertVariantIndex + 1) % this.alertVariants.length;
    this.alertVariant = this.alertVariants[this.alertVariantIndex];
  }

  toggleAlertClosable() {
    this.alertClosable = !this.alertClosable;
  }

}