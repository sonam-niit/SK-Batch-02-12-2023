import { useState } from "react";

function UseCase1() {
    const [name,setName]=useState('sonam soni');//initial value
    const handleChange=()=>{
        setName('SKILL ACADEMY');
    }
    return ( 
        <div>
            <h3>{name}</h3>
            <button onClick={handleChange}>Change Name</button>
        </div>
     );
}

export default UseCase1;