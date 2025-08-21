import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { ComponentLibraryModule }           from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-file-upload-demo',
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
}