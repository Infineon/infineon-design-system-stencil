import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-radio-button-group',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-button-group.component.html',
  styleUrl: './radio-button-group.component.scss'
})
export class RadioButtonGroupComponent {

}
