import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberIndicatorComponent } from './indicator.component';

describe('NumberIndicatorComponent', () => {
  let component: NumberIndicatorComponent;
  let fixture: ComponentFixture<NumberIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
