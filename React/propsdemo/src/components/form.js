import { useState } from "react";

function Form(props) {
    const {addData}=props;
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const handleClick=()=>{
        //pass data from parent to child
        addData({name,age});
        setAge('');
        setName('');
    }
    return ( 
        <div>
            <input type="text" placeholder="Enter Name" 
            onChange={(e)=>setName(e.target.value)} value={name} />
            <input type="text" placeholder="Enter Age"
            onChange={(e)=>setAge(e.target.value)} value={age} />
            <button onClick={handleClick}>Save Data</button>
        </div>
     );
}

export default Form;