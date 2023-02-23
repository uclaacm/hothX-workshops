import './App.css';
import Grocery from './components/Grocery.js';

const groceries = [
  {
    name: "apples",
    notes: "gala apples, about 15 total"
  },
  {
    name: "paper towels"
  },
  {
    name: "NYX Jumbo eye pencil",
    notes: "shade yogurt, target makeup aisle"
  },
  {
    name: "cereal",
    notes: "puffins brand"
  },
  {
    name: "hand sanitizer",
    notes: "nice smells"
  },
];

function App() {
  return (
    <div className="App">
    <div>
      <div id="header">
        <h1>Groceries List</h1>
      </div>
      <div>{
      groceries.map((grocery, i) => {
        return <Grocery
          key = {i}
          name = {grocery.name}
          notes = {grocery.notes}
        />
      })
      }
      </div>
    </div>
    </div>
  );
}

export default App;
