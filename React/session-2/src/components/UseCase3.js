import { useState } from "react";

function UseCase3() {
    const [input,setInput]=useState('');
    const [age,setAge]=useState(0);
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    return ( 
        <div>
            <h3>Welcome {input}</h3>
            <h4>Age: {age}</h4>
            <input type="text" placeholder="Enter your name"
            onChange={handleChange} />
            <input type="number" placeholder="Enter your Age"
            onChange={(e)=>setAge(e.target.value)} />
        </div>
     );
}

export default UseCase3;