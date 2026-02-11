<script setup lang="ts">
import { computed, ref } from "vue";
import Navbar from "./components/Navbar.vue";

import Accordion from './components/Accordion.vue'
import ActionList from './components/ActionList.vue'
import TableAdvanced from './components/AdvancedTable.vue'
import Alert from './components/Alert.vue'
import TableBasic from './components/BasicTable.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Chip from './components/Chip.vue'
import ContentSwitcher from './components/ContentSwitcher.vue'
import DatePicker from './components/DatePicker.vue'
import Dropdown from './components/Dropdown.vue'
import FileUpload from './components/FileUpload.vue'
import Footer from './components/Footer.vue'
import Icon from './components/Icon.vue'
import IconButton from './components/IconButton.vue'
import Indicator from './components/Indicator.vue'
import Link from './components/Link.vue'
import Modal from './components/Modal.vue'
import MultiSelect from './components/MultiSelect.vue'
import Notification from './components/Notification.vue'
import Pagination from './components/Pagination.vue'
import ProgressBar from './components/ProgressBar.vue'
import RadioButton from './components/RadioButton.vue'
import RadioButtonGroup from './components/RadioButtonGroup.vue'
import SearchBar from './components/SearchBar.vue'
import SearchField from './components/SearchField.vue'
import SegmentedControl from './components/SegmentedControl.vue'
import Sidebar from './components/Sidebar.vue'
import SingleSelect from './components/SingleSelect.vue'
import Slider from './components/Slider.vue'
import Spinner from './components/Spinner.vue'
import Status from './components/Status.vue'
import Stepper from './components/Stepper.vue'
import Switch from './components/Switch.vue'
import Tabs from './components/Tabs.vue'
import Textarea from './components/Textarea.vue'
import TextField from './components/TextField.vue'
import Tooltip from './components/Tooltip.vue'
import TreeView from './components/TreeView.vue'

const selected = ref("accordion");

const demoMap: Record<string, any> = {
  accordion: Accordion,
  alert: Alert,
  actionlist: ActionList,
  advancedtable: TableAdvanced,
  basictable: TableBasic,
  breadcrumb: Breadcrumbs,
  button: Button,
  card: Card,
  checkbox: Checkbox,
  checkboxgroup: CheckboxGroup,
  chip: Chip,
  contentswitcher: ContentSwitcher,
  datepicker: DatePicker,
  dropdown: Dropdown,
  fileupload: FileUpload,
  footer: Footer,
  icon: Icon,
  iconbutton: IconButton,
  indicator: Indicator,
  link: Link,
  modal: Modal,
  multiselect: MultiSelect,
  notification: Notification,
  pagination: Pagination,
  progressbar: ProgressBar,
  radiobutton: RadioButton,
  radiobuttongroup: RadioButtonGroup,
  searchbar: SearchBar,
  searchfield: SearchField,
  segmentedcontrol: SegmentedControl,
  sidebar: Sidebar,
  singleselect: SingleSelect,
  slider: Slider,
  spinner: Spinner,
  status: Status,
  stepper: Stepper,
  switch: Switch,
  tabs: Tabs,
  textarea: Textarea,
  textfield: TextField,
  tooltip: Tooltip,
  treeview: TreeView,
};

const ActiveDemo = computed(() => demoMap[selected.value] ?? Accordion);

function onSelect(component: string) {
  selected.value = component;
}
</script>

<template>
  <Navbar @select="onSelect" />
  <component :is="ActiveDemo" />
</template>