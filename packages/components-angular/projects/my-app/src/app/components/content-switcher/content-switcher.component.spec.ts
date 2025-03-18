import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSwitcherComponent } from './content-switcher.component';

describe('ContentSwitcherComponent', () => {
  let component: ContentSwitcherComponent;
  let fixture: ComponentFixture<ContentSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
