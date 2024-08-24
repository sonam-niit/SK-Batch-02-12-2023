import axios from "axios";
import { useEffect, useState } from "react";

function UserList() {
    const [users,setUsers]=useState([]);
    const fetchData=async()=>{
        try {
            const resp=await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return ( <div className="container">
        <h3 className="p-2 text-center text-bg-secondary">UserList</h3>
        <table className="table table-striped table-bordered">
           <thead>
            <tr><th>Id</th><th>Name</th><th>Email</th></tr>
           </thead>
           <tbody>
            {
                users.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }
           </tbody>
        </table>
    </div> );
}

export default UserList;