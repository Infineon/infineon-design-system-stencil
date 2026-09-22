import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BooleanValueAccessor,
  IfxCheckbox,
  IfxSlider,
  IfxSelect,
  IfxSelectOption,
	IfxRadioButton,
  IfxSearchBar,
  IfxSearchField,
  IfxSwitch,
  IfxTextField,
  IfxTextarea,
  IfxSliderValueAccessor,
	SelectValueAccessor,
  TextValueAccessor,
} from '@infineon/infineon-design-system-angular/standalone';

@Component({
  selector: 'app-ng-model-example',
  imports: [
    FormsModule,
    BooleanValueAccessor,
		SelectValueAccessor,
    TextValueAccessor,
    IfxSliderValueAccessor,
    IfxCheckbox,
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
  protected sliderValue = 50;
  protected countryValue = '';
}
