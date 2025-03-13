import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './table-basic.component.html',
  styleUrl: './table-basic.component.scss'
})
export class BasicTableComponent {

}
