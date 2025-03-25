import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-single-select',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss'
})
export class SingleSelectComponent {

}
