import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const items= useSelector(state=>state.cartReducer.items);
    const dispatch=useDispatch();
    const handleClick=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id})
    }
    return ( 
        <div>
            <h3>My Cart</h3>
            {
                items.length>0?
                <table>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Price</th><th>Category</th><th>Op</th></tr>
                </thead>
                <tbody>
                    {
                        items.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td><button onClick={()=>handleClick(item.id)}>Remove From Cart</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>:
            <h3>No Items in Cart</h3>
            }
        </div>
     );
}

export default Cart;