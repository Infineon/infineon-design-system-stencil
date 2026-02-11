<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(false);
const dragAndDrop = ref(false);
const required = ref(false);

function toggleDisabled() {
  disabled.value = !disabled.value;
}

function toggleDragAndDrop() {
  dragAndDrop.value = !dragAndDrop.value;
}

function toggleRequired() {
  required.value = !required.value;
}

</script>

<template>
  <div class="component">
    <h2>File Upload</h2>
    <ifx-file-upload :dragAndDrop="dragAndDrop" max-file-size-m-b="7" allowed-file-types="jpg,jpeg,png,pdf"
      additional-allowed-file-types="application/zip,text/csv" label="Label" :required="required" :disabled="disabled"
      label-required-error="You must upload at least one file." label-browse-files="Browse files"
      label-drag-and-drop="Drag &amp; Drop or browse files to upload" label-uploaded-files-heading="Uploaded files"
      label-file-too-large="Upload failed. Max file size: {{maxFileSizeMB}}MB."
      label-unsupported-file-type="Unsupported file type." label-uploaded="Successfully uploaded"
      label-supported-formats-template="Supported file formats: JPG, JPEG, PNG, PDF. Max file size: 7MB."
      label-file-singular="file" label-file-plural="files" label-upload-failed="Upload failed. Please try again."
      aria-label-browse-files="Browse files" aria-label-dropzone="Upload area. Click to browse or drag and drop files."
      aria-label-file-input="Upload file" aria-label-remove-file="Remove file" aria-label-cancel-upload="Cancel upload"
      aria-label-retry-upload="Retry upload" aria-label-uploading-status="Upload in progress"
      aria-label-uploaded-status="Upload completed" aria-label-upload-failed-status="Upload failed">
    </ifx-file-upload>
    <br>
    <br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" @click="toggleDragAndDrop">Toggle Drag and Drop</ifx-button>
      <ifx-button variant="secondary" @click="toggleRequired">Toggle Required</ifx-button>
      <ifx-button variant="secondary" @click="toggleDisabled">Toggle Disabled</ifx-button>

    </div>
    <br>

    <div class="state">
      <div><b>Drag and Drop:</b> {{ dragAndDrop }} </div>
      <div><b>Required:</b> {{ required }} </div>
      <div><b>Disabled:</b> {{ disabled }} </div>
    </div>
  </div>
</template>