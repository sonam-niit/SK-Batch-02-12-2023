import { useState } from "react";

function ListDisplay() {
    const data=[
        {id:1,name:'Headphone',price:499},
        {id:2,name:'Laptop',price:45678},
        {id:3,name:'tablet',price:8889}
    ]
    const [products,setProducts]=useState(data);
    const handleClick=()=>{
        setProducts([...products,{id:4,name:'pencil',price:10}])
    }
    return ( 
        <table className="mt-3 table table-bordered table-hover">
            <thead className="table-dark"><tr><th>Id</th><th>Name</th><th>Price</th></tr></thead>
            <tbody>
                {
                    products.map(product=>(
                        <tr key={product.id} className={`${product.price>9999?'table-primary':'table-danger'}`}>
                            <td>{product.id}</td><td>{product.name}</td><td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
            <button onClick={handleClick} className="mt-3 btn btn-primary w-100">Add New Product</button>
        </table>
     );
}

export default ListDisplay;