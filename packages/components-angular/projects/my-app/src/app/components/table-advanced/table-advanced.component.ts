import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-advanced-table',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './table-advanced.component.html',
  styleUrl: './table-advanced.component.scss'
})
export class AdvancedTableComponent {
  buttonRendererOptions = {
    onButtonClick: (params: any, event: Event) => {
      console.log("button clicked", params.data);
    }
  };
}
