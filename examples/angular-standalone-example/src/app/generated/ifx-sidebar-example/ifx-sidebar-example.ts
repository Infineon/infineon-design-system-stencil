import { IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-sidebar-example',
  imports: [ IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle, IfxTextField ],
  templateUrl: './ifx-sidebar-example.html',
  styleUrl: './ifx-sidebar-example.scss'
})
export class IfxSidebarExample {
  protected readonly tsCode = `import { IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-sidebar-example',
  imports: [ IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle, IfxTextField ],
  templateUrl: './ifx-sidebar-example.html',
  styleUrl: './ifx-sidebar-example.scss'
})
export class IfxSidebarExample {

  protected applicationName = "Application Name";
  protected showHeader = true;
  protected showFooter = true;
  protected initialCollapse = true;
  protected collapsed = false;
  protected collapsible = false;
  protected readonly positionOptions = ["left","right"];
  protected positionIndex = 0;
  protected imprint = "https://yourwebsite.com/imprint";
  protected termsOfUse = "https://yourwebsite.com/terms";
  protected privacyPolicy = "https://yourwebsite.com/privacy-policy";
  protected copyrightText = "© 1999 - 2026 Infineon Technologies AG";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected hideMenuLabel = "Hide Menu";
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;
  protected readonly footerHrefTargetOptions = ["_self","_blank","_parent"];
  protected footerHrefTargetIndex = 1;

  protected updateApplicationName(value: string) {
    this.applicationName = value;
  }

  protected handleShowHeaderChange() {
    this.showHeader = !this.showHeader;
  }

  protected handleShowFooterChange() {
    this.showFooter = !this.showFooter;
  }

  protected handleInitialCollapseChange() {
    this.initialCollapse = !this.initialCollapse;
  }

  protected handleCollapsedChange() {
    this.collapsed = !this.collapsed;
  }

  protected handleCollapsibleChange() {
    this.collapsible = !this.collapsible;
  }

  protected handlePositionChange() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected updateImprint(value: string) {
    this.imprint = value;
  }

  protected updateTermsOfUse(value: string) {
    this.termsOfUse = value;
  }

  protected updatePrivacyPolicy(value: string) {
    this.privacyPolicy = value;
  }

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateHideMenuLabel(value: string) {
    this.hideMenuLabel = value;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected handleLogoHrefTargetChange() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
  }

  protected handleFooterHrefTargetChange() {
    this.footerHrefTargetIndex = (this.footerHrefTargetIndex + 1) % this.footerHrefTargetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleSidebarCollapseChange(event: CustomEvent) {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  }

  protected handleSidebarLogoClick(event: CustomEvent) {
    console.log('ifxSidebarLogoClick:', event);
    // Add your handler logic here
  }

  protected handleSidebarActionItem(event: CustomEvent) {
    console.log('ifxSidebarActionItem:', event);
    // Add your handler logic here
  }

  protected handleSidebarMenu(event: CustomEvent) {
    console.log('ifxSidebarMenu:', event);
    // Add your handler logic here
  }

  protected handleSidebarNavigationItem(event: CustomEvent) {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-sidebar
    footer-target=&quot;_blank&quot;
    [applicationName]=&quot;applicationName&quot;
    [collapsible]=&quot;collapsible&quot;
    [collapsed]=&quot;collapsed&quot;
    [showHeader]=&quot;showHeader&quot;
    [showFooter]=&quot;showFooter&quot;
    [initialCollapse]=&quot;initialCollapse&quot;
    [termsOfUse]=&quot;termsOfUse&quot;
    [imprint]=&quot;imprint&quot;
    [privacyPolicy]=&quot;privacyPolicy&quot;
    [copyrightText]=&quot;copyrightText&quot;
    [position]=&quot;positionOptions[positionIndex]&quot;
    [logoHref]=&quot;logoHref&quot;
    [logoHrefTarget]=&quot;logoHrefTargetOptions[logoHrefTargetIndex]&quot;
    [hideMenuLabel]=&quot;hideMenuLabel&quot;
    [footerHrefTarget]=&quot;footerHrefTargetOptions[footerHrefTargetIndex]&quot;&gt;
    &lt;ifx-sidebar-title
      (ifxSidebarCollapseChange)=&quot;handleSidebarCollapseChange(\$any(\$event))&quot;
      (ifxSidebarLogoClick)=&quot;handleSidebarLogoClick(\$any(\$event))&quot;
      (ifxSidebarActionItem)=&quot;handleSidebarActionItem(\$any(\$event))&quot;
      (ifxSidebarMenu)=&quot;handleSidebarMenu(\$any(\$event))&quot;
      (ifxSidebarNavigationItem)=&quot;handleSidebarNavigationItem(\$any(\$event))&quot;&gt;Menu Items&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      (ifxSidebarCollapseChange)=&quot;handleSidebarCollapseChange(\$any(\$event))&quot;
      (ifxSidebarLogoClick)=&quot;handleSidebarLogoClick(\$any(\$event))&quot;
      (ifxSidebarActionItem)=&quot;handleSidebarActionItem(\$any(\$event))&quot;
      (ifxSidebarMenu)=&quot;handleSidebarMenu(\$any(\$event))&quot;
      (ifxSidebarNavigationItem)=&quot;handleSidebarNavigationItem(\$any(\$event))&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [collapsible]=&quot;collapsible&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [collapsible]=&quot;collapsible&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [collapsible]=&quot;collapsible&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [collapsible]=&quot;collapsible&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      [collapsible]=&quot;collapsible&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [collapsible]=&quot;collapsible&quot;
        [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [collapsible]=&quot;collapsible&quot;
        [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;
        &lt;ifx-sidebar-item
          [collapsible]=&quot;collapsible&quot;
          [icon]=&quot;iconOptions[iconIndex]&quot;
          [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
        &lt;ifx-sidebar-item
          [active]=&quot;true&quot;
          [collapsible]=&quot;collapsible&quot;
          [icon]=&quot;iconOptions[iconIndex]&quot;
          [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
        &lt;ifx-sidebar-item
          [collapsible]=&quot;collapsible&quot;
          [icon]=&quot;iconOptions[iconIndex]&quot;
          [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
      &lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        [collapsible]=&quot;collapsible&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        [collapsible]=&quot;collapsible&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-title&gt;Items group&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_self&quot;
      number-indicator=&quot;&quot;
      isactionitem=&quot;false&quot;
      [active]=&quot;false&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [collapsible]=&quot;collapsible&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Item 1&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [collapsible]=&quot;collapsible&quot;
      [hideMenuLabel]=&quot;hideMenuLabel&quot;&gt;Item 2&lt;/ifx-sidebar-item&gt;
  &lt;/ifx-sidebar&gt;`;

  protected applicationName = "Application Name";
  protected showHeader = true;
  protected showFooter = true;
  protected initialCollapse = true;
  protected collapsed = false;
  protected collapsible = false;
  protected readonly positionOptions = ["left","right"];
  protected positionIndex = 0;
  protected imprint = "https://yourwebsite.com/imprint";
  protected termsOfUse = "https://yourwebsite.com/terms";
  protected privacyPolicy = "https://yourwebsite.com/privacy-policy";
  protected copyrightText = "© 1999 - 2026 Infineon Technologies AG";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected hideMenuLabel = "Hide Menu";
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;
  protected readonly footerHrefTargetOptions = ["_self","_blank","_parent"];
  protected footerHrefTargetIndex = 1;

  protected updateApplicationName(value: string) {
    this.applicationName = value;
  }

  protected handleShowHeaderChange() {
    this.showHeader = !this.showHeader;
  }

  protected handleShowFooterChange() {
    this.showFooter = !this.showFooter;
  }

  protected handleInitialCollapseChange() {
    this.initialCollapse = !this.initialCollapse;
  }

  protected handleCollapsedChange() {
    this.collapsed = !this.collapsed;
  }

  protected handleCollapsibleChange() {
    this.collapsible = !this.collapsible;
  }

  protected handlePositionChange() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected updateImprint(value: string) {
    this.imprint = value;
  }

  protected updateTermsOfUse(value: string) {
    this.termsOfUse = value;
  }

  protected updatePrivacyPolicy(value: string) {
    this.privacyPolicy = value;
  }

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateHideMenuLabel(value: string) {
    this.hideMenuLabel = value;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected handleLogoHrefTargetChange() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
  }

  protected handleFooterHrefTargetChange() {
    this.footerHrefTargetIndex = (this.footerHrefTargetIndex + 1) % this.footerHrefTargetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleSidebarCollapseChange(event: CustomEvent) {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  }

  protected handleSidebarLogoClick(event: CustomEvent) {
    console.log('ifxSidebarLogoClick:', event);
    // Add your handler logic here
  }

  protected handleSidebarActionItem(event: CustomEvent) {
    console.log('ifxSidebarActionItem:', event);
    // Add your handler logic here
  }

  protected handleSidebarMenu(event: CustomEvent) {
    console.log('ifxSidebarMenu:', event);
    // Add your handler logic here
  }

  protected handleSidebarNavigationItem(event: CustomEvent) {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  }

}