import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'Counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:state=>{
            state.count=state.count+1;
        },
        decrement:state=>{
            state.count=state.count-1
        },
        incrementByAmount:(state,action)=>{
            state.count=state.count+action.payload
        },
        decrementByAmount:(state,action)=>{
            state.count=state.count-action.payload
        }
    }
})
export const {increment,decrement,incrementByAmount,decrementByAmount}=
counterSlice.actions;
export default counterSlice.reducer;