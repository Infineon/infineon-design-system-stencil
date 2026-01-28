import { Route } from '@angular/router';

import { AccordionComponent }       from './components/accordion/accordion.component';
import { ActionList }               from './components/action-list/action-list';
import { AlertComponent }           from './components/alert/alert.component';
import { BreadcrumbComponent }      from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent }          from './components/button/button.component';
import { CardComponent }            from './components/card/card.component';
import { CheckboxComponent }        from './components/checkbox/checkbox.component';
import { CheckboxGroupComponent }   from './components/checkbox-group/checkbox-group.component';
import { ChipComponent }            from './components/chip/chip.component';
import { ContentSwitcherComponent } from './components/content-switcher/content-switcher.component';
import { DatePickerComponent }      from './components/date-picker/date-picker.component';
import { DropdownComponent }        from './components/dropdown/dropdown.component';
import { FileUpload }               from './components/file-upload/file-upload';
import { FooterComponent }          from './components/footer/footer.component';
import { IconComponent }            from './components/icon/icon.component';
import { IconButtonComponent }      from './components/icon-button/icon-button.component';
import { LinkComponent }            from './components/link/link.component';
import { ModalComponent }           from './components/modal/modal.component';
import { MultiSelectComponent }     from './components/multi-select/multi-select.component';
import { NotificationComponent }    from './components/notification/notification.component';
import { IndicatorComponent }       from './components/indicator/indicator.component';
import { PaginationComponent }      from './components/pagination/pagination.component';
import { ProgressBarComponent }     from './components/progress-bar/progress-bar.component';
import { RadioButtonComponent }     from './components/radio-button/radio-button.component';
import { RadioButtonGroupComponent }from './components/radio-button-group/radio-button-group.component';
import { SearchBarComponent }       from './components/search-bar/search-bar.component';
import { SearchFieldComponent }     from './components/search-field/search-field.component';
import { SegmentedControlComponent }from './components/segmented-control/segmented-control.component';
import { SidebarComponent }         from './components/sidebar/sidebar.component';
import { SingleSelectComponent }    from './components/single-select/single-select.component';
import { SliderComponent }          from './components/slider/slider.component';
import { SpinnerComponent }         from './components/spinner/spinner.component';
import { StatusComponent }          from './components/status/status.component';
import { StepperComponent }         from './components/stepper/stepper.component';
import { SwitchComponent }          from './components/switch/switch.component';
import { TabsComponent }            from './components/tabs/tabs.component';
import { AdvancedTableComponent }   from './components/table-advanced/table-advanced.component';
import { BasicTableComponent }      from './components/table-basic/table-basic.component';
import { TextFieldComponent }       from './components/text-field/text-field.component';
import { TextareaComponent }        from './components/textarea/textarea.component';
import { TooltipComponent }         from './components/tooltip/tooltip.component';
import { TreeView }                 from './components/tree-view/tree-view';

export const routes: Route[] = [
  { path: 'accordion',        component: AccordionComponent },
  { path: 'alert',            component: AlertComponent },
  { path: 'actionlist',       component: ActionList},
  { path: 'breadcrumb',       component: BreadcrumbComponent },
  { path: 'button',           component: ButtonComponent },
  { path: 'card',             component: CardComponent },
  { path: 'checkbox',         component: CheckboxComponent },
  { path: 'checkboxgroup',    component: CheckboxGroupComponent },
  { path: 'chip',             component: ChipComponent },
  { path: 'contentswitcher',  component: ContentSwitcherComponent },
  { path: 'datepicker',       component: DatePickerComponent },
  { path: 'dropdown',         component: DropdownComponent },
  { path: 'fileupload',       component: FileUpload},
  { path: 'footer',           component: FooterComponent},
  { path: 'icon',             component: IconComponent },
  { path: 'iconbutton',       component: IconButtonComponent },
  { path: 'link',             component: LinkComponent },
  { path: 'modal',            component: ModalComponent },
  { path: 'multiselect',      component: MultiSelectComponent },
  { path: 'notification',     component: NotificationComponent },
  { path: 'indicator',        component: IndicatorComponent },
  { path: 'pagination',       component: PaginationComponent },
  { path: 'progressbar',      component: ProgressBarComponent },
  { path: 'radiobutton',      component: RadioButtonComponent },
  { path: 'radiobuttongroup', component: RadioButtonGroupComponent },
  { path: 'searchbar',        component: SearchBarComponent },
  { path: 'searchfield',      component: SearchFieldComponent },
  { path: 'segmentedcontrol', component: SegmentedControlComponent },
  { path: 'sidebar',          component: SidebarComponent },
  { path: 'singleselect',     component: SingleSelectComponent },
  { path: 'slider',           component: SliderComponent },
  { path: 'spinner',          component: SpinnerComponent },
  { path: 'status',           component: StatusComponent },
  { path: 'stepper',          component: StepperComponent },
  { path: 'switch',           component: SwitchComponent },
  { path: 'tabs',             component: TabsComponent },
  { path: 'advancedtable',    component: AdvancedTableComponent },
  { path: 'basictable',       component: BasicTableComponent },
  { path: 'textfield',        component: TextFieldComponent },
  { path: 'textarea',         component: TextareaComponent },
  { path: 'tooltip',          component: TooltipComponent },
  { path: 'treeview',         component: TreeView },

  { path: '',   redirectTo: 'accordion', pathMatch: 'full' },
  { path: '**', redirectTo: 'accordion' }
];