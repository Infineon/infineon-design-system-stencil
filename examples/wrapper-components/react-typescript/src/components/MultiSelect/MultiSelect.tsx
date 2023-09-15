import { IfxMultiselect, IfxButton } from '@infineon/infineon-design-system-react';
import { useState } from 'react';

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
    selected: false,
    children: [
      {
        value: "c1",
        label: "option c1",
        selected: false
      },
      {
        value: "c2",
        label: "option c2",
        selected: false
      }
    ]
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
      <IfxMultiselect options={options}
        size="medium (40px)" onIfxSelect={handleIfxSelect} disabled={disabled} error={error} error-message="Some error" label="" ></IfxMultiselect>
      <div>
        <IfxButton variant="outline" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="outline" onClick={toggleError}>Toggle Error</IfxButton>
      </div>
      <br />
    </div>
  );
}

export default App;



