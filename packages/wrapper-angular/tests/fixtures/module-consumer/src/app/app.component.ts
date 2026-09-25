import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: false,
})
export class AppComponent {
  value = "";
}

@Component({
  selector: "app-inline",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ifx-text-field show-delete-icon></ifx-text-field>
  `,
})
export class InlineComponent {}
