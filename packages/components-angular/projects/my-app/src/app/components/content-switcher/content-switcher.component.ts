import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-content-switcher',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './content-switcher.component.html',
  styleUrl: './content-switcher.component.scss'
})
export class ContentSwitcherComponent {

}
