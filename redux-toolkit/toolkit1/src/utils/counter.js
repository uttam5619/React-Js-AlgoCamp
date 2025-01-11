import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {count:0},
    reducers:{
        increment: (state, action)=>{
            state.count = state.count + 1
        },
        decrement: (state, action)=>{
            if(state.count>0)
                state.count = state.count - 1
        },
        incrementByValue: (state, action)=>{
            state.count = state.count + action.payload
        }
    }
})

// will use by the Component of React
export const { increment, decrement, incrementByValue } = counterSlice.actions


export default counterSlice.reducer