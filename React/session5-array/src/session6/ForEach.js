function ForEach() {
    const data=[
        {id:1,name:'Headphone',price:499},
        {id:2,name:'Laptop',price:45678},
        {id:3,name:'tablet',price:8889}
    ]
    const tbody=[];
    data.forEach(product=>{
        tbody.push(<tr key={product.id}>
            <td>{product.id}</td><td>{product.name}</td><td>{product.price}</td>
        </tr>)
    })
    return ( 
        <div>
            <table className="table table-bordered">
                <thead><tr><th>Id</th><th>Name</th><th>Price</th></tr></thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
     );
}

export default ForEach;