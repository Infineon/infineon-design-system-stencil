import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    ComponentLibraryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.scss']
})
export class FileUpload {
  maxFileSizeMB = 7;
  allowedFileTypes = 'jpg,jpeg,png,pdf';
  additionalAllowedFileTypes = 'application/zip,text/csv';

  dragAndDrop = false;
  required = false;
  disabled = false;

  toggleDragAndDrop() {
    this.dragAndDrop = !this.dragAndDrop;
  }
  toggleRequired() {
    this.required = !this.required;
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}