import { useState } from 'react';
import { IfxButton, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTextFieldExample() {
  const [label, setLabel] = useState("Label");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  const [iconIndex, setIconIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [placeholder, setPlaceholder] = useState("Placeholder");
  const [readOnly, setReadOnly] = useState(false);
  const [caption, setCaption] = useState("Caption");
  const [required, setRequired] = useState(true);
  const [name, setName] = useState("text-field");
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [maxlength, setMaxlength] = useState(0);
  const [value, setValue] = useState("");
  const [internalId, setInternalId] = useState("text-field");
  const [autocomplete, setAutocomplete] = useState("on");
  const typeOptions = ["text","password"];
  const [typeIndex, setTypeIndex] = useState(0);

  const handleLabelChange = (value: string) => setLabel(value);
  const handleErrorChange = () => setError((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleIconChange = () => setIconIndex((i) => (i + 1) % iconOptions.length);
  const handleSuccessChange = () => setSuccess((v) => !v);
  const handlePlaceholderChange = (value: string) => setPlaceholder(value);
  const handleReadOnlyChange = () => setReadOnly((v) => !v);
  const handleCaptionChange = (value: string) => setCaption(value);
  const handleRequiredChange = () => setRequired((v) => !v);
  const handleNameChange = (value: string) => setName(value);
  const handleShowDeleteIconChange = () => setShowDeleteIcon((v) => !v);
  const handleMaxlengthChange = (value: string) => setMaxlength(Number(value));
  const handleValueChange = (value: string) => setValue(value);
  const handleInternalIdChange = (value: string) => setInternalId(value);
  const handleAutocompleteChange = (value: string) => setAutocomplete(value);
  const handleTypeChange = () => setTypeIndex((i) => (i + 1) % typeOptions.length);

  const controlledProps = {
    "label": label,
    "error": error,
    "disabled": disabled,
    "size": sizeOptions[sizeIndex],
    "icon": iconOptions[iconIndex],
    "success": success,
    "placeholder": placeholder,
    "readOnly": readOnly,
    "caption": caption,
    "required": required,
    "name": name,
    "showDeleteIcon": showDeleteIcon,
    "maxlength": maxlength,
    "value": value,
    "internalId": internalId,
    "autocomplete": autocomplete,
    "type": typeOptions[typeIndex],
  } as Record<string, unknown>;
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const formatPropValueForCode = (value: unknown): string => {
		if (typeof value === "boolean") return `{${value}}`;
		if (typeof value === "number") return `{${value}}`;
		if (value === null) return "{null}";
		if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
			return `{${JSON.stringify(value)}}`;
		}
		const escaped = String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
		return `"${escaped}"`;
	};

	const controlledPropsCode = [
    ["label", controlledProps["label"]],
    ["error", controlledProps["error"]],
    ["disabled", controlledProps["disabled"]],
    ["size", controlledProps["size"]],
    ["icon", controlledProps["icon"]],
    ["success", controlledProps["success"]],
    ["placeholder", controlledProps["placeholder"]],
    ["readOnly", controlledProps["readOnly"]],
    ["caption", controlledProps["caption"]],
    ["required", controlledProps["required"]],
    ["name", controlledProps["name"]],
    ["showDeleteIcon", controlledProps["showDeleteIcon"]],
    ["maxlength", controlledProps["maxlength"]],
    ["value", controlledProps["value"]],
    ["internalId", controlledProps["internalId"]],
    ["autocomplete", controlledProps["autocomplete"]],
    ["type", controlledProps["type"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTextFieldExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxTextField
        ariaLabel="text field for user input"
        onIfxInput={handleInput}
        label={String(controlledProps.label ?? "Label")}
        error={String(controlledProps.error ?? "false")}
        disabled={String(controlledProps.disabled ?? "false")}
        size={String(controlledProps.size ?? "m")}
        icon={String(controlledProps.icon ?? "")}
        success={String(controlledProps.success ?? "false")}
        placeholder={String(controlledProps.placeholder ?? "Placeholder")}
        readOnly={String(controlledProps.readOnly ?? "false")}
        caption={String(controlledProps.caption ?? "Caption")}
        required={String(controlledProps.required ?? "true")}
        name={String(controlledProps.name ?? "text-field")}
        showDeleteIcon={String(controlledProps.showDeleteIcon ?? "false")}
        maxlength={String(controlledProps.maxlength ?? "")}
        value={String(controlledProps.value ?? "")}
        internalId={String(controlledProps.internalId ?? "text-field")}
        autocomplete={String(controlledProps.autocomplete ?? "on")}
        type={String(controlledProps.type ?? "text")}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxTextField
        ariaLabel="text field for user input"
        onIfxInput={handleInput}
        label={String(controlledProps.label ?? "Label")}
        error={String(controlledProps.error ?? "false")}
        disabled={String(controlledProps.disabled ?? "false")}
        size={String(controlledProps.size ?? "m")}
        icon={String(controlledProps.icon ?? "")}
        success={String(controlledProps.success ?? "false")}
        placeholder={String(controlledProps.placeholder ?? "Placeholder")}
        readOnly={String(controlledProps.readOnly ?? "false")}
        caption={String(controlledProps.caption ?? "Caption")}
        required={String(controlledProps.required ?? "true")}
        name={String(controlledProps.name ?? "text-field")}
        showDeleteIcon={String(controlledProps.showDeleteIcon ?? "false")}
        maxlength={String(controlledProps.maxlength ?? "")}
        value={String(controlledProps.value ?? "")}
        internalId={String(controlledProps.internalId ?? "text-field")}
        autocomplete={String(controlledProps.autocomplete ?? "on")}
        type={String(controlledProps.type ?? "text")}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleIconChange}>Toggle Icon</IfxButton>
        <IfxButton variant="secondary" onClick={handleSuccessChange}>Toggle Success</IfxButton>
        <IfxButton variant="secondary" onClick={handleReadOnlyChange}>Toggle ReadOnly</IfxButton>
        <IfxButton variant="secondary" onClick={handleRequiredChange}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowDeleteIconChange}>Toggle ShowDeleteIcon</IfxButton>
        <IfxButton variant="secondary" onClick={handleTypeChange}>Toggle Type</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => handleLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="placeholder" type="text" value={String(placeholder)} onInput={(event) => handlePlaceholderChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="caption" type="text" value={String(caption)} onInput={(event) => handleCaptionChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => handleNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="maxlength" type="text" value={String(maxlength)} onInput={(event) => handleMaxlengthChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="internalId" type="text" value={String(internalId)} onInput={(event) => handleInternalIdChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="autocomplete" type="text" value={String(autocomplete)} onInput={(event) => handleAutocompleteChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>label:</b> {String(label)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>icon:</b> {String(iconOptions[iconIndex])}</div>
          <div><b>success:</b> {String(success)}</div>
          <div><b>placeholder:</b> {String(placeholder)}</div>
          <div><b>readOnly:</b> {String(readOnly)}</div>
          <div><b>caption:</b> {String(caption)}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>name:</b> {String(name)}</div>
          <div><b>showDeleteIcon:</b> {String(showDeleteIcon)}</div>
          <div><b>maxlength:</b> {String(maxlength)}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>internalId:</b> {String(internalId)}</div>
          <div><b>autocomplete:</b> {String(autocomplete)}</div>
          <div><b>type:</b> {String(typeOptions[typeIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

