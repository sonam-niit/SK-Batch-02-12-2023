import Product from "./Product";

function ProductList({products,addToCart}) {
    return ( 
        <div>
            <h3>Product List Component</h3>
            {
                products.map(product=>(
                    <Product key={product.id} 
                    product={product} 
                    addToCart={addToCart}/>
                ))
            }
        </div>
     );
}

export default ProductList;