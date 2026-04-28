import { useState } from 'react';
import { IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
  const [placementIndex, setPlacementIndex] = useState(7);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const variantOptions = ["primary","secondary","tertiary"];
  const [variantIndex, setVariantIndex] = useState(0);
  const targetOptions = ["_self","_blank"];
  const [targetIndex, setTargetIndex] = useState(0);
  const [href, setHref] = useState("");
  const iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  const [iconIndex, setIconIndex] = useState(0);
  const [error, setError] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [noCloseOnOutsideClick, setNoCloseOnOutsideClick] = useState(false);
  const [noCloseOnMenuClick, setNoCloseOnMenuClick] = useState(false);
  const [noAppendToBody, setNoAppendToBody] = useState(false);

  const togglePlacement = () => setPlacementIndex((i) => (i + 1) % placementOptions.length);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const toggleHref = (value: string) => setHref(value);
  const toggleIcon = () => setIconIndex((i) => (i + 1) % iconOptions.length);
  const toggleError = () => setError((v) => !v);
  const toggleDefaultOpen = () => setDefaultOpen((v) => !v);
  const toggleNoCloseOnOutsideClick = () => setNoCloseOnOutsideClick((v) => !v);
  const toggleNoCloseOnMenuClick = () => setNoCloseOnMenuClick((v) => !v);
  const toggleNoAppendToBody = () => setNoAppendToBody((v) => !v);

  const controlledProps = {
    "placement": placementOptions[placementIndex],
    "size": sizeOptions[sizeIndex],
    "disabled": disabled,
    "variant": variantOptions[variantIndex],
    "target": targetOptions[targetIndex],
    "href": href,
    "icon": iconOptions[iconIndex],
    "error": error,
    "defaultOpen": defaultOpen,
    "noCloseOnOutsideClick": noCloseOnOutsideClick,
    "noCloseOnMenuClick": noCloseOnMenuClick,
    "noAppendToBody": noAppendToBody,
  } as Record<string, unknown>;
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdown = (event: CustomEvent) => {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  const handleMenuSize = (event: CustomEvent) => {
    console.log('menuSize:', event);
    // Add your handler logic here
  };

  const handleDropdownItem = (event: CustomEvent) => {
    console.log('ifxDropdownItem:', event);
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
    ["placement", controlledProps["placement"]],
    ["size", controlledProps["size"]],
    ["disabled", controlledProps["disabled"]],
    ["variant", controlledProps["variant"]],
    ["target", controlledProps["target"]],
    ["href", controlledProps["href"]],
    ["icon", controlledProps["icon"]],
    ["error", controlledProps["error"]],
    ["defaultOpen", controlledProps["defaultOpen"]],
    ["noCloseOnOutsideClick", controlledProps["noCloseOnOutsideClick"]],
    ["noCloseOnMenuClick", controlledProps["noCloseOnMenuClick"]],
    ["noAppendToBody", controlledProps["noAppendToBody"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdown = (event: CustomEvent) => {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  const handleMenuSize = (event: CustomEvent) => {
    console.log('menuSize:', event);
    // Add your handler logic here
  };

  const handleDropdownItem = (event: CustomEvent) => {
    console.log('ifxDropdownItem:', event);
    // Add your handler logic here
  };

  return (
      <IfxDropdown
        onIfxClose={handleClose}
        onIfxDropdown={handleDropdown}
        onIfxOpen={handleOpen}
        __CONTROLLED_PROPS__>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          size="m"
          onIfxDropdownMenuItem={handleDropdownMenuItem}
          onMenuSize={handleMenuSize}>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            onIfxDropdownItem={handleDropdownItem}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxDropdown
        onIfxClose={handleClose}
        onIfxDropdown={handleDropdown}
        onIfxOpen={handleOpen}
        {...(controlledProps as any)}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          size="m"
          onIfxDropdownMenuItem={handleDropdownMenuItem}
          onMenuSize={handleMenuSize}>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            onIfxDropdownItem={handleDropdownItem}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            target="_self"
            href=""
            error={false}
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={togglePlacement}>Toggle Placement</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDefaultOpen}>Toggle DefaultOpen</IfxButton>
        <IfxButton variant="secondary" onClick={toggleNoCloseOnOutsideClick}>Toggle NoCloseOnOutsideClick</IfxButton>
        <IfxButton variant="secondary" onClick={toggleNoCloseOnMenuClick}>Toggle NoCloseOnMenuClick</IfxButton>
        <IfxButton variant="secondary" onClick={toggleNoAppendToBody}>Toggle NoAppendToBody</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => toggleHref(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>placement:</b> {String(placementOptions[placementIndex])}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
          <div><b>href:</b> {String(href)}</div>
          <div><b>icon:</b> {String(iconOptions[iconIndex])}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>defaultOpen:</b> {String(defaultOpen)}</div>
          <div><b>noCloseOnOutsideClick:</b> {String(noCloseOnOutsideClick)}</div>
          <div><b>noCloseOnMenuClick:</b> {String(noCloseOnMenuClick)}</div>
          <div><b>noAppendToBody:</b> {String(noAppendToBody)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

