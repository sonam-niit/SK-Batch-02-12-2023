import FilterData from './components/FilterData';
import ListDisplay from './components/ListDisplay';
import SortingData from './components/SortingData';
import FetchData from './session6/FetchData';
import FetchSingle from './session6/FetchSingle';
import ForEach from './session6/ForEach';
import NestedArray from './session6/NestedArray';

function App() {
  return (
    <div className="container">

      <FetchSingle />
      {/* <FetchData /> */}
      {/* <ForEach /> */}
      {/* <NestedArray /> */}
      {/* <h3 className='mt-3 text-center p-2 text-bg-warning'>App Component</h3>
      <SortingData />
      <ListDisplay />
      <FilterData /> */}
    </div>
  );
}

export default App;
