 import './App.css'
import Button from './components/Button/button';
import TextField from './components/TextField/TextField';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';
import RadioButton from './components/RadioButton/RadioButton';
import Tabs from './components/Tab/Tab';
import Tag from './components/Tag/Tag';
import Sidebar from './components/Sidebar/Sidebar';
import NumberIndicator from './components/NumberIndicator/NumberIndicator';
import IconButton from './components/IconButton/IconButton';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
      <div>
               <Navbar />      

         <h1 className="header">Stencil Framework integration - React + TS </h1>

         <h2>Tag</h2>
         <Tag />
         <br />

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

      <h2>Tabs</h2>
      <Tabs />
      <br/>

      <h2>Number indicator</h2>
      <NumberIndicator />
      <br />

      <h2>Sidebar</h2>
      <Sidebar />
      <br />

      <h2>IconButton</h2>
      <IconButton />
      <br />
      </div>
   )
}

export default App