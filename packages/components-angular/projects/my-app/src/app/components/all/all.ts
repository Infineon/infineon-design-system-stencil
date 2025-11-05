import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

import { AccordionComponent } from '../accordion/accordion.component';
import { AlertComponent } from '../alert/alert.component';
import { BadgeComponent } from '../badge/badge.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
import { ChipComponent } from '../chip/chip.component';
import { ContentSwitcherComponent } from '../content-switcher/content-switcher.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FileUpload } from '../file-upload/file-upload';
import { FooterComponent } from '../footer/footer.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { IconComponent } from '../icon/icon.component';
import { LinkComponent } from '../link/link.component';
import { ModalComponent } from '../modal/modal.component';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { NotificationComponent } from '../notification/notification.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { RadioButtonGroupComponent } from '../radio-button-group/radio-button-group.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { SegmentedControlComponent } from '../segmented-control/segmented-control.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SingleSelectComponent } from '../single-select/single-select.component';
import { SliderComponent } from '../slider/slider.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { StatusComponent } from '../status/status.component';
import { StepperComponent } from '../stepper/stepper.component';
import { SwitchComponent } from '../switch/switch.component';
import { TabsComponent } from '../tabs/tabs.component';
import { AdvancedTableComponent } from '../table-advanced/table-advanced.component';
import { BasicTableComponent } from '../table-basic/table-basic.component';
import { TagComponent } from '../tag/tag.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { TreeView } from '../tree-view/tree-view';

@Component({
  selector: 'app-all',
  imports: [
    ComponentLibraryModule,
    CommonModule,
    AccordionComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ChipComponent,
    ContentSwitcherComponent,
    DatePickerComponent,
    DropdownComponent,
    FileUpload,
    FooterComponent,
    IconComponent,
    IconButtonComponent,
    IndicatorComponent,
    LinkComponent,
    ModalComponent,
    MultiSelectComponent,
    NavbarComponent,
    NotificationComponent,
    PaginationComponent,
    ProgressBarComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent,
    SearchBarComponent,
    SearchFieldComponent,
    SegmentedControlComponent,
    SidebarComponent,
    SingleSelectComponent,
    SliderComponent,
    SpinnerComponent,
    StatusComponent,
    StepperComponent,
    SwitchComponent,
    BasicTableComponent,
    AdvancedTableComponent,
    TabsComponent,
    TagComponent,
    TextFieldComponent,
    TextareaComponent,
    TooltipComponent,
    TreeView
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './all.html',
  styleUrl: './all.scss'
})
export class All {

}
