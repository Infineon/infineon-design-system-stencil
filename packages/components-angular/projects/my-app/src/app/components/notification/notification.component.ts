import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  notificationVariant = "neutral";
  notificationVariants = ["success", "locked", "error", "neutral"];
  notificationVariantIndex = 3;

  toggleNotificationVariant() {
    this.notificationVariantIndex = (this.notificationVariantIndex + 1) % this.notificationVariants.length;
    this.notificationVariant = this.notificationVariants[this.notificationVariantIndex];
  }
}
