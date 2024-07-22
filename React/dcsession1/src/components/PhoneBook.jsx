import { useState } from "react";

function PhoneBook() {

    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [list,setList]=useState([]);
    const handleClick=()=>{
        setList([...list,{name,phone}]);
        setName('');setPhone('');
    }
    return ( 
        <div>
            <h1>PhoneBook</h1>
            <table className="table table-bordered">
                <thead><tr><th>Name</th><th>Phone</th></tr></thead>
                <tbody>
                    {
                        list.map(item=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr/>
            <input type="text" placeholder="Enter name" className="form-control mt-3"
            onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="phone" placeholder="Enter Phone" className="form-control mt-3"
            onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            <button className="btn btn-primary w-100 mt-3"
            onClick={handleClick}>Add Contact</button>
        </div>
     );
}

export default PhoneBook;