import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popover } from './popover';

describe('Popover', () => {
  let component: Popover;
  let fixture: ComponentFixture<Popover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Popover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
