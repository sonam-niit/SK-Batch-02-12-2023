import { useEffect, useState } from "react";

function UseCase2() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await fetch('https://dummyjson.com/products');
            const json = await resp.json();
            //console.log(json);
            setProducts(json.products)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="row">
            <h3>Products Component</h3>
            {
                products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <h4>Category: {product.category}</h4>
                        <img src={product.thumbnail} alt={product.title}/>
                    </div>
                ))
            }
        </div>
    );
}

export default UseCase2;