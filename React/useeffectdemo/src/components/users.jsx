import { useEffect, useState } from "react";
import Details from "./details";

function UserData() {
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(null);
    const fetchdata = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await resp.json();
        setUsers(json);
    }
    useEffect(() => { fetchdata() }, [])
    return (
        <div>
            <ul>
                {
                    users.map(item => (
                        <li key={item.id}>{item.name} 
                        <button onClick={() => setSelected(item)}>
                            view</button></li>
                    ))
                }
            </ul>
                {selected && <Details user={selected}/>} 
        </div>
    );
}

export default UserData;