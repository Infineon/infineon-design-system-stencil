import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const checkboxRef = useRef();


  const [progressValue, setProgressValue] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const checkbox = checkboxRef.current;

    checkbox.addEventListener("ifxChange", toggleValue);

    return () => {
      checkbox.removeEventListener("ifxChange", toggleValue);
    };
  });

  function updateProgressOnClick() {
    const newValue = progressValue < 100 ? progressValue + 10 : 10;
    setProgressValue(newValue);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted. Checkbox value:", checked);
  };

  const toggleValue = () => {
    console.log("checkbock value change")
    setChecked(!checked);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  const toggleError = () => {
    setError(!error);
  };

  return (
    <div className="app">
      <h1 className="header">
        Using Stencil web components in a React application
      </h1>
      <h2>Progress bar</h2>
      <ifx-progress-bar value={progressValue} size="m" show-label="true"></ifx-progress-bar>
      <div>
        <br />
        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m"
          disabled="false" onClick={updateProgressOnClick}>
          Update progress
        </ifx-button>
      </div>
      <br />
      <h2>Button</h2>
      <div>
        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m" disabled="false">
          Button
        </ifx-button>
      </div>
      <br />
      <h2>Checkbox</h2>


      <form onSubmit={handleSubmit}>
        TestText
        <ifx-checkbox ref={checkboxRef} disabled={disabled} value={checked} error={error} name="name" onIfxChange={toggleValue}>
          label
        </ifx-checkbox>
        TestText
        <br />
        <ifx-button type="submit">Submit</ifx-button>
      </form>


      <ifx-button onClick={toggleDisabled}>Toggle Disabled</ifx-button>
      <ifx-button onClick={toggleError}>Toggle Error</ifx-button>
      <ifx-button onClick={toggleValue}>Toggle Value</ifx-button>

      <span>Disabled: {disabled} </span>
      <span>Error: {error} </span>
      <span>Value: {checked}</span>

    </div>
  );


}

export default App;
