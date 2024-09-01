import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/counterSlice";

function Counter() {
    const count = useSelector(state=>state.counter.count);
    const dispatch= useDispatch();
    return ( 
        <div>
            <h3>Counter Comp: {count}</h3>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>+ (5)</button>
            <button onClick={()=>dispatch(decrementByAmount(5))}>- (5)</button>
        </div>
     );
}

export default Counter;