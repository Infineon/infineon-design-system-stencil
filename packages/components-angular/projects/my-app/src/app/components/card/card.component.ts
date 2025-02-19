import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
