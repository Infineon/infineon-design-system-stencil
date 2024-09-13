import './App.scss';
import Alert from './components/Alert/Alert.js'
import Link from './components/Link/Link.js';
import Button from './components/Button/button.js';
import TextField from './components/TextField/TextField.js';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Accordion from './components/Accordion/Accordion.js';
import RadioButton from './components/RadioButton/RadioButton.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import NumberIndicator from './components/NumberIndicator/NumberIndicator.js'
import Spinner from './components/Spinner/Spinner.js';
import Checkbox from './components/Checkbox/Checkbox.js';
import Navbar from './components/Navbar/Navbar.js';
import SearchField from './components/SearchField/SearchField.js';
import IconButton from './components/IconButton/IconButton.js';
import Tabs from './components/Tabs/Tabs.js';
import Tag from './components/Tag/Tag.js';
import Switch from './components/Switch/Switch.js';
import Card from './components/Card/Card.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import DatePicker from './components/DatePicker/DatePicker.js';
import Tooltip from './components/Tooltip/Tooltip.js';
import SingleSelect from './components/SingleSelect/SingleSelect.js';
import MultiSelect from './components/MultiSelect/MultiSelect.js';
import Pagination from './components/Pagination/Pagination.js';
import BasicTable from './components/BasicTable/BasicTable.js';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.js';
import Modal from './components/Modal/Modal.js';
import Badge from './components/Badge/Badge.js';
import Footer from './components/Footer/Footer.js'
import Icon from './components/Icon/Icon.js';
import Slider from './components/Slider/Slider.js'
import Status from './components/Status/Status.js'
import Chip from './components/Chip/Chip.js'
import Stepper from './components/Stepper/Stepper.js';


function App() {
  return (
    <div>

      <Navbar />
      <h1>Stencil Framework integration - React + JS</h1>

      <h2>Accordion</h2>
      <Accordion />
      <br />

      <h2>Alert</h2>
      <Alert />
      <br />

      <h2>Badge</h2>
      <Badge />
      <br />

      <h2>Breadcrumbs</h2>
      <Breadcrumbs />
      <br />

      <h2>Button</h2>
      <Button />
      <br />

      <h2>Card</h2>
      <Card />
      <br />

      <h2>Checkbox</h2>
      <Checkbox />
      <br />

      <h2>Chip</h2>
      <Chip />
      <br />

      <h2>Date Picker</h2>
      <DatePicker />
      <br />

      <h2>Dropdown</h2>
      <Dropdown />
      <br />

      <h2>Icon</h2>
      <Icon />
      <br />

      <h2>IconButton</h2>
      <IconButton />
      <br />

      <h2>Link</h2>
      <Link />
      <br />

      <h2>Modal</h2>
      <Modal />
      <br />

      <h2>MultiSelect</h2>
      <MultiSelect />
      <br />

      <h2>Number indicator</h2>
      <NumberIndicator />
      <br />

      <h2>Pagination</h2>
      <Pagination />
      <br />

      <h2>Progress Bar</h2>
      <ProgressBar />
      <br />

      <h2>Radio Button</h2>
      <RadioButton />
      <br />


      <h2>SingleSelect</h2>
      <SingleSelect />
      <br />


      <h2>Link</h2>
      <Link />
      <br />

      <h2>Search Bar</h2>
      <SearchBar />
      <br />

      <h2>Search Field</h2>
      <SearchField />

      <h2>Spinner</h2>
      <Spinner />
      <br />

      <h2>Slider</h2>
      <Slider />
      <br />

      <h2>Sidebar</h2>
      <Sidebar />
      <br />

      <h2>Switch</h2>
      <Switch />
      <br />

      <h2>Status</h2>
      <Status />
      <br />

      <h2>Stepper</h2>
      <Stepper />
      <br />

      <h2>Tabs</h2>
      <Tabs />
      <br />

      <h2>Tag</h2>
      <Tag />
      <br />

      <h2>Text Field</h2>
      <TextField />
      <br />

      <h2>Tooltip</h2>
      <Tooltip />

      <h2>Table (basic)</h2>
      <BasicTable />
      <br />

      <h2>Footer</h2>
      <Footer />
      <br />

    </div>
  )
}
export default App;