import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  checkboxChecked = false;
  checkboxError = false;
  checkboxDisabled = false;

  handleSubmit() {
    console.log('Form submitted. Checkbox value:', this.checkboxChecked);
  }
  toggleCheckboxDisabled() {
    this.checkboxDisabled = !this.checkboxDisabled;
  }
  toggleCheckboxError() {
    this.checkboxError = !this.checkboxError;
  }
  toggleCheckboxValue() {
    console.log("checkbox value change")
    this.checkboxChecked = !this.checkboxChecked;
  }
}
