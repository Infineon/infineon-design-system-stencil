import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progressValue = 10;
  checked = false;
  error = false;
  disabled = false;
  textFieldValue = '';

  updateProgressOnClick() {
    this.progressValue < 100 ? this.progressValue += 10 : this.progressValue = 10;
  }

  handleSubmit() {
    console.log('Form submitted. Checkbox value:', this.checked);
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  toggleError() {
    this.error = !this.error;
  }
  toggleValue() {
    console.log("checkbox value change")
    this.checked = !this.checked;
  }

  handleIfxInput(e) {
    console.log("textInput value change")
    this.textFieldValue = e.detail;

  }
}