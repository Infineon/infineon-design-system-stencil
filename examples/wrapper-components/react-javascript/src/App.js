import './App.css';
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
import Card from './components/card/Card'

function App() {
  return (
    <div>
      <Navbar />

      <h1>Stencil Framework integration - React + JS</h1>

      <h2>Alert</h2>
      <Alert />
      <br />

      <h2>Button</h2>
      <Button />
      <br />

      <h2>Progress Bar</h2>
      <ProgressBar />
      <br />

      <h2>Text Field</h2>
      <TextField />
      <br />

      <h2>Accordion</h2>
      <Accordion />
      <br />

      <h2>Radio Button</h2>
      <RadioButton />
      <br />

      <h2>Checkbox</h2>
      <Checkbox />
      <br />

      <h2>Link</h2>
      <Link />
      <br />

      <h2>Spinner</h2>
      <Link />
      <br />

      <h2>Search Bar</h2>
      <SearchBar />
      <br />

      <h2>Spinner</h2>
      <Spinner />
      <br />

      <h2>Number indicator</h2>
      <NumberIndicator />
      <br />

      <h2>Sidebar</h2>
      <Sidebar />
      <br />

      <h2>Card</h2>
      <Card />
      <br />



    </div>

  )
}
export default App;