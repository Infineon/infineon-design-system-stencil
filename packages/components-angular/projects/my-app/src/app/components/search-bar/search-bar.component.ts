import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchBarValue = '';

  handleSearchBar(event: any) {
    console.log("searchBar value change: ", event.detail)
    this.searchBarValue = event.detail;
  }
}
