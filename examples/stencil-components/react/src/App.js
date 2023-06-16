import './App.css';
import React, { useState } from 'react';

function App() {
  const [progressValue, setProgressValue] = useState(10);
  function updateProgressOnClick() {
    const newValue = progressValue < 100 ? progressValue + 10 : 10;
    setProgressValue(newValue);
  }

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
      <form>
        <ifx-checkbox error={false} disabled={false} checked={false}>
          Text
        </ifx-checkbox>
      </form>

    </div>
  );


}

export default App;
