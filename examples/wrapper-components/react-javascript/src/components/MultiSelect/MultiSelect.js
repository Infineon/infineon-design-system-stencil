import React, { useState } from 'react';
import { IfxMultiselect } from '@infineon/infineon-design-system-react';


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
  },
  {
    value: "d",
    label: "option d",
    selected: false
  },
  {
    value: "b",
    label: "option b",
    selected: false
  },
  {
    value: "e",
    label: "option e",
    selected: false
  },
  {
    value: "f",
    label: "option f",
    selected: false
  },
  {
    value: "g",
    label: "option g",
    selected: false
  },
  {
    value: "h",
    label: "option h",
    selected: false
  },
  {
    value: "i",
    label: "option i",
    selected: false
  },
  {
    value: "j",
    label: "option j",
    selected: false
  },
  {
    value: "k",
    label: "option k",
    selected: false
  },
  {
    value: "l",
    label: "option l",
    selected: false
  },
  {
    value: "m",
    label: "option m",
    selected: false
  },
  {
    value: "n",
    label: "option n",
    selected: false
  },
  {
    value: "o",
    label: "option o",
    selected: false
  },
  {
    value: "p",
    label: "option p",
    selected: false
  },
  {
    value: "q",
    label: "option q",
    selected: false
  },
  {
    value: "r",
    label: "option r",
    selected: false
  },
  {
    value: "s",
    label: "option s",
    selected: false
  },
  {
    value: "t",
    label: "option t",
    selected: false
  },
  {
    value: "u",
    label: "option u",
    selected: false
  },
  {
    value: "v",
    label: "option v",
    selected: false
  },
  {
    value: "w",
    label: "option w",
    selected: false
  },
  {
    value: "x",
    label: "option x",
    selected: false
  },
  {
    value: "y",
    label: "option y",
    selected: false
  },
  {
    value: "z",
    label: "option z",
    selected: false,
    children: [
      {
        value: "z1",
        label: "option z1",
        selected: false
      },
      {
        value: "z2",
        label: "option z2",
        selected: false
      }
    ]
  }]);


  const handleIfxSelect = (e) => {
    console.log('ifxSelect event emitted with value:', e.detail);
  }


  return (
    <div>
      <IfxMultiselect options={options} batchSize={20}
        size="m" placeholder="Placeholder" onIfxSelect={handleIfxSelect} disabled={disabled} error={error} error-message="Some error" label="" ></IfxMultiselect>
      <div>
     
      </div>
      <br />
    </div>
  );
}

export default App;



