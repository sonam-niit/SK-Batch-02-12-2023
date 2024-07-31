import { useState } from "react";

function SortingData() {
    const [sortBy,setSortBy]=useState('name');
    const students=[
        {id:1,name:'John',grade:85},
        {id:2,name:'Jane',grade:92},
        {id:3,name:'Joe',grade:78},
    ]
    const sortedStudents=[...students].sort((a,b)=>{
        if(sortBy==='name'){
            return a.name.localeCompare(b.name);
        }else if(sortBy==='grade'){
            return a.grade-b.grade;
        }
        return 0;
    })
    return ( 
        <div>
            <h3 className="mt-3 p-2 text-center text-bg-success">Students List</h3>
            <button className="btn btn-primary w-50" onClick={()=>setSortBy('name')}>Sort By Name</button>
            <button className="btn btn-warning w-50" onClick={()=>setSortBy('grade')}>Sort By Grade</button>
            <ul className="list-group">
                {
                    sortedStudents.map(user=>(
                        <li className="list-group-item" key={user.id}>{user.name} {user.grade}</li>
                    ))
                }
            </ul>
        </div>
     );
}

export default SortingData;