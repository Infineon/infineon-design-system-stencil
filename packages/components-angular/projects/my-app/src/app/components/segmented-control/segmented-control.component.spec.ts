import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedControlComponent } from './segmented-control.component';

describe('SegmentedControlComponent', () => {
  let component: SegmentedControlComponent;
  let fixture: ComponentFixture<SegmentedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
