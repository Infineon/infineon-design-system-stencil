import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { IfxAccordionItem, IfxTabs } from '@infineon/infineon-design-system-angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {

   title = 'my-app';

  progressValue = 10;
  activeTabIndex = 0;
  checkboxChecked = false;
  checkboxError = false;
  checkboxDisabled = false;
  switchChecked = false;
  switchDisabled = false;
  radioError = false;
  radioDisabled = false;
  radioChecked = false;
  textareaValue = ''
  textFieldValue = '';
  searchFieldValue = '';
  searchBarValue = '';
  radioButtonValue = false;
  numberIndicator = 1;

  @ViewChild('ifxTabs') ifxTabs: IfxTabs | undefined;
  @ViewChild('ifxAccordionItem') ifxAccordionItemRef: IfxAccordionItem | undefined;
 

  ngOnInit() {
    this.setTab();
    setInterval(() => this.setTab(), 20000);
  }

  buttonRendererOptions = {
    onButtonClick: (params: any, event: Event) => {
      console.log("button clicked", params.data);
    }
  };

  setTab() {
    const next = Math.floor(Math.random() * (3));
    console.log("set next active tab: ", next)
    if (this.ifxTabs) {
      this.activeTabIndex = next;;
    }
  }

 
  handleChange(event: any) {
    console.log("emitting active tab index: ", event.detail);
  };

  handleAccordionItemOpen(event: any) {
    console.log("An accordion item was opened. Event details:", event);
  };

  handleAccordionItemClose(event: any) {
    console.log("An accordion item was closed. Event details:", event);
  };

  handleAccordionButtonClick() {
    console.log("accordion item open btn click ")
    const accordionItem = document.querySelector('ifx-accordion-item') as HTMLIfxAccordionItemElement;

    if (this.ifxAccordionItemRef) {
      console.log("accordion item: ", accordionItem);
      this.ifxAccordionItemRef.open = !this.ifxAccordionItemRef.open;
    }
  }

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

  handleSidebarNavigationItemClick(event: any) {
    console.log('Sidebar item clicked', event.detail);
  }

  handleTextInput(event: any) {
    console.log("textInput value change")
    this.textFieldValue = event.detail;
    this.textareaValue = event.detail
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
