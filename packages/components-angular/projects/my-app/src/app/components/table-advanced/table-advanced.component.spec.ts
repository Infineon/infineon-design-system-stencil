import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTableComponent } from './table-advanced.component';

describe('AdvancedTableComponent', () => {
  let component: AdvancedTableComponent;
  let fixture: ComponentFixture<AdvancedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
