import { useState } from 'react';
import { IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSidebarExample() {
  const [applicationName, setApplicationName] = useState("Application Name");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [initialCollapse, setInitialCollapse] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [collapsible, setCollapsible] = useState(false);
  const positionOptions = ["left","right"];
  const [positionIndex, setPositionIndex] = useState(0);
  const [imprint, setImprint] = useState("https://yourwebsite.com/imprint");
  const [termsOfUse, setTermsOfUse] = useState("https://yourwebsite.com/terms");
  const [privacyPolicy, setPrivacyPolicy] = useState("https://yourwebsite.com/privacy-policy");
  const [copyrightText, setCopyrightText] = useState("© 1999 - 2026 Infineon Technologies AG");
  const iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  const [iconIndex, setIconIndex] = useState(0);
  const [hrefOfSidebarItem, setHrefOfSidebarItem] = useState("https://google.com");
  const targetOfSidebarItemOptions = ["_self"];
  const [targetOfSidebarItemIndex, setTargetOfSidebarItemIndex] = useState(0);
  const [numberIndicatorOfSidebarItem, setNumberIndicatorOfSidebarItem] = useState("");
  const [activeSidebarItem, setActiveSidebarItem] = useState(false);
  const [isActionItem, setIsActionItem] = useState(false);
  const [hideMenuLabel, setHideMenuLabel] = useState("Hide Menu");
  const [logoHref, setLogoHref] = useState("http://google.com");
  const logoHrefTargetOptions = ["_self","_blank","_parent"];
  const [logoHrefTargetIndex, setLogoHrefTargetIndex] = useState(0);
  const footerHrefTargetOptions = ["_self","_blank","_parent"];
  const [footerHrefTargetIndex, setFooterHrefTargetIndex] = useState(1);

  const handleApplicationNameChange = (value: string) => setApplicationName(value);
  const handleShowHeaderChange = () => setShowHeader((v) => !v);
  const handleShowFooterChange = () => setShowFooter((v) => !v);
  const handleInitialCollapseChange = () => setInitialCollapse((v) => !v);
  const handleCollapsedChange = () => setCollapsed((v) => !v);
  const handleCollapsibleChange = () => setCollapsible((v) => !v);
  const handlePositionChange = () => setPositionIndex((i) => (i + 1) % positionOptions.length);
  const handleImprintChange = (value: string) => setImprint(value);
  const handleTermsOfUseChange = (value: string) => setTermsOfUse(value);
  const handlePrivacyPolicyChange = (value: string) => setPrivacyPolicy(value);
  const handleCopyrightTextChange = (value: string) => setCopyrightText(value);
  const handleIconChange = () => setIconIndex((i) => (i + 1) % iconOptions.length);
  const handleHrefOfSidebarItemChange = (value: string) => setHrefOfSidebarItem(value);
  const handleTargetOfSidebarItemChange = () => setTargetOfSidebarItemIndex((i) => (i + 1) % targetOfSidebarItemOptions.length);
  const handleNumberIndicatorOfSidebarItemChange = (value: string) => setNumberIndicatorOfSidebarItem(value);
  const handleActiveSidebarItemChange = () => setActiveSidebarItem((v) => !v);
  const handleIsActionItemChange = () => setIsActionItem((v) => !v);
  const handleHideMenuLabelChange = (value: string) => setHideMenuLabel(value);
  const handleLogoHrefChange = (value: string) => setLogoHref(value);
  const handleLogoHrefTargetChange = () => setLogoHrefTargetIndex((i) => (i + 1) % logoHrefTargetOptions.length);
  const handleFooterHrefTargetChange = () => setFooterHrefTargetIndex((i) => (i + 1) % footerHrefTargetOptions.length);

  const controlledProps = {
    "applicationName": applicationName,
    "showHeader": showHeader,
    "showFooter": showFooter,
    "initialCollapse": initialCollapse,
    "collapsed": collapsed,
    "collapsible": collapsible,
    "position": positionOptions[positionIndex],
    "imprint": imprint,
    "termsOfUse": termsOfUse,
    "privacyPolicy": privacyPolicy,
    "copyrightText": copyrightText,
    "icon": iconOptions[iconIndex],
    "hrefOfSidebarItem": hrefOfSidebarItem,
    "targetOfSidebarItem": targetOfSidebarItemOptions[targetOfSidebarItemIndex],
    "numberIndicatorOfSidebarItem": numberIndicatorOfSidebarItem,
    "activeSidebarItem": activeSidebarItem,
    "isActionItem": isActionItem,
    "hideMenuLabel": hideMenuLabel,
    "logoHref": logoHref,
    "logoHrefTarget": logoHrefTargetOptions[logoHrefTargetIndex],
    "footerHrefTarget": footerHrefTargetOptions[footerHrefTargetIndex],
  } as Record<string, unknown>;
  const handleSidebarCollapseChange = (event: CustomEvent) => {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  };

  const handleSidebarLogoClick = (event: CustomEvent) => {
    console.log('ifxSidebarLogoClick:', event);
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

  const handleSidebarNavigationItem = (event: CustomEvent) => {
    console.log('ifxSidebarNavigationItem:', event);
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
    ["applicationName", controlledProps["applicationName"]],
    ["showHeader", controlledProps["showHeader"]],
    ["showFooter", controlledProps["showFooter"]],
    ["initialCollapse", controlledProps["initialCollapse"]],
    ["collapsed", controlledProps["collapsed"]],
    ["collapsible", controlledProps["collapsible"]],
    ["position", controlledProps["position"]],
    ["imprint", controlledProps["imprint"]],
    ["termsOfUse", controlledProps["termsOfUse"]],
    ["privacyPolicy", controlledProps["privacyPolicy"]],
    ["copyrightText", controlledProps["copyrightText"]],
    ["icon", controlledProps["icon"]],
    ["hrefOfSidebarItem", controlledProps["hrefOfSidebarItem"]],
    ["targetOfSidebarItem", controlledProps["targetOfSidebarItem"]],
    ["numberIndicatorOfSidebarItem", controlledProps["numberIndicatorOfSidebarItem"]],
    ["activeSidebarItem", controlledProps["activeSidebarItem"]],
    ["isActionItem", controlledProps["isActionItem"]],
    ["hideMenuLabel", controlledProps["hideMenuLabel"]],
    ["logoHref", controlledProps["logoHref"]],
    ["logoHrefTarget", controlledProps["logoHrefTarget"]],
    ["footerHrefTarget", controlledProps["footerHrefTarget"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';

export function IfxSidebarExample() {
  const handleSidebarCollapseChange = (event: CustomEvent) => {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  };

  const handleSidebarLogoClick = (event: CustomEvent) => {
    console.log('ifxSidebarLogoClick:', event);
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

  const handleSidebarNavigationItem = (event: CustomEvent) => {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  };

  return (
      <IfxSidebar
        footerTarget="_blank"
        onIfxSidebarCollapseChange={handleSidebarCollapseChange}
        onIfxSidebarLogoClick={handleSidebarLogoClick}
        __CONTROLLED_PROPS__>
        <IfxSidebarTitle>
          Menu Items
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          onIfxSidebarActionItem={handleSidebarActionItem}
          onIfxSidebarMenu={handleSidebarMenu}
          onIfxSidebarNavigationItem={handleSidebarNavigationItem}
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
            <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem
              active={true}
              icon={String(controlledProps.icon ?? "")}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
              Sub menu item
            </IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>
          Items group
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_self"
          numberIndicator=""
          isactionitem={false}
          active={false}
          icon={String(controlledProps.icon ?? "")}>
          Item 1
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Item 2
        </IfxSidebarItem>
      </IfxSidebar>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSidebar
        footerTarget="_blank"
        onIfxSidebarCollapseChange={handleSidebarCollapseChange}
        onIfxSidebarLogoClick={handleSidebarLogoClick}
        {...(controlledProps as any)}>
        <IfxSidebarTitle>
          Menu Items
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          onIfxSidebarActionItem={handleSidebarActionItem}
          onIfxSidebarMenu={handleSidebarMenu}
          onIfxSidebarNavigationItem={handleSidebarNavigationItem}
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
            <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem
              active={true}
              icon={String(controlledProps.icon ?? "")}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem icon={String(controlledProps.icon ?? "")}>
              Sub menu item
            </IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon={String(controlledProps.icon ?? "")}>
            Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>
          Items group
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_self"
          numberIndicator=""
          isactionitem={false}
          active={false}
          icon={String(controlledProps.icon ?? "")}>
          Item 1
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon={String(controlledProps.icon ?? "")}>
          Item 2
        </IfxSidebarItem>
      </IfxSidebar>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleShowHeaderChange}>Toggle ShowHeader</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowFooterChange}>Toggle ShowFooter</IfxButton>
        <IfxButton variant="secondary" onClick={handleInitialCollapseChange}>Toggle InitialCollapse</IfxButton>
        <IfxButton variant="secondary" onClick={handleCollapsedChange}>Toggle Collapsed</IfxButton>
        <IfxButton variant="secondary" onClick={handleCollapsibleChange}>Toggle Collapsible</IfxButton>
        <IfxButton variant="secondary" onClick={handlePositionChange}>Toggle Position</IfxButton>
        <IfxButton variant="secondary" onClick={handleIconChange}>Toggle Icon</IfxButton>
        <IfxButton variant="secondary" onClick={handleTargetOfSidebarItemChange}>Toggle TargetOfSidebarItem</IfxButton>
        <IfxButton variant="secondary" onClick={handleActiveSidebarItemChange}>Toggle ActiveSidebarItem</IfxButton>
        <IfxButton variant="secondary" onClick={handleIsActionItemChange}>Toggle IsActionItem</IfxButton>
        <IfxButton variant="secondary" onClick={handleLogoHrefTargetChange}>Toggle LogoHrefTarget</IfxButton>
        <IfxButton variant="secondary" onClick={handleFooterHrefTargetChange}>Toggle FooterHrefTarget</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="applicationName" type="text" value={String(applicationName)} onInput={(event) => handleApplicationNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="imprint" type="text" value={String(imprint)} onInput={(event) => handleImprintChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="termsOfUse" type="text" value={String(termsOfUse)} onInput={(event) => handleTermsOfUseChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="privacyPolicy" type="text" value={String(privacyPolicy)} onInput={(event) => handlePrivacyPolicyChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="copyrightText" type="text" value={String(copyrightText)} onInput={(event) => handleCopyrightTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="hrefOfSidebarItem" type="text" value={String(hrefOfSidebarItem)} onInput={(event) => handleHrefOfSidebarItemChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="numberIndicatorOfSidebarItem" type="text" value={String(numberIndicatorOfSidebarItem)} onInput={(event) => handleNumberIndicatorOfSidebarItemChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="hideMenuLabel" type="text" value={String(hideMenuLabel)} onInput={(event) => handleHideMenuLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="logoHref" type="text" value={String(logoHref)} onInput={(event) => handleLogoHrefChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>applicationName:</b> {String(applicationName)}</div>
          <div><b>showHeader:</b> {String(showHeader)}</div>
          <div><b>showFooter:</b> {String(showFooter)}</div>
          <div><b>initialCollapse:</b> {String(initialCollapse)}</div>
          <div><b>collapsed:</b> {String(collapsed)}</div>
          <div><b>collapsible:</b> {String(collapsible)}</div>
          <div><b>position:</b> {String(positionOptions[positionIndex])}</div>
          <div><b>imprint:</b> {String(imprint)}</div>
          <div><b>termsOfUse:</b> {String(termsOfUse)}</div>
          <div><b>privacyPolicy:</b> {String(privacyPolicy)}</div>
          <div><b>copyrightText:</b> {String(copyrightText)}</div>
          <div><b>icon:</b> {String(iconOptions[iconIndex])}</div>
          <div><b>hrefOfSidebarItem:</b> {String(hrefOfSidebarItem)}</div>
          <div><b>targetOfSidebarItem:</b> {String(targetOfSidebarItemOptions[targetOfSidebarItemIndex])}</div>
          <div><b>numberIndicatorOfSidebarItem:</b> {String(numberIndicatorOfSidebarItem)}</div>
          <div><b>activeSidebarItem:</b> {String(activeSidebarItem)}</div>
          <div><b>isActionItem:</b> {String(isActionItem)}</div>
          <div><b>hideMenuLabel:</b> {String(hideMenuLabel)}</div>
          <div><b>logoHref:</b> {String(logoHref)}</div>
          <div><b>logoHrefTarget:</b> {String(logoHrefTargetOptions[logoHrefTargetIndex])}</div>
          <div><b>footerHrefTarget:</b> {String(footerHrefTargetOptions[footerHrefTargetIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

