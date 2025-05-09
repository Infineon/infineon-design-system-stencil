import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-radio-button-group',
  standalone: true,
  imports: [
    ComponentLibraryModule,
  ],
  templateUrl: './radio-button-group.component.html',
  styleUrl: './radio-button-group.component.scss'
})
export class RadioButtonGroupComponent {

}
