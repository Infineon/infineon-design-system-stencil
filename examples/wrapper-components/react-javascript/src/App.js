import './App.css';
import Link from './components/Link/Link';
import SearchInput from './components/SearchInput/SearchInput';
import Spinner from './components/Spinner/Spinner';
import NumberIndicator from './components/NumberIndicator/NumberIndicator';

function App() {
  return (
    <div>
      <h2>Search Field</h2>
      <SearchInput />
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
