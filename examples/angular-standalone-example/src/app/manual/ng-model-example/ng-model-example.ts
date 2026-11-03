import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BooleanValueAccessor,
	IfxCounter,
  IfxCheckbox,
  IfxSegment,
  IfxSegmentedControl,
  IfxSlider,
  IfxSelect,
  IfxSelectOption,
	IfxRadioButton,
  IfxSearchBar,
  IfxSearchField,
  IfxSwitch,
  IfxTextField,
  IfxTextarea,
	IfxCounterValueAccessor,
  IfxSliderValueAccessor,
	SelectValueAccessor,
  TextValueAccessor,
} from '@infineon/design-system-angular/standalone';

@Component({
  selector: 'app-ng-model-example',
  imports: [
    FormsModule,
    BooleanValueAccessor,
		SelectValueAccessor,
    TextValueAccessor,
		IfxCounterValueAccessor,
    IfxSliderValueAccessor,
		IfxCounter,
    IfxCheckbox,
    IfxSegment,
    IfxSegmentedControl,
  	IfxRadioButton,
    IfxSwitch,
		IfxSlider,
    IfxSelect,
    IfxSelectOption,
    IfxSearchField,
    IfxSearchBar,
    IfxTextField,
    IfxTextarea,
  ],
  templateUrl: './ng-model-example.html',
  styleUrl: './ng-model-example.scss',
})
export class NgModelExample {
  protected booleanValue = false;
  protected textValue = '';
  protected segmentedValue = 'low';
  protected sliderValue = 50;
  protected countryValue = '';
}
