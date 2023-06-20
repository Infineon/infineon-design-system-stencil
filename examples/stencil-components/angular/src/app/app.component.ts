import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progressValue = 10;

  updateProgressOnClick() {
    this.progressValue < 100 ? this.progressValue += 10 : this.progressValue = 10;
  }

  handleRadioButtonChange(event: CustomEvent) {
    console.log('Radio button value: ', event.detail);
  }

  handleCheckboxChange(event: CustomEvent) {
    console.log('Checkbox value: ', event.detail);
  }
}
