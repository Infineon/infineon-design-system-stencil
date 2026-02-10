function r(l){l.innerHTML=`
    <h2>File Upload</h2>

    <ifx-file-upload 
      dragAndDrop=false 
      required=false 
      disabled=false
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
    </ifx-file-upload>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-dragAndDrop">Toggle Drag&Drop</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    </div>

    <br/><br/>

    <div class="state">
      <div><b>Drag&Drop:</b> <span id="state-dragAndDrop"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
    </div>
  `;const e=l.querySelector("ifx-file-upload"),a=l.querySelector("#state-dragAndDrop"),d=l.querySelector("#state-required"),i=l.querySelector("#state-disabled");a.textContent=String(e.dragAndDrop),d.textContent=String(e.required),i.textContent=String(e.disabled),l.querySelector("#toggle-dragAndDrop").onclick=()=>{e.dragAndDrop=!e.dragAndDrop,a.textContent=String(e.dragAndDrop)},l.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,d.textContent=String(e.required)},l.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,i.textContent=String(e.disabled)}}export{r as render};
