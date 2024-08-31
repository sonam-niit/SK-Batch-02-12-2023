import { useDispatch } from "react-redux";

function Products() {
    const data=[
        {id:1,name:'Laptop',price:99999,category:'Electronics'},
        {id:2,name:'Mobile',price:9999,category:'Electronics'},
        {id:3,name:'Pen',price:99,category:'Stationary'},
        {id:4,name:'Scale',price:149,category:'Stationary'},
    ]
    const dispatch= useDispatch();
    const handleClick=(item)=>{
        dispatch({type:'ADD_ITEM',payload:item})
    }
    return ( 
        <div>
            <table>
                <thead>
                    <tr><th>ID</th><th>Name</th><th>Price</th><th>Category</th></tr>
                </thead>
                <tbody>
                    {
                        data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td><button onClick={()=>handleClick(item)}>AddToCard</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Products;