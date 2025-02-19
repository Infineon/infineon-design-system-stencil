import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

}
