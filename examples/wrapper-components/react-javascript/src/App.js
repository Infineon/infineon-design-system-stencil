import './App.scss';
import Alert from './components/Alert/Alert'
import Link from './components/Link/Link';
import Button from './components/Button/button';
import TextField from './components/TextField/TextField';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';
import RadioButton from './components/RadioButton/RadioButton';
import Sidebar from './components/Sidebar/Sidebar'
import NumberIndicator from './components/NumberIndicator/NumberIndicator'
import Spinner from './components/Spinner/Spinner'
import Checkbox from './components/Checkbox/Checkbox';
import Navbar from './components/Navbar/Navbar';
import SearchField from './components/SearchField/SearchField';
import IconButton from './components/IconButton/IconButton';
import Tabs from './components/Tabs/Tabs';
import Tag from './components/Tag/Tag';
import Switch from './components/Switch/Switch';
import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import Tooltip from './components/Tooltip/Tooltip';
import SingleSelect from './components/SingleSelect/SingleSelect';
import MultiSelect from './components/MultiSelect/MultiSelect';
import Pagination from './components/Pagination/Pagination';
import BasicTable from './components/BasicTable/BasicTable';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Modal from './components/Modal/Modal';
import Badge from './components/Badge/Badge'
import Footer from './components/Footer/Footer'
import Icon from './components/Icon/Icon';
import Slider from './components/Slider/Slider'
import Status from './components/Status/Status'
import Chip from './components/Chip/Chip'


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


      <h2>Spinner</h2>
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