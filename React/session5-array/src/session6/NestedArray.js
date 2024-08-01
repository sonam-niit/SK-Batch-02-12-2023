function NestedArray() {
    const categories=[
        {id:1,name:'Fruits',products:['Apple','Banana','Cherry']},
        {id:2,name:'Vegetables',products:['Carrot','Broccoli','Spinach']},
        {id:3,name:'Electronics',products:['Phone','Tablet','Laptop']},
        {id:4,name:'Stationary',products:['Pen','Pencil','Marker']},
    ]
    return ( 
        <div>
            <h3 className="mt-3 p-2 text-bg-secondary">Categories</h3>
            {
                categories.map(category=>(
                    <div key={category.id}>
                        <h4 className="text-bg-primary p-2">{category.name}</h4>
                        <ul className="list-group">
                            {
                                category.products.map((product,index)=>(
                                    <li className="list-group-item" key={index}>{product}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
     );
}

export default NestedArray;