import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

import { AccordionComponent } from "./components/accordion/accordion.component";
import { AlertComponent } from './components/alert/alert.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { ChipComponent } from './components/chip/chip.component';
import { ContentSwitcherComponent } from './components/content-switcher/content-switcher.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icon/icon.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { LinkComponent } from './components/link/link.component';
import { ModalComponent } from './components/modal/modal.component';
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NumberIndicatorComponent } from './components/number-indicator/number-indicator.component';
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { RadioButtonComponent } from "./components/radio-button/radio-button.component";
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { SearchFieldComponent } from "./components/search-field/search-field.component";
import { SegmentedControlComponent } from "./components/segmented-control/segmented-control.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SingleSelectComponent } from "./components/single-select/single-select.component";
import { SliderComponent } from './components/slider/slider.component';
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { StatusComponent } from './components/status/status.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SwitchComponent } from "./components/switch/switch.component";
import { TabsComponent } from './components/tabs/tabs.component';
import { AdvancedTableComponent } from './components/table-advanced/table-advanced.component';
import { BasicTableComponent } from './components/table-basic/table-basic.component';
import { TagComponent } from './components/tag/tag.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLibraryModule,
    AlertComponent,
    AccordionComponent,
    AdvancedTableComponent,
    BasicTableComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    CheckboxComponent,
    ChipComponent,
    ContentSwitcherComponent,
    DatePickerComponent,
    DropdownComponent,
    FooterComponent,
    IconComponent,
    IconButtonComponent,
    LinkComponent,
    ModalComponent,
    NavbarComponent,
    NotificationComponent,
    NumberIndicatorComponent,
    MultiSelectComponent,
    PaginationComponent,
    ProgressBarComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent,
    SpinnerComponent,
    SearchFieldComponent,
    SearchBarComponent,
    SingleSelectComponent,
    SliderComponent,
    SegmentedControlComponent,
    SidebarComponent,
    SwitchComponent,
    StatusComponent,
    StepperComponent,
    TabsComponent,
    TagComponent,
    TextFieldComponent,
    TextareaComponent,
    TooltipComponent,
    CheckboxGroupComponent,
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
