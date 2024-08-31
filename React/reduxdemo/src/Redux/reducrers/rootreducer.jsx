import { combineReducers } from "redux"
import CounterReducer from "./counterreducer"
import cartReducer from "./cartreducers";

const RootReducer= combineReducers({
    counter:CounterReducer,
    cartReducer:cartReducer,
})

export default RootReducer;