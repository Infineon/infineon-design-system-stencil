
import React, { useState } from 'react';
import { IfxSelect, IfxButton } from '@infineon/infineon-design-system-react';


function App() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [options] = useState([{
    value: "a",
    label: "option a",
    selected: false
  },
  {
    value: "b",
    label: "option b",
    selected: false
  },
  {
    value: "c",
    label: "option c",
    selected: false
  }]);

  const handleIfxSelect = (e) => {
    console.log('ifxSelect event emitted with value:', e.detail);
  }


  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  return (
    <div>
      <IfxSelect ifx-options={JSON.stringify(options)} type="single" value="undefined" onIfxSelect={handleIfxSelect} ifx-size="m" placeholder="true" search-enabled="true"
        search-placeholder-value="Search..." ifx-disabled={disabled} ifx-error={error} ifx-error-message="Some error"
        ifx-label="" ifx-placeholder-value="Placeholder"
      ></IfxSelect>
      <div>
        <IfxButton variant="outline" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="outline" onClick={toggleError}>Toggle Error</IfxButton>

      </div>
    </div>
  )
}

export default App;


