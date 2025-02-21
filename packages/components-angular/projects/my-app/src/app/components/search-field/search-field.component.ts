import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  searchFieldValue = '';

  handleSearchField(event: any) {
    console.log("searchField value change: ", event.detail)
    this.searchFieldValue = event.detail;
  }
}
