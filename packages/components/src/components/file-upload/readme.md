# ifx-file-upload

The `ifx-file-upload` component provides an intuitive file upload functionality, supporting traditional click-to-browse or drag-and-drop interaction methods.

---

## Usage

### Standard usage

```html
<ifx-file-upload></ifx-file-upload>
```

### With drag-and-drop enabled

```html
<ifx-file-upload drag-and-drop></ifx-file-upload>
```

### Custom configuration

```html
<ifx-file-upload
  drag-and-drop
  max-file-size-m-b="10"
  allowed-file-types="['pdf','png']"
></ifx-file-upload>
```

### With custom labels

```html
<ifx-file-upload
  labels="{
    browseFiles: 'Select files',
    fileTooLarge: 'File exceeds allowed size.',
    unsupportedFileType: 'Unsupported format',
    uploading: 'File is uploading...',
    uploaded: 'Upload completed!',
    supportedFormats: 'Allowed formats: PDF, PNG.'
  }"
></ifx-file-upload>
```

---

## Properties

| Name               | Type                            | Default                                              | Description                                               |
| ------------------ | ------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| `dragAndDrop`      | `boolean`                       | `false`                                              | Enables drag-and-drop functionality                       |
| `maxFileSizeMB`    | `number`                        | `7`                                                  | Maximum allowed file size in megabytes                    |
| `allowedFileTypes` | `string \| string[]`            | `['jpg', 'jpeg', 'png', 'pdf', 'mov', 'mp3', 'mp4']` | Allowed file extensions                                   |
| `labels`           | `object`                        | `{}`                                                 | Customizable text labels for component states and actions |
| `uploadHandler`    | `(file: File) => Promise<void>` | `undefined`                                          | Custom handler function for file uploads (optional)       |

---

## Events

| Event Name              | Payload Detail                                                           | Beschreibung                                                                           |
| ----------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `ifxFileUploadAdd`      | `{ addedFiles: File[], files: File[] }`                                  | Wird ausgelöst, wenn neue Dateien hinzugefügt wurden.                                  |
| `ifxFileUploadRemove`   | `{ removedFile: File, files: File[] }`                                   | Wird ausgelöst, wenn eine Datei entfernt wurde.                                        |
| `ifxFileUploadChange`   | `{ files: File[] }`                                                      | Wird immer ausgelöst, wenn sich die Liste der Dateien ändert.                          |
| `ifxFileUploadError`    | `{ errorType: string, file: File, message: string }`                     | Wird ausgelöst, wenn beim Upload ein Fehler auftritt.                                  |
| `ifxFileUploadInvalid`  | `{ file: File, reason: 'invalid-type' \| 'invalid-size' }`               | Wird ausgelöst, wenn eine Datei wegen Typ oder Größe abgelehnt wird.                   |
| `ifxFileUploadStart`    | `{ file: File }`                                                         | Wird ausgelöst, wenn der Upload einer Datei gestartet wird.                            |
| `ifxFileUploadComplete` | `{ file: File }`                                                         | Wird ausgelöst, wenn eine Datei erfolgreich hochgeladen wurde.                         |
| `ifxFileUploadAbort`    | `{ file: File }`                                                         | Wird ausgelöst, wenn ein Upload abgebrochen wurde.                                     |
| `ifxFileUploadDrop`     | `{ droppedFiles: File[], acceptedFiles: File[], rejectedFiles: File[] }` | Wird bei Drag & Drop ausgelöst. Enthält alle gedroppten, gültigen & invaliden Dateien. |
| `ifxFileUploadClick`    | `void`                                                                   | Wird ausgelöst, wenn auf den Dateiupload geklickt wird (nur bei Drag&Drop).            |


---

## Methods

### `cancelUpload(file: File)`
Cancels an ongoing upload.

### `removeFile(file: File)`
Removes a file from the upload list.

---

## Slots

No slots available.

---

## CSS Custom Properties

The component uses Shadow DOM styling, adhering to Infineon's Design System styling guidelines.

---

## Dependencies

- `ifx-button`
- `ifx-icon`
- `ifx-icon-button`
- `ifx-progress-bar`


---

*Built with [StencilJS](https://stenciljs.com/)*

