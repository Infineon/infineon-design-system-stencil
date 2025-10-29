import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styles: []
})
export class App {
  protected readonly title = signal('angular-module-example');
}
