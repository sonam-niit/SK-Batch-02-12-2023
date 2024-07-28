import { useState } from "react";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

function UserList() {
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(null);
    const addData = (obj) => {
        setUsers([...users, obj]);
    }
    const deleteUser=(id)=>{
        setUsers(users.filter(item=>item.id!==id));
        setSelected(null);
    }
    return (
        <div className="p-3" style={{ border: '2px solid green' }}>
            <h3>User List Component</h3>
            <table className="table table-bordered table-striped">
                <thead><tr><th>Name</th><th>Email</th><th>Operations</th></tr></thead>
                <tbody>
                    {
                        users.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="btn btn-success"
                                        onClick={() => setSelected(item)}>view</button>
                                    <button className="btn btn-danger ms-2"
                                        onClick={() => deleteUser(item.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="row">
                <div className="col" style={{ border: '2px solid red' }}>
                    <UserForm addData={addData} />
                </div>
                <div className="col" style={{ border: '2px solid blue' }}>
                    {
                        selected &&
                        <UserDetails selected={selected} />
                    }
                </div>
            </div>
        </div>
    );
}

export default UserList;