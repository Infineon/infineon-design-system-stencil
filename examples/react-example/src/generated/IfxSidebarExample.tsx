import { useState } from 'react';
import { IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';

export function IfxSidebarExample() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [initialCollapse, setInitialCollapse] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [collapsible, setCollapsible] = useState(false);
  const iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  const [iconIndex, setIconIndex] = useState(0);
  const targetOfSidebarItemOptions = ["_self"];
  const [targetOfSidebarItemIndex, setTargetOfSidebarItemIndex] = useState(0);
  const [activeSidebarItem, setActiveSidebarItem] = useState(false);
  const [isActionItem, setIsActionItem] = useState(false);

  const toggleShowHeader = () => setShowHeader((v) => !v);
  const toggleShowFooter = () => setShowFooter((v) => !v);
  const toggleInitialCollapse = () => setInitialCollapse((v) => !v);
  const toggleCollapsed = () => setCollapsed((v) => !v);
  const toggleCollapsible = () => setCollapsible((v) => !v);
  const toggleIcon = () => setIconIndex((i) => (i + 1) % iconOptions.length);
  const toggleTargetOfSidebarItem = () => setTargetOfSidebarItemIndex((i) => (i + 1) % targetOfSidebarItemOptions.length);
  const toggleActiveSidebarItem = () => setActiveSidebarItem((v) => !v);
  const toggleIsActionItem = () => setIsActionItem((v) => !v);

  const controlledProps = {
    "showHeader": showHeader,
    "showFooter": showFooter,
    "initialCollapse": initialCollapse,
    "collapsed": collapsed,
    "collapsible": collapsible,
    "icon": iconOptions[iconIndex],
    "targetOfSidebarItem": targetOfSidebarItemOptions[targetOfSidebarItemIndex],
    "activeSidebarItem": activeSidebarItem,
    "isActionItem": isActionItem,
  } as const;
  const handleSidebarNavigationItem = (event: CustomEvent) => {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  };

  const handleSidebarActionItem = (event: CustomEvent) => {
    console.log('ifxSidebarActionItem:', event);
    // Add your handler logic here
  };

  const handleSidebarMenu = (event: CustomEvent) => {
    console.log('ifxSidebarMenu:', event);
    // Add your handler logic here
  };

  const handleSidebarCollapseChange = (event: CustomEvent) => {
    console.log('ifxSidebarCollapseChange:', event);
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
    ["showHeader", controlledProps["showHeader"]],
    ["showFooter", controlledProps["showFooter"]],
    ["initialCollapse", controlledProps["initialCollapse"]],
    ["collapsed", controlledProps["collapsed"]],
    ["collapsible", controlledProps["collapsible"]],
    ["icon", controlledProps["icon"]],
    ["targetOfSidebarItem", controlledProps["targetOfSidebarItem"]],
    ["activeSidebarItem", controlledProps["activeSidebarItem"]],
    ["isActionItem", controlledProps["isActionItem"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';

export function IfxSidebarExample() {
  const handleSidebarNavigationItem = (event: CustomEvent) => {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  };

  const handleSidebarActionItem = (event: CustomEvent) => {
    console.log('ifxSidebarActionItem:', event);
    // Add your handler logic here
  };

  const handleSidebarMenu = (event: CustomEvent) => {
    console.log('ifxSidebarMenu:', event);
    // Add your handler logic here
  };

  const handleSidebarCollapseChange = (event: CustomEvent) => {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxSidebar
        applicationName="Application Name"
        termsOfUse="https://yourwebsite.com/terms"
        imprint="https://yourwebsite.com/imprint"
        privacyPolicy="https://yourwebsite.com/privacy-policy"
        copyrightText="© 1999 - 2026 Infineon Technologies AG"
        onIfxSidebarCollapseChange={handleSidebarCollapseChange}
        __CONTROLLED_PROPS__>
        <IfxSidebarTitle>
          Menu Items
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16"
          onIfxSidebarNavigationItem={handleSidebarNavigationItem}
          onIfxSidebarActionItem={handleSidebarActionItem}
          onIfxSidebarMenu={handleSidebarMenu}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon="image-16">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem icon="image-16">
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem active={true}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>
          Items group
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_self"
          icon="image-16"
          numberIndicator=""
          isactionitem={false}
          active={false}>
          Item 1
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Item 2
        </IfxSidebarItem>
      </IfxSidebar>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxSidebar
        applicationName="Application Name"
        termsOfUse="https://yourwebsite.com/terms"
        imprint="https://yourwebsite.com/imprint"
        privacyPolicy="https://yourwebsite.com/privacy-policy"
        copyrightText="© 1999 - 2026 Infineon Technologies AG"
        onIfxSidebarCollapseChange={handleSidebarCollapseChange}
        {...controlledProps}>
        <IfxSidebarTitle>
          Menu Items
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16"
          onIfxSidebarNavigationItem={handleSidebarNavigationItem}
          onIfxSidebarActionItem={handleSidebarActionItem}
          onIfxSidebarMenu={handleSidebarMenu}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon="image-16">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem icon="image-16">
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem active={true}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>
          Items group
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_self"
          icon="image-16"
          numberIndicator=""
          isactionitem={false}
          active={false}>
          Item 1
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Item 2
        </IfxSidebarItem>
      </IfxSidebar>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleShowHeader}>Toggle ShowHeader</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowFooter}>Toggle ShowFooter</IfxButton>
        <IfxButton variant="secondary" onClick={toggleInitialCollapse}>Toggle InitialCollapse</IfxButton>
        <IfxButton variant="secondary" onClick={toggleCollapsed}>Toggle Collapsed</IfxButton>
        <IfxButton variant="secondary" onClick={toggleCollapsible}>Toggle Collapsible</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTargetOfSidebarItem}>Toggle TargetOfSidebarItem</IfxButton>
        <IfxButton variant="secondary" onClick={toggleActiveSidebarItem}>Toggle ActiveSidebarItem</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIsActionItem}>Toggle IsActionItem</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>showHeader:</b> {String(showHeader)}</div>
          <div><b>showFooter:</b> {String(showFooter)}</div>
          <div><b>initialCollapse:</b> {String(initialCollapse)}</div>
          <div><b>collapsed:</b> {String(collapsed)}</div>
          <div><b>collapsible:</b> {String(collapsible)}</div>
          <div><b>icon:</b> {String(iconOptions[iconIndex])}</div>
          <div><b>targetOfSidebarItem:</b> {String(targetOfSidebarItemOptions[targetOfSidebarItemIndex])}</div>
          <div><b>activeSidebarItem:</b> {String(activeSidebarItem)}</div>
          <div><b>isActionItem:</b> {String(isActionItem)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

