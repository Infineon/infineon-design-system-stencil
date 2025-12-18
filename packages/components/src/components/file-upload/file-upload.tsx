import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Method,
	Prop,
	State,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

interface UploadTask {
	file: File;
	progress: number;
	intervalId: number | null;
	completed: boolean;
	error?: boolean;
}

export type FileUploadErrorReason =
	| "network-error"
	| "timeout"
	| "file-too-large"
	| "unsupported-type"
	| "invalid-type"
	| "custom"
	| (string & {});

@Component({
	tag: "ifx-file-upload",
	styleUrl: "file-upload.scss",
	shadow: true,
})
export class FileUpload {
	@Element() hostElement: HTMLElement;

	@Prop() dragAndDrop: boolean = false;
	@Prop() required: boolean = false;
	@Prop() disabled: boolean = false;
	@Prop() maxFileSizeMB: number = 7;
	/** Default set of allowed file extensions (used internally). Can be extended using `additionalAllowedFileTypes`. */
	@Prop() allowedFileTypes?: string | string[] = undefined;
	@Prop() additionalAllowedFileTypes?: string | string[] = [];
	/** When set to true, allows any file type to be uploaded (no file type restrictions). */
	@Prop() allowAnyFileType: boolean = false;
	/** Custom file extensions to allow (e.g., 'xml', 'asc', 'cfg'). Recommended format: without dots. Also accepts format with dots like '.xml'. Do not use wildcards like '*.xml'. */
	@Prop() allowedFileExtensions?: string | string[] = [];
	@Prop() uploadHandler?: (
		file: File,
		onProgress?: (progress: number) => void,
	) => Promise<void>;

	private _maxFiles?: number;
	@Prop()
	get maxFiles(): number | undefined {
		return this._maxFiles;
	}
	set maxFiles(value: number | undefined) {
		if (typeof value === "number" && value < 1) {
			console.warn("Invalid `maxFiles` value. Must be >= 1. Value ignored.");
			this._maxFiles = undefined;
		} else {
			this._maxFiles = value;
		}
	}

	@Prop() label: string = "Label";
	@Prop() labelRequiredError: string = "At least one file must be uploaded";
	@Prop() labelBrowseFiles: string = "Browse files";
	@Prop() labelDragAndDrop: string = "Drag & Drop or browse files to upload";
	@Prop() labelUploadedFilesHeading: string = "Uploaded files";
	@Prop() labelFileTooLarge: string =
		"Upload failed. Max file size: {{size}}MB.";
	@Prop() labelUnsupportedFileType: string = "Unsupported file type.";
	@Prop() labelUploaded: string = "Successfully uploaded";
	@Prop() labelUploadFailed: string = "Upload failed. Please try again.";
	@Prop() labelSupportedFormatsTemplate: string =
		"Supported file formats: {{types}}. Max file size: {{size}}MB.";
	@Prop() labelFileSingular: string = "file";
	@Prop() labelFilePlural: string = "files";
	@Prop() labelMaxFilesInfo?: string = "Up to {{count}} {{files}}.";
	@Prop() labelMaxFilesExceeded: string =
		"Upload limit exceeded. Only {{count}} {{files}} allowed.";

	@Prop() ariaLabelBrowseFiles: string = "Browse files";
	@Prop() ariaLabelDropzone: string =
		"Upload area. Click to browse or drag and drop files.";
	@Prop() ariaLabelFileInput: string = "Upload file";
	@Prop() ariaLabelRemoveFile: string = "Remove file";
	@Prop() ariaLabelCancelUpload: string = "Cancel upload";
	@Prop() ariaLabelRetryUpload: string = "Retry upload";
	@Prop() ariaLabelUploadingStatus: string = "Upload in progress";
	@Prop() ariaLabelUploadedStatus: string = "Upload completed";
	@Prop() ariaLabelUploadFailedStatus: string = "Upload failed";

	private showDemoStates?: boolean;
	private internalId =
		`ifx-file-upload-${Math.random().toString(36).substr(2, 9)}`;

	@State() isDragOver: boolean = false;
	@State() files: File[] = [];
	@State() uploadTasks: UploadTask[] = [];
	@State() rejectedSizeFiles: string[] = [];
	@State() rejectedTypeFiles: string[] = [];
	@State() requiredError: boolean = false;
	@State() statusMessage: {
		type: "error" | "info" | "success";
		text: string;
	} | null = null;

	@Event() ifxFileUploadAdd: EventEmitter<{
		addedFiles: File[];
		files: File[];
	}>;
	@Event() ifxFileUploadRemove: EventEmitter<{
		removedFile: File;
		files: File[];
	}>;
	@Event() ifxFileUploadChange: EventEmitter<{ files: File[] }>;
	@Event() ifxFileUploadError: EventEmitter<{
		errorType: string;
		file: File;
		message: string;
		reason?: string;
	}>;
	@Event() ifxFileUploadInvalid: EventEmitter<{ file: File; reason: string }>;
	@Event() ifxFileUploadStart: EventEmitter<{ file: File }>;
	@Event() ifxFileUploadComplete: EventEmitter<{ file: File }>;
	@Event() ifxFileUploadAllComplete: EventEmitter<{ files: File[] }>;
	@Event() ifxFileUploadAbort: EventEmitter<{ file: File }>;
	@Event() ifxFileUploadDrop: EventEmitter<{
		droppedFiles: File[];
		acceptedFiles: File[];
		rejectedFiles: File[];
	}>;
	@Event() ifxFileUploadClick: EventEmitter<void>;
	@Event() ifxFileUploadMaxFilesExceeded: EventEmitter<{
		maxFiles: number;
		attempted: number;
	}>;
	@Event() ifxFileUploadValidation: EventEmitter<{ valid: boolean }>;
	@Event() ifxFileUploadRetry: EventEmitter<{ file: File }>;

	private fileInputEl: HTMLInputElement | null = null;

	private extensionToMimeMap: Record<string, string> = {
		/**
		 * Maps file extensions to MIME types.
		 * This is only used for translating `allowedFileTypes` (extensions) into MIME types,
		 * and for labeling in the UI. It does NOT define which files are globally allowed.
		 */

		// Images
		jpg: "image/jpeg",
		jpeg: "image/jpeg",
		png: "image/png",
		gif: "image/gif",
		svg: "image/svg+xml",
		webp: "image/webp",

		// Documents
		pdf: "application/pdf",
		doc: "application/msword",
		docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		xls: "application/vnd.ms-excel",
		xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		ppt: "application/vnd.ms-powerpoint",
		pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		txt: "text/plain",
		csv: "text/csv",
		json: "application/json",

		// Audio/Video
		mp3: "audio/mpeg",
		wav: "audio/wav",
		mp4: "video/mp4",
		mov: "video/quicktime",
		webm: "video/webm",

		// Archive / Code
		zip: "application/zip",
		rar: "application/vnd.rar",
		tar: "application/x-tar",
		gz: "application/gzip",

		// Sonstiges
		xml: "application/xml",
		html: "text/html",
		css: "text/css",
		js: "application/javascript",
	};

	private validateRequired(): void {
		if (this.required && this.files.length === 0) {
			this.requiredError = true;

			if (this.statusMessage?.text !== this.labelRequiredError) {
				this.statusMessage = {
					type: "error",
					text: this.labelRequiredError,
				};
			}

			this.ifxFileUploadValidation.emit({ valid: false });
		} else {
			this.requiredError = false;

			if (this.statusMessage?.text === this.labelRequiredError) {
				this.statusMessage = null;
			}

			this.ifxFileUploadValidation.emit({ valid: true });
		}
	}

	private pluralize(count: number): string {
		// If allowAnyFileType is true, use generic terms
		if (this.allowAnyFileType) {
			return count === 1 ? "file" : "files";
		}
		return count === 1 ? this.labelFileSingular : this.labelFilePlural;
	}

	private getNormalizedFileTypes(): string[] {
		// If allowedFileTypes is not set and allowedFileExtensions is set, return empty array
		if (
			!this.allowedFileTypes &&
			this.allowedFileExtensions &&
			this.getNormalizedFileExtensions().length > 0
		) {
			return [];
		}

		// If allowedFileTypes is not set and no allowedFileExtensions, use defaults
		if (!this.allowedFileTypes) {
			return ["jpg", "jpeg", "png", "pdf", "mov", "mp3", "mp4"];
		}

		if (Array.isArray(this.allowedFileTypes)) {
			return this.allowedFileTypes;
		}
		try {
			return JSON.parse(this.allowedFileTypes);
		} catch {
			return this.allowedFileTypes.split(",").map((t) => t.trim());
		}
	}

	private getNormalizedFileExtensions(): string[] {
		if (!this.allowedFileExtensions) return [];
		if (Array.isArray(this.allowedFileExtensions)) {
			return this.allowedFileExtensions;
		}
		try {
			return JSON.parse(this.allowedFileExtensions);
		} catch {
			return this.allowedFileExtensions.split(",").map((t) => t.trim());
		}
	}

	/**
	 * Enhanced file type validation that supports:
	 * - allowAnyFileType flag for unrestricted uploads (overrides all restrictions)
	 * - allowedFileTypes (predefined extensions mapped to MIME types) - if not set and allowedFileExtensions is set, ignored
	 * - additionalAllowedFileTypes (MIME types)
	 * - allowedFileExtensions (custom extensions) - if only this is set, only these extensions are allowed
	 */
	private isFileTypeAllowed(file: File): boolean {
		// If allowAnyFileType is true, accept all files (overrides all restrictions)
		if (this.allowAnyFileType) {
			return true;
		}

		const fileExtension = this.getFileExtension(file.name);

		// Check against allowedFileTypes (predefined extensions)
		const normalizedTypes = this.getNormalizedFileTypes();
		const allowedMimes = normalizedTypes
			.map((ext) => this.extensionToMimeMap[ext.toLowerCase()])
			.filter(Boolean);

		if (allowedMimes.includes(file.type)) {
			return true;
		}

		// Check against additionalAllowedFileTypes (MIME types)
		const additionalMimeTypes = this.getAdditionalMimeTypes();
		if (additionalMimeTypes.includes(file.type)) {
			return true;
		}

		// Check against allowedFileExtensions (custom extensions)
		const customExtensions = this.getNormalizedFileExtensions();
		if (customExtensions.length > 0 && fileExtension) {
			for (const ext of customExtensions) {
				const normalizedExt = ext.startsWith(".")
					? ext.substring(1).toLowerCase()
					: ext.toLowerCase();
				if (fileExtension === normalizedExt) {
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * Extracts file extension from filename (without dot)
	 */
	private getFileExtension(filename: string): string | null {
		const lastDotIndex = filename.lastIndexOf(".");
		if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) {
			return null;
		}
		return filename.substring(lastDotIndex + 1).toLowerCase();
	}

	private getLabelFromMimeType(mime: string): string {
		for (const [ext, knownMime] of Object.entries(this.extensionToMimeMap)) {
			if (knownMime === mime) {
				return ext.toUpperCase();
			}
		}
		return mime; // fallback: show raw MIME
	}

	handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input.files) return;
		this.processFiles(input.files);
	}

	handleDrop(event: DragEvent) {
		if (this.disabled) return;
		event.preventDefault();
		event.stopPropagation();
		this.isDragOver = false;
		if (event.dataTransfer?.files) {
			const droppedFiles = Array.from(event.dataTransfer.files);

			const acceptedFiles: File[] = [];
			const rejectedFiles: File[] = [];

			droppedFiles.forEach((file) => {
				const isValidType = this.isFileTypeAllowed(file);
				const isValidSize = file.size <= this.maxFileSizeMB * 1024 * 1024;
				if (isValidType && isValidSize) acceptedFiles.push(file);
				else rejectedFiles.push(file);
			});

			this.ifxFileUploadDrop.emit({
				droppedFiles,
				acceptedFiles,
				rejectedFiles,
			});

			this.processFiles(event.dataTransfer.files);
		}
	}

	handleDragOver(event: DragEvent) {
		if (this.disabled) return;
		event.preventDefault();
		this.isDragOver = true;
	}

	handleDragLeave(event: DragEvent) {
		if (this.disabled) return;
		event.preventDefault();
		this.isDragOver = false;
	}

	processFiles(fileList: FileList) {
		const selectedFiles = Array.from(fileList);

		const validFiles: File[] = [];
		const rejectedSize: string[] = [];
		const rejectedType: string[] = [];

		selectedFiles.forEach((file) => {
			const isValidType = this.isFileTypeAllowed(file);
			const isValidSize = file.size <= this.maxFileSizeMB * 1024 * 1024;
			const isDuplicate = this.files.some(
				(existing) =>
					existing.name === file.name && existing.size === file.size,
			);

			if (isDuplicate) {
				this.ifxFileUploadInvalid.emit({ file, reason: "duplicate" });
				this.ifxFileUploadError.emit({
					file,
					errorType: "duplicate",
					message: `File "${file.name}" is already added`,
					reason: "duplicate",
				});
				return;
			}

			if (isValidType && isValidSize) {
				validFiles.push(file);
			} else {
				if (!isValidType) {
					rejectedType.push(file.name);
					this.ifxFileUploadInvalid.emit({ file, reason: "invalid-type" });
				}
				if (!isValidSize) {
					rejectedSize.push(file.name);
					this.ifxFileUploadInvalid.emit({ file, reason: "invalid-size" });
				}
				this.ifxFileUploadError.emit({
					file,
					errorType: !isValidType ? "invalid-type" : "file-too-large",
					message: "Invalid file rejected",
					reason: !isValidType ? "unsupported-type" : "file-too-large",
				});
			}
		});

		this.rejectedSizeFiles = [...this.rejectedSizeFiles, ...rejectedSize];
		this.rejectedTypeFiles = [...this.rejectedTypeFiles, ...rejectedType];

		if (
			this.maxFiles &&
			this.files.length + validFiles.length > this.maxFiles
		) {
			const availableSlots = this.maxFiles - this.files.length;
			const limitedFiles = validFiles.slice(0, Math.max(availableSlots, 0));
			const overflowFiles = validFiles.slice(availableSlots);

			this.files = [...this.files, ...limitedFiles];

			limitedFiles.forEach((file) => this.startUpload(file));

			if (limitedFiles.length > 0) {
				this.ifxFileUploadAdd.emit({
					addedFiles: limitedFiles,
					files: this.files,
				});
				this.ifxFileUploadChange.emit({ files: this.files });
			}

			overflowFiles.forEach((file) => {
				this.ifxFileUploadInvalid.emit({ file, reason: "too-many-files" });
				this.ifxFileUploadError.emit({
					file,
					errorType: "too-many-files",
					message: `Upload limit exceeded. Max ${this.maxFiles} files allowed.`,
					reason: "too-many-files",
				});
			});

			if (overflowFiles.length > 0) {
				this.statusMessage = {
					type: "error",
					text: this.labelMaxFilesExceeded
						.replace("{{count}}", this.maxFiles.toString())
						.replace("{{files}}", this.pluralize(this.maxFiles)),
				};
				this.ifxFileUploadMaxFilesExceeded.emit({
					maxFiles: this.maxFiles,
					attempted: this.files.length + validFiles.length,
				});
			}

			return;
		}

		validFiles.forEach((file) => this.startUpload(file));
		this.files = [...this.files, ...validFiles];

		if (validFiles.length > 0) {
			this.ifxFileUploadAdd.emit({ addedFiles: validFiles, files: this.files });
			this.ifxFileUploadChange.emit({ files: this.files });
		}

		this.validateRequired();
	}

	retryUpload(file: File) {
		const taskIndex = this.uploadTasks.findIndex(
			(t) => t.file.name === file.name,
		);
		if (taskIndex !== -1) {
			this.uploadTasks.splice(taskIndex, 1);
			this.uploadTasks = [...this.uploadTasks];
		}
		this.ifxFileUploadRetry.emit({ file });
		this.startUpload(file);
	}

	private checkAndEmitAllComplete(): void {
		if (this.uploadTasks.every((t) => t.completed || t.error)) {
			const hasSuccessfulUploads = this.uploadTasks.some(
				(t) => t.completed && !t.error,
			);
			if (hasSuccessfulUploads) {
				const successfulFiles = this.uploadTasks
					.filter((t) => t.completed && !t.error)
					.map((t) => t.file);
				this.ifxFileUploadAllComplete.emit({ files: successfulFiles });
			}
		}
	}

	private resetFileInput(): void {
		if (this.fileInputEl) {
			this.fileInputEl.value = "";
		}
	}

	private updateTaskProgress(file: File, progress: number): void {
		const task = this.uploadTasks.find((t) => t.file === file);
		if (task) {
			const newProgress = Math.max(task.progress, Math.min(100, progress));
			if (newProgress !== task.progress) {
				task.progress = newProgress;
				this.uploadTasks = [...this.uploadTasks];
			}
		}
	}

	startUpload(file: File) {
		this.ifxFileUploadStart.emit({ file });
		const task: UploadTask = {
			file,
			progress: 3, // Start with initial progress for better UX
			intervalId: null,
			completed: false,
		};
		this.uploadTasks = [...this.uploadTasks, task];

		if (this.uploadHandler) {
			this.uploadHandler(file, (percent: number) => {
				this.updateTaskProgress(file, percent);
			})
				.then(() => {
					task.progress = 100;
					task.completed = true;
					this.uploadTasks = [...this.uploadTasks];
					this.ifxFileUploadComplete.emit({ file });
					this.ifxFileUploadChange.emit({ files: this.files });
					this.checkAndEmitAllComplete();
				})
				.catch(() => {
					task.error = true;
					this.uploadTasks = [...this.uploadTasks];
					this.ifxFileUploadError.emit({
						file,
						errorType: "upload-failed",
						message: "Upload handler rejected file",
						reason: "custom",
					});
					this.checkAndEmitAllComplete();
				});
		} else {
			const totalSize = file.size;
			const fakeUploadSpeed = 100000;
			let uploaded = 0;
			task.intervalId = window.setInterval(() => {
				uploaded += fakeUploadSpeed / 5;
				const progress = Math.min(
					100,
					Math.round((uploaded / totalSize) * 100),
				);
				this.updateTaskProgress(file, progress);

				if (progress >= 100) {
					clearInterval(task.intervalId!);
					task.completed = true;
					task.intervalId = null;
					this.uploadTasks = [...this.uploadTasks];
					this.ifxFileUploadComplete.emit({ file });
					this.ifxFileUploadChange.emit({ files: this.files });
					this.checkAndEmitAllComplete();
				}
			}, 200);
		}
	}

	cancelUpload(file: File) {
		const taskIndex = this.uploadTasks.findIndex(
			(t) => t.file.name === file.name,
		);
		if (taskIndex !== -1) {
			const task = this.uploadTasks[taskIndex];
			if (task?.intervalId !== null) {
				clearInterval(task.intervalId);
			}
			this.uploadTasks = this.uploadTasks.filter((_, i) => i !== taskIndex);
		}
		this.files = this.files.filter((f) => f.name !== file.name);
		this.ifxFileUploadAbort.emit({ file });
		this.ifxFileUploadChange.emit({ files: this.files });
		this.resetFileInput();
		this.validateRequired();
	}

	removeFile(file: File) {
		this.uploadTasks = this.uploadTasks.filter(
			(task) => task.file.name !== file.name,
		);
		this.files = this.files.filter((f) => f.name !== file.name);
		this.ifxFileUploadRemove.emit({ removedFile: file, files: this.files });
		this.ifxFileUploadChange.emit({ files: this.files });
		this.validateRequired();

		this.resetFileInput();

		if (
			this.maxFiles &&
			this.files.length < this.maxFiles &&
			this.statusMessage?.text !== this.labelRequiredError
		) {
			this.statusMessage = null;
		}
	}

	clearRejectedFile(fileName: string, type: "size" | "type") {
		if (type === "size") {
			this.rejectedSizeFiles = this.rejectedSizeFiles.filter(
				(f) => f !== fileName,
			);
		} else {
			this.rejectedTypeFiles = this.rejectedTypeFiles.filter(
				(f) => f !== fileName,
			);
		}

		this.resetFileInput();

		if (this.maxFiles && this.files.length < this.maxFiles) {
			this.statusMessage = null;
		}

		this.validateRequired();
	}

	splitFileNameParts(file: File): { base: string; ext: string } {
		const name = file.name;
		const dotIndex = name.lastIndexOf(".");
		if (dotIndex === -1) return { base: name, ext: "" };
		return {
			base: name.substring(0, dotIndex),
			ext: name.substring(dotIndex),
		};
	}

	getFileIcon(file: File): string {
		const extension = file.name.split(".").pop()?.toLowerCase();
		switch (extension) {
			case "pdf":
				return "file-pdf-16";
			case "jpg":
			case "jpeg":
				return "file-jpg-16";
			case "png":
				return "file-png-16";
			case "mov":
				return "file-mov-16";
			case "mp3":
				return "file-mp3-16";
			case "mp4":
				return "file-mp4-16";
			default:
				return "file-16";
		}
	}

	formatSize(bytes: number): string {
		if (bytes >= 1024 * 1024 * 1024) {
			return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
		} else if (bytes >= 1024 * 1024) {
			return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
		} else if (bytes >= 1024) {
			return `${(bytes / 1024).toFixed(0)} KB`;
		} else {
			return `${bytes} B`;
		}
	}

	getAcceptAttribute(): string {
		// If allowAnyFileType is true, don't restrict the input
		if (this.allowAnyFileType) {
			return "";
		}

		const acceptValues: string[] = [];

		// Add extensions from allowedFileTypes
		const extensionTypes = this.getNormalizedFileTypes().map(
			(ext) => "." + ext.toLowerCase(),
		);
		acceptValues.push(...extensionTypes);

		// Add MIME types from additionalAllowedFileTypes
		const mimeTypes = this.getAdditionalMimeTypes();
		acceptValues.push(...mimeTypes);

		// Add custom file extensions
		const customExtensions = this.getNormalizedFileExtensions();
		customExtensions.forEach((ext) => {
			const normalizedExt = ext.startsWith(".") ? ext : "." + ext;
			acceptValues.push(normalizedExt);
		});

		return acceptValues.join(",");
	}

	private getFormattedProgressText(task: UploadTask): string {
		const uploadedSize = Math.round((task.progress / 100) * task.file.size);
		const uploadedText = this.formatSize(uploadedSize);
		const totalText = this.formatSize(task.file.size);
		return `${uploadedText} / ${totalText} uploaded`;
	}

	private getAdditionalMimeTypes(): string[] {
		if (!this.additionalAllowedFileTypes) return [];
		if (Array.isArray(this.additionalAllowedFileTypes))
			return this.additionalAllowedFileTypes;
		return this.additionalAllowedFileTypes.split(",").map((t) => t.trim());
	}

	private getSupportedFileText(): string {
		if (this.allowAnyFileType) {
			let text = `All file types allowed. Max file size: ${this.maxFileSizeMB}MB.`;
			if (this.labelMaxFilesInfo && this.maxFiles) {
				const fileWord = this.pluralize(this.maxFiles);
				const maxFilesText = this.labelMaxFilesInfo
					.replace("{{count}}", this.maxFiles.toString())
					.replace("{{files}}", fileWord);
				text += ` ${maxFilesText}`;
			}
			return text;
		}

		const allTypes: string[] = [];

		// Add extensions from allowedFileTypes
		const extensions = this.getNormalizedFileTypes().map((ext) =>
			ext.toUpperCase(),
		);
		allTypes.push(...extensions);

		// Add MIME types from additionalAllowedFileTypes
		const mimeTypes = this.getAdditionalMimeTypes().map((mime) =>
			this.getLabelFromMimeType(mime),
		);
		allTypes.push(...mimeTypes);

		// Add custom file extensions
		const customExtensions = this.getNormalizedFileExtensions().map((ext) => {
			const cleanExt = ext.startsWith(".") ? ext.substring(1) : ext;
			return cleanExt.toUpperCase();
		});
		allTypes.push(...customExtensions);

		const typesLabel = allTypes.join(", ");

		let text = this.labelSupportedFormatsTemplate
			.replace("{{types}}", typesLabel)
			.replace("{{size}}", this.maxFileSizeMB.toString());

		if (this.labelMaxFilesInfo && this.maxFiles) {
			const fileWord = this.pluralize(this.maxFiles);
			const maxFilesText = this.labelMaxFilesInfo
				.replace("{{count}}", this.maxFiles.toString())
				.replace("{{files}}", fileWord);
			text += ` ${maxFilesText}`;
		}

		return text;
	}

	private getFormattedFileTooLargeText(): string {
		return this.labelFileTooLarge.replace(
			"{{size}}",
			this.maxFileSizeMB.toString(),
		);
	}

	private renderStatusMessage() {
		if (!this.statusMessage) return null;

		return (
			<div
				class={`file-upload-status file-upload-status__${this.statusMessage.type}`}
			>
				{this.statusMessage.type === "error" && (
					<ifx-icon icon="c-warning-16"></ifx-icon>
				)}
				{this.statusMessage.text}
			</div>
		);
	}

	private isInputDisabled(): boolean {
		return (
			this.disabled ||
			(this.maxFiles !== undefined && this.files.length >= this.maxFiles)
		);
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.hostElement)) {
			const framework = detectFramework();
			trackComponent("ifx-file-upload", await framework);
		}

		if (this.hostElement.hasAttribute("show-demo-states")) {
			this.showDemoStates = true;
		}

		if (this.showDemoStates) {
			this.injectDemoState();
		}
	}

	// Storybook Demo
	@Method()
	async injectDemoState() {
		const dummyContent = new Array(50000).fill("a").join(""); // ~50 KB
		const bigContent = dummyContent + dummyContent; // ~100 KB

		const uploading = new File([dummyContent], "Image.jpg", {
			type: "image/jpeg",
		}); // ~50 KB
		const uploaded = new File([bigContent], "File.pdf", {
			type: "application/pdf",
		}); // ~100 KB
		const failed = new File([dummyContent], "Text.docx", {
			type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		}); // ~50 KB
		const tooLarge = new File(
			[bigContent + bigContent + bigContent],
			"Video.mp4",
			{ type: "video/mp4" },
		); // ~300 KB
		const unsupported = new File(["demo"], "Script.exe", {
			type: "application/x-msdownload",
		}); // very small

		this.files = [uploaded, uploading, failed];
		this.uploadTasks = [
			{ file: uploaded, progress: 100, intervalId: null, completed: true },
			{ file: uploading, progress: 40, intervalId: null, completed: false },
			{
				file: failed,
				progress: 80,
				intervalId: null,
				completed: false,
				error: true,
			},
		];
		this.rejectedSizeFiles = [tooLarge.name];
		this.rejectedTypeFiles = [unsupported.name];
	}

	// Storybook Demo
	@Method()
	async triggerDemoValidation(): Promise<void> {
		this.validateRequired();
	}

	render() {
		return (
			<div
				class={{
					"file-upload-wrapper": true,
					disabled: this.disabled,
				}}
			>
				{this.label && (
					<label class="file-upload-label" htmlFor={this.internalId}>
						{this.label}
						{this.required && (
							<span class={`required ${this.requiredError ? "error" : ""}`}>
								*
							</span>
						)}
					</label>
				)}

				{this.dragAndDrop
					? this.renderDragAndDropArea()
					: this.renderUploadArea()}

				{(this.files.length > 0 ||
					this.rejectedSizeFiles.length > 0 ||
					this.rejectedTypeFiles.length > 0) && (
					<div class="file-list-wrapper">
						<div class="upload-heading">{this.labelUploadedFilesHeading}</div>
						<ul class="file-list">
							{this.rejectedSizeFiles.map((fileName) => (
								<li
									class="file-item upload-failed"
									key={`rejected-size-${fileName}`}
								>
									<div class="file-icon">
										<ifx-icon icon="file-16"></ifx-icon>
									</div>
									<div class="file-info">
										<div class="file-top-row">
											<span class="file-name-wrapper">
												<span class="file-name-base">
													{
														this.splitFileNameParts({ name: fileName } as File)
															.base
													}
												</span>
												<span class="file-name-ext">
													{
														this.splitFileNameParts({ name: fileName } as File)
															.ext
													}
												</span>
											</span>
											<div class="file-actions">
												<ifx-icon-button
													shape="square"
													variant="tertiary"
													icon="delete-forever-16"
													size="s"
													aria-label={this.ariaLabelRemoveFile}
													onClick={() =>
														this.clearRejectedFile(fileName, "size")
													}
												></ifx-icon-button>
											</div>
										</div>
										<div class="file-middle-row">
											<span
												class="file-status"
												aria-label={this.labelFileTooLarge.replace(
													"{{size}}",
													this.maxFileSizeMB.toString(),
												)}
											>
												{this.getFormattedFileTooLargeText()}
											</span>
										</div>
									</div>
								</li>
							))}

							{this.rejectedTypeFiles.map((fileName) => (
								<li
									class="file-item upload-failed"
									key={`rejected-type-${fileName}`}
								>
									<div class="file-icon">
										<ifx-icon icon="file-16"></ifx-icon>
									</div>
									<div class="file-info">
										<div class="file-top-row">
											<span class="file-name-wrapper">
												<span class="file-name-base">
													{
														this.splitFileNameParts({ name: fileName } as File)
															.base
													}
												</span>
												<span class="file-name-ext">
													{
														this.splitFileNameParts({ name: fileName } as File)
															.ext
													}
												</span>
											</span>
											<div class="file-actions">
												<ifx-icon-button
													shape="square"
													variant="tertiary"
													icon="delete-forever-16"
													size="s"
													aria-label={this.ariaLabelRemoveFile}
													onClick={() =>
														this.clearRejectedFile(fileName, "type")
													}
												></ifx-icon-button>
											</div>
										</div>
										<div class="file-middle-row">
											<span
												class="file-status"
												aria-label={this.labelUnsupportedFileType}
											>
												{this.labelUnsupportedFileType}
											</span>
										</div>
									</div>
								</li>
							))}

							{this.files.map((file) => {
								const task = this.uploadTasks.find(
									(t) => t.file.name === file.name,
								);
								const progress = task?.progress ?? 100;
								const isUploading = task && !task.completed;
								const isError = task?.error === true;
								const itemClass = isError
									? "file-item upload-failed"
									: isUploading
										? "file-item uploading"
										: "file-item upload-success";
								const uniqueKey = `${file.name}-${file.size}`;
								const { base, ext } = this.splitFileNameParts(file);

								return (
									<li class={itemClass} key={uniqueKey}>
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
														icon="refresh-16"
														size="s"
														aria-label={this.ariaLabelRetryUpload}
														onClick={() => this.retryUpload(file)}
														style={{
															display: isError ? "inline-flex" : "none",
														}}
													></ifx-icon-button>
													<ifx-icon-button
														shape="square"
														variant="tertiary"
														icon="cross-16"
														size="s"
														aria-label={this.ariaLabelCancelUpload}
														onClick={() => this.cancelUpload(file)}
														style={{
															display: isUploading ? "inline-flex" : "none",
														}}
													></ifx-icon-button>
													<ifx-icon-button
														shape="square"
														variant="tertiary"
														icon="delete-forever-16"
														size="s"
														aria-label={this.ariaLabelRemoveFile}
														onClick={() => this.removeFile(file)}
														style={{
															display: !isUploading ? "inline-flex" : "none",
														}}
													></ifx-icon-button>
												</div>
											</div>

											<div class="file-middle-row">
												{isUploading && task && !task.error && (
													<span
														class="file-uploading"
														aria-label={this.ariaLabelUploadingStatus}
													>
														{this.getFormattedProgressText(task)}
													</span>
												)}
												{!isUploading && !isError && (
													<span>
														<span class="file-size">
															{this.formatSize(file.size)}
														</span>
														<span
															class="file-status"
															aria-label={this.ariaLabelUploadedStatus}
														>
															<ifx-icon icon="check-16"></ifx-icon>
															{this.labelUploaded}
														</span>
													</span>
												)}
												{isError && (
													<span
														class="file-status"
														aria-label={this.ariaLabelUploadFailedStatus}
													>
														{this.labelUploadFailed}
													</span>
												)}
											</div>

											{isUploading && task && !task.error && (
												<div class="file-progress-row">
													<ifx-progress-bar
														size="s"
														value={progress}
														show-label="true"
													></ifx-progress-bar>
												</div>
											)}
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		);
	}

	renderUploadArea() {
		const handleInputRef = (el: HTMLInputElement | null) => {
			this.fileInputEl = el;
		};

		return (
			<div class={{ "upload-button": true }}>
				<ifx-button
					variant="secondary"
					onClick={() => this.fileInputEl?.click()}
					disabled={this.isInputDisabled()}
					aria-label={this.ariaLabelBrowseFiles}
				>
					<ifx-icon icon="upload-16"></ifx-icon>
					{this.labelBrowseFiles}
				</ifx-button>
				<input
					id={this.internalId}
					ref={handleInputRef}
					type="file"
					accept={this.getAcceptAttribute()}
					multiple
					onChange={(e) => this.handleFileChange(e)}
					style={{ display: "none" }}
					disabled={this.isInputDisabled()}
					aria-label={this.ariaLabelFileInput}
				/>
				<p class="file-upload-info">{this.getSupportedFileText()}</p>
				{this.renderStatusMessage()}
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
			<div class={{ disabled: this.isInputDisabled() }}>
				<div
					class={{
						"upload-dropzone": true,
						"drag-over": this.isDragOver,
						error: this.requiredError,
					}}
					onClick={triggerInputClick}
					onDragOver={(e) => this.handleDragOver(e)}
					onDragLeave={(e) => this.handleDragLeave(e)}
					onDrop={(e) => this.handleDrop(e)}
					role="button"
					tabIndex={0}
					aria-label={this.ariaLabelDropzone}
				>
					<ifx-icon icon="upload-16" class="custom-icon"></ifx-icon>
					<p>{this.labelDragAndDrop}</p>
					<p class="file-upload-info">{this.getSupportedFileText()}</p>
					<div style={{ height: "0px", overflow: "hidden" }}>
						<input
							id={this.internalId}
							ref={handleInputRef}
							type="file"
							accept={this.getAcceptAttribute()}
							multiple
							onChange={(e) => this.handleFileChange(e)}
							disabled={this.isInputDisabled()}
							aria-label={this.ariaLabelFileInput}
						/>
					</div>
				</div>
				{this.renderStatusMessage()}
			</div>
		);
	}
}
