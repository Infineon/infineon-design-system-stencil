import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
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
