import { useDispatch, useSelector } from "react-redux";

function Counter() {
    const count= useSelector(state=>state.counter.count);
    const dispatch= useDispatch();
    const handleInc=()=>{
        dispatch({type:"INCREMENT"})
    }
    const handleDec=()=>{
        dispatch({type:"DECREMENT"})
    }
    return ( 
        <div>
            <h1>Counter Component: {count}</h1>

            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
     );
}

export default Counter;