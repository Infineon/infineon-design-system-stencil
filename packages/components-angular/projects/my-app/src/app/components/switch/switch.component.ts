import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  switchDisabled = false;
  switchChecked = false;

  toggleSwitchValue(event: any) {
    console.log("switch value change")
    this.switchChecked = event.detail;
  }
  toggleSwitchDisabled() {
    this.switchDisabled = !this.switchDisabled;
  }
}
