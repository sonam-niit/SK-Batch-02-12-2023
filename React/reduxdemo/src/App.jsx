import { useSelector } from "react-redux"
import Counter from "./components/Counter"
import Products from "./components/Products";

function App() {

  const items= useSelector(state=>state.cartReducer.items);
  return (
    <div>
      <h3>{items.length} Products in Cart </h3>
      <Products />
    </div>
  )
}

export default App
