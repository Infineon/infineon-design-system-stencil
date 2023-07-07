 import './App.css'
import Button from './components/Button/button';
import TextField from './components/TextFIeld/TextField';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';
import RadioButton from './components/RadioButton/RadioButton';

import './App.css'
import Spinner from './Components/Spinner/Spinner'


function App() {
 

  return (
       <div>
    <h1 className="header">Stencil Framework integration - React + TS </h1>
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
      </div>
    
   )
}

export default App
