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
    maxFileSizeMB: {
      control: 'number',
      description: 'Maximum file size allowed per file (in MB). Files larger than this will be rejected.'
    },
    allowedFileTypes: {
      control: { type: 'check' },
      options: ['jpg', 'png', 'pdf', 'mov', 'mp3', 'mp4'],
      description: 'Select one or more allowed file extensions. Internally mapped to MIME types.'
    },
    labelBrowseFiles: {
      control: 'text',
      description: 'Text for the file selection button (e.g., “Browse files”).'
    },
    labelDragAndDrop: {
      control: 'text',
      description: 'Text shown inside the drag-and-drop area.'
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

  const uniqueTypes = Array.from(new Set(mappedTypes));
  el.setAttribute('allowed-file-types', uniqueTypes.join(','));

  el.setAttribute('label-browse-files', args.labelBrowseFiles);
  el.setAttribute('label-drag-and-drop', args.labelDragAndDrop);
  el.setAttribute('label-file-too-large', args.labelFileTooLarge);
  el.setAttribute('label-unsupported-file-type', args.labelUnsupportedFileType);
  el.setAttribute('label-uploaded', args.labelUploaded);
  el.setAttribute('label-supported-formats-template', args.labelSupportedFormatsTemplate);

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

  return el;
};

export const UploadFileButton: Story = {
  name: 'Upload File (Button)',
  args: {
    dragAndDrop: false,
    maxFileSizeMB: 7,
    allowedFileTypes: ['jpg', 'png', 'pdf'],
    labelBrowseFiles: 'Browse files',
    labelDragAndDrop: 'Drag & Drop or browse files to upload',
    labelFileTooLarge: 'Upload failed. Max file size: {{size}}MB.',
    labelUnsupportedFileType: 'Unsupported file type.',
    labelUploaded: 'Successfully uploaded',
    labelSupportedFormatsTemplate: 'Supported file formats: {{types}}. Max file size: {{size}}MB.'
  },
  render: renderFileUpload
};

export const UploadAreaDragDrop: Story = {
  name: 'Upload Area (Drag&Drop)',
  args: {
    dragAndDrop: true,
    maxFileSizeMB: 5,
    allowedFileTypes: ['jpg', 'png', 'pdf'],
    labelBrowseFiles: 'Browse files',
    labelDragAndDrop: 'Drag & Drop or browse files to upload',
    labelFileTooLarge: 'Upload failed. Max file size: {{size}}MB.',
    labelUnsupportedFileType: 'Unsupported file type.',
    labelUploaded: 'Successfully uploaded',
    labelSupportedFormatsTemplate: 'Supported file formats: {{types}}. Max file size: {{size}}MB.'
  },
  render: renderFileUpload
};

export const UploadStatesDemo: Story = {
  name: 'Upload States Demo',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      description: {
        story: 'Visual preview of all file states (success, upload in progress, rejected).'
      }
    },
    previewTabs: {
      'canvas': { hidden: false },
      'storybook/docs/panel': { hidden: false },
      'storybook/actions/panel': { hidden: true },
      'storybook/interactions/panel': { hidden: true }
    }
  },
  render: () => {
    const el = document.createElement('ifx-file-upload');
    setTimeout(() => {
      (el as any).injectDemoState?.();
    }, 0);
    return el;
  }
};
