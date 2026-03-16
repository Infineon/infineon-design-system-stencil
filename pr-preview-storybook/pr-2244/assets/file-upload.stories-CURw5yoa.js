const{action:a}=__STORYBOOK_MODULE_ACTIONS__,b=l=>{const e=["dragAndDrop","label","required","labelRequiredError","disabled","maxFiles","maxFileSizeMB","allowedFileTypes","additionalAllowedFileTypes","allowAnyFileType","allowedFileExtensions","labelBrowseFiles","labelDragAndDrop","labelUploadedFilesHeading","labelFileTooLarge","labelUnsupportedFileType","labelUploaded","labelSupportedFormatsTemplate","labelFileSingular","labelFilePlural","labelMaxFilesInfo","labelMaxFilesExceeded","labelUploadFailed","ariaLabelBrowseFiles","ariaLabelDropzone","ariaLabelFileInput","ariaLabelRemoveFile","ariaLabelCancelUpload","ariaLabelRetryUpload","ariaLabelUploadingStatus","ariaLabelUploadedStatus","ariaLabelUploadFailedStatus"],p={};for(const s of e)l.includes(s)||(p[s]={table:{disable:!0}});return p},u={ifxFileUploadAdd:{table:{disable:!0}},ifxFileUploadRemove:{table:{disable:!0}},ifxFileUploadChange:{table:{disable:!0}},ifxFileUploadError:{table:{disable:!0}},ifxFileUploadInvalid:{table:{disable:!0}},ifxFileUploadStart:{table:{disable:!0}},ifxFileUploadComplete:{table:{disable:!0}},ifxFileUploadAllComplete:{table:{disable:!0}},ifxFileUploadAbort:{table:{disable:!0}},ifxFileUploadDrop:{table:{disable:!0}},ifxFileUploadClick:{table:{disable:!0}},ifxFileUploadMaxFilesExceeded:{table:{disable:!0}},ifxFileUploadValidation:{table:{disable:!0}},ifxFileUploadRetry:{table:{disable:!0}}},f={title:"Components/File Upload",tags:["autodocs"],parameters:{controls:{expanded:!0},docs:{description:{component:"Upload component with different interaction styles: button or drag-and-drop area."}}},argTypes:{dragAndDrop:{description:"Enables drag-and-drop upload area.",control:"boolean",table:{category:"Function",defaultValue:{summary:"false"}}},required:{description:"Marks the upload as required.",control:"boolean",table:{category:"Function",defaultValue:{summary:"false"}}},disabled:{description:"Disables the upload input.",control:"boolean",table:{category:"Function",defaultValue:{summary:"false"}}},maxFileSizeMB:{description:"Maximum file size in MB.",control:"number",table:{category:"Function",defaultValue:{summary:"7"}}},allowedFileTypes:{control:{type:"check"},options:["jpg","png","pdf","mov","mp3","mp4"],description:"Select one or more allowed file extensions. Internally mapped to MIME types. If not set and no other file restrictions are defined, the default values (jpg, jpeg, png, pdf, mov, mp3, mp4) are used for validation.",table:{category:"Function"}},additionalAllowedFileTypes:{description:"Custom MIME types (comma-separated).",control:"text",table:{category:"Function"}},allowAnyFileType:{description:"When true, allows any file type to be uploaded (overrides all other file type restrictions).",control:"boolean",table:{category:"Function",defaultValue:{summary:"false"}}},allowedFileExtensions:{description:'Custom file extensions to allow. Recommended format: "xml,asc,cfg" (without dots). Also accepts ".xml,.asc,.cfg" (with dots). Do not use wildcards like "*.xml".',control:"text",table:{category:"Function"}},maxFiles:{description:"Maximum number of allowed files.",control:"number",table:{category:"Function"}},label:{control:"text",description:"Main label shown above input.",table:{category:"Label"}},labelRequiredError:{control:"text",description:"Shown when required and no file selected.",table:{category:"Label"}},labelBrowseFiles:{control:"text",table:{category:"Label"}},labelDragAndDrop:{control:"text",table:{category:"Label"}},labelUploadedFilesHeading:{control:"text",table:{category:"Label"}},labelFileTooLarge:{control:"text",table:{category:"Label"}},labelUnsupportedFileType:{control:"text",table:{category:"Label"}},labelUploaded:{control:"text",table:{category:"Label"}},labelSupportedFormatsTemplate:{control:"text",table:{category:"Label"}},labelFileSingular:{control:"text",table:{category:"Label"}},labelFilePlural:{control:"text",table:{category:"Label"}},labelMaxFilesInfo:{control:"text",table:{category:"Label"}},labelMaxFilesExceeded:{control:"text",table:{category:"Label"}},labelUploadFailed:{control:"text",table:{category:"Label"}},ariaLabelBrowseFiles:{control:"text",table:{category:"Aria Labels"}},ariaLabelDropzone:{control:"text",table:{category:"Aria Labels"}},ariaLabelFileInput:{control:"text",table:{category:"Aria Labels"}},ariaLabelRemoveFile:{control:"text",table:{category:"Aria Labels"}},ariaLabelCancelUpload:{control:"text",table:{category:"Aria Labels"}},ariaLabelRetryUpload:{control:"text",table:{category:"Aria Labels"}},ariaLabelUploadingStatus:{control:"text",table:{category:"Aria Labels"}},ariaLabelUploadedStatus:{control:"text",table:{category:"Aria Labels"}},ariaLabelUploadFailedStatus:{control:"text",table:{category:"Aria Labels"}},ifxFileUploadAdd:{action:"ifxFileUploadAdd",table:{category:"Custom Events"},description:"Triggered when valid files are added (via browse or drop)."},ifxFileUploadRemove:{action:"ifxFileUploadRemove",table:{category:"Custom Events"},description:"Fired when a user removes a file from the list."},ifxFileUploadChange:{action:"ifxFileUploadChange",table:{category:"Custom Events"},description:"Fired whenever the file list changes (add, remove, retry)."},ifxFileUploadError:{action:"ifxFileUploadError",table:{category:"Custom Events"},description:"Fired when a file is rejected or an upload fails."},ifxFileUploadInvalid:{action:"ifxFileUploadInvalid",table:{category:"Custom Events"},description:"Fired for invalid files (e.g., wrong type or size)."},ifxFileUploadStart:{action:"ifxFileUploadStart",table:{category:"Custom Events"},description:"Fired when an upload starts for a file."},ifxFileUploadComplete:{action:"ifxFileUploadComplete",table:{category:"Custom Events"},description:"Fired when a single file upload finishes successfully."},ifxFileUploadAllComplete:{action:"ifxFileUploadAllComplete",table:{category:"Custom Events"},description:"Fired when all current uploads have completed."},ifxFileUploadAbort:{action:"ifxFileUploadAbort",table:{category:"Custom Events"},description:"Fired when a user cancels an in-progress upload."},ifxFileUploadDrop:{action:"ifxFileUploadDrop",table:{category:"Custom Events"},description:"Fired when files are dropped via drag-and-drop."},ifxFileUploadClick:{action:"ifxFileUploadClick",table:{category:"Custom Events"},description:"Fired when the upload button or dropzone is clicked."},ifxFileUploadMaxFilesExceeded:{action:"ifxFileUploadMaxFilesExceeded",table:{category:"Custom Events"},description:"Fired when the selected files exceed the maxFiles limit."},ifxFileUploadValidation:{action:"ifxFileUploadValidation",table:{category:"Custom Events"},description:"Fired after required validation is checked."},ifxFileUploadRetry:{action:"ifxFileUploadRetry",table:{category:"Custom Events"},description:"Fired when the retry button is clicked for a failed upload."}}},n=l=>{const e=document.createElement("ifx-file-upload");l.dragAndDrop&&e.setAttribute("drag-and-drop",""),l.allowAnyFileType&&e.setAttribute("allow-any-file-type",""),e.setAttribute("max-file-size-m-b",l.maxFileSizeMB);const s=(Array.isArray(l.allowedFileTypes)?l.allowedFileTypes:l.allowedFileTypes?.split(",")||[]).flatMap(o=>o==="jpg"?["jpg","jpeg"]:[o]),F=Array.from(new Set(s));if(e.setAttribute("allowed-file-types",F.join(",")),l.additionalAllowedFileTypes){const o=Array.isArray(l.additionalAllowedFileTypes)?l.additionalAllowedFileTypes.join(","):l.additionalAllowedFileTypes;e.setAttribute("additional-allowed-file-types",o)}if(l.allowedFileExtensions){const o=Array.isArray(l.allowedFileExtensions)?l.allowedFileExtensions.join(","):l.allowedFileExtensions;e.setAttribute("allowed-file-extensions",o)}return l.maxFiles!==void 0&&l.maxFiles!==null&&e.setAttribute("max-files",String(l.maxFiles)),l.required?e.setAttribute("required",""):e.removeAttribute("required"),l.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.setAttribute("label",l.label),e.setAttribute("label-required-error",l.labelRequiredError),e.setAttribute("label-browse-files",l.labelBrowseFiles),e.setAttribute("label-drag-and-drop",l.labelDragAndDrop),e.setAttribute("label-uploaded-files-heading",l.labelUploadedFilesHeading),e.setAttribute("label-file-too-large",l.labelFileTooLarge),e.setAttribute("label-unsupported-file-type",l.labelUnsupportedFileType),e.setAttribute("label-uploaded",l.labelUploaded),e.setAttribute("label-supported-formats-template",l.labelSupportedFormatsTemplate),e.setAttribute("label-file-singular",l.labelFileSingular),e.setAttribute("label-file-plural",l.labelFilePlural),e.setAttribute("label-max-files-info",l.labelMaxFilesInfo),e.setAttribute("label-max-files-exceeded",l.labelMaxFilesExceeded),e.setAttribute("label-upload-failed",l.labelUploadFailed),e.setAttribute("aria-label-browse-files",l.ariaLabelBrowseFiles),e.setAttribute("aria-label-dropzone",l.ariaLabelDropzone),e.setAttribute("aria-label-file-input",l.ariaLabelFileInput),e.setAttribute("aria-label-remove-file",l.ariaLabelRemoveFile),e.setAttribute("aria-label-cancel-upload",l.ariaLabelCancelUpload),e.setAttribute("aria-label-retry-upload",l.ariaLabelRetryUpload),e.setAttribute("aria-label-uploading-status",l.ariaLabelUploadingStatus),e.setAttribute("aria-label-uploaded-status",l.ariaLabelUploadedStatus),e.setAttribute("aria-label-upload-failed-status",l.ariaLabelUploadFailedStatus),e.addEventListener("ifxFileUploadAdd",a("ifxFileUploadAdd")),e.addEventListener("ifxFileUploadRemove",a("ifxFileUploadRemove")),e.addEventListener("ifxFileUploadChange",a("ifxFileUploadChange")),e.addEventListener("ifxFileUploadError",a("ifxFileUploadError")),e.addEventListener("ifxFileUploadInvalid",a("ifxFileUploadInvalid")),e.addEventListener("ifxFileUploadStart",a("ifxFileUploadStart")),e.addEventListener("ifxFileUploadComplete",a("ifxFileUploadComplete")),e.addEventListener("ifxFileUploadAbort",a("ifxFileUploadAbort")),e.addEventListener("ifxFileUploadDrop",a("ifxFileUploadDrop")),e.addEventListener("ifxFileUploadClick",a("ifxFileUploadClick")),e.addEventListener("ifxFileUploadMaxFilesExceeded",a("ifxFileUploadMaxFilesExceeded")),e.addEventListener("ifxFileUploadValidation",a("ifxFileUploadValidation")),e.addEventListener("ifxFileUploadRetry",a("ifxFileUploadRetry")),e},t=n.bind({});t.args={dragAndDrop:!1,label:"Label",required:!1,labelRequiredError:"You must upload at least one file.",disabled:!1,maxFileSizeMB:7,allowedFileTypes:["jpg","png","pdf"],additionalAllowedFileTypes:"application/zip,text/csv",allowAnyFileType:!1,allowedFileExtensions:"",labelBrowseFiles:"Browse files",labelDragAndDrop:"Drag & Drop or browse files to upload",labelUploadedFilesHeading:"Uploaded files",labelFileTooLarge:"Upload failed. Max file size: {{size}}MB.",labelUnsupportedFileType:"Unsupported file type.",labelUploaded:"Successfully uploaded",labelSupportedFormatsTemplate:"Supported file formats: {{types}}. Max file size: {{size}}MB.",labelFileSingular:"file",labelFilePlural:"files",labelMaxFilesInfo:"You can upload up to {{count}} {{files}}.",labelMaxFilesExceeded:"You have exceeded the maximum of {{count}} {{files}}.",labelUploadFailed:"Upload failed. Please try again.",ariaLabelBrowseFiles:"Browse files",ariaLabelDropzone:"Upload area. Click to browse or drag and drop files.",ariaLabelFileInput:"Upload file",ariaLabelRemoveFile:"Remove file",ariaLabelCancelUpload:"Cancel upload",ariaLabelRetryUpload:"Retry upload",ariaLabelUploadingStatus:"Upload in progress",ariaLabelUploadedStatus:"Upload completed",ariaLabelUploadFailedStatus:"Upload failed"};const d=n.bind({});d.args={...t.args,dragAndDrop:!0};const i=n.bind({});i.args={...t.args,dragAndDrop:!0};i.parameters={docs:{description:{story:"Visual preview of all file states (success, upload in progress, rejected)."}}};i.decorators=[l=>{const e=l();return setTimeout(()=>e?.injectDemoState?.(),0),e}];i.argTypes={...b(["dragAndDrop"]),...u};const r=n.bind({});r.args={...t.args,required:!0};r.parameters={docs:{description:{story:"Demonstrates the error state when the upload is required but no files have been added."}}};r.decorators=[l=>{const e=l();return setTimeout(()=>e?.triggerDemoValidation?.(),100),e}];r.argTypes={...b(["dragAndDrop"]),...u};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const el = document.createElement("ifx-file-upload");
  if (args.dragAndDrop) el.setAttribute("drag-and-drop", "");
  if (args.allowAnyFileType) el.setAttribute("allow-any-file-type", "");
  el.setAttribute("max-file-size-m-b", args.maxFileSizeMB);
  const rawTypes = Array.isArray(args.allowedFileTypes) ? args.allowedFileTypes : args.allowedFileTypes?.split(",") || [];
  const mappedTypes = rawTypes.flatMap(type => type === "jpg" ? ["jpg", "jpeg"] : [type]);
  const uniqueTypes = Array.from(new Set(mappedTypes));
  el.setAttribute("allowed-file-types", uniqueTypes.join(","));
  if (args.additionalAllowedFileTypes) {
    const value = Array.isArray(args.additionalAllowedFileTypes) ? args.additionalAllowedFileTypes.join(",") : args.additionalAllowedFileTypes;
    el.setAttribute("additional-allowed-file-types", value);
  }
  if (args.allowedFileExtensions) {
    const value = Array.isArray(args.allowedFileExtensions) ? args.allowedFileExtensions.join(",") : args.allowedFileExtensions;
    el.setAttribute("allowed-file-extensions", value);
  }
  if (args.maxFiles !== undefined && args.maxFiles !== null) {
    el.setAttribute("max-files", String(args.maxFiles));
  }
  args.required ? el.setAttribute("required", "") : el.removeAttribute("required");
  args.disabled ? el.setAttribute("disabled", "") : el.removeAttribute("disabled");
  el.setAttribute("label", args.label);
  el.setAttribute("label-required-error", args.labelRequiredError);
  el.setAttribute("label-browse-files", args.labelBrowseFiles);
  el.setAttribute("label-drag-and-drop", args.labelDragAndDrop);
  el.setAttribute("label-uploaded-files-heading", args.labelUploadedFilesHeading);
  el.setAttribute("label-file-too-large", args.labelFileTooLarge);
  el.setAttribute("label-unsupported-file-type", args.labelUnsupportedFileType);
  el.setAttribute("label-uploaded", args.labelUploaded);
  el.setAttribute("label-supported-formats-template", args.labelSupportedFormatsTemplate);
  el.setAttribute("label-file-singular", args.labelFileSingular);
  el.setAttribute("label-file-plural", args.labelFilePlural);
  el.setAttribute("label-max-files-info", args.labelMaxFilesInfo);
  el.setAttribute("label-max-files-exceeded", args.labelMaxFilesExceeded);
  el.setAttribute("label-upload-failed", args.labelUploadFailed);
  el.setAttribute("aria-label-browse-files", args.ariaLabelBrowseFiles);
  el.setAttribute("aria-label-dropzone", args.ariaLabelDropzone);
  el.setAttribute("aria-label-file-input", args.ariaLabelFileInput);
  el.setAttribute("aria-label-remove-file", args.ariaLabelRemoveFile);
  el.setAttribute("aria-label-cancel-upload", args.ariaLabelCancelUpload);
  el.setAttribute("aria-label-retry-upload", args.ariaLabelRetryUpload);
  el.setAttribute("aria-label-uploading-status", args.ariaLabelUploadingStatus);
  el.setAttribute("aria-label-uploaded-status", args.ariaLabelUploadedStatus);
  el.setAttribute("aria-label-upload-failed-status", args.ariaLabelUploadFailedStatus);
  el.addEventListener("ifxFileUploadAdd", action("ifxFileUploadAdd"));
  el.addEventListener("ifxFileUploadRemove", action("ifxFileUploadRemove"));
  el.addEventListener("ifxFileUploadChange", action("ifxFileUploadChange"));
  el.addEventListener("ifxFileUploadError", action("ifxFileUploadError"));
  el.addEventListener("ifxFileUploadInvalid", action("ifxFileUploadInvalid"));
  el.addEventListener("ifxFileUploadStart", action("ifxFileUploadStart"));
  el.addEventListener("ifxFileUploadComplete", action("ifxFileUploadComplete"));
  el.addEventListener("ifxFileUploadAbort", action("ifxFileUploadAbort"));
  el.addEventListener("ifxFileUploadDrop", action("ifxFileUploadDrop"));
  el.addEventListener("ifxFileUploadClick", action("ifxFileUploadClick"));
  el.addEventListener("ifxFileUploadMaxFilesExceeded", action("ifxFileUploadMaxFilesExceeded"));
  el.addEventListener("ifxFileUploadValidation", action("ifxFileUploadValidation"));
  el.addEventListener("ifxFileUploadRetry", action("ifxFileUploadRetry"));
  return el;
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const el = document.createElement("ifx-file-upload");
  if (args.dragAndDrop) el.setAttribute("drag-and-drop", "");
  if (args.allowAnyFileType) el.setAttribute("allow-any-file-type", "");
  el.setAttribute("max-file-size-m-b", args.maxFileSizeMB);
  const rawTypes = Array.isArray(args.allowedFileTypes) ? args.allowedFileTypes : args.allowedFileTypes?.split(",") || [];
  const mappedTypes = rawTypes.flatMap(type => type === "jpg" ? ["jpg", "jpeg"] : [type]);
  const uniqueTypes = Array.from(new Set(mappedTypes));
  el.setAttribute("allowed-file-types", uniqueTypes.join(","));
  if (args.additionalAllowedFileTypes) {
    const value = Array.isArray(args.additionalAllowedFileTypes) ? args.additionalAllowedFileTypes.join(",") : args.additionalAllowedFileTypes;
    el.setAttribute("additional-allowed-file-types", value);
  }
  if (args.allowedFileExtensions) {
    const value = Array.isArray(args.allowedFileExtensions) ? args.allowedFileExtensions.join(",") : args.allowedFileExtensions;
    el.setAttribute("allowed-file-extensions", value);
  }
  if (args.maxFiles !== undefined && args.maxFiles !== null) {
    el.setAttribute("max-files", String(args.maxFiles));
  }
  args.required ? el.setAttribute("required", "") : el.removeAttribute("required");
  args.disabled ? el.setAttribute("disabled", "") : el.removeAttribute("disabled");
  el.setAttribute("label", args.label);
  el.setAttribute("label-required-error", args.labelRequiredError);
  el.setAttribute("label-browse-files", args.labelBrowseFiles);
  el.setAttribute("label-drag-and-drop", args.labelDragAndDrop);
  el.setAttribute("label-uploaded-files-heading", args.labelUploadedFilesHeading);
  el.setAttribute("label-file-too-large", args.labelFileTooLarge);
  el.setAttribute("label-unsupported-file-type", args.labelUnsupportedFileType);
  el.setAttribute("label-uploaded", args.labelUploaded);
  el.setAttribute("label-supported-formats-template", args.labelSupportedFormatsTemplate);
  el.setAttribute("label-file-singular", args.labelFileSingular);
  el.setAttribute("label-file-plural", args.labelFilePlural);
  el.setAttribute("label-max-files-info", args.labelMaxFilesInfo);
  el.setAttribute("label-max-files-exceeded", args.labelMaxFilesExceeded);
  el.setAttribute("label-upload-failed", args.labelUploadFailed);
  el.setAttribute("aria-label-browse-files", args.ariaLabelBrowseFiles);
  el.setAttribute("aria-label-dropzone", args.ariaLabelDropzone);
  el.setAttribute("aria-label-file-input", args.ariaLabelFileInput);
  el.setAttribute("aria-label-remove-file", args.ariaLabelRemoveFile);
  el.setAttribute("aria-label-cancel-upload", args.ariaLabelCancelUpload);
  el.setAttribute("aria-label-retry-upload", args.ariaLabelRetryUpload);
  el.setAttribute("aria-label-uploading-status", args.ariaLabelUploadingStatus);
  el.setAttribute("aria-label-uploaded-status", args.ariaLabelUploadedStatus);
  el.setAttribute("aria-label-upload-failed-status", args.ariaLabelUploadFailedStatus);
  el.addEventListener("ifxFileUploadAdd", action("ifxFileUploadAdd"));
  el.addEventListener("ifxFileUploadRemove", action("ifxFileUploadRemove"));
  el.addEventListener("ifxFileUploadChange", action("ifxFileUploadChange"));
  el.addEventListener("ifxFileUploadError", action("ifxFileUploadError"));
  el.addEventListener("ifxFileUploadInvalid", action("ifxFileUploadInvalid"));
  el.addEventListener("ifxFileUploadStart", action("ifxFileUploadStart"));
  el.addEventListener("ifxFileUploadComplete", action("ifxFileUploadComplete"));
  el.addEventListener("ifxFileUploadAbort", action("ifxFileUploadAbort"));
  el.addEventListener("ifxFileUploadDrop", action("ifxFileUploadDrop"));
  el.addEventListener("ifxFileUploadClick", action("ifxFileUploadClick"));
  el.addEventListener("ifxFileUploadMaxFilesExceeded", action("ifxFileUploadMaxFilesExceeded"));
  el.addEventListener("ifxFileUploadValidation", action("ifxFileUploadValidation"));
  el.addEventListener("ifxFileUploadRetry", action("ifxFileUploadRetry"));
  return el;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const el = document.createElement("ifx-file-upload");
  if (args.dragAndDrop) el.setAttribute("drag-and-drop", "");
  if (args.allowAnyFileType) el.setAttribute("allow-any-file-type", "");
  el.setAttribute("max-file-size-m-b", args.maxFileSizeMB);
  const rawTypes = Array.isArray(args.allowedFileTypes) ? args.allowedFileTypes : args.allowedFileTypes?.split(",") || [];
  const mappedTypes = rawTypes.flatMap(type => type === "jpg" ? ["jpg", "jpeg"] : [type]);
  const uniqueTypes = Array.from(new Set(mappedTypes));
  el.setAttribute("allowed-file-types", uniqueTypes.join(","));
  if (args.additionalAllowedFileTypes) {
    const value = Array.isArray(args.additionalAllowedFileTypes) ? args.additionalAllowedFileTypes.join(",") : args.additionalAllowedFileTypes;
    el.setAttribute("additional-allowed-file-types", value);
  }
  if (args.allowedFileExtensions) {
    const value = Array.isArray(args.allowedFileExtensions) ? args.allowedFileExtensions.join(",") : args.allowedFileExtensions;
    el.setAttribute("allowed-file-extensions", value);
  }
  if (args.maxFiles !== undefined && args.maxFiles !== null) {
    el.setAttribute("max-files", String(args.maxFiles));
  }
  args.required ? el.setAttribute("required", "") : el.removeAttribute("required");
  args.disabled ? el.setAttribute("disabled", "") : el.removeAttribute("disabled");
  el.setAttribute("label", args.label);
  el.setAttribute("label-required-error", args.labelRequiredError);
  el.setAttribute("label-browse-files", args.labelBrowseFiles);
  el.setAttribute("label-drag-and-drop", args.labelDragAndDrop);
  el.setAttribute("label-uploaded-files-heading", args.labelUploadedFilesHeading);
  el.setAttribute("label-file-too-large", args.labelFileTooLarge);
  el.setAttribute("label-unsupported-file-type", args.labelUnsupportedFileType);
  el.setAttribute("label-uploaded", args.labelUploaded);
  el.setAttribute("label-supported-formats-template", args.labelSupportedFormatsTemplate);
  el.setAttribute("label-file-singular", args.labelFileSingular);
  el.setAttribute("label-file-plural", args.labelFilePlural);
  el.setAttribute("label-max-files-info", args.labelMaxFilesInfo);
  el.setAttribute("label-max-files-exceeded", args.labelMaxFilesExceeded);
  el.setAttribute("label-upload-failed", args.labelUploadFailed);
  el.setAttribute("aria-label-browse-files", args.ariaLabelBrowseFiles);
  el.setAttribute("aria-label-dropzone", args.ariaLabelDropzone);
  el.setAttribute("aria-label-file-input", args.ariaLabelFileInput);
  el.setAttribute("aria-label-remove-file", args.ariaLabelRemoveFile);
  el.setAttribute("aria-label-cancel-upload", args.ariaLabelCancelUpload);
  el.setAttribute("aria-label-retry-upload", args.ariaLabelRetryUpload);
  el.setAttribute("aria-label-uploading-status", args.ariaLabelUploadingStatus);
  el.setAttribute("aria-label-uploaded-status", args.ariaLabelUploadedStatus);
  el.setAttribute("aria-label-upload-failed-status", args.ariaLabelUploadFailedStatus);
  el.addEventListener("ifxFileUploadAdd", action("ifxFileUploadAdd"));
  el.addEventListener("ifxFileUploadRemove", action("ifxFileUploadRemove"));
  el.addEventListener("ifxFileUploadChange", action("ifxFileUploadChange"));
  el.addEventListener("ifxFileUploadError", action("ifxFileUploadError"));
  el.addEventListener("ifxFileUploadInvalid", action("ifxFileUploadInvalid"));
  el.addEventListener("ifxFileUploadStart", action("ifxFileUploadStart"));
  el.addEventListener("ifxFileUploadComplete", action("ifxFileUploadComplete"));
  el.addEventListener("ifxFileUploadAbort", action("ifxFileUploadAbort"));
  el.addEventListener("ifxFileUploadDrop", action("ifxFileUploadDrop"));
  el.addEventListener("ifxFileUploadClick", action("ifxFileUploadClick"));
  el.addEventListener("ifxFileUploadMaxFilesExceeded", action("ifxFileUploadMaxFilesExceeded"));
  el.addEventListener("ifxFileUploadValidation", action("ifxFileUploadValidation"));
  el.addEventListener("ifxFileUploadRetry", action("ifxFileUploadRetry"));
  return el;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const el = document.createElement("ifx-file-upload");
  if (args.dragAndDrop) el.setAttribute("drag-and-drop", "");
  if (args.allowAnyFileType) el.setAttribute("allow-any-file-type", "");
  el.setAttribute("max-file-size-m-b", args.maxFileSizeMB);
  const rawTypes = Array.isArray(args.allowedFileTypes) ? args.allowedFileTypes : args.allowedFileTypes?.split(",") || [];
  const mappedTypes = rawTypes.flatMap(type => type === "jpg" ? ["jpg", "jpeg"] : [type]);
  const uniqueTypes = Array.from(new Set(mappedTypes));
  el.setAttribute("allowed-file-types", uniqueTypes.join(","));
  if (args.additionalAllowedFileTypes) {
    const value = Array.isArray(args.additionalAllowedFileTypes) ? args.additionalAllowedFileTypes.join(",") : args.additionalAllowedFileTypes;
    el.setAttribute("additional-allowed-file-types", value);
  }
  if (args.allowedFileExtensions) {
    const value = Array.isArray(args.allowedFileExtensions) ? args.allowedFileExtensions.join(",") : args.allowedFileExtensions;
    el.setAttribute("allowed-file-extensions", value);
  }
  if (args.maxFiles !== undefined && args.maxFiles !== null) {
    el.setAttribute("max-files", String(args.maxFiles));
  }
  args.required ? el.setAttribute("required", "") : el.removeAttribute("required");
  args.disabled ? el.setAttribute("disabled", "") : el.removeAttribute("disabled");
  el.setAttribute("label", args.label);
  el.setAttribute("label-required-error", args.labelRequiredError);
  el.setAttribute("label-browse-files", args.labelBrowseFiles);
  el.setAttribute("label-drag-and-drop", args.labelDragAndDrop);
  el.setAttribute("label-uploaded-files-heading", args.labelUploadedFilesHeading);
  el.setAttribute("label-file-too-large", args.labelFileTooLarge);
  el.setAttribute("label-unsupported-file-type", args.labelUnsupportedFileType);
  el.setAttribute("label-uploaded", args.labelUploaded);
  el.setAttribute("label-supported-formats-template", args.labelSupportedFormatsTemplate);
  el.setAttribute("label-file-singular", args.labelFileSingular);
  el.setAttribute("label-file-plural", args.labelFilePlural);
  el.setAttribute("label-max-files-info", args.labelMaxFilesInfo);
  el.setAttribute("label-max-files-exceeded", args.labelMaxFilesExceeded);
  el.setAttribute("label-upload-failed", args.labelUploadFailed);
  el.setAttribute("aria-label-browse-files", args.ariaLabelBrowseFiles);
  el.setAttribute("aria-label-dropzone", args.ariaLabelDropzone);
  el.setAttribute("aria-label-file-input", args.ariaLabelFileInput);
  el.setAttribute("aria-label-remove-file", args.ariaLabelRemoveFile);
  el.setAttribute("aria-label-cancel-upload", args.ariaLabelCancelUpload);
  el.setAttribute("aria-label-retry-upload", args.ariaLabelRetryUpload);
  el.setAttribute("aria-label-uploading-status", args.ariaLabelUploadingStatus);
  el.setAttribute("aria-label-uploaded-status", args.ariaLabelUploadedStatus);
  el.setAttribute("aria-label-upload-failed-status", args.ariaLabelUploadFailedStatus);
  el.addEventListener("ifxFileUploadAdd", action("ifxFileUploadAdd"));
  el.addEventListener("ifxFileUploadRemove", action("ifxFileUploadRemove"));
  el.addEventListener("ifxFileUploadChange", action("ifxFileUploadChange"));
  el.addEventListener("ifxFileUploadError", action("ifxFileUploadError"));
  el.addEventListener("ifxFileUploadInvalid", action("ifxFileUploadInvalid"));
  el.addEventListener("ifxFileUploadStart", action("ifxFileUploadStart"));
  el.addEventListener("ifxFileUploadComplete", action("ifxFileUploadComplete"));
  el.addEventListener("ifxFileUploadAbort", action("ifxFileUploadAbort"));
  el.addEventListener("ifxFileUploadDrop", action("ifxFileUploadDrop"));
  el.addEventListener("ifxFileUploadClick", action("ifxFileUploadClick"));
  el.addEventListener("ifxFileUploadMaxFilesExceeded", action("ifxFileUploadMaxFilesExceeded"));
  el.addEventListener("ifxFileUploadValidation", action("ifxFileUploadValidation"));
  el.addEventListener("ifxFileUploadRetry", action("ifxFileUploadRetry"));
  return el;
}`,...r.parameters?.docs?.source}}};const c=["Default","UploadAreaDragDrop","UploadStatesDemo","UploadRequiredError"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,UploadAreaDragDrop:d,UploadRequiredError:r,UploadStatesDemo:i,__namedExportsOrder:c,default:f},Symbol.toStringTag,{value:"Module"}));export{x as F};
