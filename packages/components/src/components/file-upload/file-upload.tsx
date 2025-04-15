import { Component, h, State, Event, EventEmitter, Prop, Method, Element } from '@stencil/core';

interface UploadTask {
  file: File;
  progress: number;
  intervalId: number | null;
  completed: boolean;
}

@Component({
  tag: 'ifx-file-upload',
  styleUrl: 'file-upload.scss',
  shadow: true
})
export class IfxFileUpload {
  @Element() hostElement: HTMLElement;

  @Prop() dragAndDrop: boolean = false;
  @Prop() maxFileSizeMB: number = 7;
  @Prop() allowedFileTypes: string | string[] = ['jpg', 'jpeg', 'png', 'pdf', 'mov', 'mp3', 'mp4'];
  @Prop() uploadHandler?: (file: File) => Promise<void>;


  // Einzelne Label Props
  @Prop() labelBrowseFiles: string = 'Browse files';
  @Prop() labelDragAndDrop: string = 'Drag & Drop or browse files to upload';
  @Prop() labelFileTooLarge: string = 'Upload failed. Max file size: {{size}}MB.';
  @Prop() labelUnsupportedFileType: string = 'Unsupported file typ.';
  @Prop() labelUploaded: string = 'Successfully uploaded';
  @Prop() labelSupportedFormatsTemplate: string = 'Supported file formats: {{types}}. Max file size: {{size}}MB.';

  private showDemoStates?: boolean;

  @State() isDragOver: boolean = false;
  @State() files: File[] = [];
  @State() uploadTasks: UploadTask[] = [];
  @State() rejectedSizeFiles: string[] = [];
  @State() rejectedTypeFiles: string[] = [];

  @Event() ifxFileUploadAdd: EventEmitter<{ addedFiles: File[]; files: File[] }>;
  @Event() ifxFileUploadRemove: EventEmitter<{ removedFile: File; files: File[] }>;
  @Event() ifxFileUploadChange: EventEmitter<{ files: File[] }>;
  @Event() ifxFileUploadError: EventEmitter<{ errorType: string; file: File; message: string }>;
  @Event() ifxFileUploadInvalid: EventEmitter<{ file: File; reason: string }>;
  @Event() ifxFileUploadStart: EventEmitter<{ file: File }>;
  @Event() ifxFileUploadComplete: EventEmitter<{ file: File }>;
  @Event() ifxFileUploadAbort: EventEmitter<{ file: File }>;
  @Event() ifxFileUploadDrop: EventEmitter<{ droppedFiles: File[]; acceptedFiles: File[]; rejectedFiles: File[] }>;
  @Event() ifxFileUploadClick: EventEmitter<void>;

  private fileInputEl: HTMLInputElement | null = null;

  private extensionToMimeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    pdf: 'application/pdf',
    mov: 'video/quicktime',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4'
  };

  private getNormalizedFileTypes(): string[] {
    if (Array.isArray(this.allowedFileTypes)) {
      return this.allowedFileTypes;
    }
    try {
      return JSON.parse(this.allowedFileTypes);
    } catch {
      return this.allowedFileTypes.split(',').map(t => t.trim());
    }
  }

  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.processFiles(input.files);
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    if (event.dataTransfer?.files) {
      const droppedFiles = Array.from(event.dataTransfer.files);
      const allowedMimes = this.getNormalizedFileTypes()
        .map(ext => this.extensionToMimeMap[ext.toLowerCase()])
        .filter(Boolean);

      const acceptedFiles: File[] = [];
      const rejectedFiles: File[] = [];

      droppedFiles.forEach(file => {
        const isValidType = allowedMimes.includes(file.type);
        const isValidSize = file.size <= this.maxFileSizeMB * 1024 * 1024;
        if (isValidType && isValidSize) acceptedFiles.push(file);
        else rejectedFiles.push(file);
      });

      this.ifxFileUploadDrop.emit({
        droppedFiles,
        acceptedFiles,
        rejectedFiles
      });

      this.processFiles(event.dataTransfer.files);
    }
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  processFiles(fileList: FileList) {
    const selectedFiles = Array.from(fileList);
    const allowedMimes = this.getNormalizedFileTypes()
      .map(ext => this.extensionToMimeMap[ext.toLowerCase()])
      .filter(Boolean);

    const validFiles: File[] = [];
    const rejectedSize: string[] = [];
    const rejectedType: string[] = [];

    selectedFiles.forEach(file => {
      const isValidType = allowedMimes.includes(file.type);
      const isValidSize = file.size <= this.maxFileSizeMB * 1024 * 1024;

      if (isValidType && isValidSize) {
        validFiles.push(file);
      } else {
        if (!isValidType) {
          rejectedType.push(file.name);
          this.ifxFileUploadInvalid.emit({ file, reason: 'invalid-type' });
        }
        if (!isValidSize) {
          rejectedSize.push(file.name);
          this.ifxFileUploadInvalid.emit({ file, reason: 'invalid-size' });
        }
        this.ifxFileUploadError.emit({ file, errorType: !isValidType ? 'invalid-type' : 'file-too-large', message: 'Invalid file rejected' });
      }
    });

    this.rejectedSizeFiles = [...this.rejectedSizeFiles, ...rejectedSize];
    this.rejectedTypeFiles = [...this.rejectedTypeFiles, ...rejectedType];

    validFiles.forEach(file => this.startUpload(file));
    this.files = [...this.files, ...validFiles];

    if (validFiles.length > 0) {
      this.ifxFileUploadAdd.emit({ addedFiles: validFiles, files: this.files });
      this.ifxFileUploadChange.emit({ files: this.files });
    }
  }

  startUpload(file: File) {
    this.ifxFileUploadStart.emit({ file });

    const task: UploadTask = {
      file,
      progress: 0,
      intervalId: null,
      completed: false
    };

    if (this.uploadHandler) {
      // Real Upload

      // <ifx-file-upload
      //   uploadHandler={(file) => {
      //     const formData = new FormData();
      //     formData.append('file', file);
      //     return fetch('/api/upload', {
      //       method: 'POST',
      //       body: formData
      //     }).then(res => {
      //       if (!res.ok) throw new Error('Upload failed');
      //     });
      //   }}
      // ></ifx-file-upload>

      this.uploadHandler(file).then(() => {
        task.progress = 100;
        task.completed = true;
        this.uploadTasks = [...this.uploadTasks];
        this.ifxFileUploadComplete.emit({ file });
        this.ifxFileUploadChange.emit({ files: this.files });
      }).catch(() => {
        console.error('Upload failed');
        this.ifxFileUploadError.emit({ file, errorType: 'upload-failed', message: 'Upload handler rejected file' });
      });
    } else {
      const totalSize = file.size;
      const fakeUploadSpeed = 500000;
      let uploaded = 0;

      task.intervalId = window.setInterval(() => {
        uploaded += fakeUploadSpeed / 5;
        const progress = Math.min(100, Math.round((uploaded / totalSize) * 100));
        task.progress = progress;
        this.uploadTasks = [...this.uploadTasks];

        if (progress >= 100) {
          clearInterval(task.intervalId!);
          task.completed = true;
          task.intervalId = null;
          this.uploadTasks = [...this.uploadTasks];
          this.ifxFileUploadComplete.emit({ file });
          this.ifxFileUploadChange.emit({ files: this.files });
        }
      }, 200);
    }

    this.uploadTasks = [...this.uploadTasks, task];
  }

  cancelUpload(file: File) {
    const taskIndex = this.uploadTasks.findIndex(t => t.file.name === file.name);
    if (taskIndex !== -1) {
      const task = this.uploadTasks[taskIndex];
      if (task?.intervalId !== null) {
        clearInterval(task.intervalId);
      }
      this.uploadTasks = this.uploadTasks.filter((_, i) => i !== taskIndex);
    }
    this.files = this.files.filter(f => f.name !== file.name);
    this.ifxFileUploadAbort.emit({ file });
    this.ifxFileUploadChange.emit({ files: this.files });
    if (this.fileInputEl) {
      this.fileInputEl.value = '';
    }
  }

  removeFile(file: File) {
    this.uploadTasks = this.uploadTasks.filter(task => task.file.name !== file.name);
    this.files = this.files.filter(f => f.name !== file.name);
    this.ifxFileUploadRemove.emit({ removedFile: file, files: this.files });
    this.ifxFileUploadChange.emit({ files: this.files });
    if (this.fileInputEl) {
      this.fileInputEl.value = '';
    }
  }

  clearRejectedFile(fileName: string, type: 'size' | 'type') {
    if (type === 'size') {
      this.rejectedSizeFiles = this.rejectedSizeFiles.filter(f => f !== fileName);
    } else {
      this.rejectedTypeFiles = this.rejectedTypeFiles.filter(f => f !== fileName);
    }

    if (this.fileInputEl) {
      this.fileInputEl.value = '';
    }
  }

  splitFileNameParts(file: File): { base: string; ext: string } {
    const name = file.name;
    const dotIndex = name.lastIndexOf('.');
    if (dotIndex === -1) return { base: name, ext: '' };
    return {
      base: name.substring(0, dotIndex),
      ext: name.substring(dotIndex)
    };
  }

  getFileIcon(file: File): string {
    const extension = file.name.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return 'file-pdf-16';
      case 'jpg':
      case 'jpeg': return 'file-jpg-16';
      case 'png': return 'file-png-16';
      case 'mov': return 'file-mov-16';
      case 'mp3': return 'file-mp3-16';
      case 'mp4': return 'file-mp4-16';
      default: return 'file';
    }
  }

  getFormattedSize(file: File): string {
    const sizeInKB = file.size / 1024;
    return sizeInKB > 1024
      ? `${(sizeInKB / 1024).toFixed(1)} MB`
      : `${sizeInKB.toFixed(0)} KB`;
  }

  getEstimatedTime(progress: number): string {
    const remaining = 100 - progress;
    const time = (remaining / 10) * 0.2;
    return time > 60
      ? `${Math.ceil(time / 60)} min`
      : `${Math.ceil(time)} seconds`;
  }

  getAcceptAttribute(): string {
    return this.getNormalizedFileTypes().map(ext => '.' + ext.toLowerCase()).join(',');
  }

  private getSupportedFileText(): string {
    return this.labelSupportedFormatsTemplate
      .replace('{{types}}', this.getNormalizedFileTypes().map(ext => ext.toUpperCase()).join(', '))
      .replace('{{size}}', this.maxFileSizeMB.toString());
  }

  private getFormattedFileTooLargeText(): string {
    return this.labelFileTooLarge.replace('{{size}}', this.maxFileSizeMB.toString());
  }

  componentDidLoad() {
    if (this.hostElement.hasAttribute('show-demo-states')) {
      this.showDemoStates = true;
    }

    if (this.showDemoStates) {
      this.injectDemoState();
    }
  }

  @Method()
  async injectDemoState() {
    const uploading = new File(['demo'], 'Image.jpg', { type: 'image/jpeg' });
    const uploaded = new File(['demo'], 'File.pdf', { type: 'application/pdf' });
    const tooLarge = new File(['demo'], 'Video.mp4', { type: 'video/mp4' });
    const unsupported = new File(['demo'], 'Script.exe', { type: 'application/x-msdownload' });

    this.files = [uploaded, uploading];
    this.uploadTasks = [
      { file: uploaded, progress: 100, intervalId: null, completed: true },
      { file: uploading, progress: 35, intervalId: null, completed: false }
    ];
    this.rejectedSizeFiles = [tooLarge.name];
    this.rejectedTypeFiles = [unsupported.name];
  }

  render() {
    return (
      <div class="file-upload-wrapper">
        {this.dragAndDrop ? this.renderDragAndDropArea() : this.renderUploadArea()}

        <ul class="file-list">
          {this.rejectedSizeFiles.map(fileName => (
            <li class="file-item upload-failed">
              <div class="file-icon">
                <ifx-icon icon="file-16"></ifx-icon>
              </div>
              <div class="file-info">
                <div class="file-top-row">
                  <span class="file-name-wrapper">
                    <span class="file-name-base">{this.splitFileNameParts({ name: fileName } as File).base}</span>
                    <span class="file-name-ext">{this.splitFileNameParts({ name: fileName } as File).ext}</span>
                  </span>
                  <div class="file-actions">
                    <ifx-icon-button
                      shape="square"
                      variant="tertiary"
                      icon="delete-forever-16"
                      size="s"
                      aria-label="Remove file"
                      onClick={() => this.clearRejectedFile(fileName, 'size')}>
                    </ifx-icon-button>
                  </div>
                </div>
                <div class="file-middle-row">
                  <span class="file-status">
                    {this.getFormattedFileTooLargeText()}
                  </span>
                </div>
              </div>
            </li>
          ))}

          {this.rejectedTypeFiles.map(fileName => (
            <li class="file-item upload-failed">
              <div class="file-icon">
                <ifx-icon icon="file-16"></ifx-icon>
              </div>
              <div class="file-info">
                <div class="file-top-row">
                  <span class="file-name-wrapper">
                    <span class="file-name-base">{this.splitFileNameParts({ name: fileName } as File).base}</span>
                    <span class="file-name-ext">{this.splitFileNameParts({ name: fileName } as File).ext}</span>
                  </span>
                  <div class="file-actions">
                    <ifx-icon-button
                      shape="square"
                      variant="tertiary"
                      icon="delete-forever-16"
                      size="s"
                      aria-label="Remove file"
                      onClick={() => this.clearRejectedFile(fileName, 'type')}>
                    </ifx-icon-button>
                  </div>
                </div>
                <div class="file-middle-row">
                  <span class="file-status">
                    {this.labelUnsupportedFileType}
                  </span>
                </div>
              </div>
            </li>
          ))}

          {this.files.map((file) => {
            const task = this.uploadTasks.find(t => t.file.name === file.name);
            const progress = task?.progress ?? 100;
            const isUploading = task && !task.completed;
            const itemClass = isUploading ? 'file-item uploading' : 'file-item upload-success';

            const { base, ext } = this.splitFileNameParts(file);

            return (
              <li class={itemClass}>
                <div class="file-icon">
                  <ifx-icon icon={this.getFileIcon(file)}></ifx-icon>
                </div>
                <div class="file-info">
                  <div class="file-top-row">
                    <span class="file-name-wrapper">
                      <span class="file-name-base">{base}</span>
                      <span class="file-name-ext">{ext}</span>
                    </span>
                    <div class="file-actions">
                      <ifx-icon-button
                        shape="square"
                        variant="tertiary"
                        icon="cross-16"
                        size="s"
                        aria-label="Cancel upload"
                        onClick={() => this.cancelUpload(file)}
                        style={{ display: isUploading ? 'inline-flex' : 'none' }}>
                      </ifx-icon-button>
                      <ifx-icon-button
                        shape="square"
                        variant="tertiary"
                        icon="delete-forever-16"
                        size="s"
                        aria-label="Remove file"
                        onClick={() => this.removeFile(file)}
                        style={{ display: !isUploading ? 'inline-flex' : 'none' }}>
                      </ifx-icon-button>
                    </div>
                  </div>

                  <div class="file-middle-row">
                    <span class="file-size">{this.getFormattedSize(file)}</span>
                    {isUploading && (
                      <span class="file-time">&nbsp;–&nbsp;{this.getEstimatedTime(progress)}</span>
                    )}
                    <span class="file-status">
                      {!isUploading && (
                        <span>
                          <ifx-icon icon="check-12"></ifx-icon>&nbsp;
                          {this.labelUploaded}
                        </span>
                      )}
                    </span>
                  </div>

                  {isUploading && (
                    <div class="file-progress-row">
                      <ifx-progress-bar size="s" value={progress} show-label="true"></ifx-progress-bar>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  renderUploadArea() {
    const handleInputRef = (el: HTMLInputElement | null) => {
      this.fileInputEl = el;
    };

    return (
      <div class={{ 'upload-button': true }}>
        <label>
          <ifx-button variant="secondary">
            <ifx-icon icon="upload-16"></ifx-icon>
            {this.labelBrowseFiles}
          </ifx-button>
          <input
            ref={handleInputRef}
            type="file"
            accept={this.getAcceptAttribute()}
            multiple
            onChange={(e) => this.handleFileChange(e)}
            style={{ display: 'none' }}
          />
        </label>
        <p class="file-upload-info">
          {this.getSupportedFileText()}
        </p>
      </div>
    );
  }

  renderDragAndDropArea() {
    const handleInputRef = (el: HTMLInputElement | null) => {
      this.fileInputEl = el;
    };

    const triggerInputClick = () => {
      if (this.fileInputEl) {
        this.fileInputEl.click();
      }
    };

    return (
      <div
        class={{ 'upload-dropzone': true, 'drag-over': this.isDragOver }}
        onClick={triggerInputClick}
        onDragOver={(e) => this.handleDragOver(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDrop={(e) => this.handleDrop(e)}
      >
        <ifx-icon icon="upload-24" class="custom-icon"></ifx-icon>
        <p>{this.labelDragAndDrop}</p>
        <p class="file-upload-info">
          {this.getSupportedFileText()}
        </p>
        <div style={{ height: '0px', overflow: 'hidden' }}>
          <input
            ref={handleInputRef}
            type="file"
            accept={this.getAcceptAttribute()}
            multiple
            onChange={(e) => this.handleFileChange(e)}
          />
        </div>
      </div>
    );
  }
}
