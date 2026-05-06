<script setup lang="ts">
import { computed, ref } from 'vue';

import { IfxButton, IfxTab, IfxTabs, IfxTextField } from '@infineon/infineon-design-system-vue';

const orientationOptions = ["horizontal","vertical"];
const orientationIndex = ref(0);
const iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
const iconIndex = ref(0);
const fullWidth = ref(false);
const iconPositionOptions = ["left","right"];
const iconPositionIndex = ref(0);
const activeTabIndex = ref("0");
const header = ref("Tab");
const subline = ref("");
const disabled = ref(false);
const label = ref("");
const number = ref("0");
const positionSticky = ref(false);

const handleOrientationChange = () => { orientationIndex.value = (orientationIndex.value + 1) % orientationOptions.length; };
const handleIconChange = () => { iconIndex.value = (iconIndex.value + 1) % iconOptions.length; };
const handleFullWidthChange = () => { fullWidth.value = !fullWidth.value; };
const handleIconPositionChange = () => { iconPositionIndex.value = (iconPositionIndex.value + 1) % iconPositionOptions.length; };
const handleActiveTabIndexChange = (nextValue: string) => { activeTabIndex.value = nextValue; };
const handleHeaderChange = (nextValue: string) => { header.value = nextValue; };
const handleSublineChange = (nextValue: string) => { subline.value = nextValue; };
const handleDisabledChange = () => { disabled.value = !disabled.value; };
const handleLabelChange = (nextValue: string) => { label.value = nextValue; };
const handleNumberChange = (nextValue: string) => { number.value = nextValue; };
const handlePositionStickyChange = () => { positionSticky.value = !positionSticky.value; };

const controlledProps = computed<Record<string, unknown>>(() => ({
  "orientation": orientationOptions[orientationIndex.value],
  "icon": iconOptions[iconIndex.value],
  "fullWidth": fullWidth.value,
  "iconPosition": iconPositionOptions[iconPositionIndex.value],
  "activeTabIndex": activeTabIndex.value,
  "header": header.value,
  "subline": subline.value,
  "disabled": disabled.value,
  "label": label.value,
  "number": number.value,
  "positionSticky": positionSticky.value,
}));

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleTabHeaderChange = (event: CustomEvent) => {
  console.log('tabHeaderChange:', event);
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
  ["orientation", orientationOptions[orientationIndex.value]],
  ["icon", iconOptions[iconIndex.value]],
  ["fullWidth", fullWidth.value],
  ["iconPosition", iconPositionOptions[iconPositionIndex.value]],
  ["activeTabIndex", activeTabIndex.value],
  ["header", header.value],
  ["subline", subline.value],
  ["disabled", disabled.value],
  ["label", label.value],
  ["number", number.value],
  ["positionSticky", positionSticky.value],
]
  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))
  .join('\n'));

const codeTemplate = computed(() => `<script setup lang="ts">
import { IfxTab, IfxTabs } from '@infineon/infineon-design-system-vue';

const handleChange = (event: CustomEvent) => {
  console.log('ifxChange:', event);
  // Add your handler logic here
};

const handleTabHeaderChange = (event: CustomEvent) => {
  console.log('tabHeaderChange:', event);
  // Add your handler logic here
};
${'</'}script>

<template>
  <div>
    <ifx-tabs
      @ifxChange="handleChange"
      __CONTROLLED_PROPS__>
      <ifx-tab
        @tabHeaderChange="handleTabHeaderChange"
        :icon="String(controlledProps.icon ?? '')"
        :icon-position="String(controlledProps.iconPosition ?? 'left')"
        :header="String(controlledProps.header ?? 'Tab')"
        :subline="String(controlledProps.subline ?? '')"
        :disabled="String(controlledProps.disabled ?? 'false')"
        :label="String(controlledProps.label ?? '')"
        :number="String(controlledProps.number ?? '0')"
        :position-sticky="String(controlledProps.positionSticky ?? 'false')">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab
        :icon="String(controlledProps.icon ?? '')"
        :icon-position="String(controlledProps.iconPosition ?? 'left')"
        :header="String(controlledProps.header ?? 'Tab')"
        :subline="String(controlledProps.subline ?? '')"
        :disabled="String(controlledProps.disabled ?? 'false')"
        :label="String(controlledProps.label ?? '')"
        :number="String(controlledProps.number ?? '0')"
        :position-sticky="String(controlledProps.positionSticky ?? 'false')">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab
        :icon="String(controlledProps.icon ?? '')"
        :icon-position="String(controlledProps.iconPosition ?? 'left')"
        :header="String(controlledProps.header ?? 'Tab')"
        :subline="String(controlledProps.subline ?? '')"
        :disabled="String(controlledProps.disabled ?? 'false')"
        :label="String(controlledProps.label ?? '')"
        :number="String(controlledProps.number ?? '0')"
        :position-sticky="String(controlledProps.positionSticky ?? 'false')">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
    </ifx-tabs>
  </div>
${'</'}template>`.replace("__CONTROLLED_PROPS__", controlledPropsCode.value));

const codeString = codeTemplate;
</script>

<template>
  <div>
    <ifx-tabs
      @ifxChange="handleChange"
      v-bind="controlledProps">
      <ifx-tab
        @tabHeaderChange="handleTabHeaderChange"
        :icon="String(controlledProps.icon ?? '')"
        :icon-position="String(controlledProps.iconPosition ?? 'left')"
        :header="String(controlledProps.header ?? 'Tab')"
        :subline="String(controlledProps.subline ?? '')"
        :disabled="String(controlledProps.disabled ?? 'false')"
        :label="String(controlledProps.label ?? '')"
        :number="String(controlledProps.number ?? '0')"
        :position-sticky="String(controlledProps.positionSticky ?? 'false')">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab
        :icon="String(controlledProps.icon ?? '')"
        :icon-position="String(controlledProps.iconPosition ?? 'left')"
        :header="String(controlledProps.header ?? 'Tab')"
        :subline="String(controlledProps.subline ?? '')"
        :disabled="String(controlledProps.disabled ?? 'false')"
        :label="String(controlledProps.label ?? '')"
        :number="String(controlledProps.number ?? '0')"
        :position-sticky="String(controlledProps.positionSticky ?? 'false')">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
      <ifx-tab
        :icon="String(controlledProps.icon ?? '')"
        :icon-position="String(controlledProps.iconPosition ?? 'left')"
        :header="String(controlledProps.header ?? 'Tab')"
        :subline="String(controlledProps.subline ?? '')"
        :disabled="String(controlledProps.disabled ?? 'false')"
        :label="String(controlledProps.label ?? '')"
        :number="String(controlledProps.number ?? '0')"
        :position-sticky="String(controlledProps.positionSticky ?? 'false')">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </ifx-tab>
    </ifx-tabs>
    <h3 class="controls-title">Controls</h3>
    <div class="controls controls-toggle">
        <ifx-button variant="secondary" @click="handleOrientationChange">Toggle Orientation</ifx-button>
        <ifx-button variant="secondary" @click="handleIconChange">Toggle Icon</ifx-button>
        <ifx-button variant="secondary" @click="handleFullWidthChange">Toggle FullWidth</ifx-button>
        <ifx-button variant="secondary" @click="handleIconPositionChange">Toggle IconPosition</ifx-button>
        <ifx-button variant="secondary" @click="handleDisabledChange">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" @click="handlePositionStickyChange">Toggle PositionSticky</ifx-button>
    </div>
    <div class="controls controls-input">
        <ifx-text-field label="activeTabIndex" type="text" :value="String(activeTabIndex)" @input="handleActiveTabIndexChange(getInputValue($event))" />
        <ifx-text-field label="header" type="text" :value="String(header)" @input="handleHeaderChange(getInputValue($event))" />
        <ifx-text-field label="subline" type="text" :value="String(subline)" @input="handleSublineChange(getInputValue($event))" />
        <ifx-text-field label="label" type="text" :value="String(label)" @input="handleLabelChange(getInputValue($event))" />
        <ifx-text-field label="number" type="text" :value="String(number)" @input="handleNumberChange(getInputValue($event))" />
    </div>

    <div class="state">
      <div><b>orientation:</b> {{ String(orientationOptions[orientationIndex]) }}</div>
      <div><b>icon:</b> {{ String(iconOptions[iconIndex]) }}</div>
      <div><b>fullWidth:</b> {{ String(fullWidth) }}</div>
      <div><b>iconPosition:</b> {{ String(iconPositionOptions[iconPositionIndex]) }}</div>
      <div><b>activeTabIndex:</b> {{ String(activeTabIndex) }}</div>
      <div><b>header:</b> {{ String(header) }}</div>
      <div><b>subline:</b> {{ String(subline) }}</div>
      <div><b>disabled:</b> {{ String(disabled) }}</div>
      <div><b>label:</b> {{ String(label) }}</div>
      <div><b>number:</b> {{ String(number) }}</div>
      <div><b>positionSticky:</b> {{ String(positionSticky) }}</div>
    </div>
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
