import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

function Counter() {
    const {count,setCount}=useContext(CounterContext);
    return ( 
        <div>
            <h3>Counter Component</h3>
            <button onClick=
            {()=>setCount(count+1)}>Update</button>
        </div>
     );
}

export default Counter;