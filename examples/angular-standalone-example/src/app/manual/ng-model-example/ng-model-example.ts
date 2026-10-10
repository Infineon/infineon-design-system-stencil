import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BooleanValueAccessor,
  IfxCheckbox,
  IfxSegment,
  IfxSegmentedControl,
  IfxSlider,
	IfxRadioButton,
  IfxSearchBar,
  IfxSearchField,
  IfxSwitch,
  IfxTextField,
  IfxTextarea,
  IfxSliderValueAccessor,
  TextValueAccessor,
} from '@infineon/infineon-design-system-angular/standalone';

@Component({
  selector: 'app-ng-model-example',
  imports: [
    FormsModule,
    BooleanValueAccessor,
    TextValueAccessor,
    IfxSliderValueAccessor,
    IfxCheckbox,
    IfxSegment,
    IfxSegmentedControl,
  	IfxRadioButton,
    IfxSwitch,
		IfxSlider,
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
}
