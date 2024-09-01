import { useSelector } from "react-redux"
import Products from "./components/Products";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {

  const items = useSelector(state => state.cartReducer.items);
  return (
    <BrowserRouter>
      <div>
        <h3>{items.length} Products in Cart </h3>
        <ul>
          <li>
            <Link to='products'>Products</Link>
          </li>
          <li>
            <Link to='cart'>Cart</Link>
          </li>
        </ul>
        
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
