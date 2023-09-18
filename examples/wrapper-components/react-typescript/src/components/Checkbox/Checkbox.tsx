import { IfxCheckbox, IfxButton } from '@infineon/infineon-design-system-react';
import { useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(false);
  const [error, setError] = useState(false);

  const handleIfxChange = (e) => {
    console.log('ifxChange event emitted with value:', e.detail);
    setValue(e.detail);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted. Checkbox value:', value);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  const toggleValue = () => {
    setValue(prevValue => !prevValue);
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <IfxCheckbox disabled={disabled} value={value} error={error} name="name"
          onIfxChange={handleIfxChange}>label</IfxCheckbox>
        <br />

        <IfxButton type="submit">Submit</IfxButton>
      </form>
      <br />
      <div>
        <IfxButton variant="outline" onClick={toggleDisabled}>Toggle Disabled</IfxButton>

        <IfxButton variant="outline" onClick={toggleError}>Toggle Error</IfxButton>

        <IfxButton variant="outline" onClick={toggleValue}>Toggle Value</IfxButton>

      </div>
      <br />
      <span>Disabled: {String(disabled)} </span>
      <span>Error: {String(error)} </span>
      <span>Value: {String(value)}</span>
      <br />
    </div>
  );
}

export default App;
