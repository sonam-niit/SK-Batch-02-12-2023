import FilterData from './components/FilterData';
import ListDisplay from './components/ListDisplay';
import SortingData from './components/SortingData';

function App() {
  return (
    <div className="container">
      <h3 className='mt-3 text-center p-2 text-bg-warning'>App Component</h3>
      {/* <SortingData /> */}
      <ListDisplay />
      <FilterData />
    </div>
  );
}

export default App;
