 import './App.css'
import Button from './components/Button/button';
import TextField from './components/TextFIeld/TextField';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';
import RadioButton from './components/RadioButton/RadioButton';
import Spinner from './components/Spinner'
import NumberIndicator from './components/NumberIndicator/NumberIndicator'
import Link from './components/Link/Link';
import SearchField from './components/SearchField/SearchField'

function App() {
  

  return (
    <div>
      <h1>Stencil Framework integration - React + TS </h1>
     

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
      
      <h2>Spinner</h2>
      <Spinner />
      <br />
      
      <h2>Link</h2>
      <Link />
      <br />

      <h2>Number Indicator</h2>
      <NumberIndicator />
      <br />
      
      <h2>Search Field</h2>
      <SearchField />
      <br />
      
    </div>
   )

}
export default App