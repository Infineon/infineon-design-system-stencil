import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  textareaValue = '';
  textFieldValue = '';
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
