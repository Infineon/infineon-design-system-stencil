import '@infineon/infineon-design-system-angular/standalone'
import { IfxAlert } from '@infineon/infineon-design-system-angular/standalone';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [ IfxAlert ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-standalone-example');
}
