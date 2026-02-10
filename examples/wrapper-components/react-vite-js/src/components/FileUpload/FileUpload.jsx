import { useState } from 'react';
import { IfxFileUpload, IfxButton } from '@infineon/infineon-design-system-react';

function FileUpload() {
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [DragAndDrop, setDragAndDrop] = useState(false);

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleRequired = () => {
    setRequired(prevRequired => !prevRequired);
  }

  const toggleDragAndDrop = () => {
    setDragAndDrop(prevDragAndDrop => !prevDragAndDrop);
  }

  return (
    <div className="component">
      <h2>File Upload</h2>
      <IfxFileUpload
        dragAndDrop={DragAndDrop}
        required={required}
        disabled={disabled}
        max-file-size-m-b="7"
        allowed-file-types="jpg,jpeg,png,pdf"
        additional-allowed-file-types="application/zip,text/csv"
        label="Label"
        label-required-error="You must upload at least one file."
        label-browse-files="Browse files"
        label-drag-and-drop="Drag &amp; Drop or browse files to upload"
        label-uploaded-files-heading="Uploaded files"
        label-file-too-large="Upload failed. Max file size: {{size}}MB."
        label-unsupported-file-type="Unsupported file type."
        label-uploaded="Successfully uploaded"
        label-supported-formats-template="Supported file formats: {{types}}. Max file size: {{size}}MB."
        label-file-singular="file"
        label-file-plural="files"
        label-max-files-info="You can upload up to {{count}} {{files}}."
        label-max-files-exceeded="You have exceeded the maximum of {{count}} {{files}}."
        label-upload-failed="Upload failed. Please try again."
        aria-label-browse-files="Browse files"
        aria-label-dropzone="Upload area. Click to browse or drag and drop files."
        aria-label-file-input="Upload file"
        aria-label-remove-file="Remove file"
        aria-label-cancel-upload="Cancel upload"
        aria-label-retry-upload="Retry upload"
        aria-label-uploading-status="Upload in progress"
        aria-label-uploaded-status="Upload completed"
        aria-label-upload-failed-status="Upload failed">
      </IfxFileUpload>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDragAndDrop}>Toggle Drag&Drop</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Required:</b> {String(required)}</div>
        <div><b>Drag and Drop:</b> {String(DragAndDrop)}</div>
      </div>
    </div>
  );
}

export default FileUpload;