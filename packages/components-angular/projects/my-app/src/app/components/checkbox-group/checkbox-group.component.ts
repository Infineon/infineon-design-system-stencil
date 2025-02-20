import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.scss'
})
export class CheckboxGroupComponent {
}
