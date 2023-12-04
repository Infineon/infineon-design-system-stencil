import { Component, ViewChild } from '@angular/core';
import { IfxTabs } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  progressValue = 10;
  checkboxChecked = false;
  checkboxError = false;
  checkboxDisabled = false;
  switchChecked = false;
  switchDisabled = false;
  radioError = false;
  radioDisabled = false;
  radioChecked = false;
  textFieldValue = '';
  searchFieldValue = '';
  searchBarValue = '';
  radioButtonValue = false;
  numberIndicator = 1;
  @ViewChild('ifxTabs') ifxTabs: IfxTabs | undefined;


  ngOnInit() {
    this.setTab();
    setInterval(() => this.setTab(), 20000);
  }

  setTab() {
    const next = Math.floor(Math.random() * (3));
    console.log("set next active tab: ", next);
    this.ifxTabs?.setActiveTab(next);
  }

  handleChange(event: any) {
    console.log("emitting active tab index: ", event.detail);
  };

  updateProgressOnClick() {
    this.progressValue < 100 ? this.progressValue += 10 : this.progressValue = 10;
  }

  handleRadioButtonChange(event: any) {
    console.log('Radio button value: ', event.detail);
    this.radioButtonValue = event.detail;

  }

  handleCheckboxChange(event: any) {
    console.log('Checkbox value: ', event.detail);
  }

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

  toggleSwitchValue(event: any) {
    console.log("switch value change")
    this.switchChecked = event.detail;
  }
  toggleSwitchDisabled() {
    this.switchDisabled = !this.switchDisabled;
  }
  toggleRadioBtnDisabled() {
    this.radioDisabled = !this.radioDisabled;
  }
  toggleRadioBtnError() {
    this.radioError = !this.radioError;
  }
  toggleRadioBtnValue() {
    console.log("checkbox value change")
    this.radioChecked = !this.radioChecked;
  }


  handleTextInput(event: any) {
    console.log("textInput value change")
    this.textFieldValue = event.detail;

  }


  handleModalButton1Click() {
    // const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    console.log("modal button 1 click ")
  }

  handleModalButton2Click() {
    // const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    // modal.close();
  }

  handleModalOpen() {
    const modal = document.querySelector('ifx-modal') as HTMLIfxModalElement;
    console.log("modal open btn click ")
    modal.opened = true;
  }


  handleSearchField(event: any) {
    console.log("searchField value change: ", event.detail)
    this.searchFieldValue = event.detail;
  }

  handleSearchBar(event: any) {
    console.log("searchBar value change: ", event.detail)
    this.searchBarValue = event.detail;

  }

  increaseNumber() {
    this.numberIndicator = this.numberIndicator + 1;

  }

  decreaseNumber() {
    this.numberIndicator = this.numberIndicator - 1;
  }



}
