"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4591],{4591:(g,h,d)=>{d.r(h),d.d(h,{ifx_file_upload:()=>m});var c=d(6330),e=d(1032);const m=(()=>{let f=class{constructor(i){(0,e.r)(this,i),this.ifxFileUploadAdd=(0,e.c)(this,"ifxFileUploadAdd",7),this.ifxFileUploadRemove=(0,e.c)(this,"ifxFileUploadRemove",7),this.ifxFileUploadChange=(0,e.c)(this,"ifxFileUploadChange",7),this.ifxFileUploadError=(0,e.c)(this,"ifxFileUploadError",7),this.ifxFileUploadInvalid=(0,e.c)(this,"ifxFileUploadInvalid",7),this.ifxFileUploadStart=(0,e.c)(this,"ifxFileUploadStart",7),this.ifxFileUploadComplete=(0,e.c)(this,"ifxFileUploadComplete",7),this.ifxFileUploadAbort=(0,e.c)(this,"ifxFileUploadAbort",7),this.ifxFileUploadDrop=(0,e.c)(this,"ifxFileUploadDrop",7),this.ifxFileUploadClick=(0,e.c)(this,"ifxFileUploadClick",7),this.dragAndDrop=!1,this.maxFileSizeMB=7,this.allowedFileTypes=["jpg","jpeg","png","pdf","mov","mp3","mp4"],this.labelBrowseFiles="Browse files",this.labelDragAndDrop="Drag & Drop or browse files to upload",this.labelFileTooLarge="Upload failed. Max file size: {{size}}MB.",this.labelUnsupportedFileType="Unsupported file type.",this.labelUploaded="Successfully uploaded",this.labelSupportedFormatsTemplate="Supported file formats: {{types}}. Max file size: {{size}}MB.",this.isDragOver=!1,this.files=[],this.uploadTasks=[],this.rejectedSizeFiles=[],this.rejectedTypeFiles=[],this.fileInputEl=null,this.extensionToMimeMap={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",pdf:"application/pdf",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4"}}getNormalizedFileTypes(){if(Array.isArray(this.allowedFileTypes))return this.allowedFileTypes;try{return JSON.parse(this.allowedFileTypes)}catch{return this.allowedFileTypes.split(",").map(s=>s.trim())}}handleFileChange(i){const s=i.target;s.files&&this.processFiles(s.files)}handleDrop(i){var s;if(i.preventDefault(),i.stopPropagation(),this.isDragOver=!1,null!==(s=i.dataTransfer)&&void 0!==s&&s.files){const l=Array.from(i.dataTransfer.files),o=this.getNormalizedFileTypes().map(t=>this.extensionToMimeMap[t.toLowerCase()]).filter(Boolean),a=[],r=[];l.forEach(t=>{o.includes(t.type)&&t.size<=1024*this.maxFileSizeMB*1024?a.push(t):r.push(t)}),this.ifxFileUploadDrop.emit({droppedFiles:l,acceptedFiles:a,rejectedFiles:r}),this.processFiles(i.dataTransfer.files)}}handleDragOver(i){i.preventDefault(),this.isDragOver=!0}handleDragLeave(i){i.preventDefault(),this.isDragOver=!1}processFiles(i){const s=Array.from(i),l=this.getNormalizedFileTypes().map(t=>this.extensionToMimeMap[t.toLowerCase()]).filter(Boolean),o=[],a=[],r=[];s.forEach(t=>{const n=l.includes(t.type),p=t.size<=1024*this.maxFileSizeMB*1024;n&&p?o.push(t):(n||(r.push(t.name),this.ifxFileUploadInvalid.emit({file:t,reason:"invalid-type"})),p||(a.push(t.name),this.ifxFileUploadInvalid.emit({file:t,reason:"invalid-size"})),this.ifxFileUploadError.emit({file:t,errorType:n?"file-too-large":"invalid-type",message:"Invalid file rejected"}))}),this.rejectedSizeFiles=[...this.rejectedSizeFiles,...a],this.rejectedTypeFiles=[...this.rejectedTypeFiles,...r],o.forEach(t=>this.startUpload(t)),this.files=[...this.files,...o],o.length>0&&(this.ifxFileUploadAdd.emit({addedFiles:o,files:this.files}),this.ifxFileUploadChange.emit({files:this.files}))}startUpload(i){this.ifxFileUploadStart.emit({file:i});const s={file:i,progress:0,intervalId:null,completed:!1};if(this.uploadHandler)this.uploadHandler(i).then(()=>{s.progress=100,s.completed=!0,this.uploadTasks=[...this.uploadTasks],this.ifxFileUploadComplete.emit({file:i}),this.ifxFileUploadChange.emit({files:this.files})}).catch(()=>{console.error("Upload failed"),this.ifxFileUploadError.emit({file:i,errorType:"upload-failed",message:"Upload handler rejected file"})});else{const l=i.size,o=5e5;let a=0;s.intervalId=window.setInterval(()=>{a+=o/5;const r=Math.min(100,Math.round(a/l*100));s.progress=r,this.uploadTasks=[...this.uploadTasks],r>=100&&(clearInterval(s.intervalId),s.completed=!0,s.intervalId=null,this.uploadTasks=[...this.uploadTasks],this.ifxFileUploadComplete.emit({file:i}),this.ifxFileUploadChange.emit({files:this.files}))},200)}this.uploadTasks=[...this.uploadTasks,s]}cancelUpload(i){const s=this.uploadTasks.findIndex(l=>l.file.name===i.name);if(-1!==s){const l=this.uploadTasks[s];null!==l?.intervalId&&clearInterval(l.intervalId),this.uploadTasks=this.uploadTasks.filter((o,a)=>a!==s)}this.files=this.files.filter(l=>l.name!==i.name),this.ifxFileUploadAbort.emit({file:i}),this.ifxFileUploadChange.emit({files:this.files}),this.fileInputEl&&(this.fileInputEl.value="")}removeFile(i){this.uploadTasks=this.uploadTasks.filter(s=>s.file.name!==i.name),this.files=this.files.filter(s=>s.name!==i.name),this.ifxFileUploadRemove.emit({removedFile:i,files:this.files}),this.ifxFileUploadChange.emit({files:this.files}),this.fileInputEl&&(this.fileInputEl.value="")}clearRejectedFile(i,s){"size"===s?this.rejectedSizeFiles=this.rejectedSizeFiles.filter(l=>l!==i):this.rejectedTypeFiles=this.rejectedTypeFiles.filter(l=>l!==i),this.fileInputEl&&(this.fileInputEl.value="")}splitFileNameParts(i){const s=i.name,l=s.lastIndexOf(".");return-1===l?{base:s,ext:""}:{base:s.substring(0,l),ext:s.substring(l)}}getFileIcon(i){var s;switch(null===(s=i.name.split(".").pop())||void 0===s?void 0:s.toLowerCase()){case"pdf":return"file-pdf-16";case"jpg":case"jpeg":return"file-jpg-16";case"png":return"file-png-16";case"mov":return"file-mov-16";case"mp3":return"file-mp3-16";case"mp4":return"file-mp4-16";default:return"file"}}getFormattedSize(i){const s=i.size/1024;return s>1024?`${(s/1024).toFixed(1)} MB`:`${s.toFixed(0)} KB`}getAcceptAttribute(){return this.getNormalizedFileTypes().map(i=>"."+i.toLowerCase()).join(",")}getSupportedFileText(){return this.labelSupportedFormatsTemplate.replace("{{types}}",this.getNormalizedFileTypes().map(i=>i.toUpperCase()).join(", ")).replace("{{size}}",this.maxFileSizeMB.toString())}getFormattedFileTooLargeText(){return this.labelFileTooLarge.replace("{{size}}",this.maxFileSizeMB.toString())}componentDidLoad(){this.hostElement.hasAttribute("show-demo-states")&&(this.showDemoStates=!0),this.showDemoStates&&this.injectDemoState()}injectDemoState(){var i=this;return(0,c.A)(function*(){const s=new File(["demo"],"Image.jpg",{type:"image/jpeg"}),l=new File(["demo"],"File.pdf",{type:"application/pdf"}),o=new File(["demo"],"Video.mp4",{type:"video/mp4"}),a=new File(["demo"],"Script.exe",{type:"application/x-msdownload"});i.files=[l,s],i.uploadTasks=[{file:l,progress:100,intervalId:null,completed:!0},{file:s,progress:35,intervalId:null,completed:!1}],i.rejectedSizeFiles=[o.name],i.rejectedTypeFiles=[a.name]})()}render(){return(0,e.h)("div",{key:"9ebbf4de0d20c25b5c0167dd48b6ab4d538ca736",class:"file-upload-wrapper"},this.dragAndDrop?this.renderDragAndDropArea():this.renderUploadArea(),(0,e.h)("ul",{key:"ad545c35ebfaf6016b4cebe0d11d0f4798816718",class:"file-list"},this.rejectedSizeFiles.map(i=>(0,e.h)("li",{class:"file-item upload-failed"},(0,e.h)("div",{class:"file-icon"},(0,e.h)("ifx-icon",{icon:"file-16"})),(0,e.h)("div",{class:"file-info"},(0,e.h)("div",{class:"file-top-row"},(0,e.h)("span",{class:"file-name-wrapper"},(0,e.h)("span",{class:"file-name-base"},this.splitFileNameParts({name:i}).base),(0,e.h)("span",{class:"file-name-ext"},this.splitFileNameParts({name:i}).ext)),(0,e.h)("div",{class:"file-actions"},(0,e.h)("ifx-icon-button",{shape:"square",variant:"tertiary",icon:"delete-forever-16",size:"s","aria-label":"Remove file",onClick:()=>this.clearRejectedFile(i,"size")}))),(0,e.h)("div",{class:"file-middle-row"},(0,e.h)("span",{class:"file-status"},this.getFormattedFileTooLargeText()))))),this.rejectedTypeFiles.map(i=>(0,e.h)("li",{class:"file-item upload-failed"},(0,e.h)("div",{class:"file-icon"},(0,e.h)("ifx-icon",{icon:"file-16"})),(0,e.h)("div",{class:"file-info"},(0,e.h)("div",{class:"file-top-row"},(0,e.h)("span",{class:"file-name-wrapper"},(0,e.h)("span",{class:"file-name-base"},this.splitFileNameParts({name:i}).base),(0,e.h)("span",{class:"file-name-ext"},this.splitFileNameParts({name:i}).ext)),(0,e.h)("div",{class:"file-actions"},(0,e.h)("ifx-icon-button",{shape:"square",variant:"tertiary",icon:"delete-forever-16",size:"s","aria-label":"Remove file",onClick:()=>this.clearRejectedFile(i,"type")}))),(0,e.h)("div",{class:"file-middle-row"},(0,e.h)("span",{class:"file-status"},this.labelUnsupportedFileType))))),this.files.map(i=>{var s;const l=this.uploadTasks.find(p=>p.file.name===i.name),o=null!==(s=l?.progress)&&void 0!==s?s:100,a=l&&!l.completed,r=a?"file-item uploading":"file-item upload-success",{base:t,ext:n}=this.splitFileNameParts(i);return(0,e.h)("li",{class:r},(0,e.h)("div",{class:"file-icon"},(0,e.h)("ifx-icon",{icon:this.getFileIcon(i)})),(0,e.h)("div",{class:"file-info"},(0,e.h)("div",{class:"file-top-row"},(0,e.h)("span",{class:"file-name-wrapper"},(0,e.h)("span",{class:"file-name-base"},t),(0,e.h)("span",{class:"file-name-ext"},n)),(0,e.h)("div",{class:"file-actions"},(0,e.h)("ifx-icon-button",{shape:"square",variant:"tertiary",icon:"cross-16",size:"s","aria-label":"Cancel upload",onClick:()=>this.cancelUpload(i),style:{display:a?"inline-flex":"none"}}),(0,e.h)("ifx-icon-button",{shape:"square",variant:"tertiary",icon:"delete-forever-16",size:"s","aria-label":"Remove file",onClick:()=>this.removeFile(i),style:{display:a?"none":"inline-flex"}}))),(0,e.h)("div",{class:"file-middle-row"},(0,e.h)("span",{class:"file-size"},this.getFormattedSize(i)),a&&(0,e.h)("span",{class:"file-uploading"},"\xa0\u2013\xa0Uploading \u2026"),(0,e.h)("span",{class:"file-status"},!a&&(0,e.h)("span",null,(0,e.h)("ifx-icon",{icon:"check-12"}),"\xa0",this.labelUploaded))),a&&(0,e.h)("div",{class:"file-progress-row"},(0,e.h)("ifx-progress-bar",{size:"s",value:o,"show-label":"true"}))))})))}renderUploadArea(){return(0,e.h)("div",{class:{"upload-button":!0}},(0,e.h)("label",null,(0,e.h)("ifx-button",{variant:"secondary"},(0,e.h)("ifx-icon",{icon:"upload-16"}),this.labelBrowseFiles),(0,e.h)("input",{ref:s=>{this.fileInputEl=s},type:"file",accept:this.getAcceptAttribute(),multiple:!0,onChange:s=>this.handleFileChange(s),style:{display:"none"}})),(0,e.h)("p",{class:"file-upload-info"},this.getSupportedFileText()))}renderDragAndDropArea(){return(0,e.h)("div",{class:{"upload-dropzone":!0,"drag-over":this.isDragOver},onClick:()=>{this.fileInputEl&&this.fileInputEl.click()},onDragOver:l=>this.handleDragOver(l),onDragLeave:l=>this.handleDragLeave(l),onDrop:l=>this.handleDrop(l)},(0,e.h)("ifx-icon",{icon:"upload-24",class:"custom-icon"}),(0,e.h)("p",null,this.labelDragAndDrop),(0,e.h)("p",{class:"file-upload-info"},this.getSupportedFileText()),(0,e.h)("div",{style:{height:"0px",overflow:"hidden"}},(0,e.h)("input",{ref:l=>{this.fileInputEl=l},type:"file",accept:this.getAcceptAttribute(),multiple:!0,onChange:l=>this.handleFileChange(l)})))}get hostElement(){return(0,e.g)(this)}};return f.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{font-family:var(--ifx-font-family, sans-serif)}.file-upload-wrapper{display:flex;flex-direction:column}.upload-dropzone{border:1px dashed #BFBBBB;padding:40px;text-align:center;cursor:pointer;color:#1D1D1D;transition:border-color 0.3s ease;border-radius:1px;background:#FFFFFF}.upload-dropzone ifx-icon{color:#0A8276}.upload-dropzone:hover{border:1px dashed #8D8786}.upload-dropzone.drag-over{border:1px solid #0A8276;background:#F7F7F7}.upload-dropzone input{display:none}.file-upload-info{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0em;color:#1D1D1D;margin:0;margin-top:4px}.file-list{list-style:none;padding:0;margin:0;margin-top:16px;display:flex;flex-direction:column;gap:16px}.file-item{border:1px solid #BFBBBB;padding:16px;display:flex;gap:16px}.file-info{width:100%;min-width:0}.file-top-row{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:-8px}.file-top-row ifx-icon{flex-shrink:0}.file-name-wrapper{display:flex;min-width:0;max-width:100%;white-space:nowrap;overflow:hidden;font-weight:400;font-size:0.875rem}.file-name-base{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1;min-width:0}.file-name-ext{flex-shrink:0;margin-left:0}.file-middle-row{display:flex;align-items:center;font-size:0.75rem;line-height:1rem;flex-wrap:wrap;color:#575352}.file-middle-row .file-status{margin-left:16px}.file-progress-row{margin-top:16px}.file-progress-row ifx-progress-bar{width:100%}.upload-success{border-color:#0A8276}.upload-success .file-status ifx-icon{position:relative;top:2px;color:#4CA460}.upload-failed{border-color:#CD002F}.upload-failed .file-status{color:#CD002F;margin-left:0}',f})()}}]);