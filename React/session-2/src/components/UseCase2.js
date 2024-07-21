import { useState } from "react";

function UseCase2() {
    const [count,setCount]= useState(0);
    const handleInc=()=>{
        setCount(count+1);
    }
    const handleDec=()=>{
        if(count==0){
            alert('Count cannot be less than 0')
        }else{
            setCount(count-1);
        }
    }
    return ( 
        <div>
            <h3>Counter Component: {count}</h3>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
     );
}

export default UseCase2;