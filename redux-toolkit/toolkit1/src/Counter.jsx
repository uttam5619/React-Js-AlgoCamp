import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './utils/counter'


const Counter = () => {

    const dispatchHandler = useDispatch()
    const count = useSelector((state)=>state.counter.count)
    console.log(count)

    

  return (
    <div>
        <h1 className='text-bold text-3xl font-semibold'>This is a Counter</h1>
        <div>count: {count}</div>
        <button onClick={()=>{dispatchHandler(increment())}}>Increment</button>
        <button onClick={()=>{dispatchHandler(decrement())}}>Decrement</button>
    </div>
  )
}

export default Counter