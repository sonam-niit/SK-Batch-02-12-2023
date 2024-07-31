import { useState } from "react";

function FilterData() {
    const [showOnline,setShowOnline]=useState(true);
    const users=[
        {id:1,name:'Alice',online:true},
        {id:2,name:'Bob',online:false},
        {id:3,name:'Charlie',online:true},
        {id:4,name:'John',online:false},
        {id:5,name:'Denis',online:true},
    ]
    const filteredUsers=users.filter(user=>user.online===showOnline);
    return ( 
        <div>
            <h3 className="mt-3 p-2 text-center text-bg-secondary">User's List</h3>
            <button className="btn btn-primary w-100" onClick={()=>setShowOnline(!showOnline)}>
                {showOnline?'Show Offline':'Show Online'}
            </button>
            <ul className="list-group">
                {
                    filteredUsers.map(user=>(
                        <li className="list-group-item" key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
     );
}

export default FilterData;