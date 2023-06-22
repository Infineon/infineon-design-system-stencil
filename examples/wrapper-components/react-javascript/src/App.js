import './App.css';

import Button from './components/Button/button';

import TextField from './components/TextFIeld/TextField';

import ProgressBar from './components/ProgressBar/ProgressBar';

import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';

import Checkbox from './components/Checkbox/Checkbox';

function App() {




  return (
    <div>
      <h1 className="header">Stencil Framework integration - React + JS</h1>

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

      <h2>Checkbox</h2>
      <Checkbox />
    </div>

  )
}
export default App;
