function Product({product,addToCart}) {
    return ( 
        <div>
            <h3>{product.name}</h3>
            <p>Price:{product.price}</p>
            <button onClick=
            {()=>addToCart(product)}>
                AddToCart</button>
        </div>
     );
}

export default Product;