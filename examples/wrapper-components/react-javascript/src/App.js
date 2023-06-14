import './App.css';

import { IfxAlert } from '@infineon/infineon-design-system-react';


function App() {
 
  const handleClose = (event) =>{ 
    console.log('here', event)
  }

  return (
    <div>
      <IfxAlert icon='calendar16' color='secondary' onIfxClose={handleClose} >Achtung! Hast du etwas vergessen?</IfxAlert>
    </div>
  );
}

export default App;
