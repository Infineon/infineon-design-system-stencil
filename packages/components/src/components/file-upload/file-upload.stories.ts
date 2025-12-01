import type { Meta, StoryFn } from "@storybook/web-components-vite";
import { action } from "storybook/actions";

const hideAllControlsExcept = (allowedKeys: string[]) => {
	const allProps = [
		"dragAndDrop",
		"label",
		"required",
		"labelRequiredError",
		"disabled",
		"maxFiles",
		"maxFileSizeMB",
		"allowedFileTypes",
		"additionalAllowedFileTypes",
		"allowAnyFileType",
		"allowedFileExtensions",
		"labelBrowseFiles",
		"labelDragAndDrop",
		"labelUploadedFilesHeading",
		"labelFileTooLarge",
		"labelUnsupportedFileType",
		"labelUploaded",
		"labelSupportedFormatsTemplate",
		"labelFileSingular",
		"labelFilePlural",
		"labelMaxFilesInfo",
		"labelMaxFilesExceeded",
		"labelUploadFailed",
		"ariaLabelBrowseFiles",
		"ariaLabelDropzone",
		"ariaLabelFileInput",
		"ariaLabelRemoveFile",
		"ariaLabelCancelUpload",
		"ariaLabelRetryUpload",
		"ariaLabelUploadingStatus",
		"ariaLabelUploadedStatus",
		"ariaLabelUploadFailedStatus",
	];

	const argTypes: Record<string, any> = {};
	for (const prop of allProps) {
		if (!allowedKeys.includes(prop)) {
			argTypes[prop] = { table: { disable: true } };
		}
	}
	return argTypes;
};

const disableCustomEventControls = {
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
};

const meta: Meta = {
	title: "Components/File Upload",
	tags: ["autodocs"],
	parameters: {
		controls: { expanded: true },
		docs: {
			description: {
				component:
					"Upload component with different interaction styles: button or drag-and-drop area.",
			},
		},
	},
	argTypes: {
		// --- FUNCTION ---
		dragAndDrop: {
			description: "Enables drag-and-drop upload area.",
			control: "boolean",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		required: {
			description: "Marks the upload as required.",
			control: "boolean",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		disabled: {
			description: "Disables the upload input.",
			control: "boolean",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		maxFileSizeMB: {
			description: "Maximum file size in MB.",
			control: "number",
			table: { category: "Function", defaultValue: { summary: "7" } },
		},
		allowedFileTypes: {
			control: { type: "check" },
			options: ["jpg", "png", "pdf", "mov", "mp3", "mp4"],
			description:
				"Select one or more allowed file extensions. Internally mapped to MIME types. If not set and no other file restrictions are defined, the default values (jpg, jpeg, png, pdf, mov, mp3, mp4) are used for validation.",
			table: { category: "Function" },
		},
		additionalAllowedFileTypes: {
			description: "Custom MIME types (comma-separated).",
			control: "text",
			table: { category: "Function" },
		},
		allowAnyFileType: {
			description:
				"When true, allows any file type to be uploaded (overrides all other file type restrictions).",
			control: "boolean",
			table: { category: "Function", defaultValue: { summary: "false" } },
		},
		allowedFileExtensions: {
			description:
				'Custom file extensions to allow. Recommended format: "xml,asc,cfg" (without dots). Also accepts ".xml,.asc,.cfg" (with dots). Do not use wildcards like "*.xml".',
			control: "text",
			table: { category: "Function" },
		},
		maxFiles: {
			description: "Maximum number of allowed files.",
			control: "number",
			table: { category: "Function" },
		},

		// --- LABELS ---
		label: {
			control: "text",
			description: "Main label shown above input.",
			table: { category: "Label" },
		},
		labelRequiredError: {
			control: "text",
			description: "Shown when required and no file selected.",
			table: { category: "Label" },
		},
		labelBrowseFiles: {
			control: "text",
			table: { category: "Label" },
		},
		labelDragAndDrop: {
			control: "text",
			table: { category: "Label" },
		},
		labelUploadedFilesHeading: {
			control: "text",
			table: { category: "Label" },
		},
		labelFileTooLarge: {
			control: "text",
			table: { category: "Label" },
		},
		labelUnsupportedFileType: {
			control: "text",
			table: { category: "Label" },
		},
		labelUploaded: {
			control: "text",
			table: { category: "Label" },
		},
		labelSupportedFormatsTemplate: {
			control: "text",
			table: { category: "Label" },
		},
		labelFileSingular: {
			control: "text",
			table: { category: "Label" },
		},
		labelFilePlural: {
			control: "text",
			table: { category: "Label" },
		},
		labelMaxFilesInfo: {
			control: "text",
			table: { category: "Label" },
		},
		labelMaxFilesExceeded: {
			control: "text",
			table: { category: "Label" },
		},
		labelUploadFailed: {
			control: "text",
			table: { category: "Label" },
		},

		// --- ARIA LABELS ---
		ariaLabelBrowseFiles: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelDropzone: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelFileInput: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelRemoveFile: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelCancelUpload: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelRetryUpload: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelUploadingStatus: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelUploadedStatus: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		ariaLabelUploadFailedStatus: {
			control: "text",
			table: { category: "Aria Labels" },
		},
		// --- CUSTOM EVENTS ---
		ifxFileUploadAdd: {
			action: "ifxFileUploadAdd",
			table: { category: "Custom Events" },
			description: "Triggered when valid files are added (via browse or drop).",
		},
		ifxFileUploadRemove: {
			action: "ifxFileUploadRemove",
			table: { category: "Custom Events" },
			description: "Fired when a user removes a file from the list.",
		},
		ifxFileUploadChange: {
			action: "ifxFileUploadChange",
			table: { category: "Custom Events" },
			description: "Fired whenever the file list changes (add, remove, retry).",
		},
		ifxFileUploadError: {
			action: "ifxFileUploadError",
			table: { category: "Custom Events" },
			description: "Fired when a file is rejected or an upload fails.",
		},
		ifxFileUploadInvalid: {
			action: "ifxFileUploadInvalid",
			table: { category: "Custom Events" },
			description: "Fired for invalid files (e.g., wrong type or size).",
		},
		ifxFileUploadStart: {
			action: "ifxFileUploadStart",
			table: { category: "Custom Events" },
			description: "Fired when an upload starts for a file.",
		},
		ifxFileUploadComplete: {
			action: "ifxFileUploadComplete",
			table: { category: "Custom Events" },
			description: "Fired when a single file upload finishes successfully.",
		},
		ifxFileUploadAllComplete: {
			action: "ifxFileUploadAllComplete",
			table: { category: "Custom Events" },
			description: "Fired when all current uploads have completed.",
		},
		ifxFileUploadAbort: {
			action: "ifxFileUploadAbort",
			table: { category: "Custom Events" },
			description: "Fired when a user cancels an in-progress upload.",
		},
		ifxFileUploadDrop: {
			action: "ifxFileUploadDrop",
			table: { category: "Custom Events" },
			description: "Fired when files are dropped via drag-and-drop.",
		},
		ifxFileUploadClick: {
			action: "ifxFileUploadClick",
			table: { category: "Custom Events" },
			description: "Fired when the upload button or dropzone is clicked.",
		},
		ifxFileUploadMaxFilesExceeded: {
			action: "ifxFileUploadMaxFilesExceeded",
			table: { category: "Custom Events" },
			description: "Fired when the selected files exceed the maxFiles limit.",
		},
		ifxFileUploadValidation: {
			action: "ifxFileUploadValidation",
			table: { category: "Custom Events" },
			description: "Fired after required validation is checked.",
		},
		ifxFileUploadRetry: {
			action: "ifxFileUploadRetry",
			table: { category: "Custom Events" },
			description:
				"Fired when the retry button is clicked for a failed upload.",
		},
	},
};

export default meta;

const BaseTemplate: StoryFn = (args) => {
	const el = document.createElement("ifx-file-upload");

	if (args.dragAndDrop) el.setAttribute("drag-and-drop", "");
	if (args.allowAnyFileType) el.setAttribute("allow-any-file-type", "");
	el.setAttribute("max-file-size-m-b", args.maxFileSizeMB);

	const rawTypes = Array.isArray(args.allowedFileTypes)
		? args.allowedFileTypes
		: args.allowedFileTypes?.split(",") || [];

	const mappedTypes = rawTypes.flatMap((type) =>
		type === "jpg" ? ["jpg", "jpeg"] : [type],
	);
	const uniqueTypes = Array.from(new Set(mappedTypes));
	el.setAttribute("allowed-file-types", uniqueTypes.join(","));

	if (args.additionalAllowedFileTypes) {
		const value = Array.isArray(args.additionalAllowedFileTypes)
			? args.additionalAllowedFileTypes.join(",")
			: args.additionalAllowedFileTypes;
		el.setAttribute("additional-allowed-file-types", value);
	}

	if (args.allowedFileExtensions) {
		const value = Array.isArray(args.allowedFileExtensions)
			? args.allowedFileExtensions.join(",")
			: args.allowedFileExtensions;
		el.setAttribute("allowed-file-extensions", value);
	}

	if (args.maxFiles !== undefined && args.maxFiles !== null) {
		el.setAttribute("max-files", String(args.maxFiles));
	}

	args.required
		? el.setAttribute("required", "")
		: el.removeAttribute("required");
	args.disabled
		? el.setAttribute("disabled", "")
		: el.removeAttribute("disabled");

	el.setAttribute("label", args.label);
	el.setAttribute("label-required-error", args.labelRequiredError);
	el.setAttribute("label-browse-files", args.labelBrowseFiles);
	el.setAttribute("label-drag-and-drop", args.labelDragAndDrop);
	el.setAttribute(
		"label-uploaded-files-heading",
		args.labelUploadedFilesHeading,
	);
	el.setAttribute("label-file-too-large", args.labelFileTooLarge);
	el.setAttribute("label-unsupported-file-type", args.labelUnsupportedFileType);
	el.setAttribute("label-uploaded", args.labelUploaded);
	el.setAttribute(
		"label-supported-formats-template",
		args.labelSupportedFormatsTemplate,
	);
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
	el.setAttribute(
		"aria-label-upload-failed-status",
		args.ariaLabelUploadFailedStatus,
	);

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
	el.addEventListener(
		"ifxFileUploadMaxFilesExceeded",
		action("ifxFileUploadMaxFilesExceeded"),
	);
	el.addEventListener(
		"ifxFileUploadValidation",
		action("ifxFileUploadValidation"),
	);
	el.addEventListener("ifxFileUploadRetry", action("ifxFileUploadRetry"));

	return el;
};

export const Default = BaseTemplate.bind({});
Default.args = {
	dragAndDrop: false,
	label: "Label",
	required: false,
	labelRequiredError: "You must upload at least one file.",
	disabled: false,
	maxFileSizeMB: 7,
	allowedFileTypes: ["jpg", "png", "pdf"],
	additionalAllowedFileTypes: "application/zip,text/csv",
	allowAnyFileType: false,
	allowedFileExtensions: "",
	labelBrowseFiles: "Browse files",
	labelDragAndDrop: "Drag & Drop or browse files to upload",
	labelUploadedFilesHeading: "Uploaded files",
	labelFileTooLarge: "Upload failed. Max file size: {{size}}MB.",
	labelUnsupportedFileType: "Unsupported file type.",
	labelUploaded: "Successfully uploaded",
	labelSupportedFormatsTemplate:
		"Supported file formats: {{types}}. Max file size: {{size}}MB.",
	labelFileSingular: "file",
	labelFilePlural: "files",
	labelMaxFilesInfo: "You can upload up to {{count}} {{files}}.",
	labelMaxFilesExceeded:
		"You have exceeded the maximum of {{count}} {{files}}.",
	labelUploadFailed: "Upload failed. Please try again.",
	ariaLabelBrowseFiles: "Browse files",
	ariaLabelDropzone: "Upload area. Click to browse or drag and drop files.",
	ariaLabelFileInput: "Upload file",
	ariaLabelRemoveFile: "Remove file",
	ariaLabelCancelUpload: "Cancel upload",
	ariaLabelRetryUpload: "Retry upload",
	ariaLabelUploadingStatus: "Upload in progress",
	ariaLabelUploadedStatus: "Upload completed",
	ariaLabelUploadFailedStatus: "Upload failed",
};

export const UploadAreaDragDrop = BaseTemplate.bind({});
UploadAreaDragDrop.args = {
	...Default.args,
	dragAndDrop: true,
};

// Demo UploadStatesDemo
export const UploadStatesDemo = BaseTemplate.bind({});
UploadStatesDemo.args = {
	...Default.args,
	dragAndDrop: true,
};
UploadStatesDemo.parameters = {
	docs: {
		description: {
			story:
				"Visual preview of all file states (success, upload in progress, rejected).",
		},
	},
};
UploadStatesDemo.decorators = [
	(storyFn) => {
		const el = storyFn();
		setTimeout(() => (el as any)?.injectDemoState?.(), 0);
		return el;
	},
];

UploadStatesDemo.argTypes = {
	...hideAllControlsExcept(["dragAndDrop"]),
	...disableCustomEventControls,
};

// Demo UploadRequiredError
export const UploadRequiredError = BaseTemplate.bind({});
UploadRequiredError.args = {
	...Default.args,
	required: true,
};
UploadRequiredError.parameters = {
	docs: {
		description: {
			story:
				"Demonstrates the error state when the upload is required but no files have been added.",
		},
	},
};
UploadRequiredError.decorators = [
	(storyFn) => {
		const el = storyFn();
		setTimeout(() => (el as any)?.triggerDemoValidation?.(), 100);
		return el;
	},
];

UploadRequiredError.argTypes = {
	...hideAllControlsExcept(["dragAndDrop"]),
	...disableCustomEventControls,
};
