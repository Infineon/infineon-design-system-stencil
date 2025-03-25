import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignComponent } from './design.component';

describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
