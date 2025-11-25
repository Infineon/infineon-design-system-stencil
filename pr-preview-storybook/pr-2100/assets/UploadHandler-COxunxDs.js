import{j as e,M as s}from"./WithTooltip-SK46ZJ2J-Dk6xP2TK.js";import{useMDXComponents as o}from"./index-Ba6_DNLG.js";import{F as d}from"./file-upload.stories-CWlJz_MU.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-1HBkPUig.js";import"./_commonjsHelpers-CqkleIqs.js";function r(l){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"technical-integration-with-upload-handler",children:"Technical Integration with Upload Handler"}),`
`,e.jsxs(n.p,{children:["This document provides advanced usage patterns and integration examples for the ",e.jsx(n.code,{children:"<ifx-file-upload>"})," web component. It focuses on how to use the ",e.jsx(n.code,{children:"uploadHandler"})," prop for custom upload logic, track upload progress, and hook into related events."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Everything related to UI, UX, error display, file validation, and retry logic is fully handled by the component. This guide only covers what developers need to implement themselves for real upload functionality."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"purpose-of-uploadhandler",children:["Purpose of ",e.jsx(n.code,{children:"uploadHandler"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"uploadHandler"})," is an optional function that lets you control how files are uploaded. It's ideal if you need to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Upload files to a custom backend"}),`
`,e.jsx(n.li,{children:"Show live progress using a progress bar and uploaded size text"}),`
`,e.jsx(n.li,{children:"Handle success and error states manually"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"function-signature",children:"Function signature"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`uploadHandler?: (file: File, onProgress?: (progress: number) => void) => Promise<void>;
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"file"}),": The selected file to upload"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onProgress"}),": (Optional) Callback to report percentage (0–100)"]}),`
`,e.jsxs(n.li,{children:["Returns a ",e.jsx(n.code,{children:"Promise"})," that resolves when the upload is complete"]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you do not call ",e.jsx(n.code,{children:"onProgress"}),", a small fake progress is shown automatically."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The component will automatically show a progress bar and a readable label such as ",e.jsx(n.code,{children:"200 KB / 400 KB uploaded"}),", calculated based on the file size and the reported progress percentage. You only need to call ",e.jsx(n.code,{children:"onProgress(percent)"})," — formatting and rendering are handled automatically."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"what-uploadhandler-does--and-doesnt",children:["What ",e.jsx(n.code,{children:"uploadHandler"})," does – and doesn't"]}),`
`,e.jsx(n.p,{children:"The component takes care of all file validation before calling your handler. Here's a breakdown:"}),`
`,e.jsxs(n.p,{children:["| Feature                           | Handled by component | To do in ",e.jsx(n.code,{children:"uploadHandler"}),`                      |
|----------------------------------|------------------------|-----------------------------------------------|
| Multiple file selection          | ✅ Yes                 | ❌ No                                          |
| Maximum file count (`,e.jsx(n.code,{children:"maxFiles"}),`)  | ✅ Yes                 | ❌ No                                          |
| Max file size (`,e.jsx(n.code,{children:"maxFileSizeMB"}),`)  | ✅ Yes                 | ❌ No                                          |
| Allowed file types               | ✅ Yes                 | ❌ No                                          |
| Error display and feedback       | ✅ Yes                 | ❌ No                                          |
| Trigger actual upload            | ✅ After validation     | ✅ Yes — start upload and resolve or reject    |
| Mark upload as successful        | ✅ On promise resolve   | ✅ Yes — call `,e.jsx(n.code,{children:"resolve()"}),`                      |
| Mark upload as failed            | ✅ On promise reject    | ✅ Yes — call `,e.jsx(n.code,{children:"reject()"}),`                       |
| Show upload progress             | ✅ If progress is given | ✅ Optional — call `,e.jsx(n.code,{children:"onProgress(percent)"}),"       |"]}),`
`,e.jsx(n.p,{children:"If a file is invalid (e.g., wrong type or too large), the component will not call your handler."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"example-real-upload-with-xmlhttprequest",children:["Example: Real upload with ",e.jsx(n.code,{children:"XMLHttpRequest"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const uploader = document.getElementById('uploader');

uploader.uploadHandler = (file, onProgress) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload');

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        onProgress?.(percent);
      }
    });

    xhr.onload = () => {
      xhr.status < 300 ? resolve() : reject();
    };

    xhr.onerror = () => reject();

    const formData = new FormData();
    formData.append('file', file);
    xhr.send(formData);
  });
};
`})}),`
`,e.jsx(n.p,{children:"This example shows how to perform an actual upload with progress tracking."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"retry-on-failure",children:"Retry on Failure"}),`
`,e.jsx(n.p,{children:"If an upload fails (for example, due to a network error or server issue), the component will:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display the file with a visual error state"}),`
`,e.jsx(n.li,{children:"Show a retry button next to the failed file"}),`
`,e.jsxs(n.li,{children:["Emit a custom event ",e.jsx(n.code,{children:"ifxFileUploadRetry"})," when retry is triggered"]}),`
`]}),`
`,e.jsx(n.p,{children:"Clicking the retry button automatically:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Reinvokes the ",e.jsx(n.code,{children:"uploadHandler"})," with the same file"]}),`
`,e.jsx(n.li,{children:"Clears the error state"}),`
`,e.jsx(n.li,{children:"Resets the progress to start a new upload attempt"}),`
`]}),`
`,e.jsxs(n.p,{children:["No changes are required to your ",e.jsx(n.code,{children:"uploadHandler"})," function. It will be called again as if the file was just added."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`document.querySelector('ifx-file-upload')?.addEventListener('ifxFileUploadRetry', (e) => {
  console.log('Retry requested for file:', e.detail.file);
});
`})}),`
`,e.jsx(n.p,{children:"This event can be useful to track retry attempts, report metrics, or handle partial state cleanup if needed."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Retry is handled entirely by the component UI and logic. Your upload handler only needs to support being called more than once with the same file."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"related-events",children:"Related events"}),`
`,e.jsxs(n.p,{children:[`| Event                         | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `,e.jsx(n.code,{children:"ifxFileUploadStart"}),`         | Fired when upload begins                                                    |
| `,e.jsx(n.code,{children:"ifxFileUploadProgress"}),"*     | ",e.jsx(n.em,{children:"(internal via progress bar only)"}),`                                          |
| `,e.jsx(n.code,{children:"ifxFileUploadComplete"}),`      | Fired when a file has been fully uploaded                                   |
| `,e.jsx(n.code,{children:"ifxFileUploadError"}),`         | Fired when an error occurs (e.g., rejected file, server error)              |
| `,e.jsx(n.code,{children:"ifxFileUploadAbort"}),`         | Fired when the user cancels the upload                                      |
| `,e.jsx(n.code,{children:"ifxFileUploadRetry"}),"         | Fired when a retry is triggered on a failed upload                          |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All uploads are triggered automatically after file validation."}),`
`,e.jsxs(n.li,{children:["You can combine ",e.jsx(n.code,{children:"uploadHandler"})," with validation props like ",e.jsx(n.code,{children:"maxFiles"}),", ",e.jsx(n.code,{children:"maxFileSizeMB"}),", and ",e.jsx(n.code,{children:"allowedFileTypes"}),"."]}),`
`,e.jsx(n.li,{children:"The upload UI is automatically updated by the component; no manual DOM changes are needed."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"uploadHandler"})," only needs to focus on uploading a single valid file."]}),`
`]})]})}function u(l={}){const{wrapper:n}={...o(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}export{u as default};
