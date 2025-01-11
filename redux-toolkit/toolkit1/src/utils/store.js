import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter.js'


const store = configureStore({
    reducer:{
        counter: counterSlice,
    },
})


export default store