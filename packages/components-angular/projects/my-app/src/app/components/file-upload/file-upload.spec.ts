import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUpload } from './file-upload';

describe('FileUpload', () => {
  let component: FileUpload;
  let fixture: ComponentFixture<FileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
