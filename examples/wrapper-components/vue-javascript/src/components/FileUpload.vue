<template>
  <div class="component">
    <h2>File Upload</h2>
    <ifx-file-upload max-file-size-m-b="7" allowed-file-types="jpg,jpeg,png,pdf" additional-allowed-file-types="application/zip,text/csv" label="Label" label-required-error="You must upload at least one file." label-browse-files="Browse files" label-drag-and-drop="Drag &amp; Drop or browse files to upload" label-uploaded-files-heading="Uploaded files" label-file-too-large="Upload failed. Max file size: {{size}}MB." label-unsupported-file-type="Unsupported file type." label-uploaded="Successfully uploaded" label-supported-formats-template="Supported file formats: {{types}}. Max file size: {{size}}MB." label-file-singular="file" label-file-plural="files" label-max-files-info="You can upload up to {{count}} {{files}}." label-max-files-exceeded="You have exceeded the maximum of {{count}} {{files}}." label-upload-failed="Upload failed. Please try again." aria-label-browse-files="Browse files" aria-label-dropzone="Upload area. Click to browse or drag and drop files." aria-label-file-input="Upload file" aria-label-remove-file="Remove file" aria-label-cancel-upload="Cancel upload" aria-label-retry-upload="Retry upload" aria-label-uploading-status="Upload in progress" aria-label-uploaded-status="Upload completed" aria-label-upload-failed-status="Upload failed"></ifx-file-upload>
    <br />
    <br />
  </div>
</template>

 