import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-advanced-table',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
