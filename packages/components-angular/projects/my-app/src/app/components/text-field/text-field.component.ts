import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  textFieldValue = '';
  textareaValue = '';
  checkboxChecked = false;

  handleTextInput(event: any) {
    console.log("textInput value change")
    this.textFieldValue = event.detail;
    this.textareaValue = event.detail
  }

  handleSubmit() {
    console.log('Form submitted. Checkbox value:', this.checkboxChecked);
  }
}
