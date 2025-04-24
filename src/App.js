import "./App.css";
import Home from './main/Home';
import {all_product} from "./utilities/all-products"

function App() {
  return (
  <div>
    <Home products={all_product}/>
  </div>
  );
}

export default App;
