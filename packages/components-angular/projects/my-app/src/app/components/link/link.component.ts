import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

}
