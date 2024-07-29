import {useState} from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [products,setProducts]=useState([
    {id:1,name:'Laptop',price:70000},
    {id:2,name:'Phone',price:49000},
    {id:3,name:'Tablet',price:69000},
  ]);
  const [cart,setCart]=useState([]);
  const addToCart=(product)=>{
    setCart([...cart,product]);
  }
  const removeFromCart=(productId)=>{
    setCart(cart.filter(item=>item.id!=productId))
  }
  return (
    <div className="App">
      <h3>ECommerce Product List</h3>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
