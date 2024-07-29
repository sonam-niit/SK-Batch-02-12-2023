import CartItem from "./CartItem";

function Cart({cart,removeFromCart}) {
    return ( 
        <div>
            <h3>Cart Component</h3>
            { cart.length===0 ?
            (<p>No items in cart</p>):
            (
                cart.map(item=>(
                    <CartItem key={item.id} 
                    item={item} 
                    removeFromCart={removeFromCart}/>
                ))
            )
            }
        </div>
     );
}

export default Cart;