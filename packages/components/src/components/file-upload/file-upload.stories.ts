import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/File Upload',
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Upload component with different interaction styles: button or drag-and-drop area.'
      }
    }
  },
  argTypes: {
    dragAndDrop: {
      control: 'boolean',
      description: 'Enables drag-and-drop area. If false, a button-based upload is shown instead.'
    },
    label: {
      control: 'text',
      description: 'Label shown above the upload area.',
    },
    required: {
      control: 'boolean',
      description: 'If set to true, at least one file must be uploaded. Validation fails if empty.',
    },
    labelRequiredError: {
      control: 'text',
      description: 'Error message shown when no file is uploaded and `required` is true.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the component and prevents all interaction (upload, drag-and-drop, removal, etc.).',
    },
    maxFileSizeMB: {
      control: 'number',
      description: 'Maximum file size allowed per file (in MB). Files larger than this will be rejected.'
    },
    allowedFileTypes: {
      control: { type: 'check' },
      options: ['jpg', 'png', 'pdf', 'mov', 'mp3', 'mp4'],
      description: 'Select one or more allowed file extensions. Internally mapped to MIME types.'
    },
    additionalAllowedFileTypes: {
      control: 'text',
      description: 'Adds additional allowed file types using exact MIME types. Values must be valid MIME types – not file extensions! Example: application/zip (for .zip files)'
    },
    labelBrowseFiles: {
      control: 'text',
      description: 'Text for the file selection button (e.g., “Browse files”).'
    },
    labelDragAndDrop: {
      control: 'text',
      description: 'Text shown inside the drag-and-drop area.'
    },
    labelFileSingular: {
      control: 'text',
      description: 'Singular form of the word "file". Used for maxFiles-related messages (e.g., "1 file").'
    },
    labelFilePlural: {
      control: 'text',
      description: 'Plural form of the word "file". Used for maxFiles-related messages (e.g., "2 files").'
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files that can be uploaded in total. If unset, unlimited.',
    },
    labelMaxFilesInfo: {
      control: 'text',
      description: 'Optional message shown in the file info area when a file limit is set. Use {{count}} for substitution.',
    },
    labelMaxFilesExceeded: {
      control: 'text',
      description: 'Error message shown when a user exceeds the allowed number of files. Use {{count}} for substitution.',
    },
    labelUploadedFilesHeading: {
      control: 'text',
      description: 'Text shown as the heading above the uploaded files list.',
    },
    labelFileTooLarge: {
      control: 'text',
      description: 'Shown when a file exceeds the allowed size. Use {{size}} for substitution.'
    },
    labelUnsupportedFileType: {
      control: 'text',
      description: 'Shown when an unsupported file type is uploaded.'
    },
    labelUploaded: {
      control: 'text',
      description: 'Label shown after successful upload.'
    },
    labelSupportedFormatsTemplate: {
      control: 'text',
      description: 'Template showing supported file formats. Use {{types}} and {{size}}.'
    },
    labelUploadFailed: {
      control: 'text',
      description: 'Text shown when a file upload fails (e.g. due to network error).'
    },
    // ARIA LABELS
    ariaLabelBrowseFiles: {
      control: 'text',
      description: 'ARIA label for the file upload button.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelDropzone: {
      control: 'text',
      description: 'ARIA label for the entire dropzone area.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelFileInput: {
      control: 'text',
      description: 'ARIA label for the hidden native file input.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelRemoveFile: {
      control: 'text',
      description: 'ARIA label for the remove file button.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelCancelUpload: {
      control: 'text',
      description: 'ARIA label for the cancel upload button.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelRetryUpload: {
      control: 'text',
      description: 'ARIA label for the retry upload button.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelUploadingStatus: {
      control: 'text',
      description: 'ARIA status text for an uploading file.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelUploadedStatus: {
      control: 'text',
      description: 'ARIA status text for a successfully uploaded file.',
      table: { category: 'ARIA LABELS' }
    },
    ariaLabelUploadFailedStatus: {
      control: 'text',
      description: 'ARIA status text for a failed file upload.',
      table: { category: 'ARIA LABELS' }
    },
    // CUSTOM EVENTS
    ifxFileUploadAdd: {
      description: 'Custom Event emitted when one or more files are added via input or drop. Contains added and current file list.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadRemove: {
      description: 'Custom Event emitted when a file is removed by the user. Contains the removed file and the updated file list.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadChange: {
      description: 'Custom Event emitted whenever the list of uploaded files changes. Contains the updated file list.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadError: {
      description:
        'Emitted when an error occurs during file upload. Includes the affected file, a human-readable message, an error type, and an optional machine-readable reason (e.g., "file-too-large", "unsupported-type").',
      table: {
        category: 'CUSTOM EVENTS',
      },
    },
    ifxFileUploadInvalid: {
      description: 'Custom Event emitted when a file is invalid (e.g., wrong type or size). Contains the file and rejection reason.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadStart: {
      description: 'Custom Event emitted when an upload process for a file starts.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadComplete: {
      description: 'Custom Event emitted when a file upload has successfully completed.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadAllComplete: {
      description:
        'Emitted when all active uploads have been completed successfully. Includes the final list of uploaded files.',
      table: {
        category: 'CUSTOM EVENTS',
      }
    },
    ifxFileUploadAbort: {
      description: 'Custom Event emitted when a file upload is manually aborted.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadDrop: {
      description: 'Custom Event emitted when files are dropped into the dropzone. Includes accepted and rejected files.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadClick: {
      description: 'Custom Event emitted when the user clicks the upload area (to trigger file dialog).',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadMaxFilesExceeded: {
      description: 'Custom Event emitted when a user tries to upload more files than allowed by `maxFiles`. Provides the configured max and the attempted total.',
      table: {
        category: 'CUSTOM EVENTS',
      },
    },
    ifxFileUploadValidation: {
      description: 'Custom Event emitted when required validation is performed. True if valid, false if required file missing.',
      table: { category: 'CUSTOM EVENTS' },
    },
    ifxFileUploadRetry: {
      description: 'Fired when a retry is triggered on a previously failed file upload. Can be used to log retries or trigger custom logic.',
      table: { category: 'CUSTOM EVENTS' },
    }
  }
};

export default meta;

type Story = StoryObj;

const renderFileUpload = (args: any) => {
  const el = document.createElement('ifx-file-upload');

  if (args.dragAndDrop) el.setAttribute('drag-and-drop', '');
  el.setAttribute('max-file-size-m-b', args.maxFileSizeMB);

  const rawTypes = Array.isArray(args.allowedFileTypes)
  ? args.allowedFileTypes
  : args.allowedFileTypes.split(',');

  // Map 'jpg' ➜ ['jpg', 'jpeg']
  const mappedTypes = rawTypes.flatMap(type => {
    if (type === 'jpg') return ['jpg', 'jpeg'];
    return [type];
  });

  if (args.additionalAllowedFileTypes) {
    const value = Array.isArray(args.additionalAllowedFileTypes)
      ? args.additionalAllowedFileTypes.join(',')
      : args.additionalAllowedFileTypes;
    el.setAttribute('additional-allowed-file-types', value);
  }

  if (args.maxFiles !== undefined && args.maxFiles !== null) {
    el.setAttribute('max-files', String(args.maxFiles));
  }

  if (args.required) {
    el.setAttribute('required', '');
  } else {
    el.removeAttribute('required');
  }

  if (args.disabled) {
    el.setAttribute('disabled', '');
  } else {
    el.removeAttribute('disabled');
  }

  const uniqueTypes = Array.from(new Set(mappedTypes));
  el.setAttribute('allowed-file-types', uniqueTypes.join(','));

  el.setAttribute('label', args.label);
  el.setAttribute('label-required-error', args.labelRequiredError);
  el.setAttribute('label-browse-files', args.labelBrowseFiles);
  el.setAttribute('label-drag-and-drop', args.labelDragAndDrop);
  el.setAttribute('label-uploaded-files-heading', args.labelUploadedFilesHeading);
  el.setAttribute('label-file-too-large', args.labelFileTooLarge);
  el.setAttribute('label-unsupported-file-type', args.labelUnsupportedFileType);
  el.setAttribute('label-uploaded', args.labelUploaded);
  el.setAttribute('label-supported-formats-template', args.labelSupportedFormatsTemplate);
  el.setAttribute('label-file-singular', args.labelFileSingular);
  el.setAttribute('label-file-plural', args.labelFilePlural);
  el.setAttribute('label-max-files-info', args.labelMaxFilesInfo);
  el.setAttribute('label-max-files-exceeded', args.labelMaxFilesExceeded);
  el.setAttribute('label-upload-failed', args.labelUploadFailed);

  el.setAttribute('aria-label-browse-files', args.ariaLabelBrowseFiles);
  el.setAttribute('aria-label-dropzone', args.ariaLabelDropzone);
  el.setAttribute('aria-label-file-input', args.ariaLabelFileInput);
  el.setAttribute('aria-label-remove-file', args.ariaLabelRemoveFile);
  el.setAttribute('aria-label-cancel-upload', args.ariaLabelCancelUpload);
  el.setAttribute('aria-label-retry-upload', args.ariaLabelRetryUpload);
  el.setAttribute('aria-label-uploading-status', args.ariaLabelUploadingStatus);
  el.setAttribute('aria-label-uploaded-status', args.ariaLabelUploadedStatus);
  el.setAttribute('aria-label-upload-failed-status', args.ariaLabelUploadFailedStatus);

  el.addEventListener('ifxFileUploadAdd', action('ifxFileUploadAdd'));
  el.addEventListener('ifxFileUploadRemove', action('ifxFileUploadRemove'));
  el.addEventListener('ifxFileUploadChange', action('ifxFileUploadChange'));
  el.addEventListener('ifxFileUploadError', action('ifxFileUploadError'));
  el.addEventListener('ifxFileUploadInvalid', action('ifxFileUploadInvalid'));
  el.addEventListener('ifxFileUploadStart', action('ifxFileUploadStart'));
  el.addEventListener('ifxFileUploadComplete', action('ifxFileUploadComplete'));
  el.addEventListener('ifxFileUploadAbort', action('ifxFileUploadAbort'));
  el.addEventListener('ifxFileUploadDrop', action('ifxFileUploadDrop'));
  el.addEventListener('ifxFileUploadClick', action('ifxFileUploadClick'));
  el.addEventListener('ifxFileUploadMaxFilesExceeded', action('ifxFileUploadMaxFilesExceeded'));
  el.addEventListener('ifxFileUploadValidation', action('ifxFileUploadValidation'));
  el.addEventListener('ifxFileUploadRetry', action('ifxFileUploadRetry'));

  return el;
};

export const UploadFileButton: Story = {
  name: 'Upload File (Button)',
  args: {
    dragAndDrop: false,
    label: 'Label',
    required: false,
    labelRequiredError: 'You must upload at least one file.',
    disabled: false,
    maxFileSizeMB: 7,
    allowedFileTypes: ['jpg', 'png', 'pdf'],
    additionalAllowedFileTypes: 'application/zip,text/csv',
    labelBrowseFiles: 'Browse files',
    labelDragAndDrop: 'Drag & Drop or browse files to upload',
    labelUploadedFilesHeading: 'Uploaded files',
    labelFileTooLarge: 'Upload failed. Max file size: {{size}}MB.',
    labelUnsupportedFileType: 'Unsupported file type.',
    labelUploaded: 'Successfully uploaded',
    labelSupportedFormatsTemplate: 'Supported file formats: {{types}}. Max file size: {{size}}MB.',
    labelFileSingular: 'file',
    labelFilePlural: 'files',
    labelMaxFilesInfo: 'You can upload up to {{count}} {{files}}.',
    labelMaxFilesExceeded: 'You have exceeded the maximum of {{count}} {{files}}.',
    labelUploadFailed: 'Upload failed. Please try again.',
    ariaLabelBrowseFiles: 'Browse files',
    ariaLabelDropzone: 'Upload area. Click to browse or drag and drop files.',
    ariaLabelFileInput: 'Upload file',
    ariaLabelRemoveFile: 'Remove file',
    ariaLabelCancelUpload: 'Cancel upload',
    ariaLabelRetryUpload: 'Retry upload',
    ariaLabelUploadingStatus: 'Upload in progress',
    ariaLabelUploadedStatus: 'Upload completed',
    ariaLabelUploadFailedStatus: 'Upload failed'
  },
  render: renderFileUpload
};

export const UploadAreaDragDrop: Story = {
  name: 'Upload Area (Drag&Drop)',
  args: {
    dragAndDrop: true,
    label: 'Label',
    required: false,
    labelRequiredError: 'You must upload at least one file.',
    disabled: false,
    maxFileSizeMB: 7,
    allowedFileTypes: ['jpg', 'png', 'pdf'],
    additionalAllowedFileTypes: 'application/zip,text/csv',
    labelBrowseFiles: 'Browse files',
    labelDragAndDrop: 'Drag & Drop or browse files to upload',
    labelUploadedFilesHeading: 'Uploaded files',
    labelFileTooLarge: 'Upload failed. Max file size: {{size}}MB.',
    labelUnsupportedFileType: 'Unsupported file type.',
    labelUploaded: 'Successfully uploaded',
    labelSupportedFormatsTemplate: 'Supported file formats: {{types}}. Max file size: {{size}}MB.',
    labelFileSingular: 'file',
    labelFilePlural: 'files',
    labelMaxFilesInfo: 'You can upload up to {{count}} {{files}}.',
    labelMaxFilesExceeded: 'You have exceeded the maximum of {{count}} {{files}}.',
    labelUploadFailed: 'Upload failed. Please try again.',
    ariaLabelBrowseFiles: 'Browse files',
    ariaLabelDropzone: 'Upload area. Click to browse or drag and drop files.',
    ariaLabelFileInput: 'Upload file',
    ariaLabelRemoveFile: 'Remove file',
    ariaLabelCancelUpload: 'Cancel upload',
    ariaLabelRetryUpload: 'Retry upload',
    ariaLabelUploadingStatus: 'Upload in progress',
    ariaLabelUploadedStatus: 'Upload completed',
    ariaLabelUploadFailedStatus: 'Upload failed'
  },
  render: renderFileUpload
};

export const UploadStatesDemo: Story = {
  name: 'Upload States (Demo)',
  args: {
    dragAndDrop: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Visual preview of all file states (success, upload in progress, rejected). Only the `dragAndDrop` control is available.'
      }
    },
    previewTabs: {
      'canvas': { hidden: false },
      'storybook/docs/panel': { hidden: false },
      'storybook/actions/panel': { hidden: true },
      'storybook/interactions/panel': { hidden: true }
    }
  },
  argTypes: {
    dragAndDrop: { control: 'boolean' },
    // Disable all other controls
    disabled: { table: { disable: true } },
    labelUploadFailed: { table: { disable: true } },
    required: { table: { disable: true } },
    label: { table: { disable: true } },
    labelRequiredError: { table: { disable: true } },
    maxFileSizeMB: { table: { disable: true } },
    allowedFileTypes: { table: { disable: true } },
    additionalAllowedFileTypes: { table: { disable: true } },
    labelBrowseFiles: { table: { disable: true } },
    labelDragAndDrop: { table: { disable: true } },
    labelFileSingular: { table: { disable: true } },
    labelFilePlural: { table: { disable: true } },
    maxFiles: { table: { disable: true } },
    labelMaxFilesInfo: { table: { disable: true } },
    labelMaxFilesExceeded: { table: { disable: true } },
    labelUploadedFilesHeading: { table: { disable: true } },
    labelFileTooLarge: { table: { disable: true } },
    labelUnsupportedFileType: { table: { disable: true } },
    labelUploaded: { table: { disable: true } },
    labelSupportedFormatsTemplate: { table: { disable: true } },
    ifxFileUploadAdd: { table: { disable: true } },
    ifxFileUploadRemove: { table: { disable: true } },
    ifxFileUploadChange: { table: { disable: true } },
    ifxFileUploadError: { table: { disable: true } },
    ifxFileUploadInvalid: { table: { disable: true } },
    ifxFileUploadStart: { table: { disable: true } },
    ifxFileUploadComplete: { table: { disable: true } },
    ifxFileUploadAllComplete: { table: { disable: true } },
    ifxFileUploadAbort: { table: { disable: true } },
    ifxFileUploadDrop: { table: { disable: true } },
    ifxFileUploadClick: { table: { disable: true } },
    ifxFileUploadMaxFilesExceeded: { table: { disable: true } },
    ifxFileUploadValidation: { table: { disable: true } },
    ifxFileUploadRetry: { table: { disable: true } },
    // ARIA labels – disabled in demo
    ariaLabelBrowseFiles: { table: { disable: true } },
    ariaLabelDropzone: { table: { disable: true } },
    ariaLabelFileInput: { table: { disable: true } },
    ariaLabelRemoveFile: { table: { disable: true } },
    ariaLabelCancelUpload: { table: { disable: true } },
    ariaLabelRetryUpload: { table: { disable: true } },
    ariaLabelUploadingStatus: { table: { disable: true } },
    ariaLabelUploadedStatus: { table: { disable: true } },
    ariaLabelUploadFailedStatus: { table: { disable: true } },
  },
  render: (args) => {
    const el = document.createElement('ifx-file-upload');

    if (args.dragAndDrop) {
      el.setAttribute('drag-and-drop', '');
    }

    setTimeout(() => {
      (el as any).injectDemoState?.();
    }, 0);

    return el;
  }
};

export const UploadRequiredError: Story = {
  name: 'Upload Required Error (Demo)',
  args: {
    dragAndDrop: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the error state when the upload is required but no files have been added. Only `dragAndDrop` is controllable in this demo.'
      }
    }
  },
  argTypes: {
    dragAndDrop: { control: 'boolean' },
    // Disable all other controls
    disabled: { table: { disable: true } },
    labelUploadFailed: { table: { disable: true } },
    required: { table: { disable: true } },
    label: { table: { disable: true } },
    labelRequiredError: { table: { disable: true } },
    maxFileSizeMB: { table: { disable: true } },
    allowedFileTypes: { table: { disable: true } },
    additionalAllowedFileTypes: { table: { disable: true } },
    labelBrowseFiles: { table: { disable: true } },
    labelDragAndDrop: { table: { disable: true } },
    labelFileSingular: { table: { disable: true } },
    labelFilePlural: { table: { disable: true } },
    maxFiles: { table: { disable: true } },
    labelMaxFilesInfo: { table: { disable: true } },
    labelMaxFilesExceeded: { table: { disable: true } },
    labelUploadedFilesHeading: { table: { disable: true } },
    labelFileTooLarge: { table: { disable: true } },
    labelUnsupportedFileType: { table: { disable: true } },
    labelUploaded: { table: { disable: true } },
    labelSupportedFormatsTemplate: { table: { disable: true } },
    ifxFileUploadAdd: { table: { disable: true } },
    ifxFileUploadRemove: { table: { disable: true } },
    ifxFileUploadChange: { table: { disable: true } },
    ifxFileUploadError: { table: { disable: true } },
    ifxFileUploadInvalid: { table: { disable: true } },
    ifxFileUploadStart: { table: { disable: true } },
    ifxFileUploadComplete: { table: { disable: true } },
    ifxFileUploadAllComplete: { table: { disable: true } },
    ifxFileUploadAbort: { table: { disable: true } },
    ifxFileUploadDrop: { table: { disable: true } },
    ifxFileUploadClick: { table: { disable: true } },
    ifxFileUploadMaxFilesExceeded: { table: { disable: true } },
    ifxFileUploadValidation: { table: { disable: true } },
    ifxFileUploadRetry: { table: { disable: true } },
    // ARIA labels – disabled in demo
    ariaLabelBrowseFiles: { table: { disable: true } },
    ariaLabelDropzone: { table: { disable: true } },
    ariaLabelFileInput: { table: { disable: true } },
    ariaLabelRemoveFile: { table: { disable: true } },
    ariaLabelCancelUpload: { table: { disable: true } },
    ariaLabelRetryUpload: { table: { disable: true } },
    ariaLabelUploadingStatus: { table: { disable: true } },
    ariaLabelUploadedStatus: { table: { disable: true } },
    ariaLabelUploadFailedStatus: { table: { disable: true } },
  },
  render: (args) => {
    const el = document.createElement('ifx-file-upload');

    if (args.dragAndDrop) el.setAttribute('drag-and-drop', '');

    el.setAttribute('required', '');

    // Fehlerzustand gezielt triggern
    setTimeout(() => {
      (el as any).triggerDemoValidation?.();
    }, 100);

    return el;
  }
};
