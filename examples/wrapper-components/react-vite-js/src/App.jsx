import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import Alert from "./components/Alert/Alert";
import Accordion from "./components/Accordion/Accordion";
import ActionList from "./components/ActionList/ActionList";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Button from "./components/Button/button";
import Card from "./components/Card/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import Chip from "./components/Chip/Chip";
import ContentSwitcher from "./components/ContentSwitcher/ContentSwitcher";
import DatePicker from "./components/DatePicker/DatePicker";
import Dropdown from "./components/Dropdown/Dropdown";
import FileUpload from "./components/FileUpload/FileUpload";
import Footer from "./components/Footer/Footer";
import Icon from "./components/Icon/Icon";
import IconButton from "./components/IconButton/IconButton";
import Indicator from "./components/Indicator/Indicator";
import Link from "./components/Link/Link";
import Modal from "./components/Modal/Modal";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Notification from "./components/Notification/Notification";
import Pagination from "./components/Pagination/Pagination";
import Popover from "./components/Popover/Popover";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import RadioButton from "./components/RadioButton/RadioButton";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchField from "./components/SearchField/SearchField";
import SegmentedControl from "./components/SegmentedControl/SegmentedControl";
import Sidebar from "./components/Sidebar/Sidebar";
import SingleSelect from "./components/SingleSelect/SingleSelect";
import Spinner from "./components/Spinner/Spinner";
import Slider from "./components/Slider/Slider";
import Status from "./components/Status/Status";
import Stepper from "./components/Stepper/Stepper";
import Switch from "./components/Switch/Switch";
import Tabs from "./components/Tabs/Tabs";
import Table from "./components/Table/Table";
import BasicTable from "./components/BasicTable/BasicTable";
import Textarea from "./components/Textarea/Textarea";
import TextField from "./components/TextField/TextField";
import Tooltip from "./components/Tooltip/Tooltip";
import TreeView from "./components/TreeView/TreeView";

function App() {
  const [selected, setSelected] = useState("accordion");

  const componentMap = {
    alert: <Alert />,
    accordion: <Accordion />,
    actionlist: <ActionList />,
    breadcrumb: <Breadcrumb />,
    button: <Button />,
    card: <Card />,
    checkbox: <Checkbox />,
    checkboxgroup: <CheckboxGroup />,
    chip: <Chip />,
    contentswitcher: <ContentSwitcher />,
    datepicker: <DatePicker />,
    dropdown: <Dropdown />,
    fileupload: <FileUpload />,
    footer: <Footer />,    
    icon: <Icon />,
    iconbutton: <IconButton />,
    indicator: <Indicator />,
    link: <Link />,
    modal: <Modal />,
    multiselect: <MultiSelect />,
    notification: <Notification />,
    pagination: <Pagination />,
    popover: <Popover />,
    progressbar: <ProgressBar />,
    radiobutton: <RadioButton />,
    radiobuttongroup: <RadioButtonGroup />,
    searchbar: <SearchBar />,
    searchfield: <SearchField />,
    segmentedcontrol: <SegmentedControl />,
    sidebar: <Sidebar />,
    singleselect: <SingleSelect />,
    spinner: <Spinner />,
    slider: <Slider />,
    status: <Status />,
    stepper: <Stepper />,
    switch: <Switch />,
    tabs: <Tabs />,
    table: <Table />,
    basictable: <BasicTable />,
    textarea: <Textarea />,
    textfield: <TextField />,
    tooltip: <Tooltip />,
    treeview: <TreeView />,
  };

  return (
    <div>
      <Navbar onSelect={setSelected} />
      {componentMap[selected] || <div>Select a component</div>}
    </div>
  );
}

export default App;