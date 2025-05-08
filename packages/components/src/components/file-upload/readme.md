# ifx-file-upload



<!-- Auto Generated Below -->


## Properties

| Property                        | Attribute                          | Description                                                                                                   | Type                            | Default                                                           |
| ------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------- |
| `additionalAllowedFileTypes`    | `additional-allowed-file-types`    |                                                                                                               | `string \| string[]`            | `[]`                                                              |
| `allowedFileTypes`              | `allowed-file-types`               | Default set of allowed file extensions (used internally). Can be extended using `additionalAllowedFileTypes`. | `string \| string[]`            | `['jpg', 'jpeg', 'png', 'pdf', 'mov', 'mp3', 'mp4']`              |
| `dragAndDrop`                   | `drag-and-drop`                    |                                                                                                               | `boolean`                       | `false`                                                           |
| `label`                         | `label`                            |                                                                                                               | `string`                        | `'Label'`                                                         |
| `labelBrowseFiles`              | `label-browse-files`               |                                                                                                               | `string`                        | `'Browse files'`                                                  |
| `labelDragAndDrop`              | `label-drag-and-drop`              |                                                                                                               | `string`                        | `'Drag & Drop or browse files to upload'`                         |
| `labelFilePlural`               | `label-file-plural`                |                                                                                                               | `string`                        | `'files'`                                                         |
| `labelFileSingular`             | `label-file-singular`              |                                                                                                               | `string`                        | `'file'`                                                          |
| `labelFileTooLarge`             | `label-file-too-large`             |                                                                                                               | `string`                        | `'Upload failed. Max file size: {{size}}MB.'`                     |
| `labelMaxFilesExceeded`         | `label-max-files-exceeded`         |                                                                                                               | `string`                        | `'Upload limit exceeded. Only {{count}} {{files}} allowed.'`      |
| `labelMaxFilesInfo`             | `label-max-files-info`             |                                                                                                               | `string`                        | `'Up to {{count}} {{files}}.'`                                    |
| `labelRequiredError`            | `label-required-error`             |                                                                                                               | `string`                        | `'At least one file must be uploaded'`                            |
| `labelSupportedFormatsTemplate` | `label-supported-formats-template` |                                                                                                               | `string`                        | `'Supported file formats: {{types}}. Max file size: {{size}}MB.'` |
| `labelUnsupportedFileType`      | `label-unsupported-file-type`      |                                                                                                               | `string`                        | `'Unsupported file type.'`                                        |
| `labelUploaded`                 | `label-uploaded`                   |                                                                                                               | `string`                        | `'Successfully uploaded'`                                         |
| `labelUploadedFilesHeading`     | `label-uploaded-files-heading`     |                                                                                                               | `string`                        | `'Uploaded files'`                                                |
| `maxFileSizeMB`                 | `max-file-size-m-b`                |                                                                                                               | `number`                        | `7`                                                               |
| `maxFiles`                      | `max-files`                        |                                                                                                               | `number`                        | `undefined`                                                       |
| `required`                      | `required`                         |                                                                                                               | `boolean`                       | `false`                                                           |
| `uploadHandler`                 | --                                 |                                                                                                               | `(file: File) => Promise<void>` | `undefined`                                                       |


## Events

| Event                           | Description | Type                                                                                   |
| ------------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `ifxFileUploadAbort`            |             | `CustomEvent<{ file: File; }>`                                                         |
| `ifxFileUploadAdd`              |             | `CustomEvent<{ addedFiles: File[]; files: File[]; }>`                                  |
| `ifxFileUploadAllComplete`      |             | `CustomEvent<{ files: File[]; }>`                                                      |
| `ifxFileUploadChange`           |             | `CustomEvent<{ files: File[]; }>`                                                      |
| `ifxFileUploadClick`            |             | `CustomEvent<void>`                                                                    |
| `ifxFileUploadComplete`         |             | `CustomEvent<{ file: File; }>`                                                         |
| `ifxFileUploadDrop`             |             | `CustomEvent<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[]; }>` |
| `ifxFileUploadError`            |             | `CustomEvent<{ errorType: string; file: File; message: string; reason?: string; }>`    |
| `ifxFileUploadInvalid`          |             | `CustomEvent<{ file: File; reason: string; }>`                                         |
| `ifxFileUploadMaxFilesExceeded` |             | `CustomEvent<{ maxFiles: number; attempted: number; }>`                                |
| `ifxFileUploadRemove`           |             | `CustomEvent<{ removedFile: File; files: File[]; }>`                                   |
| `ifxFileUploadStart`            |             | `CustomEvent<{ file: File; }>`                                                         |
| `ifxFileUploadValidation`       |             | `CustomEvent<{ valid: boolean; }>`                                                     |


## Methods

### `injectDemoState() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `triggerDemoValidation() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [ifx-icon](../icon)
- [ifx-icon-button](../icon-button)
- [ifx-progress-bar](../progress-bar)
- [ifx-button](../button)

### Graph
```mermaid
graph TD;
  ifx-file-upload --> ifx-icon
  ifx-file-upload --> ifx-icon-button
  ifx-file-upload --> ifx-progress-bar
  ifx-file-upload --> ifx-button
  ifx-icon-button --> ifx-icon
  style ifx-file-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
