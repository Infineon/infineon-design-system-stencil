import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeView } from './tree-view';

describe('TreeView', () => {
  let component: TreeView;
  let fixture: ComponentFixture<TreeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
