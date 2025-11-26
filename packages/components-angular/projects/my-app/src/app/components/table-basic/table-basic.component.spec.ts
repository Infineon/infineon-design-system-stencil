import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableComponent } from './table-basic.component';

describe('BasicTableComponent', () => {
  let component: BasicTableComponent;
  let fixture: ComponentFixture<BasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
