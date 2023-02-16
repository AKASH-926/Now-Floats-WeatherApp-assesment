
import './App.css';
import DataProvider from './context/DataProvider';
import Homepage from './layout/Homepage';

function App() {
  return (
    <DataProvider>
      <Homepage />
    </DataProvider>

  );
}

export default App;
