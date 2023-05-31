import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Using Stencil web components in a React application
        </p>
        <ifx-progress-bar value="50" size="m" show-label="true"></ifx-progress-bar>

        <ifx-button variant="solid" icon="" position="left" href="" target="_blank" color="primary" size="m" disabled="false">
          Button
        </ifx-button>

      </header>

    </div>
  );
}

export default App;
