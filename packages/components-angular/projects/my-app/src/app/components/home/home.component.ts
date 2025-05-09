import { Component } from '@angular/core';

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
import { FooterComponent } from '../footer/footer.component';
import { IconComponent } from '../icon/icon.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { LinkComponent } from '../link/link.component';
import { ModalComponent } from '../modal/modal.component';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NotificationComponent } from '../notification/notification.component';
import { NumberIndicatorComponent } from '../number-indicator/number-indicator.component';
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
import { SwitchComponent } from "../switch/switch.component";
import { TabsComponent } from '../tabs/tabs.component';
import { AdvancedTableComponent } from '../table-advanced/table-advanced.component';
import { BasicTableComponent } from '../table-basic/table-basic.component';
import { TagComponent } from '../tag/tag.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
