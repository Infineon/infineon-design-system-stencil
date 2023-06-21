import './App.css';
import { useState } from 'react'
import { IfxSearchBar, IfxProgressBar, IfxButton } from '@infineon/infineon-design-system-react';



import Button from './components/Button/button';

import ProgressBar from './components/ProgressBar/ProgressBar';

import SearchBar from './components/SearchBar/SearchBar';
import Accordion from './components/Accordion/Accordion';


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
      <h2>Accordion</h2>
      <Accordion />

    </div>
  )
}
export default App;
