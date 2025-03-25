import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonGroupComponent } from './radio-button-group.component';

describe('RadioButtonGroupComponent', () => {
  let component: RadioButtonGroupComponent;
  let fixture: ComponentFixture<RadioButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
