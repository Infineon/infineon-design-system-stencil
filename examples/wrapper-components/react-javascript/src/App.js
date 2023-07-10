import './App.css';
import Link from './components/Link/Link';
import SearchField from './components/SearchField/SearchField';
import Spinner from './components/Spinner/Spinner';
import NumberIndicator from './components/NumberIndicator/NumberIndicator';

function App() {
  return (
    <div>
      <h1>Stencil Framework integration - React + TS </h1>

      <h2>Search Field</h2>
      <SearchField />
      <br />

      <h2>Spinner</h2>
      <Spinner />
      <br />

      <h2>Link</h2>
      <Link />
      <br />


      <h2>Number Indicator</h2>
      <NumberIndicator />
      <br />
    </div>
  )
}
export default App;
