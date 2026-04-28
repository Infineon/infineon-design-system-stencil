<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-vue';

const applicationName = ref("Application name");
const navbarPositionFixed = ref(false);
const showLogoAndAppname = ref(true);
const logoHref = ref("http://google.com");
const logoHrefTargetOptions = ["_self","_blank","_parent"];
const logoHrefTargetIndex = ref(0);
const showLabelOfNavbarItem = ref(true);
const iconOfNavbarItemOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
const iconOfNavbarItemIndex = ref(0);
const numberIndicator = ref(0);
const dotIndicator = ref(false);
const hrefOfNavbarItem = ref("");
const targetOfnavbarItemOptions = ["_self"];
const targetOfnavbarItemIndex = ref(0);
const hideOnMobile = ref(true);
const showNavbarProfileLabel = ref(true);
const href = ref("http://google.com");
const profileImageUrl = ref("");
const targetOptions = ["_self"];
const targetIndex = ref(0);
const alt = ref("profile image");
const userName = ref("");
const searchBarIsOpen = ref(false);
const searchBarPositionOptions = ["left","right"];
const searchBarPositionIndex = ref(0);

const toggleApplicationName = (nextValue: string) => { applicationName.value = nextValue; };
const toggleNavbarPositionFixed = () => { navbarPositionFixed.value = !navbarPositionFixed.value; };
const toggleShowLogoAndAppname = () => { showLogoAndAppname.value = !showLogoAndAppname.value; };
const toggleLogoHref = (nextValue: string) => { logoHref.value = nextValue; };
const toggleLogoHrefTarget = () => { logoHrefTargetIndex.value = (logoHrefTargetIndex.value + 1) % logoHrefTargetOptions.length; };
const toggleShowLabelOfNavbarItem = () => { showLabelOfNavbarItem.value = !showLabelOfNavbarItem.value; };
const toggleIconOfNavbarItem = () => { iconOfNavbarItemIndex.value = (iconOfNavbarItemIndex.value + 1) % iconOfNavbarItemOptions.length; };
const toggleNumberIndicator = (nextValue: string) => { numberIndicator.value = Number(nextValue); };
const toggleDotIndicator = () => { dotIndicator.value = !dotIndicator.value; };
const toggleHrefOfNavbarItem = (nextValue: string) => { hrefOfNavbarItem.value = nextValue; };
const toggleTargetOfnavbarItem = () => { targetOfnavbarItemIndex.value = (targetOfnavbarItemIndex.value + 1) % targetOfnavbarItemOptions.length; };
const toggleHideOnMobile = () => { hideOnMobile.value = !hideOnMobile.value; };
const toggleShowNavbarProfileLabel = () => { showNavbarProfileLabel.value = !showNavbarProfileLabel.value; };
const toggleHref = (nextValue: string) => { href.value = nextValue; };
const toggleProfileImageUrl = (nextValue: string) => { profileImageUrl.value = nextValue; };
const toggleTarget = () => { targetIndex.value = (targetIndex.value + 1) % targetOptions.length; };
const toggleAlt = (nextValue: string) => { alt.value = nextValue; };
const toggleUserName = (nextValue: string) => { userName.value = nextValue; };
const toggleSearchBarIsOpen = () => { searchBarIsOpen.value = !searchBarIsOpen.value; };
const toggleSearchBarPosition = () => { searchBarPositionIndex.value = (searchBarPositionIndex.value + 1) % searchBarPositionOptions.length; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "applicationName": applicationName.value,
  "navbarPositionFixed": navbarPositionFixed.value,
  "showLogoAndAppname": showLogoAndAppname.value,
  "logoHref": logoHref.value,
  "logoHrefTarget": logoHrefTargetOptions[logoHrefTargetIndex.value],
  "showLabelOfNavbarItem": showLabelOfNavbarItem.value,
  "iconOfNavbarItem": iconOfNavbarItemOptions[iconOfNavbarItemIndex.value],
  "numberIndicator": numberIndicator.value,
  "dotIndicator": dotIndicator.value,
  "hrefOfNavbarItem": hrefOfNavbarItem.value,
  "targetOfnavbarItem": targetOfnavbarItemOptions[targetOfnavbarItemIndex.value],
  "hideOnMobile": hideOnMobile.value,
  "showNavbarProfileLabel": showNavbarProfileLabel.value,
  "href": href.value,
  "profileImageUrl": profileImageUrl.value,
  "target": targetOptions[targetIndex.value],
  "alt": alt.value,
  "userName": userName.value,
  "searchBarIsOpen": searchBarIsOpen.value,
  "searchBarPosition": searchBarPositionOptions[searchBarPositionIndex.value],
}));

const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
  console.log('ifxNavbarMobileMenuIsOpen:', event);
  // Add your handler logic here
};

const handleNavItem = (event: CustomEvent) => {
  console.log('ifxNavItem:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};

const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");

const formatPropValueForCode = (name: string, value: unknown): string => {
  if (typeof value === 'boolean') return ':' + name + '="' + String(value) + '"';
  if (typeof value === 'number') return ':' + name + '="' + String(value) + '"';
  if (value === null) return ':' + name + '="null"';
  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    const escaped = JSON.stringify(value).replace(/'/g, "\\'");
    return ":" + name + "='" + escaped + "'";
  }
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return name + '="' + escaped + '"';
};

const controlledPropsCode = computed(() => [
  ["applicationName", applicationName.value],
  ["navbarPositionFixed", navbarPositionFixed.value],
  ["showLogoAndAppname", showLogoAndAppname.value],
  ["logoHref", logoHref.value],
  ["logoHrefTarget", logoHrefTargetOptions[logoHrefTargetIndex.value]],
  ["showLabelOfNavbarItem", showLabelOfNavbarItem.value],
  ["iconOfNavbarItem", iconOfNavbarItemOptions[iconOfNavbarItemIndex.value]],
  ["numberIndicator", numberIndicator.value],
  ["dotIndicator", dotIndicator.value],
  ["hrefOfNavbarItem", hrefOfNavbarItem.value],
  ["targetOfnavbarItem", targetOfnavbarItemOptions[targetOfnavbarItemIndex.value]],
  ["hideOnMobile", hideOnMobile.value],
  ["showNavbarProfileLabel", showNavbarProfileLabel.value],
  ["href", href.value],
  ["profileImageUrl", profileImageUrl.value],
  ["target", targetOptions[targetIndex.value]],
  ["alt", alt.value],
  ["userName", userName.value],
  ["searchBarIsOpen", searchBarIsOpen.value],
  ["searchBarPosition", searchBarPositionOptions[searchBarPositionIndex.value]],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-vue';

const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
  console.log('ifxNavbarMobileMenuIsOpen:', event);
  // Add your handler logic here
};

const handleNavItem = (event: CustomEvent) => {
  console.log('ifxNavItem:', event);
  // Add your handler logic here
};

const handleInput = (event: CustomEvent) => {
  console.log('ifxInput:', event);
  // Add your handler logic here
};

const handleOpen = (event: CustomEvent) => {
  console.log('ifxOpen:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-navbar
      :fixed="false"
      @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
      __CONTROLLED_PROPS__>
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        :hide-on-mobile="true"
        @ifxNavItem="handleNavItem">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        :show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar
        slot="search-bar-left"
        :is-open="false"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        :dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        :show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-navbar
      :fixed="false"
      @ifxNavbarMobileMenuIsOpen="handleNavbarMobileMenuIsOpen"
      v-bind="controlledProps">
      <ifx-navbar-item
        icon=""
        slot="left-item"
        target="_self"
        href=""
        :hide-on-mobile="true"
        @ifxNavItem="handleNavItem">
        <ifx-navbar-item icon="">
          <ifx-navbar-item>
            <ifx-navbar-item
              href="http://google.com"
              target="_blank">
              Link Layer 3 Nested Item 1
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 2
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 3
            </ifx-navbar-item>
            <ifx-navbar-item>
              Layer 3 Nested Item 4
            </ifx-navbar-item>
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 3
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 4
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Nested Item 5
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 1
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 2
          </ifx-navbar-item>
          <ifx-navbar-item>
            Layer 2 Item 3
          </ifx-navbar-item>
        </ifx-navbar-item>
        <ifx-navbar-item>
          Nested Item 3
        </ifx-navbar-item>
        <ifx-navbar-item>
          <ifx-navbar-item>
            Nested Item 4
          </ifx-navbar-item>
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-navbar-item
        href=""
        target="_self"
        slot="left-item"
        icon=""
        :show-label="true">
        Menu Item
      </ifx-navbar-item>
      <ifx-navbar-item slot="left-item">
        <ifx-navbar-item>
          Item1
        </ifx-navbar-item>
        <ifx-navbar-item>
          Item2
        </ifx-navbar-item>
      </ifx-navbar-item>
      <ifx-search-bar
        slot="search-bar-left"
        :is-open="false"
        @ifxInput="handleInput"
        @ifxOpen="handleOpen" />
      <ifx-navbar-item
        number-indicator=""
        slot="right-item"
        target="_blank"
        href="http://google.com"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-item
        :dot-indicator="false"
        slot="right-item"
        hide-on-mobile=""
        :show-label="false"
        icon="image-16" />
      <ifx-navbar-profile
        user-name=""
        slot="right-item"
        image-url=""
        :show-label="true"
        href=""
        target="_self"
        alt="profile image" />
    </ifx-navbar>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="toggleNavbarPositionFixed">Toggle NavbarPositionFixed</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowLogoAndAppname">Toggle ShowLogoAndAppname</ifx-button>
        <ifx-button variant="secondary" @click="toggleLogoHrefTarget">Toggle LogoHrefTarget</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowLabelOfNavbarItem">Toggle ShowLabelOfNavbarItem</ifx-button>
        <ifx-button variant="secondary" @click="toggleIconOfNavbarItem">Toggle IconOfNavbarItem</ifx-button>
        <ifx-button variant="secondary" @click="toggleDotIndicator">Toggle DotIndicator</ifx-button>
        <ifx-button variant="secondary" @click="toggleTargetOfnavbarItem">Toggle TargetOfnavbarItem</ifx-button>
        <ifx-button variant="secondary" @click="toggleHideOnMobile">Toggle HideOnMobile</ifx-button>
        <ifx-button variant="secondary" @click="toggleShowNavbarProfileLabel">Toggle ShowNavbarProfileLabel</ifx-button>
        <ifx-button variant="secondary" @click="toggleTarget">Toggle Target</ifx-button>
        <ifx-button variant="secondary" @click="toggleSearchBarIsOpen">Toggle SearchBarIsOpen</ifx-button>
        <ifx-button variant="secondary" @click="toggleSearchBarPosition">Toggle SearchBarPosition</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="applicationName" type="text" :value="String(applicationName)" @input="toggleApplicationName(getInputValue($event))" />
        <ifx-text-field label="logoHref" type="text" :value="String(logoHref)" @input="toggleLogoHref(getInputValue($event))" />
        <ifx-text-field label="numberIndicator" type="text" :value="String(numberIndicator)" @input="toggleNumberIndicator(getInputValue($event))" />
        <ifx-text-field label="hrefOfNavbarItem" type="text" :value="String(hrefOfNavbarItem)" @input="toggleHrefOfNavbarItem(getInputValue($event))" />
        <ifx-text-field label="href" type="text" :value="String(href)" @input="toggleHref(getInputValue($event))" />
        <ifx-text-field label="profileImageUrl" type="text" :value="String(profileImageUrl)" @input="toggleProfileImageUrl(getInputValue($event))" />
        <ifx-text-field label="alt" type="text" :value="String(alt)" @input="toggleAlt(getInputValue($event))" />
        <ifx-text-field label="userName" type="text" :value="String(userName)" @input="toggleUserName(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>applicationName:</b> {{ String(applicationName) }}</div>
      <div><b>navbarPositionFixed:</b> {{ String(navbarPositionFixed) }}</div>
      <div><b>showLogoAndAppname:</b> {{ String(showLogoAndAppname) }}</div>
      <div><b>logoHref:</b> {{ String(logoHref) }}</div>
      <div><b>logoHrefTarget:</b> {{ String(logoHrefTargetOptions[logoHrefTargetIndex]) }}</div>
      <div><b>showLabelOfNavbarItem:</b> {{ String(showLabelOfNavbarItem) }}</div>
      <div><b>iconOfNavbarItem:</b> {{ String(iconOfNavbarItemOptions[iconOfNavbarItemIndex]) }}</div>
      <div><b>numberIndicator:</b> {{ String(numberIndicator) }}</div>
      <div><b>dotIndicator:</b> {{ String(dotIndicator) }}</div>
      <div><b>hrefOfNavbarItem:</b> {{ String(hrefOfNavbarItem) }}</div>
      <div><b>targetOfnavbarItem:</b> {{ String(targetOfnavbarItemOptions[targetOfnavbarItemIndex]) }}</div>
      <div><b>hideOnMobile:</b> {{ String(hideOnMobile) }}</div>
      <div><b>showNavbarProfileLabel:</b> {{ String(showNavbarProfileLabel) }}</div>
      <div><b>href:</b> {{ String(href) }}</div>
      <div><b>profileImageUrl:</b> {{ String(profileImageUrl) }}</div>
      <div><b>target:</b> {{ String(targetOptions[targetIndex]) }}</div>
      <div><b>alt:</b> {{ String(alt) }}</div>
      <div><b>userName:</b> {{ String(userName) }}</div>
      <div><b>searchBarIsOpen:</b> {{ String(searchBarIsOpen) }}</div>
      <div><b>searchBarPosition:</b> {{ String(searchBarPositionOptions[searchBarPositionIndex]) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
