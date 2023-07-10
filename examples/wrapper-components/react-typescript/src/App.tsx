
import './App.css'
import Link from './components/Link/Link'
import Button from './components/Button/button';
import TextField from './components/TextFIeld/TextField';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';
import RadioButton from './components/RadioButton/RadioButton';

import './App.css'
import Spinner from './Components/Spinner/Spinner'

import './App.css'
import NumberIndicator from './components/NumberIndicator/NumberIndicator'

function App() {
 
 

  return (
    <div>
      <h1>Stencil Framework integration - React + TS </h1>
      <h2>Search Bar</h2>
      <SearchBar />
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
      
      <h2>Spinner</h2>
      <Spinner />
      <br />
      
      <h2>Link</h2>
      <Link />
      <br />

      <h2>Number Indicator</h2>
      <NumberIndicator />
      
    </div>
   )
}

export default App
